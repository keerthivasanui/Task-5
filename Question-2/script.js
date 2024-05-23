
var json = [{
    "id" : "keerthi", 
    "company"   : "Duffl Digital",
    "designation" : "Junior Assosiate Ui Designer",
    "mail": "keerthivasan762@gmail.com"
},
{
    "id" : "surya", 
    "company"   : "NOVAC Technolgy ",
    "designation" : "UI Developer",
    "mail": "keerthivasan762@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.company);
    console.log(obj.designation);
    console.log(obj.mail);

}
//for Each
json.forEach(function(company) { console.log(obj.designation); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
 
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);
