const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../../database/models/user')
const { validateRegisterAndLogin } = require('../../validation/validation')
const { secretTokenString } = require('../../config')

class authActions {
  async register(req, res) {
    console.log(req.body)

    const { email, password } = req.body
    const { value, error } = validateRegisterAndLogin(req.body)

    if (error) return res.status(400).send(error.details[0].message)

    const user = await User.findOne({ email })

    const errorMessage = 'Email already exists!'
    if (user) return res.status(400).send(errorMessage)

    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)

    let newUser

    try {
      newUser = new User({ email, password: hashedPassword })
      await newUser.save()
    } catch (err) {
      return res.status(422).json({ message: err.message })
    }

    res.status(200).send({
      message: 'Register success',
    })
  }

  async login(req, res) {
    console.log(req.body)

    const { email, password } = req.body
    const { value, error } = validateRegisterAndLogin(req.body)

    if (error) return res.status(400).send(error.details[0].message)

    const user = await User.findOne({ email })

    const errorMessage = 'Incorrect email or password!'

    if (!user) return res.status(400).send(errorMessage)

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).send(errorMessage)
    }

    const token = jwt.sign({ _id: user._id }, secretTokenString)
    res.header('auth-token', token).send(token)
  }
}

module.exports = new authActions()
