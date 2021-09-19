const user = { person: { employee: { firstname: "Rahul" }, likes: ["Cycling", "Hiking", "Driving"] } }
const [first,second,third]=user.person.likes;
console.log(user.person.employee.firstname)
console.log(second)