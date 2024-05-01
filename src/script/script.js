
function myFunction(){
    prompt("Please enter your name");
    prompt("Please enter your surname");
    prompt("Please enter your date of birth");
}
alert ("Please enter your name");
alert ("Please enter your surname!");
alert ("Please enter your date of birth!");

const today = new Date();
// Doğum tarihini YIL-AY-GÜN formatında buraya girmen gerek.
const birthDate = new Date("2005-01-03");
const age = today.getFullYear() - birthDate.getFullYear();
if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
 age--;
}
document.getElementById('yas').innerText = age;
