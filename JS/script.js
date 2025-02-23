// Funcion para que suba y baje el nav y que tambien el container1 tenga un margen continuo entre el nav
function navBajar() {
  const boton = document.getElementById("botonNav");
  const nav = document.getElementById("nav");
  const header = document.getElementById("header");
  let container = document.getElementById("container1");

  let navOculto = boton.classList.contains("navOculto");
  [boton, nav, header].forEach(elementos => elementos.classList.toggle("navOculto", !navOculto));

  if (!navOculto) {
    container.classList.add("comprimido");
    header.classList.add("comprimido")
  } else {
    container.classList.remove("comprimido");
    header.classList.remove("comprimido")
  }
}

// Funcion para mostrar el boton de subir desde el fondo de la página
function mostrarFlecha() {
  let bajando = window.scrollY > 50;
  const footer = document.getElementById("flechaSubir");
  const imagen = document.getElementById("boxicon");

  if (bajando) {
    footer.classList.add("subir");
    imagen.classList.add("subir");
  } else {
    footer.classList.remove("subir");
    imagen.classList.remove("subir");
  }
}
window.addEventListener("scroll", mostrarFlecha);

// Funcion para que al hacer click en el boton de subir, se suba a la parte superior de la página
function subirArriba() {
  const boton = document.getElementById("flechaSubir");
  if (boton.classList.contains("subir")) {
    window.scrollTo({ top: 0 });
  }
}

// Funcion para detectar el tamaño de la pantalla y aplicar estilos de aparicion de articulos con animacion
function iniciarObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("artEnseñar");
        entry.target.classList.remove("artOculto");
      } else {
        entry.target.classList.add("artOculto");
        entry.target.classList.remove("artEnseñar");
      }
    });
  });

  const elementosOcultos = document.querySelectorAll('.artOculto');
  elementosOcultos.forEach((elemento) => observer.observe(elemento));
}

// Llamar a la función para activarlo
iniciarObserver();




// Funcion para hacer aparecer la barra de scroll si la altura del contenido de la página supera un tamaño
function ajustarOverflow() {
  let alturaPag = document.documentElement.scrollHeight;
  if (alturaPag > 1100) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }
}
// Ejecutar al cargar la página
ajustarOverflow();
// Aplicar también cuando el contenido cambie
window.addEventListener("resize", ajustarOverflow);


// Funcion para declarar altura minima de la pagina para que el fondo tenga un degradado a corde con la altura de la pantalla
function setMinHeight() {
  document.body.style.minHeight = window.innerHeight + 'px';
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', setMinHeight);

// Ajustar cuando se cambia el tamaño de la ventana
window.addEventListener('resize', setMinHeight);
