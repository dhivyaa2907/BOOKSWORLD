var popupoverlay=document.querySelector(".popup-overlay")
var popbox=document.querySelector(".popbox")
var addbtn=document.getElementById("add-popup")


addbtn.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popbox.style.display="block"
})

var cancel=document.getElementById("c1")
cancel.addEventListener("click",function(){
    event.preventDefault()
    popupoverlay.style.display="none"
    popbox.style.display="none"

})

var add=document.getElementById("a1")
var container=document.querySelector(".container")
var book_title=document.getElementById("book_title")
var book_author=document.getElementById("book_author")
var book_des=document.getElementById("book_des")

add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${book_title.value}</h2>
    <h5>${book_author.value}</h5><br>
        <p>${book_des.value}</p>
       <br> <button onclick="deletebook(event)">Delete</button> `
    container.append(div)
    popupoverlay.style.display="none"
    popbox.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}