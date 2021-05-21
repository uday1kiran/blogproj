const mongoose = require('mongoose');
const BlogPost = require('../models/BlogPost');
mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true});

/*BlogPost.create({
    title:"saving money on energy bills",
    body:'sdf sd fsd fds f sdf sdf dsf sd fsd fsdfds f sdf sdf dsf sd fds f sdf',

},(error,blogpost)=>{
    console.log(error,blogpost)
}

);*/

BlogPost.find({},(error,blogpost)=>{
    console.log(error,blogpost)
})

BlogPost.find({title:"uday"},(error,blogpost)=>{
    console.log(error,blogpost)
})