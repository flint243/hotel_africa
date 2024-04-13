/*-------------- HEADER ---------------*/
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

/* -------------------PAGE PAIEMENT-------------------------- */ 
/* function update total Page Paiement  */
function updatePagePaiement () {
    const checkGuideTours = document.getElementById('guidedTours');
    const checkActivity = document.getElementById('activities');
    const checkPetsAllowed = document.getElementById('petsAllowed');
    var guide = 0;
    var activities = 0;
    var pet = 0;

    if ( checkGuideTours.checked)
    {
        document.getElementById('otherSelection1').innerHTML =  '<hr> Visitée guidées: 50€ </hr>' 
        guide = 50;
    }
    else {
        document.getElementById('otherSelection1').innerHTML =  '' 
        guide = 0;

    }

    if ( checkActivity.checked)
    {
        document.getElementById('otherSelection2').innerHTML =  '<hr> Activités: 30€ </hr>' 
        activities = 30
    }
    else {
        document.getElementById('otherSelection2').innerHTML =  '' 
        activities = 0
    }

    if ( checkPetsAllowed.checked)
    {
        document.getElementById('otherSelection3').innerHTML =  '<hr> Animal de compagnie: 10€ </hr>' 
        pet = 10
    }
    else {
        document.getElementById('otherSelection3').innerHTML =  '' 
        pet = 0
    }

    var total = 103.88 + guide + activities + pet
    document.getElementById('totalPaiement').innerHTML =  ` ${total} €`

}

document.getElementById('guidedTours').addEventListener('change', updatePagePaiement);
document.getElementById('activities').addEventListener('change', updatePagePaiement);
document.getElementById('petsAllowed').addEventListener('change', updatePagePaiement);

 /* JS pour box felicitation  */
    function finReserve() {
        document.getElementById("feliciteBox").style.display = "flex";
    }

    function closeFelicitationBox() {
        document.getElementById("feliciteBox").style.display = "none";
    }
