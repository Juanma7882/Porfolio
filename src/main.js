const resumenPdf = document.querySelector(`.contacto__resumen__descargar`)

// Función para abrir el PDF en una nueva pestaña
resumenPdf.addEventListener('click', () => {
    const pdfUrl = './public/docs/Comp_97631466013.pdf'; // Ruta del PDF
    window.open(pdfUrl, '_blank'); // Abre en una nueva pestaña
});

const portapapeles = document.querySelector('.portapapeles');

// Función para copiar el contenido del div
portapapeles.addEventListener('click', () => {
    const texto = "juanmaf236@gmail.com"; // Obtiene el texto del div

    navigator.clipboard.writeText(texto)
        .then(() => {
            alert('Texto copiado: ' + texto); // Muestra un mensaje de éxito
        })
        .catch((error) => {
            console.error('Error al copiar: ', error); // Maneja errores
        });
});