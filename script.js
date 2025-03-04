document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        let position = section.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (position < windowHeight * 0.8) {
            section.classList.add("show");
        }
    });
});

let text = document.querySelector('.typewriter').textContent;
document.querySelector('.typewriter').textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.querySelector('.typewriter').textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;
