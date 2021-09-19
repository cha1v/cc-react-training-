function unique(values) {
 
 return values.filter((item, i, ar) => ar.indexOf(item) === i);
}

let values = ["green", "green", "red", "red",
  "yellow", "pink", "pink", "yellow"
];

console.log("Unique values are", unique(values));