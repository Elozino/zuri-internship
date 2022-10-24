const express = require("express");
const { json } = require("express");
const routes = require("./routes/flightRoute");

// express app
const app = express();
// port number
const port = process.env.PORT || 3000;
// middleware
app.use(json());

// flight routes
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})