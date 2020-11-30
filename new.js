class Person {
    constructor(firstName,lastName, salary){
        this.firstName = firstName
        this.lastName = lastName
        this.salary = salary;
    }
}

const heroPerson = new Person ('Hero', 'Balam', 15000);
console.log(heroPerson);