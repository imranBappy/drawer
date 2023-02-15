const btn = document.getElementById('control');
const sidebar = document.querySelector('.sidebar');
btn.addEventListener('click', (e) => {
    console.log("clicked", btn.textContent);
    btn.innerHTML = btn.textContent == "Close" ? "Open" : "Close";
    sidebar.setAttribute('class', 'sidebar__toggle sidebar');
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
});

const allA = document.querySelectorAll('li');
console.log(allA);
allA.forEach((a) => {
    a.addEventListener('click', close);
});


function close(e) {
    sidebar.setAttribute('class', 'sidebar');
    document.body.style.backgroundColor = "white";
    btn.innerHTML = "Open";
}


document.body.addEventListener('click', (e) => {
    console.log(e.target)
});

// const close = () => document.body.classList.remove(document.body.classList.contains('menu-open') ? 'menu-open' : 'search-open');

// drawers.forEach(drawer => {
//     if (drawer.querySelector('.close')) {
//         drawer.querySelector('.close').addEventListener('click', () => {
//             close();
//         });
//     }
// });

