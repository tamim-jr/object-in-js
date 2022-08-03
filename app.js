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
        return 1992;
    }
}; 

var info;
info = person.address.city;
info = person.birthYear();

console.log(info);