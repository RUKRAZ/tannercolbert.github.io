function Bigger(){
    document.getElementById("text").style.fontSize = "24pt";
}

function Weight(){
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
}

function Normal(){
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "none";
    document.getElementById("text").style.textTransform = "none";
}

function Capital(){
    document.getElementById("text").style.textTransform = "uppercase";
    var s;
    s = document.getElementById("text").value;
    for(var i = 0; i < s.length; i++){
        if(s.charAt(i) == "."){
            var parts1 = s.split(".");
            s = parts1.join("-Moo");
        }
        if(s.charAt(i) == "?"){
            var parts2 = s.split("?");
            s = parts2.join("-Moo");
        }
        if(s.charAt(i) == "!"){
            var parts3 = s.split("!");
            s = parts3.join("-Moo");
        }
    }
    document.getElementById("text").value = s;
}