const express = require("express");
const router = express.Router();
const mainLayout = "../views/layouts/main.ejs";
const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");

router.get(["/", "/home"], asyncHandler(async(req,res)=>{
    const locals= {
        title: "Home"
    };
    const data = await Post.find();
    res.render("index", { locals, data, layout: mainLayout });
}));

router.get("/about", (req,res)=>{
    const locals= {
        title: "about"
    };
    res.render("about", { locals, layout: mainLayout });
});

router.get("/post/:id", asyncHandler(async(req,res)=>{
    const data = await Post.findOne({_id: req.params.id});
    res.render("post", { data, layout: mainLayout });
}));

module.exports = router;

// Post.insertMany([
//     { title: "1st Post", body: "This is the body of the 1st post" },
//     { title: "2st Post", body: "This is the body of the 2st post" },
//     { title: "3st Post", body: "This is the body of the 3st post" },
//     { title: "4st Post", body: "This is the body of the 4st post" },
//     { title: "5st Post", body: "This is the body of the 5st post" },
//     { title: "6st Post", body: "This is the body of the 6st post" },
//     { title: "7st Post", body: "This is the body of the 7st post" },
//     { title: "8st Post", body: "This is the body of the 8st post" },
//     { title: "9st Post", body: "This is the body of the 9st post" },
//     { title: "10st Post", body: "This is the body of the 10st post" }
// ]);