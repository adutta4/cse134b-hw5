let pattern = /^[a-zA-Z0-9 .,?!-]*$/;

let form = document.getElementById("contact-form");
let userName = document.getElementById("name");
let email = document.getElementById("email");
let comments = document.getElementById("comments");
let commentCount = document.getElementById("comment-count");

let error = document.getElementById("error");
let info = document.getElementById("info");
let form_errors = [];

comments.addEventListener("input", function (event) {
    if (!pattern.test(comments.value)) {
        comments.classList.add('flash-indicator');
        comments.setCustomValidity("Non-typical characters are not allowed in comments.");
        error.value = "Error: you have an illegal character in the comments!";
        info.value = "Comments can only have letters, numbers, and basic punctuation (.,!?)."
        form_errors.push({
            field: "comments",
            error: "Illegal character was entered"
        });
        setTimeout(() => {
            comments.classList.remove('flash-indicator');
            error.value = "";
            info.value = "";
        }, '4000');
    }
    if (pattern.test(comments.value)) {
        error.value = "";
        info.value = "";
        comments.setCustomValidity("");
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
    if (count > 500) {
        error.value = "Error: Comments exceed allowable length.";
    }
  });

form.addEventListener('submit', function(event) {
    isValid = true;
    event.preventDefault();
    if(userName.value.length < 2) {
        userName.setCustomValidity("Please enter your name.");
        form_errors.push({
            field: "name",
            error: "Name not entered or too short",
        })
        isValid = false;
    };

    if (!email.checkValidity()) {
        email.setCustomValidity("Please enter a valid email.");
        if (email.value.length == 0){
            form_errors.push({
                field: "email",
                error: "No email was entered",
            })
        }
        else {form_errors.push({
            field: "email",
            error: "Invalid email address entered",
        });}
        isValid = false;
    }

    if(!comments.value.length == 0) {
        comments.setCustomValidity("Comments are required. Please follow the given guidelines.");
        form_errors.push({
            field: "comments",
            error: "Comments were left blank on submit.",
        });
    }
});