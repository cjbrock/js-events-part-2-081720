document.addEventListener("DOMContentLoaded", function(){
    loadFormlistener()
})

function loadFormlistener(){
    // identify the form element
    const postForm = document.getElementById("blog-form")
    // add the event listener to the form for the form submit
    postForm.addEventListener("submit", function(event){
        event.preventDefault()
        // grab text from each field
        const postResults = getInfo(event)
        // create the html to display the new post
        const htmlPost = postHtml(postResults)
        // add the new post to the DOM
        attachPost(htmlPost)
        clearForm()
    })  


    function getInfo(event){
        return {
            title: event.target.querySelector("#title").value,
            author: event.target.querySelector("#author").value,
            content: event.target.querySelector("#content").value
        }
    }

    function postHtml(post){
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

    const attachPost = function(post){
        document.querySelector(".post-lists").innerHTML += post
    }

    const clearForm = () => {
        document.getElementById("title").value = ""
        document.getElementById("author").value = ""
        document.getElementById("content").value = ""
    }
}
