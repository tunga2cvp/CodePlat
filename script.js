/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
function myFunction(){
    var language = document.getElementById("language-selector").value;
    var editorNumber = document.getElementsByClassName("editor").length;
    var i;
    for ( i=0 ; i< editorNumber; i++){
        document.getElementsByClassName("editor")[i].style.display = "none";
    }
    switch(language){
        case "Web Development":
            document.getElementById("html-editor").style.display = "inline-block";
            document.getElementById("css-editor").style.display = "inline-block";
            document.getElementById("js-editor").style.display = "inline-block";
            break;
        case "C": 
            document.getElementById("c-editor").style.display = "inline-block";
            break;
        case "Python":
            document.getElementById("python-editor").style.display = "inline-block";
            break;
        case "Java":
            document.getElementById("java-editor").style.display = "inline-block";
            break;
        default:
    }
}