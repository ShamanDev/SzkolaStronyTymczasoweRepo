var a;
var b = 0;
var previous = 0;
var c;

$('.prev').eq(0).mouseover(function () { 
   $('.prev > a').eq(0).css('color', 'white'); 
});

$('.prev').eq(1).mouseover(function () { 
    $('.prev > a').eq(1).css('color', 'white'); 
 });

$('.prev').eq(0).mouseout(function () { 
    $('.prev > a').eq(0).css('color', 'black');
});

$('.prev').eq(1).mouseout(function () { 
    $('.prev > a').eq(1).css('color', 'black');
});


document.getElementsByClassName('slide')[0].style.display = 'block';

function plusSlides(a)
{
    
    if(b == 3)
    {
        b=-1;
        document.getElementsByClassName('slide')[3].style.display = "none";
        document.getElementsByClassName('slide')[b+=a].style.display = "block"; 
    }
    else
    {
        document.getElementsByClassName('slide')[b].style.display = "none";
        document.getElementsByClassName('slide')[b+=a].style.display = "block"; 
    }
         
}

function minusSlides(a)
{
    if(b == 0)
    {
        b=3;
        document.getElementsByClassName('slide')[0].style.display = "none";
        document.getElementsByClassName('slide')[3].style.display = "block";
    }
    else
    {
        document.getElementsByClassName('slide')[b].style.display = "none";
        document.getElementsByClassName('slide')[b-=a].style.display = "block";
    }
    
}