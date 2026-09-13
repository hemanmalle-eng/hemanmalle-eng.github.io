javascript
// Simple welcome message in the browser console

console.log("Welcome to Malle Hemanth's Portfolio!");


// Highlight navigation link when clicked

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});
