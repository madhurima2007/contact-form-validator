const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const successMessage =
document.getElementById("successMessage");

const charCount =
document.getElementById("charCount");

messageInput.addEventListener("input", () => {
    charCount.textContent =
    messageInput.value.length;
});

function validateEmail(email){

    const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
}

function clearErrors(){

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
}

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    clearErrors();

    let isValid = true;

    const name =
    nameInput.value.trim();

    const email =
    emailInput.value.trim();

    const message =
    messageInput.value.trim();

    if(name === ""){

        nameError.textContent =
        "Name cannot be empty";

        isValid = false;
    }
    else if(name.length < 3){

        nameError.textContent =
        "Minimum 3 characters required";

        isValid = false;
    }

    if(email === ""){

        emailError.textContent =
        "Email cannot be empty";

        isValid = false;
    }
    else if(!validateEmail(email)){

        emailError.textContent =
        "Invalid email format";

        isValid = false;
    }

    if(message === ""){

        messageError.textContent =
        "Message cannot be empty";

        isValid = false;
    }
    else if(message.length < 10){

        messageError.textContent =
        "Message should be at least 10 characters";

        isValid = false;
    }

    if(isValid){

        successMessage.style.display =
        "block";

        form.reset();

        charCount.textContent = "0";

        setTimeout(()=>{
            successMessage.style.display =
            "none";
        },4000);
    }
});