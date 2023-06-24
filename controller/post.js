const Post = require('../model/post');
const User = require('../model/user');

module.exports = {
    create : async (req, res) => {

        const user = req.params.id;
        const { title, subtitle} = req.body;
        const post = await Post.create({
            title,
            subtitle,
            user
        });
        await post.save();

        const userById = await User.findById(user);

        userById.posts.push(post);
        await userById.save();

        return res.send(userById);
    },
    userByPost : async (req,res)=>{
        const { id } = req.params;
        const userByPost = await Post.findById(id).populate('user');
        res.send(userByPost);
    }
}