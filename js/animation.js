// up
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".slid-up");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // remove if you only want it once
            }
        });
    });

    elements.forEach(el => observer.observe(el));
});


// left
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".slid-left");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // remove if you only want it once
            }
        });
    });

    elements.forEach(el => observer.observe(el));
});


// right
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".slid-right");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // remove if you only want it once
            }
        });
    });

    elements.forEach(el => observer.observe(el));
});


