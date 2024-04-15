class Modal {
  constructor() {
      $(".imod1").click(this.show.bind(this));
      $(".closeModal").click(this.hide.bind(this));
  }

  show() {
      $(".modalInsta1").addClass('show-modal');
  }

  hide() {
      $(".modalInsta1").removeClass('show-modal');
  }
}

$(document).ready(function() {
  new Modal();
});
