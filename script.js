let menuState = 0
const btnmenu = document.getElementById('btn-movil')
const imenu = document.querySelector('#btn-movil i')
const menu = document.getElementById('movil')
const body = document.getElementById('intro')
const tapa = document.querySelector('.tapa')

btnmenu.addEventListener('click', () => {
    if (menuState === 0) {
        document.documentElement.style.overflow = 'hidden'
        menu.style.transform = 'translateY(0vh)'
        imenu.classList.add('bi-x-lg')
        imenu.classList.remove('bi-list')
        tapa.classList.add('d-none')
        tapa.classList.remove('d-block')
        body.style.marginTop = '50vh'
        menuState = 1
    } else {
        document.documentElement.style.overflow = ''
        menu.style.transform = 'translateY(-50vh)'
        imenu.classList.add('bi-list')
        imenu.classList.remove('bi-x-lg')
        body.style.marginTop = '0'
        menuState = 0
        setTimeout(() => {
            tapa.classList.add('d-block')
            tapa.classList.remove('d-none')
        }, 600)
    }
})

document.getElementById('servicio-1').addEventListener('click', function() {
 this.classList.toggle('expanded')
})

document.getElementById('servicio-2').addEventListener('click', function() {
 this.classList.toggle('expanded')
})

document.getElementById('servicio-3').addEventListener('click', function() {
 this.classList.toggle('expanded')
})







// let servicio = 'servicio-1';
// let servicioPrevio = 'servicio-1';
// let boton = 'btn-servicio-1';
// let botonPrevio = 'btn-servicio-1';

// function menuServicios() {
//     document.getElementById(servicio).classList.remove('nomuestra');
//     document.getElementById(servicioPrevio).classList.add('nomuestra');
//     document.getElementById(botonPrevio).classList.remove('fw-bold');
//     document.getElementById(boton).classList.add('fw-bold');
// }


// document.getElementById('btn-servicio-1').addEventListener('click', () => {
//     if (servicio !== 'servicio-1') {
//         servicioPrevio = servicio;
//         botonPrevio = boton;
//         boton = 'btn-servicio-1';
//         servicio = 'servicio-1';
//         menuServicios();
//     }
// })

// document.getElementById('btn-servicio-2').addEventListener('click', () => {
//     if (servicio !== 'servicio-2') {
//         servicioPrevio = servicio;
//         botonPrevio = boton;
//         boton = 'btn-servicio-2';
//         servicio = 'servicio-2';
//         menuServicios();
//     }
// })

// document.getElementById('btn-servicio-3').addEventListener('click', () => {
//     if (servicio !== 'servicio-3') {
//         servicioPrevio = servicio;
//         botonPrevio = boton;
//         boton = 'btn-servicio-3';
//         servicio = 'servicio-3';
//         menuServicios();
//     }
// })

// document.getElementById('btn-servicio-4').addEventListener('click', () => {
//     if (servicio !== 'servicio-4') {
//         servicioPrevio = servicio;
//         botonPrevio = boton;
//         boton = 'btn-servicio-4';
//         servicio = 'servicio-4';
//         menuServicios();
//     }
// })