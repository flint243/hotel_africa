class Dropdown {
  constructor() {
    if (window.matchMedia("(min-width:430px)").matches) {
      this.init();
    }
  }

  init() {
    $(".navbarToggle-toggler").click(this.toggleMenu.bind(this));
  }

  toggleMenu() {
    if ($(".navToggle-linkToggle").css("display") === "none") {
      this.showMenu();
    } else {
      this.hideMenu();
    }
  }

  showMenu() {
    $(".navToggle-linkToggle").css({"display": "block"});
    $(".navbarGenerale").css({"height": "250px"});
    $("button.navbarToggle-toggler").css({"position": "absolute", "zIndex":"100"});
    //$(".titreToggle").css({"display": "none"});
    $(".ul.navbarToggle-navToggle.menuToggle").css({"display": "block", "color":"white"});
  }

  hideMenu() {
    $(".navToggle-linkToggle").css({"display": "none"});
    $(".navbarGenerale").css({"height": "66px"});
    $("button.navbarToggle-toggler").css({"margin-top": "inherit"});
    //$(".titreToggle").css({"display": "block"});
    $(".contentNav").css({"width":"100%", "justifyContent":"spaceAround"});
  }
}

$(document).ready(function() {
  new Dropdown();
});
