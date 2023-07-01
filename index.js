var submitt = document.getElementById("submit")



submitt.addEventListener("click", (e) =>{
    
    var obj = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value
    }
    
    
    
    var p=obj.email
    var obj = JSON.stringify(obj)
    localStorage.setItem(p,obj)
    
})
