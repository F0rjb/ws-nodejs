const uuid = require("uuid");
const users = [
  {
    name: "Ahmed",
    Age: 27,
    id: uuid.v4(),
  },
  {
    name: "Jawher",
    Age: 28,
    id: uuid.v4(),
  },
  {
    name: "Malek",
    Age: 10,
    id: uuid.v4(),
  },
  {
    name: "Marwen",
    Age: 2,
    id: uuid.v4(),
  },
];
module.exports = users;
// console.log(users);
