let pattern = /^[a-zA-Z0-9 .,?!]*$/;

let name = document.getElementById("name");
let email = document.getElementById("email");
let comments = document.getElementById("comments");

let error = document.getElementById("error");

comments.addEventListener("input", function (event) {
    if (!pattern.test(comments.value)) {
        comments.classList.add('flash-indicator');
        comments.setCustomValidity("Non-typical characters are not allowed in comments.");
        error.value = "Error: you have typed an illegal character in comments!";
        setTimeout(() => {
            comments.classList.remove('flash-indicator');
            error.value = "";
        }, '3000');
    }
})