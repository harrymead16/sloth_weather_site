//////weather api key d6befcbdf0064ed0abf151738163108//

$(document).ready(function (){
    
    console.log("ready");
    
    console.log($('#spritebox'));

    function start_sprite(){
        
        console.log("sprite starting");
    
        console.log($('#spritebox'));
        
        $('#spritebox')
        .show()
        .css({
            "background-image" : 'url("bnsteve1.png")',
            "background-position": ' 0 0'})
        .sprite({
            start_at_frame: 1, 
            fps: 1,
            no_of_frames: 5, 
            play_frames: 200,
            on_first_frame: function (obj){
                console.log("first frame");
            }
        });
    }
    
    var spritesheet = new Image();
    spritesheet.addEventListener('load', start_sprite);
    spritesheet.src = "bnsteve1.png";
    

//weather api//
    $("#search").click(function(){

        var searchQuery = $('#searchbartextinput').val();
        var body = $('body');
        var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + searchQuery + '&APPID=367b7f4b1ce9b8cbe3b504dae76bff97';
        
        //Send the request
        $.get(weatherUrl).then(function(response) {
            
            if(response.cod == 200) {
                
                switch(response.weather[0].main) {
                    case 'Rain':
                        console.log('Rain');
                        body.css({"background-color":"red"});
                        break;
                    case 'Drizzle': 
                        console.log('Drizzle');
                        body.css({"background-color":"grey"});
                        break;
                    case 'Clear':
                        console.log('Sun');
                        body.css({"background-color":"yellow"});
                        break;
                    case 'Clouds':
                        console.log('Clouds');
                        body.css({"background-color":"blue"});
                        break;
                }
                
                
            } else {
                alert(response.message);
                console.log(response);
            }
            
        });


    });
});




