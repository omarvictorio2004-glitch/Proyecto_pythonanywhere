// Animación de scroll reveal sencilla
document.addEventListener("scroll", () => {
    const elementos = document.querySelectorAll(".feature-card, .testimonio-card, .about");

    elementos.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

// Animación inicial
window.onload = () => {
    document.querySelector(".hero-content").style.opacity = "1";
};

// CTA
document.getElementById("btnHero").addEventListener("click", () => {
    alert("¡Gracias por tu interés! 🎉");
});
