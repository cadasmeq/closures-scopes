var hello = "Hello"
var hello = "Hello +"
let world = "Hello World"
const helloWorld = "Hello World!"

const anotherFunction = () => {
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}

anotherFunction()

const helloWorldFunction = () => {
    var localVar = globalVar = 'Im global'
}

helloWorldFunction()
console.log(globalVar)