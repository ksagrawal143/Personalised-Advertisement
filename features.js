function getQueryVariable(variable) {
  let query = window.location.search.substring(1);
  console.log(query);
  let vars = query.split('&');
  console.log(vars);
        document.getElementsByName("age")[0].value=vars[0].split("=")[1];
        document.getElementsByName("gender")[0].value=vars[1].split("=")[1];
        document.getElementById("attributes").innerHTML=vars[2].split("=")[1];
  // for (let i = 0; i < vars.length-1; i++) {
  //     let pair = vars[i].split('=');
  //     console.log(pair)
  //     if(i===0){
  //       document.getElementsByName("age")[0].value=pair[i];
  //     }
  //     else if(i===1){
  //       document.getElementsByName("gender")[0].value.innerText=pair[i];
  //     }
  //     else{
  //       document.getElementsByName("attributes")[0].value=pair[i];
  //     }
  //     if (decodeURIComponent(pair[0]) == variable) {
  //         return decodeURIComponent(pair[1]);
  //     }
  // }
  // console.log('Query variable %s not found', variable);
}
function refresh(){
  window.location.href="http://localhost:3000/home";
}
var images = [
  "Hair_Salon",
  "Sunglasses",
  "Beard",
  "Gym",
  "Coffee"
];

function refreshAd() {
  var size = images.length
  var x = Math.floor(size * Math.random())
  document.getElementById('image').src = "./Assets/"+images[x]+".jpg";
  document.getElementById("attribute").innerHTML=images[x];
  getQueryVariable();
}
