document.getElementById("admissionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        fatherName: document.getElementById("fatherName").value,
        contact: document.getElementById("contact").value,
        fatherContact: document.getElementById("fatherContact").value,
        gender: document.getElementById("gender").value,
        class: document.getElementById("class").value,
        school: document.getElementById("school").value,
        address: document.getElementById("address").value,
        subjects: Array.from(document.querySelectorAll('input[name="subjects"]:checked')).map(el => el.value),
        goal: document.getElementById("goal").value
    };

    fetch("https://script.google.com/macros/s/AKfycbw0tWMVSoO44F1wUg3D0sAXjqRKlYd9Df8IwDiVfoLX5vIBgbpvN7EOuzTm3bkds7NA/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === "success") {
            document.getElementById("message").innerText = "Form submitted successfully!";
            document.getElementById("admissionForm").reset();
        } else {
            document.getElementById("message").innerText = "Error: " + data.error;
        }
    })
    .catch(error => {
        document.getElementById("message").innerText = "Error submitting form.";
        console.error("Submission Error:", error);
    });
});
