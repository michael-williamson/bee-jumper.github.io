'use strict'


function jump(){
  
  $(".gerald").animate({
    "left":'+=47',
    "top":'-20',
  })
  .delay(100).animate({
    "top":"34",
    "left":'+=47'
  });
  
  }

//end of funct.

  function carRide(){
    
    let width = "+=" + $(document).width();
    
    
    $(".bee").animate({
    right: width
  }, 2000, function() {
       $(".bee").css({
      "right":"0"
    });

  });
  }


let intervalID;

$("#stop").click(function(){

  clearInterval(intervalID);

});

$("#next").click(function(){
	jump(); 
});


$("#start").click(function(){
    carRide(); 
  
  
let l = setInterval(function(){
      collide = collision($bee,$gerald);
      if(collide){
        dimGerald(); 
        g.lives(); 
        $(".numberLives").text(g.getLives());
          clearInterval(l);
      }
    setInterval(function(){
      clearInterval(l);
    },4000);
       },100);

 

intervalID = setInterval(function(){
    
carRide();

let l = setInterval(function(){
      collide = collision($bee,$gerald);
      if(collide){
        dimGerald(); 
        g.lives(); 
        
        $(".numberLives").text(g.getLives());
        clearInterval(l);
      }
          if(0 >= g.getLives()){
           $("main").append("<h1 class='go'>Game Over</h1>")
           .append("<button class='try-again'>Try Again</button>");
            $(".gerald").addClass("rotate-gerald");
                    clearInterval(intervalID);

        }
   
    setInterval(function(){
      clearInterval(l);
    },4000);
       },100);
   } , 4000);
      
});

let $bee = $(".bee");
let $gerald = $(".gerald");


 function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2){ return false;}
    else {
      return true;
    }
    }


function dimGerald (){
    $(".gerald").animate({
      "opacity":".2"
    }, 100)
    .delay(100).animate({
      "opacity":"1"
    });
}
 
let collide;

function Counter(){
    let geraldLives = 4; 
  
    this.lives =  function (){
        geraldLives --;
    }
    this.getLives = function(){
      return geraldLives; 
    }
}

let g = new Counter(); 

$(document).keydown(function(event) {
  
		if (event.which === 38) {
			jump(); 
    }	
});

$("main").on("click","button.try-again",function(){

 location.reload(); 
  
});




