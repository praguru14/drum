// function clicked(){
    
   
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
// }

var f = document.querySelector(".title").addEventListener("click",function(){
    var av = new Audio("sounds/av.mp3");
                av.play();
                
   var s= (this.innerHTML="Avengers assemble!!!");

    
});

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // this.style.color= "white";
        var btn = this.innerHTML;
        makeS(btn);
        anim(btn);
    });    
}


document.addEventListener("keydown",function(event)
{
makeS(event.key);
 anim(event.key);

});


function makeS(key){
    switch (key) {
        case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
            break;
        case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
            break;
        case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
                crash.play();
            break;
        case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                    kick.play();
            break;
        // case "f":
        //     var av = new Audio("sounds/av.mp3");
        //         av.play();
        // case "j":
        //         var audio = new Audio("sounds/crash.mp3");
        //             audio.play();
        break;
        default:
            console.log("wrong input");
            break;
    }
}

function anim(ckey){
var active = document.querySelector("."+ckey);
active.classList.add("pressed");
setTimeout(function(){
active.classList.remove("pressed");
},100);
}
// document.querySelectorAll("button")[0].addEventListener("click",clicked);
// document.querySelectorAll("button")[1].addEventListener("click",clicked);
// document.querySelectorAll("button")[2].addEventListener("click",clicked);
// document.querySelectorAll("button")[3].addEventListener("click",clicked);
// document.querySelectorAll("button")[4].addEventListener("click",clicked);
// document.querySelectorAll("button")[5].addEventListener("click",clicked);
// document.querySelectorAll("button")[6].addEventListener("click",clicked);