// Car collection data
const cars = [
    {
        id: 1,
        name: 'All New Rush',
        type: 'Large Car',
        image: 'https://via.placeholder.com/900x600',
        price: 72,
        specs: {
            seats: 5,
            transmission: 'Automatic'
        }
    },
    {
        id: 2,
        name: 'BMW M4',
        type: 'Exclusive Car',
        image: 'https://via.placeholder.com/900x600',
        price: 120,
        specs: {
            seats: 4,
            transmission: 'Automatic'
        }
    },
    {
        id: 3,
        name: 'Mercedes C-Class',
        type: 'Exclusive Car',
        image: 'https://via.placeholder.com/900x600',
        price: 110,
        specs: {
            seats: 5,
            transmission: 'Automatic'
        }
    },
    {
        id: 4,
        name: 'Toyota Corolla',
        type: 'Small Car',
        image: 'https://via.placeholder.com/900x600',
        price: 65,
        specs: {
            seats: 5,
            transmission: 'Automatic'
        }
    }
];

// Testimonials data
const testimonials = [
    {
        id: 1,
        rating: 4.8,
        text: '¡Servicio excepcional! El coche estaba en perfectas condiciones y el proceso de reserva fue impecable. Definitivamente lo usaré de nuevo.',
        author: 'Josh R.'
    },
    {
        id: 2,
        rating: 4.7,
        text: 'Experiencia fantástica de principio a fin. El personal fue increíblemente servicial y el coche superó mis expectativas.',
        author: 'Sarah C.'
    },
    {
        id: 3,
        rating: 4.9,
        text: 'El mejor servicio de alquiler de coches que he usado. Precios competitivos y excelente atención al cliente. ¡Muy recomendado!',
        author: 'James W.'
    }
];

// Populate car collection
function populateCarCollection(filterType = 'All') {
    const carGrid = document.querySelector('.car-grid');
    carGrid.innerHTML = '';

    const filteredCars = filterType === 'All' 
        ? cars 
        : cars.filter(car => car.type === filterType);

    filteredCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <div class="car-info">
                <h3>${car.name}</h3>
                <p>${car.type}</p>
                <div class="specs">
                    <span>${car.specs.seats} Seats</span>
                    <span>${car.specs.transmission}</span>
                </div>
                <div class="price">
                    <strong>$${car.price}</strong>/day
                </div>
                <button class="primary-btn">Rent Now</button>
            </div>
        `;
        carGrid.appendChild(carCard);
    });
}

// Populate testimonials
function populateTestimonials() {
    const testimonialSlider = document.querySelector('.testimonials-slider');
    testimonialSlider.innerHTML = '';

    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        testimonialCard.innerHTML = `
            <div class="rating">★ ${testimonial.rating}</div>
            <p>${testimonial.text}</p>
            <div class="author">${testimonial.author}</div>
        `;
        testimonialSlider.appendChild(testimonialCard);
    });
}

// Filter car collection
function setupCarFilters() {
    const filterButtons = document.querySelectorAll('.car-filters button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter cars
            const filterType = button.textContent;
            populateCarCollection(filterType);
        });
    });
}

// Form validation
function setupFormValidation() {
    const bookingForm = document.querySelector('.booking-form');
    const searchBtn = bookingForm.querySelector('.search-btn');

    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const pickupLocation = bookingForm.querySelector('input[placeholder="Enter location"]').value;
        const pickupDate = bookingForm.querySelector('input[type="date"]').value;

        if (!pickupLocation || !pickupDate) {
            alert('Please fill in all required fields');
            return;
        }

        alert('Search request submitted! We\'ll find the best cars for you.');
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateCarCollection();
    populateTestimonials();
    setupCarFilters();
    setupFormValidation();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});