const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'filmshoptest@gmail.com',
        pass: 'filmShop123'
    }
})



class buyingActions {

    buyFilms(req, res) {
        const {user, films, totalPrice} = req.body
        const mailOptions = {
            from: 'filmshoptest@gmail.com',
            to: user.email,
            subject: "Dokonano Zakupu",
            text: "Dziękujemy za dokonanie zakupu kupiono:\n " + films.map(film => film.title + "\n")
            + "Całkowita kwota wynosi: " + totalPrice
        }
        transporter.sendMail(mailOptions,function (error,info){
            if (error){
                res.send("Coś jest nie tak").status(400)
            }else{
                res.send("Git").status(200)
            }
        })
    }
}

module.exports = new buyingActions()