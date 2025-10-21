// Cuenta regresiva para la boda
function updateCountdown() {
    // Usar formato ISO o constructor de Date con parámetros separados
    const weddingDate = new Date(2025, 11, 10, 18, 0, 0).getTime(); // Mes 6 = Julio (0-indexed)
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualizar elementos del DOM
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    // Si la boda ya pasó
    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

// Actualizar cuenta regresiva cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Ejecutar inmediatamente

// Animaciones de scroll
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.story-section, .gallery-section, .event-details');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in', 'visible');
        }
    });
}

// Efecto parallax para el hero section
function handleParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
}

// Smooth scroll para enlaces internos
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Lazy loading para imágenes
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Efectos hover para elementos de la galería
function initGalleryEffects() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Validación de formularios (si se agregan)
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí se puede agregar lógica de validación
            console.log('Formulario enviado');
        });
    });
}

// Optimización de rendimiento
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funciones
    initSmoothScroll();
    initLazyLoading();
    initGalleryEffects();
    initFormValidation();
    
    // Event listeners para scroll
    window.addEventListener('scroll', debounce(handleScrollAnimations, 10));
    window.addEventListener('scroll', debounce(handleParallax, 10));
    
    // Ejecutar animaciones iniciales
    handleScrollAnimations();
});

// Detectar si el dispositivo es móvil
function isMobile() {
    return window.innerWidth <= 768;
}

// Ajustar comportamiento en móviles
if (isMobile()) {
    // Deshabilitar parallax en móviles para mejor rendimiento
    window.removeEventListener('scroll', handleParallax);
}

// Preloader (opcional)
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Manejo de errores de imágenes
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'https://via.placeholder.com/400x300?text=Imagen+No+Disponible';
    }
}, true);

// Console log para debugging
console.log('Página de boda cargada correctamente');
console.log('Fecha de la boda: 3 de Julio, 2025 a las 6:00 PM'); 