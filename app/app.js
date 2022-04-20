const carrito = document.getElementsById('carrito');
const catalogos = document.getElementsById('lista-catalogo');
const listaCatalogos = document.querySelector('#list-carrito tbody');
const VaciarCarritoBtn = document.getElementsById('vaciar-carrito');

cargarEventlisteners();

function cargarEventlisteners() {
	catalogos.addEventlistener('click', comprarCatalogo);
	carrito.addEventlistener('click', eliminarCatalogo);
	vaciarCarritobtn.addEventlistener('click', VaciarCarrito);
	document.addEventlistener('DOMcontentLoaded, leerlocalstorage');
}

function comprarCatalogo (e) {
	e.preventDefault();

	if(e.target.classList.contains('agregar-carrito')) {
		const catalogo= e.target.parentElement.parentElement;
		leerDatosCatalogo(catalogo);
	}
}
function leerDatosCatalogo(catalogo) {
	const infoCatalogo = {
		imagen: catalogo.querySelector('img').src,
		titulo: catalogo.querySelector('h4').textContent,
		precio: catalogo.querySelector('.precio span').textContent,
		id: catalogo.querySelector('a').getAttribute('data-id')
	}
	insertarCarrito(infoCatalogo);

	function insertarCarrito (catalogo) {
		const row = document.createElement('tr');
		row.innerHTML = 
		<td>
		



		 	
	}	
}