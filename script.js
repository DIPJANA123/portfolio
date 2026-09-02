
/* =========================================================
   PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   1. TYPING ANIMATION
========================================================= */

const roles = [
    "Python Developer",
    "Web Developer",
    "Django Developer",
    "AI/ML Enthusiast"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


/* Find Home Heading */

const roleElement = document.querySelector(".home-content h2");


function typeEffect() {

    if (!roleElement) {
        return;
    }

    const currentRole = roles[roleIndex];

    if (!deleting) {

        roleElement.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        roleElement.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }

        }
    }

    const speed = deleting ? 60 : 100;

    setTimeout(typeEffect, speed);
}


/* Start Typing */

typeEffect();



/* =========================================================
   2. ACTIVE NAVBAR LINK
========================================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});



/* =========================================================
   3. SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".education-card, .skill, .project-card, .certificate-card, .experience-card, .achievements li"
);


/* Add initial class */

revealElements.forEach(element => {

    element.classList.add("reveal");

});


function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;


        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("show");

        }

    });

}


window.addEventListener("scroll", revealOnScroll);


/* Run once when page loads */

revealOnScroll();



/* =========================================================
   4. BUTTON CLICK EFFECT
========================================================= */

const buttons = document.querySelectorAll(
    ".home-content a, .project-card a, .resume a, .social-links a"
);


buttons.forEach(button => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(0.95)";

        setTimeout(() => {

            this.style.transform = "";

        }, 150);

    });

});




