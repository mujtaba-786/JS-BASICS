var expense = document.getElementById("exp")
var description = document.getElementById("descr")
var category = document.getElementById("categ")
var tabl = document.createElement("table")
var c2 = document.getElementById("container2")
var count=0

btn.addEventListener("click" , (e)=>{
    
    var row=""
    row+=count
    //console.log(row)
    var row = tabl.insertRow(0);
    //console.log(row[row.])
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = expense.value,
    cell2.innerHTML = description.value,
    cell3.innerHTML = category.value
    cell4.innerHTML = "<button>Delete</button>"
    cell5.innerHTML = "<button>Edit</button>"
    c2.appendChild(tabl)
    
    cell4.addEventListener("click" ,(e)=>{ 
        row.deleteCell(0)
        row.deleteCell(0)
        row.deleteCell(0)
        row.deleteCell(0)
        row.deleteCell(0)
    })

    // cell5.addEventListener("click" , ()=>{
    //      //document.getElementById("exp").value = this.cells[0].innerHTML
    //      tabl.rows[0].cells[0].innerHTML = 12
    // })

    count++
})