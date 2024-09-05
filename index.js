
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the form element
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent the default form submission

        // Get input values
        let name = document.getElementById("name").value.trim();
        let mobile = document.getElementById("mobile").value.trim();
        let email = document.getElementById("email").value.trim();
        let address = document.getElementById("address").value.trim();

        let isValid = true;

        // Validate name
        if (!validateName(name)) {
            setError("nameError", "Name should contain only letters");
            isValid = false;
        } else {
            hideError("nameError");
        }

        // Validate mobile number
        if (!validateMobile(mobile)) {
            setError("mobileError", "Mobile number must be exactly 10 digits");
            isValid = false;
        } else {
            hideError("mobileError");
        }

        // Validate email
        if (!validateEmail(email)) {
            setError("emailError", "Please enter a valid email");
            isValid = false;
        } else {
            hideError("emailError");
        }

        // Validate address
        if (!validateAddress(address)) {
            setError("addressError", "Address cannot exceed 150 words");
            isValid = false;
        } else {
            hideError("addressError");
        }

        // If all inputs are valid, show a success alert and submit the form
        if (isValid) {
            alert("Form submitted successfully!");
            // perform the actual form submission
            document.getElementById("form").submit();
        }
    });

    // Validation functions
    function validateName(name) {
        return /^[a-zA-Z\s]+$/.test(name);
    }

    function validateMobile(mobile) {
        return /^[0-9]{10}$/.test(mobile);
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validateAddress(address) {
        return (address.split(/\s+/).length < 150);
    }

    // Function to display error message
    function setError(elementId, message) {
        let errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = "block";
    }

    // Function to hide error message
    function hideError(elementId) {
        let errorElement = document.getElementById(elementId);
        errorElement.style.display = "none";
    }
});
