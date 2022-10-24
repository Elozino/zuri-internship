const { v4: uuidv4 } = require("uuid");

exports.exampleModel = [
  {
    title: "flight to canada",
    time: "1pm",
    price: 26000,
    date: "26-06-2022",
    id: uuidv4()
  },
];
