var mails=document.querySelector('.mail')
var password=document.querySelector('.pass')
var connect=document.querySelector('#connect')
console.log(mails)
connect.addEventListener("click",function connection(){
  console.log(mails.value)
  var email=mails.value
  var pas=password.value
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(emailPattern.test(email)&&pas.length>=8){
     alert("Bienvenue user")
  }
  else{
    alert("email ou mot de passe incorrecte")
  }
})