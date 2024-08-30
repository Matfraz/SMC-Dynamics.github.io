document.addEventListener("DOMContentLoaded", function() {
    // Nasconde il loader dopo un certo ritardo
    setTimeout(function() {
      document.getElementById("loader-container").style.display = "none";
      document.body.style.visibility = "visible";
    }, 1000); // Ritardo di 1000 millisecondi (1 secondo)
  });
  
  
      let item = document.querySelector('.hamburger'); //seleziona elementi dell'htlm
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
      const header = document.querySelector('.header');
  const menuAs = document.querySelectorAll('.menu__a'); // Seleziona tutti gli elementi con classe menu__a
  
  // Registra l'evento di scroll sulla finestra
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


/*
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

*/
















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




document.addEventListener("DOMContentLoaded", function() {
    // Dati dei progetti
    const projectImages = [
        'Pizzapazza.png',
        'Pizzapazza2.png',
        'Pizzapazza4.png'
    ];

    let currentImageIndex = 0;

    // Selezione degli elementi DOM
    const projectImg = document.getElementById('project-img');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const nextBtns = document.querySelectorAll('.next-btn');

    // Funzione per aggiornare l'immagine del progetto
    function updateProject() {
        projectImg.src = projectImages[currentImageIndex];
    }

    // Event listener per i pulsanti "precedente" e "successivo"
    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + projectImages.length) % projectImages.length;
            updateProject();
        });
    });

    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % projectImages.length;
            updateProject();
        });
    });

    // Inizializzazione
    updateProject();
});
