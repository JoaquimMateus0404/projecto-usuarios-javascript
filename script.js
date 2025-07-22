let name = document.querySelector("#exampleInputName");
let gender = document.querySelectorAll("#form-user-create [name=gender]:checked");
let birth = document.querySelector("#exampleInputNameBirth");
let country = document.querySelector("#exampleInputCountry");
let email = document.querySelector("#exampleInputEmail");
let password = document.querySelector("#exampleInputPassword");
let photo = document.querySelector("#exampleInputFile");
let admin = document.querySelector("#exampleInputAdmin");

var fields = document.querySelectorAll("#form-user-create [name]");
fields.forEach(function(field, index){
    if (field.name == "gender") { 
        console.log(`Field at index ${index} is empty.`);
    }else {
        console.log(`Field at index ${index} is not empty.`);
    }
});

