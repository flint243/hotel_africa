class hoverChambres{

    constructor(){
        $('.chambre1').mouseover(this.changeColor1.bind(this));
        $('.chambre1').mouseout(this.colorBack1.bind(this));

        $('.chambre2').mouseover(this.changeColor2.bind(this));
        $('.chambre2').mouseout(this.colorBack2.bind(this));

        $('.chambre3').mouseover(this.changeColor3.bind(this));
        $('.chambre3').mouseout(this.colorBack3.bind(this));

        $('.chambre4').mouseover(this.changeColor4.bind(this));
        $('.chambre4').mouseout(this.colorBack4.bind(this));

        $('.chambre5').mouseover(this.changeColor5.bind(this));
        $('.chambre5').mouseout(this.colorBack5.bind(this));

    } 

    changeColor1(){
		$('.chambre1 .half').css({'backgroundColor': 'rgb(218, 190, 9'});
        $('.chambre1').css({'backgroundColor': 'rgb(218, 190, 9'});
        $('.cadreIn').css({'backgroundColor': 'white'});
        $('.et1').css({'color': 'white'});
	}

	colorBack1(){
		$('.chambre1 .half').css({'backgroundColor': 'none'});
        $('.chambre1').css({'backgroundColor': 'none'});
        $('.cadreIn').css({'backgroundColor': 'none'});
        $('.et1').css({'backgroundColor': 'none'});
	}

    changeColor2(){
		$('.chambre2 .half').css({'backgroundColor': 'rgb(218, 190, 9'});
        $('.chambre2').css({'backgroundColor': 'rgb(218, 190, 9'});
        $('.cadreIn').css({'backgroundColor': 'white'});
        $('.et2').css({'color': 'white'});
	}

	colorBack2(){
		$('.chambre2 .half').css({'backgroundColor': 'none'});
        $('.chambre2').css({'backgroundColor': 'none'});
        $('.cadreIn').css({'backgroundColor': 'none'});
        $('.et2').css({'backgroundColor': 'none'});
	}

    changeColor3(){
		$('.chambre3 .half').css({'backgroundColor': 'rgb(218, 190, 9'});
        $('.chambre3').css({'backgroundColor': 'rgb(218, 190, 9'});
        $('.cadreIn').css({'backgroundColor': 'white'});
        $('.et3').css({'color': 'white'});
	}

	colorBack3(){
		$('.chambre3 .half').css({'backgroundColor': 'none'});
        $('.chambre3').css({'backgroundColor': 'none'});
        $('.cadreIn').css({'backgroundColor': 'none'});
        $('.et3').css({'backgroundColor': 'none'});
	}

    changeColor4(){
		$('.chambre4 .half').css({'backgroundColor': 'rgb(218, 190, 9'});
        $('.chambre4').css({'backgroundColor': 'rgb(218, 190, 9'});
        $('.cadreIn').css({'backgroundColor': 'white'});
        $('.et4').css({'color': 'white'});
	}

	colorBack4(){
		$('.chambre4 .half').css({'backgroundColor': 'none'});
        $('.chambre4').css({'backgroundColor': 'none'});
        $('.cadreIn').css({'backgroundColor': 'none'});
        $('.et4').css({'backgroundColor': 'none'});
	}

    changeColor5(){
		$('.chambre5 .half').css({'backgroundColor': 'rgb(218, 190, 9'});
        $('.chambre5').css({'backgroundColor': 'rgb(218, 190, 9'});
        $('.cadreIn').css({'backgroundColor': 'white'});
        $('.et5').css({'color': 'white'});
	}

	colorBack5(){
		$('.chambre5 .half').css({'backgroundColor': 'none'});
        $('.chambre5').css({'backgroundColor': 'none'});
        $('.cadreIn').css({'backgroundColor': 'none'});
        $('.et5').css({'backgroundColor': 'none'});
	}

}
hoverChambres =  new hoverChambres();