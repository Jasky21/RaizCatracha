document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            closeAllSubmenus(); 
            item.classList.toggle('active'); 
        });
    });

    document.addEventListener('click', () => {
        closeAllSubmenus();
    });

    function closeAllSubmenus() {
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
    }
});

//Detalle Producto
const imagenPrincipal = document.querySelector('.producto-principal');

const imagenesSecundarias = document.querySelectorAll('.imagenes-secundarias img');

imagenesSecundarias.forEach(imagen => {
    imagen.addEventListener('click', function() {
        let srcPrincipal = imagenPrincipal.src;
        
        imagenPrincipal.src = this.src;

        this.src = srcPrincipal;
    });
});

document.querySelector('.hamburguesa-menu').addEventListener('click', function() {
    const menuLateral = document.querySelector('.menu-lateral');
    menuLateral.classList.toggle('abierto');
});


