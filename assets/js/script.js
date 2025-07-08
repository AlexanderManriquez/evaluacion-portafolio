//Bootstrap JavaScript for tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//Función para mostrar un mensaje de éxito al enviar el formulario
let form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    let alertContainer = document.getElementById('alert-container');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name != "" || email != "" || message != "") {
        alertContainer.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>¡Mensaje enviado!</strong> Gracias por contactarnos.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
            </div> 
        `; // Mensaje a mostrar
    }

    document.getElementById('contactForm').reset(); // Resetear el formulario
});