
setInterval(changePic, 3000);

var picArr = ["images/250X110668568400.jpg", "images/paz_250x110059890678.jpg", "images/banner_atar.jpg"];
var i = 0;

function changePic() {
    var img = document.getElementById("changingPic");
    img.setAttribute("src", picArr[i % 3]);
    i++;
}