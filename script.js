var menuButton = document.getElementById("menuButton");
var navigation = document.getElementById("navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("open");
    });

    var menuLinks = document.querySelectorAll(".navigation a");

    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navigation.classList.remove("open");
        });
    });
}

var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var currentSlide = 0;

function showSlide(number) {
    if (slides.length === 0) {
        return;
    }

    slides.forEach(function (slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function (dot) {
        dot.classList.remove("active");
    });

    slides[number].classList.add("active");

    if (dots[number]) {
        dots[number].classList.add("active");
    }
}

if (slides.length > 1) {
    setInterval(function () {
        currentSlide = currentSlide + 1;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    }, 5000);
}

dots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
        if (index < slides.length) {
            currentSlide = index;
            showSlide(currentSlide);
        }
    });
});

var elements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    elements.forEach(function (element) {
        var position = element.getBoundingClientRect().top;

        if (position < window.innerHeight - 80) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


var wardiContactForm = document.getElementById("wardiContactForm");

if (wardiContactForm) {
    wardiContactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var contactName = document.getElementById("contactName").value.trim();
        var contactEmail = document.getElementById("contactEmail").value.trim();
        var contactSubject = document.getElementById("contactSubject").value.trim();
        var contactMessage = document.getElementById("contactMessage").value.trim();

        if (
            contactName === "" ||
            contactEmail === "" ||
            contactSubject === "" ||
            contactMessage === ""
        ) {
            alert("Veuillez remplir tous les champs du formulaire.");
            return;
        }

        var emailBody =
            "Nom complet : " + contactName + "\n\n" +
            "Adresse e-mail : " + contactEmail + "\n\n" +
            "Message :\n" + contactMessage;

        var recipient = "wanawakerising@gmail.com";

        var mailtoLink =
            "mailto:" + recipient +
            "?subject=" + encodeURIComponent(contactSubject) +
            "&body=" + encodeURIComponent(emailBody);

        window.location.href = mailtoLink;
    });
}