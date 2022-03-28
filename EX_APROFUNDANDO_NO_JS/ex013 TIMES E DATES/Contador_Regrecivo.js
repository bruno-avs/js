
function timer(duration){
    var times = duration, minuts,seconds;    
    setInterval(function(){
        minuts = parseInt(times / 60, 10);
        
        seconds = parseInt(times % 60,10);
        console.log(seconds)

        minuts = minuts < 10? "0" + minuts: minuts;
        seconds = seconds < 10? "0" + seconds: seconds;

        
        if(--times < 0){
         times = duration
        }
    },1000
    
    )
}
timer(60 * 10)
