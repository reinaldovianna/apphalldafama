$(function() {


    function videoPlayerOff(){
                videosp = $('#corpo').find('.player');

                    videosp.each(function(idx, el)
                     {
                        elconts   = $(el).contents(),
                        elle      = elconts.length,
                        elifr     = '',
                        elimgm = '';
             
                        for(var i = 0; i < elle; i++){
                            console.log(elconts[i]);
                            console.log(elconts[i].nodeType);
                          if(elconts[i].nodeType == 1){
                            elimgm = '<!--'+ elconts[i].outerHTML+'-->';
                          }
                          if(elconts[i].nodeType == 8){
                                elifr = elconts[i].textContent;
                          }
                        }
                        
                        novideoplayer = elimgm+'<br/>'+ elifr;

                        $(el).html(novideoplayer);
                        $(el).removeClass("player");
              });
    } 

    var videos  = $(".video");
    videos.on("click", function(){

        videoPlayerOff();

                    var elm = $(this),
                        conts   = elm.contents(),
                        le      = conts.length,
                        ifr     = '',
                        imgm = '';
         
            for(var i = 0; i < le; i++){
                        console.log(conts[i]);
                        console.log(conts[i].nodeType);
                      if(conts[i].nodeType == 1){
                        imgm = '<!--'+ conts[i].outerHTML+'-->';
                      }
                      if(conts[i].nodeType == 8){
                            ifr = conts[i].textContent;
                      }
            }
                    
            videoplayer = imgm+'<br/>'+ifr;

            elm.addClass("player").html(videoplayer);
    });

  });
