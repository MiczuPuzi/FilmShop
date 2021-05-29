const Film = require('../../database/models/film');

module.exports = {
    saveFilm(req,res){
        const newFilm = new Film({
            title: "Gwiezdne Wojny",
            price: '100zł',
            directorName: 'Jakub'
        });
        newFilm.save().then(() => {
            console.log('Dodano Film')
        });
    }
}