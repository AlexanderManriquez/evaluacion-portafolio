// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('hidden');
});

// Close menu when clicking on a link (for mobile)
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth < 1024) {
            navMenu.classList.add('hidden');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Función para mostrar un mensaje de éxito al enviar el formulario
let form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    let alertContainer = document.getElementById('alert-container');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name != "" || email != "" || message != "") {
        alertContainer.innerHTML = `
            <div class="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg relative" role="alert">
                <strong class="font-bold">¡Mensaje enviado!</strong>
                <span class="block sm:inline"> Gracias por contactarnos.</span>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer" onclick="this.parentElement.remove()">
                    <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                    </svg>
                </span>
            </div> 
        `;
    }

    form.reset();
});