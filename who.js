document.addEventListener("DOMContentLoaded", function() {
    // Nasconde il loader dopo un certo ritardo
    setTimeout(function() {
      document.getElementById("loader-container").style.display = "none";
      document.body.style.visibility = "visible";
    }, 1000); // Ritardo di 1000 millisecondi (1 secondo)
  });




const header = document.querySelector('.header');
const menuAs = document.querySelectorAll('.menu__a'); // Seleziona tutti gli elementi con classe menu__a

window.addEventListener('scroll', () => {
// Verifica la posizione dello scroll rispetto al top della finestra
if (window.scrollY > 0) {
    // Se lo scroll è verso il basso, aggiungi la classe 'scrolled' all'header
    header.classList.add('scrolled');
    // Aggiungi la classe 'scrolled' a ciascun elemento del menu
    menuAs.forEach(menuA => {
        menuA.classList.add('scrolled');
    });
} else {
    // Se lo scroll è verso l'alto e non c'è scroll, rimuovi la classe 'scrolled' dall'header
    header.classList.remove('scrolled');
    // Rimuovi la classe 'scrolled' da ciascun elemento del menu
    menuAs.forEach(menuA => {
        menuA.classList.remove('scrolled');
    });
}
});

let items = document.querySelector('.hamburger'); //seleziona elementi dell'htlm
items.addEventListener("click", function() { //javascript ascolta quando click e  
  document.body.classList.toggle('open'); // esegue quando si clicca
});


const menu = document.querySelector('#mobile-menu'); //# per l'id, target è l'id della class navbar__toggle
const menulinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
});


    let item = document.querySelector('.navbar__toggle'); //seleziona elementi dell'htlm
    item.addEventListener("click", function() { //javascript ascolta quando click e  
      document.body.classList.toggle('open'); // esegue quando si clicca
    });


    // Funzione per verificare se un elemento è visibile nella viewport
    function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    }

    // Funzione per gestire l'animazione degli elementi quando sono visibili nella viewport
    function handleAnimation() {
    const elements = document.querySelectorAll('.col33');
    elements.forEach(element => {
        if (isInViewport(element)) {
        element.style.opacity = 1;
        }
    });
    }

    // Aggiungi un listener per controllare quando l'utente scorre la pagina
    window.addEventListener('scroll', handleAnimation);
    // Esegui la funzione una volta all'inizio per controllare immediatamente la visibilità degli elementi
    handleAnimation();



// Seleziona l'elemento della navbar
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar__links'); // Seleziona tutti gli elementi con classe menu__a
const buttonmedia = document.querySelectorAll('.navbar__toggle .bar')

// Registra l'evento di scroll sulla finestra
window.addEventListener('scroll', () => {
    // Verifica la posizione dello scroll rispetto al top della finestra
    if (window.scrollY > 0) {
        // Se lo scroll è verso il basso, aggiungi la classe 'scrolled' all'header
        navbar.classList.add('scrolled');
        // Aggiungi la classe 'scrolled' a ciascun elemento del menu
        links.forEach(links => {
            links.classList.add('scrolled');
        });
        buttonmedia.forEach(buttonmedia => {
            buttonmedia.classList.add('scrolled');
        });
    } else {
        // Se lo scroll è verso l'alto e non c'è scroll, rimuovi la classe 'scrolled' dall'header
        navbar.classList.remove('scrolled');
        // Rimuovi la classe 'scrolled' da ciascun elemento del menu
        links.forEach(links => {
            links.classList.remove('scrolled');
        });
        buttonmedia.forEach(buttonmedia => {
            buttonmedia.classList.remove('scrolled');
        });
    }
});


//animazione scroll lenta
const navbarr = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled')
    }
});




let reviews = document.querySelectorAll('.review');
let currentIndex = 1; // Indice iniziale della recensione attiva

setInterval(() => {
    // Imposta tutte le recensioni come non attive
    reviews.forEach(review => {
        review.setAttribute('data-active', 'false');
    });

    // Aggiorna l'indice della recensione attiva
    currentIndex = (currentIndex + 1) % reviews.length;
    reviews[currentIndex].setAttribute('data-active', 'true');
}, 5000); // Cambia ogni 3000 millisecondi (3 secondi)










const projects = document.querySelectorAll('.project');
let currentProjectIndex = 0;

function showProject(index) {
    projects.forEach(project => project.classList.remove('active'));
    projects[index].classList.add('active');
}

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    showProject(currentProjectIndex);
});

document.querySelector('.next-btn').addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    showProject(currentProjectIndex);
});

// Mostra il primo progetto all'avvio
showProject(currentProjectIndex);







function submitQuoteRequest(event) {
    event.preventDefault(); // Previene il refresh della pagina
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var details = document.getElementById('details').value;

    console.log('Name:', name); // Simulazione del processamento dei dati
    console.log('Email:', email);
    console.log('Details:', details);

    // Qui puoi aggiungere codice per inviare questi dati a un server o mostrare un messaggio di successo
    alert("La tua richiesta di preventivo è stata inviata con successo!");
}

