
function scrollToSection(id) {
    const target = document.getElementById(id);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}


document.querySelector('.arrow-next').addEventListener('click', () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
});

const questBtn = document.getElementById('start-quest');
questBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Квест розпочато!");
    alert("Квест готується до запуску! Ви готові до Марса?");
});

document.querySelector('.mars1').addEventListener('click', () => {
    document.querySelectorAll('.mars').forEach(item => {
        item.style.color = '#AD4851';
    });
});

document.querySelectorAll('.nav-item, .quest-btn').forEach(btn => {
    btn.addEventListener('mousedown', () => btn.style.transform = "scale(0.95)");
    btn.addEventListener('mouseup', () => btn.style.transform = "scale(1)");
});
