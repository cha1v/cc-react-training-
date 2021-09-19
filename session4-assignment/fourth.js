let raksha = { name: "Raksha", surname: "Sharma", age: 28 };
let srinivas = { name: "Srinivas", surname: "Iyengar", age: 30 };
let usha = { name: "Usha", surname: "Janardhana", age: 54 };

let users = [ raksha, srinivas, usha ];
usersMapped =users.map((value,i)=>{
    return {fullName:(value.name)+" "+value.surname,id:i+1}
})
console.log(usersMapped)