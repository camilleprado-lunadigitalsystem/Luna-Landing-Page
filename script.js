// Form redirect handler for Netlify form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default submission
            
            // Get form data
            const formData = new FormData(form);
            
            // Submit to Netlify using fetch
            fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                // Redirect to confirmation page on success
                window.location.href = 'confirmation.html';
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('There was an error submitting the form. Please try again.');
            });
        });
    }
});
