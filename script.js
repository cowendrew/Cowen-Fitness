function showConfirmation() {
    var date = document.getElementById("date").value;
    var hour = document.getElementById("hour").value;
    var minute = document.getElementById("minute").value;
    var time = hour + ":" + minute;
    var message = "Your consultation has been scheduled for " + date + " at " + time + ". Thank you!";
    openModal();
    return false; // Prevent form submission
}

function openModal() {
    var modal = document.getElementById("confirmationModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("confirmationModal");
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById("confirmationModal");
    if (event.target == modal) {
        closeModal();
    }
};

// Add event listener to date input to close modal on selection
document.getElementById("date").addEventListener("change", function() {
    closeModal();
});

// Add event listener to hour inputs to close modal on selection
document.getElementById("hour").addEventListener("change", function() {
    closeModal();
});

// Add event listener to minute inputs to close modal on selection
document.getElementById("minute").addEventListener("change", function() {
    closeModal();
});

// Scroll to sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionID = this.getAttribute('href').substring(1);
        document.getElementById(sectionID).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
