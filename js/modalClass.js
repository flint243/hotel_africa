class Modal {
  constructor() {
      $(".imod1").click(this.show.bind(this));
      $(".imod2").click(this.show2.bind(this));
      $(".imod3").click(this.show3.bind(this));
      $(".imod4").click(this.show4.bind(this));
      $(".imod5").click(this.show5.bind(this));

      $(".closeModal").click(this.hide.bind(this));
      $(".closeModal").click(this.hide2.bind(this));
      $(".closeModal").click(this.hide3.bind(this));
      $(".closeModal").click(this.hide4.bind(this));
      $(".closeModal").click(this.hide5.bind(this));
  }

  show(event) {
    event.preventDefault();
      $(".modalInsta1").css({"display":"block"});
  }

  hide() {
      $(".modalInsta1").css({"display":"none"});
  }

  show2(event) {
    event.preventDefault();
      $(".modalInsta2").css({"display":"block"});
  }

  hide2() {
      $(".modalInsta2").css({"display":"none"});
  }

  show3(event) {
    event.preventDefault();
      $(".modalInsta3").css({"display":"block"});
  }

  hide3() {
      $(".modalInsta3").css({"display":"none"});
  }

  show4(event) {
    event.preventDefault();
      $(".modalInsta4").css({"display":"block"});
  }

  hide4() {
      $(".modalInsta4").css({"display":"none"});
  }

  show5(event) {
    event.preventDefault();
      $(".modalInsta5").css({"display":"block"});
  }

  hide5() {
      $(".modalInsta5").css({"display":"none"});
  }
}
  new Modal();
