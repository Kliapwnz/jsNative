let num1 = 5
let num2 = num1
num2 = 7
console.log(num1, num2)

let user1 = {
    name: "Bob",
    age: 29
}
let user2 = user1
user2.name = "Alex"
console.log(user1.name, user2.name)
console.log(Number.isNaN(NaN)) // как вычислить NaN
console.log(typeof []) // обманщик
console.log(Array.isArray([])) // тру выдает
console.log(Array.isArray({})) // false выдает //надо пересмотреть
console.log(typeof Infinity)
console.log(Number.isFinite(Infinity))