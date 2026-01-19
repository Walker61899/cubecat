function obrirMenu(seccio) {
    const menu = document.getElementById('mega-menu');
    
    // Si el menú ja està obert, el tanquem. Si està tancat, l'obrim.
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}

function subdesplegable(id) {
    // 1. Busquem tots els sub-menús de la dreta i els amaguem
    const llistes = document.querySelectorAll('.sub-navegacio');
    llistes.forEach(llista => {
        llista.classList.add('hidden');
    });

    // 2. Mostrem només el que hem clicat
    const element = document.getElementById(id);
    if (element) {
        element.classList.remove('hidden');
    }
}

window.addEventListener('click', function(e) {
    const menu = document.getElementById('mega-menu');
    const nav = document.querySelector('nav');
    
    // Si el clic no és ni a la nav ni al menú, amaguem el menú
    if (!nav.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
    }
});