const Forum = require("../model/forum");

exports.createForum = (req, res, next) => {
    const {name, topic, detail, date} = req.body;
        if(!name || !topic || !detail || !date){
            res.statu(400).json("All fields are required")
        }else{
            Forum.create({
                name, topic, detail, date
            })
            .then(foru => {
                return res.json(foru)
            })
            .catch(err => res.json({msg: err.message ||  "Error creating topic"}))
        }
};

exports.getForum = (req, res, next) => {
    Forum.findAll()
        .then(foru => {
            return res.json(foru)
        })
        .catch(err => res.json({msg: err.message || "Errorr occured"}))
};

exports.getForumTopicId = (req, res, next) => {
    const forumId = req.params.id;
        Forum.findOne({
            where: {
                id: forumId
            },
            include: [
            {
                all: true
            }
        ]
        })
        .then(foru => {
            if(!foru){
                res.status(400).json("Topic not found")
            }else{
                res.json(foru)
            }
        })
        .catch(err => res.json({msg: err.message || "Error occured"}) )
};