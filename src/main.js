const resumenPdf = document.querySelector(`.contacto__resumen__descargar`)
const portapapeles = document.querySelector('.portapapeles');
const descargar_cv = document.querySelector(`.descargar_cv`)
const modal__button = document.getElementById("modal__button")
const contacto__formulario_boton = document.getElementById("contacto__formulario--boton")

function mostrarAlerta(mensaje) {
    document.getElementById("alertMessage").innerText = mensaje;
    document.getElementById("customAlert").classList.add("show");
}

function cerrarAlerta() {
    document.getElementById("customAlert").classList.remove("show");
}

const descargarPdf = () => {
    // Función para abrir el PDF en una nueva pestaña
    const pdfUrl = './public/docs/Fernandez Juan cv.pdf'; // Ruta del PDF
    window.open(pdfUrl, '_blank');
    // Abre en una nueva pestaña
}

const copiarAlPortapapeles = (textoACopiar) => {
    const texto = textoACopiar;
    navigator.clipboard.writeText(texto)
        .then(() => {
            mostrarAlerta("mail copiado con éxito en portapapeles")
        })
        .catch((error) => {
            mostrarAlerta("Error al copiar el mail al portapapeles")
            console.error('Error al copiar: ', error); // Maneja errores
        });
}

const guardarEnElLocalStore = (e) => {
    localStorage.setItem("Email", "Email enviado correctamente")
}

const recuperarLocalStore = () => {
    let mail = localStorage.getItem("Email");
    return mail
}

const eliminarLocalStore = () => {
    localStorage.removeItem("Email");
}

const EmailEnviado = () => {
    let mensajeGuardado = recuperarLocalStore();
    if (mensajeGuardado) {
        mostrarAlerta(mensajeGuardado);
    }
}

const aceptarModal = (e) => {
    e.preventDefault()
    cerrarAlerta()
    eliminarLocalStore();
}

const init = () => {
    EmailEnviado();

    resumenPdf.addEventListener('click', () => {
        descargarPdf();
    });

    descargar_cv.addEventListener("click", () => {
        descargarPdf();
    });

    // Función para copiar el contenido del div
    portapapeles.addEventListener('click', () => {
        copiarAlPortapapeles("juanmaf236@gmail.com")
    });

    modal__button.addEventListener("click", aceptarModal)

    contacto__formulario_boton.addEventListener("click", guardarEnElLocalStore)
}
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        // disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


init();


