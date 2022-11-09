import { Post } from "../model/postModel.js";

export const getPost = (req, res) => {
  Post.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

// Add task post
export const addPost = (req, res) => {
  const todoTask = new Post(req.body);
  todoTask
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
};

// Delete task post
export const deletePost = (req, res) => {
  const id = req.params.id;
  Post.findByIdAndDelete(id)
    .then((result) => res.send("Deleted from db"))
    .catch((err) => console.log(err));
};

// Update task post
export const updatePost = (req, res) => {
  const id = req.params.id;
  Post.findOneAndUpdate(id, {
    title: req.body.title,
    description: req.body.description,
  })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};
