const Joi = require('joi')

const validateRegisterAndLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(30).required(),
  })

  return schema.validate(data)
}

module.exports = {
  validateRegisterAndLogin,
}
