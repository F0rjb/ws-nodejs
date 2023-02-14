const getName = (name, users) => {
  const foundUser = users.find((el) => el.name == name);
  return foundUser ? foundUser : "No User ";
};
const averageAge = (users) => {
  return (
    users.map((el) => el.Age).reduce((sum, element) => sum + element) /
    users.length
  );
};
module.exports = { getName, averageAge };
console.log(module);
