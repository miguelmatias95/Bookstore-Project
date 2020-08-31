function getData() {
    console.log("testing")
    
    fetch("https://api.jsonbin.io/b/5ea833484c87c3359a632938")
    .then(response => response.json())
    .then(res => main(res.books))
}

getData()

function main(array) {
getBooks(array)
buildCard(array)
createModal(array)
addEvent(array)
}


function getBooks(array) {
    var myList = document.getElementById("books")
    array.forEach(book => {
        var item = document.createElement("li")
        item.innerHTML=book.title
     //   myList.appendChild(item)
    })
}

function buildCard(array) {
    var myBookShelf = document.getElementById("bookshelf")
    array.forEach((book, index) => {
        
     let myElement = `<div class="flip-card">
     <div class="flip-card-inner">
       <div class="flip-card-front">
         <img src=${book.cover} alt="Avatar" style="width:400px;height:400px;">
       </div>
       <div class="flip-card-back">
         <h1>${book.title}</h1>
         <p>${book.description}</p>
         <p>${book.language}</p>
        <button type="button" class="btn btn-primary" onclick="openModal();currentSlide(${index + 1})">More info</button>
       </div>
     </div>
   </div>`

     myBookShelf.innerHTML+=myElement

        console.log(myElement)
    })
}


function buildCard2(array) {
    var myBookShelf = document.getElementById("bookshelf")
    array.forEach(book => {

        var header = document.createElement("h3")
        var image = document.createElement("img")
        var paragraph = document.createElement("p")
        var div = document.createElement("div")

        header.innerHTML=book.title
        image.src=book.cover
        image.setAttribute("height", "200px")
        paragraph.innerHTML=book.description
        div.appendChild(image)
        div.appendChild(header)
        div.appendChild(paragraph)
        
        // myBookShelf.appendChild(div)
        
        
        console.log(myBookShelf)
    })
}

function createModal(array){
   
    array.forEach((book, index) => {
    var a = `<div class="divslide">
        <div class="headertext">${index+1}/${array.length}</div>
        <img src=${book.details}>
    </div>`   
    document.getElementById("maincontent").innerHTML+=a  
    })
}

function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
function slideIndex() {
let slideIndex = 1;
showSlides(slideIndex);
}
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
function currentSlide(n) {
        showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("divslide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }


function addEvent(array) {
    document.getElementById("searchbar").addEventListener("keyup", ()=> handleSearch(array))

}


/* function handleSearch() {
console.log(document.getElementById("searchbar").value)
var allBooks = Array.from(document.getElementsByClassName("flip-card"))
document.getElementById("searchbar").value



console.log(allBooks)
} */

function handleSearch(array){
    
    let mySearch = document.getElementById("searchbar").value
   let result = array.filter(book => book.title.toLowerCase().includes(mySearch.toLowerCase()) || book.description.toLowerCase().includes(mySearch.toLowerCase())) 

   var myBookShelf = document.getElementById("bookshelf")
   myBookShelf.innerHTML=""
   result.forEach((book, index) => {
        
    let myElement = `<div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src=${book.cover} alt="Avatar" style="width:400px;height:400px;">
      </div>
      <div class="flip-card-back">
        <h1>${book.title}</h1>
        <p>${book.description}</p>
        <p>${book.language}</p>
       <button type="button" class="btn btn-primary" onclick="openModal();currentSlide(${index + 1})">More info</button>
      </div>
    </div>
  </div>`

    myBookShelf.innerHTML+=myElement

       
   })


}


