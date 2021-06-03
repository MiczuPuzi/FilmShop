const Opinion = require('../../database/models/opinion');

class opinionActions {
    async getAllOpinions(req, res) {
        let doc;
        try {
            doc = await Opinion.find({});
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
        res.status(200).json(doc)
    };

    async getOpinion(req, res) {
        const id = req.params.id;
        let opinion;
        try {
            opinion = await Opinion.findOne({_id: id});
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
        res.status(200).json(opinion)
    }


    async saveOpinion(req, res) {
        const filmTitle = req.body.filmTitle
        const rate = req.body.rate
        const description = req.body.description
        let newOpinion;
        try {
            newOpinion = new Opinion({filmTitle,rate, description});
            await newOpinion.save()
        }catch (err){
            return res.status(422).json({message: err.message})
        }
        res.status(201).json(newOpinion)
    }

    async updateOpinion(req, res) {
        const id = req.params.id;
        const filmTitle = req.body.filmTitle
        const rate = req.body.rate
        const description = req.body.description
        const opinion = await Opinion.findOne({_id: id});
        opinion.filmTitle = filmTitle
        opinion.rate = rate
        opinion.description = description
        await opinion.save()
        res.status(200).json(opinion)
    }

    async deleteOpinion(req, res) {
        const id = req.params.id;
        await Opinion.deleteOne({_id: id})
        res.sendStatus(204);
    }
}

module.exports = new opinionActions()