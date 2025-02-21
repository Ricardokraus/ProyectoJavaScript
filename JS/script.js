// Funcion para que suba y baje el nav y que tambien el container1 tenga un margen continuo entre el nav
function navBajar() {
  const boton = document.getElementById("botonNav");
  const nav = document.getElementById("nav1");
  let container = document.getElementById("container1");

  let navOculto = boton.classList.contains("navOculto");
  [boton, nav].forEach(elementos => elementos.classList.toggle("navOculto", !navOculto));

  if (!navOculto) {
    container.classList.add("comprimido");
  } else {
    container.classList.remove("comprimido");
  }
}

// Funcion para mostrar el boton de subir desde el fondo de la página
function mostrarFlecha() {
  let bajando = window.scrollY > 225;
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


function subirArriba() {
  const boton = document.getElementById("flechaSubir");
  if (boton.classList.contains("subir")) {
    window.scrollTo({ top: 0 });
  }
}

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
elementosOcultos.forEach((elementos) => observer.observe(elementos));



function ajustarOverflow() {
  let alturaPag = document.documentElement.scrollHeight; // Altura total del contenido
  if (alturaPag > 1000) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }
}

// Ejecutar al cargar la página
ajustarOverflow();

// Aplicar también cuando el contenido cambie
window.addEventListener("resize", ajustarOverflow);

