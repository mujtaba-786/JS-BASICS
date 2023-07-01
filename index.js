const name = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) =>{
    localStorage.setItem("Name",name.value),
    localStorage.setItem("Email",email.value),
    localStorage.setItem("Phone",phone.value),
    alert("Form Submitted")
})
