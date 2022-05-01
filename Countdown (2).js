
function Count() // this is the function which of course is the start of everything
{
    var currTime = 10;
    
    // currtime is the current time
    for (var i = 1; i <= 11; i++) 
        {
             if (i < 5)
            setTimeout(function ()
            { // sound from quicksounds.com under the name "Rocket Launching Countdown" I DO NOT OWN THIS
                 playTestLaunch(); {
                mySound = new sound("testlaunch.mp3")
                mySound.play();
                
                }
                document.getElementById("CountdownDisplay").innerHTML = " time: " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);

            

            else if  (i != 11)
            setTimeout(function ()
            {
                document.getElementById("CountdownDisplay").innerHTML = "HALF WAY TILL LAUNCH: " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
          
// if and else if makes the code know that IF or "else" the equation happens the following fuction will take place. in this case current time and wording changes
// the alert tells the employee the launch was successful 
              else if  (i != 0)
            setTimeout(function ()
            {  alert("Great job! Launch successful")
                document.getElementById("CountdownDisplay").innerHTML = "BLAST OFF ! : " + currTime;
                currTime = currTime - 1;
                
            }, 1000 * i);
         



        }  
    }
        function start() {
            document.getElementById("greenlight").disabled = true;
            document.getElementById("redlght").disabled = false;
        }
            
        function stop() {
           document.getElementById("greenlight").disabled = false;
          document.getElementById("redlight").disabled = true;
        }
        
        function playTestLaunch() {
        mySound = new sound("testlaunch.mp3")
        mySound.play();
        
        }
        
        function sound(src) {  
        this.sound = document.createElement("audio");
        
        this.sound.src = src;
        
        this.play = function() {
            this.sound.play();
        }
        
        
        }






