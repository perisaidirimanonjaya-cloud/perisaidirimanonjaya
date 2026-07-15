
// galeri
const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".gallery-item");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        // Reset semua tombol
        buttons.forEach(btn => {

            btn.classList.remove("active");
            btn.classList.remove("btn-dark");

            btn.classList.add("btn-outline-dark");
        });

        // Tombol yang diklik
        button.classList.add("active");
        button.classList.remove("btn-outline-dark");
        button.classList.add("btn-dark");

        const filter = button.dataset.filter;

        items.forEach(item => {

            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


// foto //
const slides = document.querySelectorAll(".slide");

const next = document.getElementById("next");

const prev = document.getElementById("prev");

let current = 0;

function tampilkanSlide() {

    slides.forEach(slide => {
        slide.classList.remove(
            "active",
            "left",
            "right"
        );
    });

    const kiri =
        (current - 1 + slides.length) % slides.length;

    const kanan =
        (current + 1) % slides.length;

    slides[current].classList.add("active");

    slides[kiri].classList.add("left");

    slides[kanan].classList.add("right");
}

next.onclick = () => {

    current = (current + 1) % slides.length;

    tampilkanSlide();
};

prev.onclick = () => {

    current =
        (current - 1 + slides.length) % slides.length;

    tampilkanSlide();
};

setInterval(() => {

    current = (current + 1) % slides.length;

    tampilkanSlide();

}, 3000);

tampilkanSlide();


// navbar
const navLinks = document.querySelectorAll('.nav-link');
    const menu = document.querySelector('#navbarNavDropdown');

    navLinks.forEach(link => {

        link.addEventListener('click', () => {

            if (menu.classList.contains('show')) {

                new bootstrap.Collapse(menu).hide();

            }

        });

    });

    // dark mode

const toggleButton = document.getElementById("darkModeToggle");

if (toggleButton) {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleButton.innerHTML =
            '<i class="bi bi-sun-fill"></i>';
    }

    toggleButton.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

            toggleButton.innerHTML =
                '<i class="bi bi-sun-fill"></i>';

        } else {

            localStorage.setItem("theme", "light");

            toggleButton.innerHTML =
                '<i class="bi bi-moon-stars-fill"></i>';
        }
    });

}