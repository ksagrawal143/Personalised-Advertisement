function getQueryVariable(variable) {
  let query = window.location.search.substring(1);
  let vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split('=');
      if (decodeURIComponent(pair[0]) == variable) {
          return decodeURIComponent(pair[1]);
      }
  }
  console.log('Query variable %s not found', variable);
}
function refresh(){
  window.location.href="/home";
}
var images = [
  "Hair_Salon",
  "Sunglasses",
];

function refreshAd() {
  var size = images.length
  var x = Math.floor(size * Math.random())
  document.getElementById('image').src = "./Assets/"+images[x]+".jpg";
  document.getElementById("attribute").innerHTML=images[x]
}
