x=0
y=0
draw_cricle=""
draw_rcet=""
var SpeechRecognition=window.webkitSpeechRecognition
var recognition=new SpeechRecognition()
function start(){
    document.getElementById("status").innerHTML="System Is Listening Please Speak!"
recognition.start()
}
recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript
    document.getElementById("status").innerHTML="Speech Has Been Recognized As "+content
    if (content=="circle") {
        x=Math.floor(math.random()*900)
        y=Math.floor(math.random()*500)
        document.getElementById("status").innerHTML="Drawing Circle....."
        draw_cricle="set"
    }    
    if (content=="rectangle") {
        x=Math.floor(math.random()*900)
        y=Math.floor(math.random()*500)
        document.getElementById("status").innerHTML="Drawing Rectangle....."
        draw_rcet="set"
    }    
    }
    function setup(){
        canvas= createCanvas(900,500)
    }
    function draw(){
        if (draw_cricle=="set") {
            radius=Math.floor(Math.random()*100)
            circle(x,y,radius)
            document.getElementById("status").innerHTML="Circle is Drawn"
            draw_cricle=""
        }

        if (draw_rcet=="set") {
            rect(x,y,50,70)
            document.getElementById("status").innerHTML="Rectangle is Drawn"
            draw_rcet=""
        }
    }