function expandText (){
var shortText = "Go to Product page for more products"
var text = "Go to Product page for more product pages on websites that sell furniture."
var para =  document.getElementById('para');
var link = document.getElementById('link');

if(link.innerHTML === "See more"){
    para.innerHTML = text
    link.innerHTML = "See less"
}
else{
    para.innerHTML = shortText
    link.innerHTML = "See more"
}
}
function showAlert() {
    const furniture = document.getElementById("furniture").value;

    if (furniture) {
        alert(`You selected: ${furniture}`);
    }
}
