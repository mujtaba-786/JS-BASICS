var submitt = document.getElementById("submit")
var dele  = document.getElementById("del")


submitt.addEventListener("click", (e) =>{
    
    var obj = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value
    }
    
    
    
    var p=obj.email
    var obj = JSON.stringify(obj)
    localStorage.setItem(p,obj)
    dele.addEventListener("click", (e) =>{
        localStorage.removeItem(p)
        console.log(p)
        document.getElementById("name").value=""
        document.getElementById("email").value=""
        document.getElementById("phone").value=""
    })
    
    
})



