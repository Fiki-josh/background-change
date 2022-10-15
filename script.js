// function changeColor() {
//     var hex_colors= ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
//     var hex_colorrs= ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
//     var hexcode= '';
//     var hexnum= '';

//     for(var i=0; i<6; i++){
//         var random_code = Math.floor(Math.random() * hex_colors.length);

//         hexcode += hex_colors[random_code]
//     }
//     for(var i=0; i<6; i++){
//         var random_rode = Math.floor(Math.random() * hex_colorrs.length);

//         hexnum += hex_colorrs[random_rode]
//     }
//     document.getElementById("hex-code").innerHTML=hexcode +", "+ "#"+hexnum;
//     document.getElementsByTagName("body")[0].style.background= "linear-gradient(to right, " + "#"+hexcode + ", " +"#"+ hexnum + ")";
// }

var change_color = document.getElementById("favcolor");
var chang_color = document.getElementById("facolor");

change_color.addEventListener("input",function(){
    //alert(change_color.value);
    document.getElementById("hex-code").innerHTML=change_color.value +", "+chang_color.value;
    document.getElementsByTagName("body")[0].style.background= "linear-gradient(to right, " +change_color.value + ", "+ chang_color.value + ")";
});
chang_color.addEventListener("input",function(){
    //alert(chang_color.value);
    document.getElementById("hex-code").innerHTML=change_color.value +", "+chang_color.value;
    document.getElementsByTagName("body")[0].style.background= "linear-gradient(to right, " +change_color.value + ", "+ chang_color.value + ")";
});
