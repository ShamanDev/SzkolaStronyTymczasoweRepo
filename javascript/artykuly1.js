var previous;
var i;
var a;
var rozwiniecie = false;


var mniej = document.getElementsByClassName('mniej');
var text = document.getElementsByClassName('rozwiniecie');

for(i=0; i<5; i+=1)
{
  mniej[i].style.visibility = "hidden";
  text[i].style.visibility = "hidden";
}


function expand(a)
{
  if(rozwiniecie == false)
  {
    if(a=='0')
    {
      document.getElementsByClassName('articles')[0].style.height = "320px";
      document.getElementsByClassName('wiecej')[0].style.visibility = "hidden";
      mniej[0].style.visibility = "visible";
      text[0].style.visibility = "visible";
      previous = 0;
      rozwiniecie = true;
    }
    if(a=='1')
    {
     document.getElementsByClassName('articles')[1].style.height = "320px";
     document.getElementsByClassName('wiecej')[1].style.visibility = "hidden";
     mniej[1].style.visibility = "visible";
     text[1].style.visibility = "visible";
     previous = 1;
     rozwiniecie = true;
    }
    if(a=='2')
    {
      document.getElementsByClassName('articles')[2].style.height = "320px";
      document.getElementsByClassName('wiecej')[2].style.visibility = "hidden";
      mniej[2].style.visibility = "visible";
      text[2].style.visibility = "visible";
      previous = 2;
      rozwiniecie = true;
    }
  }
  else if(rozwiniecie == true)
  {
    if(previous == 0)
    {
      document.getElementsByClassName('articles')[0].style.height = "130px";
      document.getElementsByClassName('wiecej')[0].style.visibility = "visible";
      mniej[0].style.visibility = "hidden";
      text[0].style.visibility = "hidden";
    }
    if(previous == 1)
    {
      document.getElementsByClassName('articles')[1].style.height = "130px";
      document.getElementsByClassName('wiecej')[1].style.visibility = "visible";
      mniej[1].style.visibility = "hidden";
      text[1].style.visibility = "hidden";
    }
    if(previous == 2)
    {
      document.getElementsByClassName('articles')[2].style.height = "130px";
      document.getElementsByClassName('wiecej')[2].style.visibility = "visible";
      mniej[2].style.visibility = "hidden";
      text[2].style.visibility = "hidden";
    }
    if(a=='0')
    {
      document.getElementsByClassName('articles')[0].style.height = "320px";
      document.getElementsByClassName('wiecej')[0].style.visibility = "hidden";
      mniej[0].style.visibility = "visible";
      text[0].style.visibility = "visible";
      previous = 0;
      rozwiniecie = true;
    }
    if(a=='1')
    {
     document.getElementsByClassName('articles')[1].style.height = "320px";
     document.getElementsByClassName('wiecej')[1].style.visibility = "hidden";
     mniej[1].style.visibility = "visible";
     text[1].style.visibility = "visible";
     previous = 1;
     rozwiniecie = true;
    }
    if(a=='2')
    {
      document.getElementsByClassName('articles')[2].style.height = "320px";
      document.getElementsByClassName('wiecej')[2].style.visibility = "hidden";
      mniej[2].style.visibility = "visible";
      text[2].style.visibility = "visible";
      previous = 2;
      rozwiniecie = true;
    }

  }
    
}

function fold(a)
{
  if(a=='0')
  {
    document.getElementsByClassName('articles')[0].style.height = "130px";
    document.getElementsByClassName('wiecej')[0].style.visibility = "visible";
    mniej[0].style.visibility = "hidden";
    text[0].style.visibility = "hidden";
    rozwiniecie
  }
  if(a=='1')
  {
    document.getElementsByClassName('articles')[1].style.height = "130px";
    document.getElementsByClassName('wiecej')[1].style.visibility = "visible";
    mniej[1].style.visibility = "hidden";
    text[1].style.visibility = "hidden";
  }
  if(a=='2')
  {
    document.getElementsByClassName('articles')[2].style.height = "130px";
    document.getElementsByClassName('wiecej')[2].style.visibility = "visible";
    mniej[2].style.visibility = "hidden";
    text[2].style.visibility = "hidden";
  }
}