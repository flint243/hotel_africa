class SlideShowAvis{

		    //------ changement automatique ---------//
        constructor(){
          this.myPix =[
            'images/visage/femme1.jpg',
            'images/visage/homme1.jpg',
            'images/visage/femme2.jpg',
            'images/visage/homme3.jpg',
            'images/visage/homme4.jpg'
          ];
          this.textImg = [
            '<p class="msgAvis">J\'ai passé un séjour merveilleux et magique dans ce Palace<br> J\'y reviendrais à coup sur ! <br><br><span class="nomSlide">Nathalie Martin</span></p>',
           
          '<p class="msgAvis">Mon entreprise a organisée un séminaire dans ce super Palace<br> Tout s\'est agréablement déroulé ! <br><br><span class="nomSlide">Paul smith</span></p>', 
         
          '<p class="msgAvis">Mon amie m\'a organisée un anniversaire dans ce grand Palace<br> Tout s\'est agréablement déroulé ! <br><br><span class="nomSlide">Samantah Young</span></p>',
         
          '<p class="msgAvis">j\'ai organiséeun séjour pour ma femme dans cet Hotel<br> Tout s\'est agréablement déroulé ! <br><br><span class="nomSlide">Bozo le kéké</span></p>', 
         
          '<p class="msgAvis">Mon entreprise a organisée un séminaire dans ce super Palace<br> Tout s\'est agréablement déroulé ! <br><br><span class="nomSlide">Henri le Premier</span></p>'
        ];
          
          this.speed = 3000; //vitesse de defilement en milliseconds
          this.i = 1;
          this.interval = 0;

          $('#InfoSlider').html(this.textImg[0]);
          $('#slider').children('img').attr('src', this.myPix[0]).fadeIn();
          
          this.slideShowAuto();
        }
 
        slideShowAuto(){
          this.interval = setInterval(()=>{this.autoPlay(); 
          }, this.speed);
        }

        //------------ fonction autoPlay() assure l'automatisme du slider ------------//
        autoPlay(){
          $('#InfoSlider').html(this.textImg[this.i]);
            $('#slider').children('img').attr('src', this.myPix[this.i]);
            
            this.i += 1; // Augmenter l'index
            if( this.i == this.myPix.length){
              this.i = 0;
            }
        }
}
new SlideShowAvis();
