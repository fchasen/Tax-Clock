Raphael.fn.clock = function (cx, cy, r) {
    var paper = this,
        chart = this.set(),
        handHour,
        handMin,
        handSec,
        midSec;
        
    Raphael.fn.clock.tick = function () {
	        var t = new Date( (new Date()).getTime() - (offset * 1000) );
	        var hour   = t.getHours()
          var minute = t.getMinutes()
          var second = t.getSeconds()
	     
          handSec.animate({rotation: (second * 6)  + " "+(402+right)+" "+(402+top)}, 1, "bounce");
          handMin.animate({rotation: (minute * 6)  + " "+(402+right)+" "+(402+top)}, 1, "bounce");
          handHour.animate({rotation: ((hour * 30) + (minute * 0.5))  + " "+(402+right)+" "+(402+top)}, 1, "bounce");
	        
    	}
	    
	    window.setInterval("Raphael.fn.clock.tick()", 1000);
    	
    	chart.push(
      
    	 c = paper.circle(402+ right, 402+top, 350).attr({fill:"#dedddb", stroke:"#676767",'stroke-width':8}),
    	 n12 = paper.text(403+ right,80+top,'12').attr({"font-size":"36px", "font-family":"Crimson Text"}),
    	 //n1 = r.text(130,49,'1').attr({"font-size":"26px"});
    	 //n2 = r.text(152,72,'2');
    	 n3 = paper.text(732+ right,402+top,'3').attr({"font-size":"26px", "font-family":"Crimson Text"}),
    	 //n4 = r.text(152,130,'4');
    	 //n5 = r.text(130,152,'5');
    	 n6 = paper.text(402+ right,732+top,'6').attr({"font-size":"26px", "font-family":"Crimson Text"}),
    	 //n7 = r.text(70,152,'7');
    	 //n8 = r.text(48,130,'8');
    	 n9 = paper.text(75+ right,402+top,'9').attr({"font-size":"26px", "font-family":"Crimson Text"}),
    	 //n10 = r.text(48,72,'10');
    	 //n11 = r.text(70,49,'11');        
    	 mid = paper.circle(402+ right, 402+top, 6).attr({stroke: "none", fill:"#000"}),
    	 pa = "M"+(402+right)+" "+(432+top)+"L"+(402+right)+" ",
       
    	 handHour = paper.path(pa+220).attr({'stroke-width':8,stroke:"#252628"}),
    	 handMin = paper.path(pa+195).attr({'stroke-width':6,stroke:"#252628"}),
       midSec = paper.circle(402+right, 402+top, 12).attr({stroke: "none", fill:"#252628"}),
    	 handSec = paper.path(pa+185).attr({'stroke-width':4,stroke:"#7a2221"}),
    	 
    	 midSec = paper.circle(402+right, 402+top, 7).attr({stroke: "none", fill:"#7a2221"})
    	  
    	  
    	); 
    	for (var i = 0; i < 60; i++) {
    	    var trad = 1;
    	    var ccol = 676767;
    	    if ((i%5) == 0 ){
    	      trad = 2;
    	      ccol = 252628;
    	    }
          chart.push(
            paper.circle( 
                                 (345  * Math.cos(i / 60 * 2 * Math.PI) + 452), 
                                 (345  * Math.sin(i / 60 * 2 * Math.PI) + 502),
                                 trad
                               ).attr({stroke: "none", fill:"#"+ccol}));
        }
          
     	chart.push( paper.circle(402+ right, 402+top, 350).attr({fill:"none", stroke:"#a7a7a7",'stroke-width':6}) );
    
    return chart;
};

Raphael.fn.timeline = function (width, ticks) {
    var paper = this,
        chart = this.set(),
        ticks = ticks;
	    pa = "M"+(3)+" "+(2)+"L"+(width+5)+" "+(2);
    	chart.push(    	 
    	 paper.path(pa).attr({'stroke-width':4,stroke:"#e4e0da"})
    	 
    	 //paper.path("M3 0L3 30").attr({'stroke-width':2,stroke:"#e4e0da"}),
    	 //paper.path("M404 0L404 30").attr({'stroke-width':2,stroke:"#e4e0da"})
    	 
    	  
    	); 
    	
     // for (var i = 0; i < 31; i++) {
     //             var pa = "M"+(i * 13.533333)+" "+(0)+"L"+(i * 13.5333333)+" "+(20);
     //             
     //             var trad = 1;
     //             var ccol = 676767;
     //             if ((i%5) == 0 ){
     //               trad = 2;
     //               ccol = 252628;
     //             }
     //             chart.push(
     //               //paper.path(pa).attr({'stroke-width':1,stroke:"#e4e0da"})
     //               paper.circle( 5+ i * 13.433333, 6, 3).attr({stroke: "none",fill:"#e4e0da"})
     //             );
     //         }
                  
              //chart.push( paper.circle(402+ right, 402+top, 350).attr({fill:"none", stroke:"#a7a7a7",'stroke-width':6}) );
    
    return chart;
};