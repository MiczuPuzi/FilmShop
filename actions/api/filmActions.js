const Film = require('../../database/models/film')

class filmActions {
  async getAllFilms(req, res) {
    let doc
    try {
      doc = await Film.find({})
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
    res.status(200).json(doc)
  }

  async getFilm(req, res) {
    const id = req.params.id
    let film
    try {
      film = await Film.findOne({ _id: id })
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
    res.status(200).json(film)
  }

  async saveFilm(req, res) {
    const { title, price, directorName, description } = req.body

    let newFilm
    try {
      newFilm = new Film({ title, price, directorName, description })
      await newFilm.save()
    } catch (err) {
      return res.status(422).json({ message: err.message })
    }
    res.status(201).json(newFilm)
  }

  async updateFilm(req, res) {
    const id = req.params.id
    const title = req.body.title
    const price = req.body.price
    const directorName = req.body.directorName
    const description = req.body.description
    const film = await Film.findOne({ _id: id })
    film.title = title
    film.price = price
    film.directorName = directorName
    film.description = description
    await film.save()
    res.status(200).json(film)
  }

  async deleteFilm(req, res) {
    const id = req.params.id
    await Film.deleteOne({ _id: id })
    res.sendStatus(204)
  }
}

module.exports = new filmActions()
