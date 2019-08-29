const Prayer = require('../model/prayerRequest');

exports.createPrayer = (req, res, next) => {
    const {name, prayer} = req.body;
        if( !prayer){
            res.status(400).json("Please drop your prayer request")
        }else{
            Prayer.create({
                name, prayer
            })
            .then(pray => {
                res.json(pray)
            })
            .catch(err => res.json({ msg: err.message || "Error occured"}))
        }
};
