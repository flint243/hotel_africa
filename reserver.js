
/* function responsive cua menu burger */

function myFunction() {
    const x = document.getElementById("myTopnav");
    
    if (x.className === "topnav list-unstyled mt-5") {
        x.className += " responsive";
    } else {
        x.className = "topnav list-unstyled mt-5";
    }

}
/* function scroll window er navbar et logo scroll  */
window.onscroll = function () {
    const nav = document.querySelector('.nav-bar');
    if (window.pageYOffset > 250 ) {
        nav.classList.add('scrolled');
    }
    else
    {
        nav.classList.remove('scrolled');
      
    }
};

function updateReservationSummary() {
    const arrivalDate = new Date(document.getElementById('arrival-date').value);
    const departureDate = new Date(document.getElementById('departure-date').value);
    const adults = parseInt(document.getElementById('adults').value, 10);
    const children = parseInt(document.getElementById('children').value, 10);
    const taxeSejour = 4.88; // Taxe de séjour fixe

    // Calculer le nombre de nuits
    const timeDiff = departureDate.getTime() - arrivalDate.getTime(); //milisecond
    const nights = timeDiff / (1000 * 3600 * 24); // convert miliseconds to day

    // Tarif par nuit (exemple)
    const ratePerAdult = 99.00;
    const ratePerChild = 49.50; // Tarif réduit pour les enfants

    // Calculer le total
    const total = (adults * ratePerAdult + children * ratePerChild) * nights + taxeSejour;

    // Mettre à jour l'affichage
    document.querySelector('.reservation-summary p').textContent = `Pour ${nights} nuit(s), ${adults} adulte(s), ${children} enfant(s),`;
    document.querySelector('.total-box span').textContent = `${total.toFixed(2)} €`;
}

// Ajouter des écouteurs d'événements pour mettre à jour le résumé lors de la modification des champs
document.getElementById('arrival-date').addEventListener('change', updateReservationSummary);
document.getElementById('departure-date').addEventListener('change', updateReservationSummary);
document.getElementById('adults').addEventListener('change', updateReservationSummary);
document.getElementById('children').addEventListener('change', updateReservationSummary);

// Initialiser le résumé au chargement de la page
window.onload = function() {
    document.getElementById('arrival-date').value = new Date().toISOString().split('T')[0];
    updateReservationSummary();
};









/* FUNCTION RESERVER LOGIN SIGNUP */
function reserveRoom() {
    const userResponse = confirm("Avez-vous un compte ?");
    const sectionInfo = document.getElementById("sectionInfo");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    sectionInfo.style.display = "block";

    if (userResponse) {
        // Afficher le formulaire de connexion
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        // Afficher le formulaire d'inscription
        signupForm.style.display = "block";
        loginForm.style.display = "none";
    }
    sectionInfo.scrollIntoView(true);
}

// Ajouter un écouteur d'événements pour le lien d'inscription
document.getElementById('inscrire').addEventListener('click', function(event) {
    event.preventDefault();
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    signupForm.style.display = 'block';
    loginForm.style.display = "none";
});

