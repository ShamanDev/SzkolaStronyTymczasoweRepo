var indeks1;
var indeks2;
var pozostaly_rozwiniety = false
var rozwiniecie0 = false;
var rozwiniecie1 = false;
var rozwiniecie2 = false;
var button = false;
var previous;
var mniej = "Mniej...";
var wiecej = "Więcej...";
var wysokosc = $('.articles').eq(0).height();
var warunek1 = $('body').width();

//.................................................
if(warunek1 > 700)
{
   wysokosc1 = $('.themepages').eq(0).height();
   wysokosc2 = $('.themepages').eq(1).height();
   if(wysokosc1 >= wysokosc2)
   {
      $('.themepages').eq(1).height(wysokosc1);
   }
   else
   {
      $('.themepages').eq(0).height(wysokosc2);
   }


   
}

if(warunek1 > 0 && warunek1 < 400)
{
   $('#respmenuholder').css('right', '-80px');
}
else if(warunek1 > 401 && warunek1 <701)
{
   $('#respmenuholder').css('right', '-100px');
}

document.getElementById('rightmenubutton').addEventListener("click", function(){
   if(button == false)
   {
      $('#respmenuholder').css('right', '5px');
      button = true;
   }
   else if(button == true)
   {
      if(warunek1 > 0 && warunek1 < 400)
      {
         $('#respmenuholder').css('right', '-80px');
         button = false;
      }
      else if(warunek1 > 401 && warunek1 <701)
      {
         $('#respmenuholder').css('right', '-100px');
         button = false;
      }
      
   }
   
});

//.................................................

$('.rozwiniecie').hide();

document.getElementsByClassName("button")[0].addEventListener("click", function()
{
   if(rozwiniecie0 == false)
   {
      expand(0); 
   }
   else if(unek1rozwiniecie0 == true)
   {
      fold(0);
   }       
});

document.getElementsByClassName("button")[1].addEventListener("click", function()
{
   if(rozwiniecie1 == false)
   {
      expand(1); 
   }
   else if(rozwiniecie1 == true)
   {
      fold(1);
   }       
});

document.getElementsByClassName("button")[2].addEventListener("click", function()
{
   if(rozwiniecie2 == false)
   {
      expand(2); 
   }
   else if(rozwiniecie2 == true)
   {
      fold(2);
   }       
});


function expand(indeks1)
{
   if(pozostaly_rozwiniety == false)
   {
      $('.articles').eq(indeks1).animate({height: 2.5*wysokosc});
      $('.button').eq(indeks1).animate({top: 1.5*wysokosc}, function() 
          {
             $('.rozwiniecie').eq(indeks1).show();
             $('.rozwiniecie').eq(indeks1).fadeTo("slow", 1);
             $('.button > a').eq(indeks1).html(mniej);
             rozwiniecie0 = false;
             rozwiniecie1 = false;
             rozwiniecie2 = false;
             if(indeks1 == 0)
             {
                rozwiniecie0 = true;
             }
             else if(indeks1 == 1)
             {
                rozwiniecie1 = true;
             }
             else if(indeks1 == 2)
             {
                rozwiniecie2 = true;
             }
             previous = indeks1;
             pozostaly_rozwiniety = true;
          });
   }
   else if(pozostaly_rozwiniety == true)
   {
      $('.rozwiniecie').eq(previous).fadeTo("slow", 0, function()
      {
         $('.button').eq(previous).css('position', 'relative');
         $('.articles').eq(previous).animate({height: wysokosc});
         $('.button').eq(previous).animate({top: '0%'}, function()
         {
            $('.button > a').eq(previous).delay(4000);
            $('.button > a').eq(previous).html(wiecej);


            $('.articles').eq(indeks1).animate({height: 2.5*wysokosc});
            $('.button').eq(indeks1).animate({top: 1.5*wysokosc}, function() 
                {
                   $('.rozwiniecie').eq(indeks1).show();
                   $('.rozwiniecie').eq(indeks1).fadeTo("slow", 1);
                   $('.button > a').eq(indeks1).html(mniej);
                   rozwiniecie0 = false;
                   rozwiniecie1 = false;
                   rozwiniecie2 = false;
                   if(indeks1 == 0)
                   {
                      rozwiniecie0 = true;
                   }
                   else if(indeks1 == 1)
                   {
                      rozwiniecie1 = true;
                   }
                   else if(indeks1 == 2)
                   {
                      rozwiniecie2 = true;
                   }
                   previous = indeks1;
                   pozostaly_rozwiniety = true;
                });
         });    
      });      
   }             
}

function fold(indeks2)
{
   $('.rozwiniecie').eq(indeks2).fadeTo("slow", 0, function()
   {
      $('.button').eq(indeks2).css('position', 'relative');
      $('.articles').eq(indeks2).animate({height: wysokosc});
      $('.button').eq(indeks2).animate({top: '0%'}, function()
      {
         $('.button > a').eq(indeks2).delay(4000);
         $('.button > a').eq(indeks2).html(wiecej);
         if(indeks2 == 0)
             {
                rozwiniecie0 = false;
             }
             else if(indeks2 == 1)
             {
                rozwiniecie1 = false;
             }
             else if(indeks2 == 2)
             {
                rozwiniecie2 = false;
             }
      });    
   });
   pozostaly_rozwiniety = false;
  
}

