document.addEventListener("DOMContentLoaded", function(){
  loadFormListener()
  clickEvent()
  mouseOverEvent()
  buttonEvent()
})

// grab text from each field
function getInfo(event){
  return{
    title: event.target.querySelector("#title").value,
    author: event.target.querySelector("#author").value,
    content: event.target.querySelector("#content").value
  }
}


// create our html elements to display the post
function postHTML(post){
  return `
  <div class="card">
    <div class="card-content">
      <span class="card-title">${post.title}</span>
      <p>${post.author}</p>
      <p>${post.content}</p>
      <button class="colorButton">Change Background</button>
    </div>
  </div>
  
  `
}


// append the html elements onto the existing list
const attachPost = function(post){
  document.querySelector(".post-lists").innerHTML += post
}


// clear form
const clearForm = () => {
  document.getElementById("title").value = ""
  document.getElementById("author").value = ""
  document.getElementById("content").value = ""
}


function loadFormListener(){
  // identify the element we want to target
  const postForm = document.getElementById("blog-form")

  // add the event listener to the target (form)
  postForm.addEventListener("submit", function(event){
    event.preventDefault()

    // add functionality
    // grab text from each field
    const postResults = getInfo(event)

    // create our html elements to display the post
    const htmlPost = postHTML(postResults)

    // append the html elements onto the existing list
    attachPost(htmlPost)


    // bonus: clear the form!
    clearForm()

  })
}


const colors = ["red", "orange", "yellow", "green", "blue", "indigo","purple"]
let index = 0
const maxIndex = colors.length

const changeColor = (title) => {   
  title.style.color = colors[index++]
  if(index == maxIndex){
      index = 0;
  }
}

// click event
function clickEvent(){
  const title = document.querySelector(".post-lists h3")
  title.addEventListener("click", function(){
      changeColor(title)
  })
}


// mouse over event
function mouseOverEvent(){
  const header = document.querySelector("h1")
  header.addEventListener("mouseover",()=>changeColor(header))
}


// button event
function buttonEvent(){
  const allPosts = document.querySelector(".post-lists")
  const colors = ["red", "orange", "yellow", "green", "blue", "indigo","purple"]
  let index = 0
  const maxIndex = colors.length
  allPosts.addEventListener("click", function(e){
      if (e.target.className === "colorButton"){
          e.target.parentElement.parentElement.style.backgroundColor = colors[index++]
          if(index == maxIndex){
              index = 0;
          }
      }
  })
}



// Scope issues for your portfolio project!
// function test(){
//   let a = "a"
//   var b = "b"
//   const c = "c"
//   d = "d"

//   if true(){
//     let a = "g"
//     var b = "g"
//     const c = "g"
//     d = "g"
//   }

//   console.log(a) // will log out a
//   console.log(b) // will log out g
//   console.log(c) // will log out c
//   console.log(d) // will log out g
// }