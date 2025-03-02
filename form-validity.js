let pattern = /^[a-zA-Z0-9 .,?!]*$/;

let name = document.getElementById("name");
let email = document.getElementById("email");
let comments = document.getElementById("comments");
let commentCount = document.getElementById("comment-count");

let error = document.getElementById("error");

comments.addEventListener("input", function (event) {
    if (!pattern.test(comments.value)) {
        comments.classList.add('flash-indicator');
        // comments.setCustomValidity("Non-typical characters are not allowed in comments.");
        error.value = "Error: you have typed an illegal character in comments!";
        setTimeout(() => {
            comments.classList.remove('flash-indicator');
            error.value = "";
        }, '3000');
    }
})

comments.addEventListener('input', function() {
    let text = comments.value;
    const count = text.length;
    commentCount.textContent = `Character count: ${count}`;

    if (count > 450) {
        comments.classList.add('text-limit');
    }

    if (count < 450) {
        comments.classList.remove('text-limit');
    }

    if (count > 480) {
        comments.classList.add('text-final');
    }
    if (count < 480) {
        comments.classList.remove('text-final');
    }
  });