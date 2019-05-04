var Links = {
  setColor: function(color)
  {
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i<alist.length)
    // {
    //   alist[i].style.color= color;
    //   i++;
    // }
    $('a').css('color',color);
  }
}
var Body = {
  setColor: function(color)
  {
    document.querySelector('body').style.color =color ;
  },
  setBackgroundColor: function(color)
  {
    document.querySelector('body').style.backgroundColor = color ;

  }
}

function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night')
  {
    Body.setBackgroundColor('black');
    self.value = 'day';
    Body.setColor('white');

    Links.setColor('white');
  }
  else
  {
    Body.setBackgroundColor('white');
    self.value = 'night';
    Body.setColor('black');
    Links.setColor('blue');
  }
}
