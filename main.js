document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery-img");
    const modal = document.getElementById("gallery-modal");
    const modalImg = document.getElementById("gallery-modal-img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            modalImg.src = img.src;
            modal.style.display = "flex";
        });
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target === modalImg) {
            modal.style.display = "none";
            modalImg.src = "";
        }
    });
});