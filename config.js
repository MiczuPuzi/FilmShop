module.exports = {
  port: process.env.PORT || 3000,
  database:
    process.env.DATABASE ||
    'mongodb+srv://user:user@filmshop.chnng.mongodb.net/FilmShop?retryWrites=true&w=majority',
  secretTokenString: 'Dasd241cWD2r',
}

// secretTokenString should be secret
