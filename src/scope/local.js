// const helloWorld = () => {
//     const hello = 'Hello World'
//     console.log(hello)
// }

// helloWorld()


var scope = "i am global";
const functionScope = () => {
    var scope = "i am just a local";
    const func = () => scope
    console.log(func());

}

functionScope();
console.log(scope)