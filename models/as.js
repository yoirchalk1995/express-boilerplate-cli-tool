
  const Joi = require('joi');
  const mongoose = require('mongoose');

  const A = mongoose.model(
  "As",
  new mongoose.schema({
  //add schema path
  }))

  function validateA(a){
  const aSchema = new Joi.object({
  //add validator fields here
  })

  return aSchema.validate(a)
  }

  exports.A = A
  exports.validateA = validateA
  