class Dropdown {
  constructor() {
    this.init();
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
    $(".navbarGenerale").css({"height": "200px"});
    $("button.navbarToggle-toggler").css({"position": "absolute", "margin-top": "5px","zIndex":"100"});
    $(".contentNav a.titre").css({"display": "none"});
  }

  hideMenu() {
    $(".navToggle-linkToggle").css({"display": "none"});
    $(".navbarGenerale").css({"height": "66px"});
    $("button.navbarToggle-toggler").css({"margin-top": "inherit"});
    $(".titreToggle").css({"display": "block"});
    //$(".contentNav").css({"position": "absolute", "display":"block"});
  }
}

$(document).ready(function() {
  new Dropdown();
});