var name = document.getElementById("name")
var email = document.getElementById("email")
var phone = document.getElementById("phone")
var submit = document.getElementById("submit"); 

var count=0

var obj = JSON.stringify(obj)

submit.addEventListener("click", (e) =>{
    count+=1
    var a = document.getElementById("name").value
    var b = document.getElementById("email").value
    var c = document.getElementById("phone").value
    localStorage.setItem(`name${count}`,a)
    localStorage.setItem(`email${count}`,b)
    localStorage.setItem(`phone${count}`,c)
    //console.log(name)
    
})
