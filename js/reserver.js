/* -----------------HEADER----------------------- */
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

/* -----------------Page Réservation------------------------------ */

/* function d'afficher la date actuelle dans la section de sélection de date */
window.onload = function () {
    var today = new Date().toISOString().split('T')[0];
    document.getElementById('arrival-date').value = today;
};

/* La fonction d'afficher les modifications des informations et le total du prix lorsque l'utilisateur change les valeurs. */
function updateReservationSummary() {
    const arrivalDate = new Date(document.getElementById('arrival-date').value);
    const departureDate = new Date(document.getElementById('departure-date').value);
    const adults = parseInt(document.getElementById('adults').value, 10);
    const children = parseInt(document.getElementById('children').value, 10);
    const taxeSejour = 4.88;

    // Calculer le nombre de nuits
    const timeDiff = departureDate.getTime() - arrivalDate.getTime();
    const nights = timeDiff / (1000 * 3600 * 24); // convert miliseconds to day

 
    const ratePerAdult = 99.00;
    const ratePerChild = 49.50;

   
    const total = (adults * ratePerAdult + children * ratePerChild + taxeSejour) * nights ;

    // Mettre à jour l'affichage
    
    if (isNaN(nights))
    {
        document.querySelector('.total-box span').innerHTML = `0 €`;
        document.querySelector('.reservation-summary p').innerHTML = `Pour <b> 0 </b> nuit(s), <b> ${adults} </b> adulte(s), <b> ${children} </b> enfant(s),`;
    }
    else {
        document.querySelector('.reservation-summary p').innerHTML = `Pour <b>  ${nights} </b> nuit(s), <b> ${adults} </b> adulte(s), <b> ${children} </b> enfant(s),`;
        document.querySelector('.total-box span').innerHTML = `<b> ${total.toFixed(2)} </b> €`;
    }
    
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


/*------------------ FUNCTION RESERVER LOGIN SIGNUP -------------------------*/

/* Quand click sur le button Reserver une chambre */
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
