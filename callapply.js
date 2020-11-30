const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary=this.salary-amount;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'hero',
    lastName: 'Balam',
    salary: 25000,


}

const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
heroBillCharge(2000);
heroBillCharge(5000);
console.log(heroBillCharge);
