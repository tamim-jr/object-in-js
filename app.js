const person ={
    firstName : "Tamim",
    lastName : "Mahmud",
    age: 31,
    job: "Business, Content Create, Web Development",
    address : {
        city : "Narail",
        zipCode : 7510,
        country : "Bangladesh"
    },
    birthYear : function(){
        return 2022 - this.age;
    }
}; 

var info;
info = person.address.city;
//birth year count in JS
info = person.birthYear();

console.log(info);

let people = [
    { nam : "Rinku", age: 24},
    { nam: "Pingku", age: 21},
    { nam: "Jhingku", age: 22}
]

for (let i = 0; i < people.length; i++) {
    console.log(people[i].nam);
}
