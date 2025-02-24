function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

// Dark mode

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");
});

// Typing Effect

var typingEffect = new Typed(".typedText", {
    strings: ["Coder", "Developer"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})

// Scroll animation

const sa = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sa.reveal(".featured-name", { delay: 100 });
sa.reveal(".text-info", { delay: 200 });
sa.reveal(".text-btn", { delay: 200 });
sa.reveal(".social_icons", { delay: 200 });
sa.reveal(".featured-image", { delay: 320 });

sa.reveal(".project-box", { interval: 200});

sa.reveal(".top-header", {});

const saLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true
})

saLeft.reveal(".about-info", { delay: 100});
saLeft.reveal(".contact-info", { delay: 100});

const saRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true
})
saRight.reveal(".skill", { delay: 100});
saRight.reveal(".skill-box", { delay: 100});

// active link

const sections = document.querySelectorAll(".section[id]");

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach((current) => {

        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);
