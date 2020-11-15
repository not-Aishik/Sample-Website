$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});



/*----------------------WAVE-------------------------------------------------------------------------*/

var i = 0;

setInterval(function () {
    var x = document.getElementById("myid");

    if (i == 0) {
        x = "Recursion";

        i++;
    }
    else if (i == 1) {
        x = "rEcursion";
        i++;
    }
    else if (i == 2) {
        x = "reCursion";
        i++;
    }
    else if (i == 3) {
        x = "recUrsion";
        i++;
    }
    else if (i == 4) {
        x = "recuRsion";
        i++;
    }
    else if (i == 5) {
        x = "recurSion";
        i++;
    }
    else if (i == 6) {
        x = "recursIon";
        i++;
    }
    else if (i == 7) {
        x = "recursiOn";
        i++;
    }
    else if (i == 8) {
        x = "recursioN";
        i = 0;
    }

    document.getElementById("myid").innerHTML = x;
}, 600);



/*----------------------------ARROW FOR 3D--------------------------------------------------------------------------*/

var pos = 1;

function rightfunc() {
    if (pos == 1) {
        document.getElementById("s2").checked = true;
        pos = 2;
    }
    else if (pos == 2) {
        document.getElementById("s3").checked = true;
        pos = 3;
    }
    else if (pos == 3) {
        document.getElementById("s4").checked = true;
        pos = 4;
    }
    else if (pos == 4) {
        document.getElementById("s5").checked = true;
        pos = 5;
    }
    else if (pos == 5) {
        document.getElementById("s1").checked = true;
        pos = 1;
    }
}

function leftfunc() {
    if (pos == 1) {
        document.getElementById("s5").checked = true;
        pos = 5;
    }
    else if (pos == 2) {
        document.getElementById("s1").checked = true;
        pos = 1;
    }
    else if (pos == 3) {
        document.getElementById("s2").checked = true;
        pos = 2;
    }
    else if (pos == 4) {
        document.getElementById("s3").checked = true;
        pos = 3;
    }
    else if (pos == 5) {
        document.getElementById("s4").checked = true;
        pos = 4;
    }
}


/*------------------------------------------------------------------------------------------------------------*/

$(window).scroll(function () {
    $('.newclass').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).addClass("mycard");
            $(this).removeClass("invclass");
        } else {
            $(this).removeClass("mycard");
            $(this).addClass("invclass");
        }
    });
});


/*----------------------------------------------AUTO SLIDER-------------------------------------------------*/


setInterval(function () {
    if (pos == 1) {
        document.getElementById("s2").checked = true;
        pos = 2;
    }
    else if (pos == 2) {
        document.getElementById("s3").checked = true;
        pos = 3;
    }
    else if (pos == 3) {
        document.getElementById("s4").checked = true;
        pos = 4;
    }
    else if (pos == 4) {
        document.getElementById("s5").checked = true;
        pos = 5;
    }
    else if (pos == 5) {
        document.getElementById("s1").checked = true;
        pos = 1;
    }
    document.getElementById("myid").innerHTML = x;
}, 1500);