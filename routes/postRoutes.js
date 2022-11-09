import express from "express"
import { addPost, deletePost, getPost, updatePost } from "../controller/postController.js"

const router = express.Router()

// get post
router.get('/', getPost)

// get single post
// router.get('/:id', getSinglePost)

// add post
router.post('/add', addPost)

// delete post
router.delete('/:id', deletePost)

// update post
router.put('/:id', updatePost)

export default router