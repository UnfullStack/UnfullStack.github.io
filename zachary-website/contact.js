emailjs.init({
    publicKey: "daPLQ5c_Y0Uo41ke-",
});

function email(...args) {
    event.preventDefault();
	const formData = new FormData(event.target);

    emailjs.send("service_zawebapps","template_zawebapps",{
        subject: formData.get("subj"),
        name: formData.get("name"),
        message: formData.get("msg"),
        email: "",
    });

    document.getElementById("contact-form").reset();
}