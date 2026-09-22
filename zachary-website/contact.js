// prepare emailjs
emailjs.init({
    publicKey: "daPLQ5c_Y0Uo41ke-",
});

// function for sending the email
function email(...args) {
    // prevent loss of form data
    event.preventDefault();
    // collect form data
	const formData = new FormData(event.target);

    // send the email with the form data and email info
    emailjs.send("service_zawebapps","template_zawebapps",{
        subject: formData.get("subj"),
        name: formData.get("name"),
        message: formData.get("msg"),
        email: "",
    });

    // reset/clear the form
    document.getElementById("contact-form").reset();
}