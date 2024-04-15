class HoverChambres {
    constructor() {
        this.init();
    }

    init() {
        $('.chambre1').mouseover(this.changeColor1.bind(this));
        $('.chambre1').mouseout(this.hideColor1.bind(this));

        $('.chambre2').mouseover(this.changeColor2.bind(this));
        $('.chambre2').mouseout(this.hideColor2.bind(this));

        $('.chambre3').mouseover(this.changeColor3.bind(this));
        $('.chambre3').mouseout(this.hideColor3.bind(this));

        $('.chambre4').mouseover(this.changeColor4.bind(this));
        $('.chambre4').mouseout(this.hideColor4.bind(this));

        $('.chambre5').mouseover(this.changeColor5.bind(this));
        $('.chambre5').mouseout(this.hideColor5.bind(this));
    }

    changeColor1() {
        // Check if the background color is the default color (none or transparent)
        if ($('.chambre1 .half').css('backgroundColor') === 'rgba(0, 0, 0, 0)' || $('.chambre1 .half').css('backgroundColor') === 'transparent') {
            this.showColor1();
        } else {
            this.hideColor1();
        }
    }

    showColor1() {
        $('.chambre1 .half').css('backgroundColor', 'rgb(218, 190, 9)');
        $('.chambre1').css('backgroundColor', 'rgb(218, 190, 9)');
        $('.cadreIn').css('backgroundColor', 'white');
        $('.et1').css('color', 'white');
    }

    hideColor1() {
        $('.chambre1 .half').css('backgroundColor', 'transparent');
        $('.chambre1').css('backgroundColor', 'transparent');
        $('.cadreIn').css('backgroundColor', 'transparent');
        $('.et1').css('color', 'black'); // Change the color back to default or any other desired color
    }

    changeColor2() {
        // Check if the background color is the default color (none or transparent)
        if ($('.chambre2 .half').css('backgroundColor') === 'rgba(0, 0, 0, 0)' || $('.chambre2 .half').css('backgroundColor') === 'transparent') {
            this.showColor2();
        } else {
            this.hideColor2();
        }
    }

    showColor2() {
        $('.chambre2 .half').css('backgroundColor', 'rgb(218, 190, 9)');
        $('.chambre2').css('backgroundColor', 'rgb(218, 190, 9)');
        $('.cadreIn').css('backgroundColor', 'white');
        $('.et2').css('color', 'white');
    }

    hideColor2() {
        $('.chambre2 .half').css('backgroundColor', 'transparent');
        $('.chambre2').css('backgroundColor', 'transparent');
        $('.cadreIn').css('backgroundColor', 'transparent');
        $('.et2').css('color', 'black'); // Change the color back to default or any other desired color
    }


    changeColor3() {
        // Check if the background color is the default color (none or transparent)
        if ($('.chambre3 .half').css('backgroundColor') === 'rgba(0, 0, 0, 0)' || $('.chambre3 .half').css('backgroundColor') === 'transparent') {
            this.showColor3();
        } else {
            this.hideColor3();
        }
    }

    showColor3() {
        $('.chambre3 .half').css('backgroundColor', 'rgb(218, 190, 9)');
        $('.chambre3').css('backgroundColor', 'rgb(218, 190, 9)');
        $('.cadreIn').css('backgroundColor', 'white');
        $('.et3').css('color', 'white');
    }

    hideColor3() {
        $('.chambre3 .half').css('backgroundColor', 'transparent');
        $('.chambre3').css('backgroundColor', 'transparent');
        $('.cadreIn').css('backgroundColor', 'transparent');
        $('.et3').css('color', 'black'); // Change the color back to default or any other desired color
    }


    changeColor4() {
        // Check if the background color is the default color (none or transparent)
        if ($('.chambre4 .half').css('backgroundColor') === 'rgba(0, 0, 0, 0)' || $('.chambre4 .half').css('backgroundColor') === 'transparent') {
            this.showColor4();
        } else {
            this.hideColor4();
        }
    }

    showColor4() {
        $('.chambre4 .half').css('backgroundColor', 'rgb(218, 190, 9)');
        $('.chambre4').css('backgroundColor', 'rgb(218, 190, 9)');
        $('.cadreIn').css('backgroundColor', 'white');
        $('.et4').css('color', 'white');
    }

    hideColor4() {
        $('.chambre4 .half').css('backgroundColor', 'transparent');
        $('.chambre4').css('backgroundColor', 'transparent');
        $('.cadreIn').css('backgroundColor', 'transparent');
        $('.et4').css('color', 'black'); // Change the color back to default or any other desired color
    }


    changeColor5() {
        // Check if the background color is the default color (none or transparent)
        if ($('.chambre5 .half').css('backgroundColor') === 'rgba(0, 0, 0, 0)' || $('.chambre5 .half').css('backgroundColor') === 'transparent') {
            this.showColor5();
        } else {
            this.hideColor5();
        }
    }

    showColor5() {
        $('.chambre5 .half').css('backgroundColor', 'rgb(218, 190, 9)');
        $('.chambre5').css('backgroundColor', 'rgb(218, 190, 9)');
        $('.cadreIn').css('backgroundColor', 'white');
        $('.et5').css('color', 'white');
    }

    hideColor5() {
        $('.chambre5 .half').css('backgroundColor', 'transparent');
        $('.chambre5').css('backgroundColor', 'transparent');
        $('.cadreIn').css('backgroundColor', 'transparent');
        $('.et5').css('color', 'black'); // Change the color back to default or any other desired color
    }
}

$(document).ready(function() {
    new HoverChambres();
});
