const User = require('../model/user');

module.exports = {
    create : async (req, res) =>{
        const { first_name, last_name, email, password, token } = req.body;
        const user = await User.create({
            first_name, last_name, email, password, token
        })

        return res.send(user)
    },

    find : async (req, res) => {
        const user = await User.find()
        return res.send(user)
    },
    postsByUser : async (req, res) => {
       const { id } = req.params;
       const user = await User.findById(id).populate('posts');

        res.send(user.posts);
    }
}