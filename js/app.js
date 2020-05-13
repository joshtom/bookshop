document.querySelector("#navbar-toggle").addEventListener('click', () => {
    document.querySelector(".nav-display").style.display = 'flex';
})

document.querySelector("#navbar-close").addEventListener('click', () => {
    document.querySelector(".nav-display").style.display = 'none';
})