import fs from "fs";
import path from "path";
import chalk from "chalk";

/**
 * @param {string} name
 */

export default function routerFunction(name, isAsync) {
  const routeName = name.toLowerCase();
  const pluralName = routeName.at(-1) === "s" ? routeName : routeName + "s";

  const folder = "routes";
  const fileName = `${pluralName}.js`;

  const folderPath = path.resolve(folder);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const filePath = path.join(folderPath, fileName);

  if (fs.existsSync(filePath)) {
    return console.log(chalk.red("path already exists"));
  }

  const handler = isAsync ? "async (req, res) => {" : "(req, res) => {";
  const content = `
    const express = require('express');
    const router = express.Router();

    router.get('/', ${handler}  
      //add logic to get data
      res.send(${pluralName})
    })
    
    router.post('/', ${handler}  
      //add logic to add data
      res.send(${routeName})
    })
   
    router.get('/:id', ${handler}
      const ${routeName}Id = req.params.id
      //add logic to get data
      res.send(${routeName})
    })
    
    router.delete('/:id', ${handler}
      const ${routeName}Id = req.params.id
      //add logic to delete data
      res.send(${routeName})
    })
    
    router.patch('/:id', ${handler}
      const ${routeName}Id = req.params.id
      //add logic to update data
      res.send(${routeName})
    })
      
    module.exports = router;
    `;

  fs.writeFileSync(filePath, content, "utf-8");
}
