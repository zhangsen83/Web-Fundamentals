document.addEventListener('DOMContentLoaded', function () {
    // Handle sign-in form submission
    const signinForm = document.getElementById('signin-form');
    if (signinForm) {
        signinForm.addEventListener('submit', function (event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            console.log('Username:', username);
            console.log('Password:', password);
            
            alert('Thank you for signing in! Success!');
            window.location.href = 'index.html'; // Redirect to the homepage
        });
    }

    // Handle sign-up form submission
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting normally
            alert('Thank you for signing up, now you are officially a member!');
            // Redirect to the current page
            window.location.href = 'login.html';
        });
    }
});

// Function to redirect to the sign-up page
function redirectToSignup() {
    // Redirect to the sign-up page
    window.location.href = 'sign up.html';
}



function toggleDetails(element) {
    const detailsContainer = element.nextElementSibling;
    if (detailsContainer.style.display === "none" || detailsContainer.style.display === "") {
        detailsContainer.style.display = "block";
        element.textContent = "More Info [^]";
    } else {
        detailsContainer.style.display = "none";
        element.textContent = "More Info [v]";
    }
}
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
        document.getElementById(tab.getAttribute('data-target')).classList.add('active');
    });
});

