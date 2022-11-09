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


// object => create copy => вносим изменения в компию => используем копию

const copyUser = {...user1} // spreadoperator
// copyUser.name = user1.name
// copyUser.age = user1.age
console.log(copyUser)
console.log({} === {}) // False, пригодится на собесе

const array = [1, 2, 3, 4, 5]
console.log([...array])

const copyCopyUser = {...user1, name: "Bob"}
console.log(copyCopyUser)

const student = {
    name: "Antony",
    age: 29,
    friends: ["Ann", "Helge", "Versavia"] //типа №007 (поверхностное копирование)
}

const copyStudent = {...student, name: "Alex"} // типо №007
copyStudent.friends.push("Lera") // добавляется всем

console.log(student)

const deepCopyStudent = {...student, friends: [...student.friends, "Lera"]} // подробное копирование