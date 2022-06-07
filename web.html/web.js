var menubtn = Document.getElementById("menubtn")
var sidenav = Document.getElementById("sidenav")
var menu = Document.getElementById("menu")
menubtn.onclick = function(){
    if(sidenav.style.right == "-250px"){
        sidenav.style.right = "0";
    }
    else{
        sidenav.style.right = "-250px";
    }
} /*<div class="features-desc">
<div class="feature-icon">
    <img src="leaf.png"height="30px"width="30px">
</div>
<div class="feature-text">
    <p>Gardening adds years to your life and life to your years...we have healthy and green plants</p>
</div>
</div>*/