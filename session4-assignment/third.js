function isBig(value) {
  return value >= 150
}

let array = [1,33,99,50,100,150,60,99,1000,999,0,-1,10].filter(isBig)
console.log(array)