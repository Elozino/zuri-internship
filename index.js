import router from "./routes/postRoutes"
import express from express
import mongoose from mongoose


const app = express()
const PORT = 8000

app.use("/", router)

app.listen(PORT, ()=> {
  console.log(`Listening on Port ${PORT}`)
})

const db = ""
mongoose.connect(db, {})

