console.log('this >>> ', this); // Window Object

function printAge() {
    const age = 25;
    console.log('print  age : ', this);// window object, 
    console.log('age = ', this.age);
}

const getAge = () => {
    const userName = "John";
    console.log(' getAge (arrow) ' , this.userName); // window object undefined
}

printAge();
getAge();


const user = {
    id: 1,
    userName: 'John',
    getNameTwo() {
        return `Name is ${this.userName}`;
    },

    getName:function() {
        // user == this, 
        console.log(this)
        setTimeout(() => {
            console.log(`Name is ${this.userName}`);
        }, 0);
    }
}

console.log('object >> ', user.getName())

const getUserName2 = user.getName.bind(user);

const getName2 = user.getNameTwo;
const boundedGetName = getName2.bind(user);
console.log('get name two ', boundedGetName());


