let pattern = /^[a-zA-Z0-9 ,.!?']*$/;

let form = document.getElementById("contact-form");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
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

comments.addEventListener('input', function () {
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

nameInput.addEventListener('invalid', function (event) {
    if (nameInput.value.length < 2) {
        nameInput.setCustomValidity("Please enter your name");
        form_errors.push({
            field: "name",
            error: "Name not entered or too short",
        })
    }
    else {
        nameInput.setCustomValidity("");
    }
    
});

email.addEventListener("invalid", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid email address.");
        form_errors.push({
            field: "email",
            error: "Invalid email address entered",
        })
    } else {
        email.setCustomValidity("");
    }
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    if (comments.value.length == 0) {
        comments.setCustomValidity("Comments are required. Please follow the given guidelines.");
        form_errors.push({
            field: "comments",
            error: "Comments were left blank on submit.",
        });
        isValid = false;
    };

    if (isValid) {
        console.log(form_errors);
        if (form_errors.length > 0) {
            formErrorField = document.createElement("input");
            formErrorField.type = "hidden";
            formErrorField.name = 'form_errors';
            formErrorField.value = JSON.stringify(form_errors);
            form.appendChild(formErrorField);
        }
        form.submit();
    }
});