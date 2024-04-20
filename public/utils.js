const btnClick = document.querySelectorAll('.btn');

btnClick.forEach(btnClicked => {
    btnClicked.addEventListener('click', () => {
        btnClick.forEach(btn => btn.classList.remove('special')); 
        btnClicked.classList.add('special');
    });
});

function showApp() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('app').style.display = 'flex'; 
}

