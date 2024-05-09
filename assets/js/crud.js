window.addEventListener('click', ()=> {
    function openNav() {
        document.getElementById("myNav").style.height = "100%";
    };
    
    function closeNav() {
        document.getElementById("myNav").style.height = "0%";
    };
    function openPaginaAgregar() {
        document.getElementById("paginaAgregar").style.backgroundColor="azure"
        document.getElementById("paginaAgregar").style.height = "100%";
    }
    function closePaginaAgregar() {
        document.getElementById("paginaAgregar").style.height = "0%";
    }
    document.getElementById('openNavButton').addEventListener('click', openNav);
    document.querySelector('.closebtn').addEventListener('click', closeNav);
    document.getElementById('openPaginaAgregar').addEventListener('click', openPaginaAgregar);
    document.querySelector('.closeAgregarBtn').addEventListener('click', closePaginaAgregar);
});
