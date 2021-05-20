var salomonShoe= new Object(); 
salomonShoe.price= 150;
salomonShoe.weight= "1lb. 9.6oz.";
salomonShoe.waterproof = true;
salomonShoe.size= (5,6,7,8,9,10,11,12);

function display1(){
    var place= document.getElementById("submit1");
    for(value in salomonShoe) {
        place.innerHTML = "Brand: " + salomonShoe + "<br>" +
        "Price: " + salomonShoe.price + "<br>" +
        "Weight: " + salomonShoe.weight + "<br>" +
        "Waterproof: " + salomonShoe.waterproof + "<br>" +
        "Size: " + salomonShoe.size;
    }
}
    
var hokaShoe= new Object(); 
hokaShoe.price= 145;
hokaShoe.weight= "1lb. 2.4oz.";
hokaShoe.waterproof = true;
hokaShoe.size= (5,6,7,8,9,10,11,12);

function display2(){
        var place= document.getElementById("submit2");
        for(value in hokaShoe) {
            place.innerHTML = "Brand: " + hokaShoe + "<br>" +
            "Price: " + hokaShoe.price + "<br>" +
            "Weight: " + salomonShoe.weight + "<br>" +
            "Waterproof: " + hokaShoe.waterproof + "<br>" +
            "Size: " + hokaShoe.size;
        }
    }
    var sauconyShoe= new Object(); 
    sauconyShoe.price= 120;
    sauconyShoe.weight= "1lb. 3oz.";
    sauconyShoe.waterproof = true;
    sauconyShoe.size= (5,6,7,8,9,10,11,12);


    function display3(){
        var place= document.getElementById("submit3");
        for(value in sauconyShoe) {
            place.innerHTML = "Brand: " + sauconyShoe + "<br>" +
            "Price: " + sauconyShoe.price + "<br>" +
            "Weight: " + sauconyShoe.weight + "<br>" +
            "Waterproof: " + sauconyShoe.waterproof + "<br>" +
            "Size: " + sauconyShoe.size;
        }
    }

    function clear1(){

        document.getElementById("submit1").innerText= "See details"; 
        
    }
    function clear2(){

        document.getElementById("submit2").innerText= "See details"; 
        
    }
    function clear3(){

        document.getElementById("submit3").innerText= "See details"; 
        
    }




// function mySalomon() {
//     console.log("test");
//     document.write(salomonShoe.price);
// }
// function myHoka(){
//     console.log("test");
//     document.write(hokaShoe.price);
// }
// function mySaucony(){
//     document.write(sauconyShoe.price);
// }







// function video(title, uploader, seconds){

// }

    
//         title: '',
//         uploader: '',
//         seconds: ''


// watch();
// console.log("You watched all " + video.seconds + "seconds of " + video.title"!");