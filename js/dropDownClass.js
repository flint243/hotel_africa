class dropdown{

    constructor(){

       if( $(".navbar-toggler").click(this.showToggle.bind(this)) ){
        showToggle()
          $(".nav-link").css({'display':'block'});
          $(".navbar").css({'height':'200px'});
          $("button.navbar-toggler").css({"position":"absolute", "marginTop":"-135px"})
          $(".contentNav a.titre").css({"position":"absolute", "marginTop":"-135px"})
        }
       else {
        $("i.fa-bars").click(this.hideToggle.bind(this));
       }
       hideToggle()
        $(".nav-link").css({'display':'none'});
      }
    }
    
new dropdown();