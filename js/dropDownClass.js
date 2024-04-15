class Dropdown {
  constructor() {
    this.init();
  }

  init() {
    $(".navbar-toggler").click(this.toggleMenu.bind(this));
  }

  toggleMenu() {
    if ($(".nav-link").css("display") === "none") {
      this.showMenu();
    } else {
      this.hideMenu();
    }
  }

  showMenu() {
    $(".nav-link").css({"display": "block"});
    $(".navbar").css({"height": "200px"});
    $("button.navbar-toggler").css({"position": "absolute", "margin-top": "-135px","zIndex":"100"});
    $(".contentNav a.titre").css({"position": "absolute", "margin-top": "-135px"});
  }

  hideMenu() {
    $(".nav-link").css({"display": "none"});
    $(".navbar").css({"height": "66px"});
    $("button.navbar-toggler").css({"margin-top": "auto"});
    $(".contentNav a.titre").css({"margin-top": "auto"});
  }
}

$(document).ready(function() {
  new Dropdown();
});