class modal{

    constructor(){
      $(".imod1").click(this.show.bind(this));

      $(".closeModal").click(this.hide.bind(this));

    }

    show(){
      $(".modalInsta1").css({'display':'block', 'zIndex':'50'});
    }

    hide(){
      $(".modalInsta1").css({'display':'none'});
    }
}
new modal();