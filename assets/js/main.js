var body = document.getElementById('body');
var lightMode = true ;
function switchMode(){

    if(lightMode){
        lightMode = false;
        body.classList.add("darkmode");
    }else{
        lightMode = true;
        body.classList.remove("darkmode");
    }
   
}