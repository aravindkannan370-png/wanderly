const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");

        const icon = menuToggle.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});/* =========================
   TRIP PLANNER FORM
========================= */

const tripForm = document.getElementById("tripForm");
const formSuccess = document.getElementById("formSuccess");

if (tripForm) {

    const params = new URLSearchParams(window.location.search);
    const selectedPackage = params.get("package");

    const packageSelect = document.getElementById("package");
    const destinationSelect = document.getElementById("destination");

    if (selectedPackage && packageSelect) {

        const option = Array.from(packageSelect.options).find(
            (item) => item.value === selectedPackage
        );

        if (option) {
            packageSelect.value = selectedPackage;
        }

    }

    if (tripForm) {

        tripForm.addEventListener("submit", (event) => {

            event.preventDefault();

            formSuccess.classList.add("show");

            tripForm.reset();

            formSuccess.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        });

    }

}