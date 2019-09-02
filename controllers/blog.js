const Blog = require("../model/blog");

exports.createBlog = (req, res, next) => {
    const {name, topic, detail, date} = req.body;
        if(!name || !topic || !detail || !date){
            res.status(400).json("All fields are required")
        }else{
            Blog.create({
                name, topic, detail, date
            })
            .then(foru => {
                return res.json(foru)
            })
            .catch(err => res.json({msg: err.message ||  "Error creating topic"}))
        }
};

exports.getBlog = (req, res, next) => {
    Blog.findAll()
        .then(blog => {
            return res.json(blog)
        })
        .catch(err => res.json({msg: err.message || "Errorr occured"}))
};

exports.getBlogTopicId = (req, res, next) => {
    const id = req.params.id;
        Blog.findByPk(id)
        .then(blog => {
            if(!blog.id){
                res.status(400).json("Topic not found")
            }else{
                // res.json(forum)
                console.log(blog.dataValue)
                // console.log('gettng')
            }
        })
        .catch(err => res.json({msg: err.message || "Error occured"}) )
};