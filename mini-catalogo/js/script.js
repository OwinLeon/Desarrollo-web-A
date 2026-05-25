class ProductCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const nombre = this.getAttribute("nombre");
    const precio = this.getAttribute("precio");
    const descripcion = this.getAttribute("descripcion");

    this.innerHTML = `
      <div class="card">
      <h3>${nombre}</h3>
      <p>${descripcion}</p>
      <strong>$${precio}</strong>
      </div>
`;
}
}

customElements.define("product-card", ProductCard);

const productos = [
  {
    nombre: "Laptop",
    precio: 1200,
    descripcion: "Laptop para trabajo y estudio",
  },
  {
    nombre: "Mouse Gamer",
    precio: 50,
    descripcion: "Mouse RGB de alta precisión",
  },
  {
    nombre: "Teclado Mecánico",
    precio: 90,
    descripcion: "Teclado con switches mecánicos",
  },
];


fetch("components/header/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
});



async function cargarComponente(id, url) {
  const resp = await fetch(url);
  const html = await resp.text();
  document.getElementById(id).innerHTML = html;
}
cargarComponente("header", "components/header/header.html");
cargarComponente("footer", "components/footer/footer.html");

// Mostrar productos en el catálogo
function mostrarProductos() {
  const catalogo = document.getElementById("catalogo");
  const template = document.getElementById("product-template");
  
  productos.forEach(producto => {
    const clon = template.content.cloneNode(true);
    const productCard = clon.querySelector("product-card");
    
    productCard.setAttribute("nombre", producto.nombre);
    productCard.setAttribute("precio", producto.precio);
    productCard.setAttribute("descripcion", producto.descripcion);
    
    catalogo.appendChild(clon);
  });
}

document.addEventListener("DOMContentLoaded", mostrarProductos);
