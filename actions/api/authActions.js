const bcrypt = require('bcrypt')
const User = require('../../database/models/user')
const { validateRegister } = require('../../validation/validation')

class authActions {
  async register(req, res) {
    const { email, password } = req.body
    const { value, error } = validateRegister(req.body)

    if (error) return res.status(400).send(error.details[0].message)

    const user = await User.findOne({ email })

    const errorMessage = 'Email already exists!'
    if (user) return res.status(400).send(errorMessage)

    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)

    res.status(200).send({
      hashedPassword,
      message: "You've hit the register endpoint",
    })
  }

  async login(req, res) {
    console.log('login')
    console.log(req.body)
    res.status(200).send("You've hit the login endpoint")
  }
}

module.exports = new authActions()
