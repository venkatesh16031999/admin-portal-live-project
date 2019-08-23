const estimateinfo=document.getElementById("estimateinfo");
const Customerinfo=document.getElementById("Customerinfo");
const vendorinfo=document.getElementById("vendorinfo");
const newvendorinfo=document.getElementById("newvendorinfo");
const servicetype=document.getElementById("servicetype");
const itemsinfo=document.getElementById("itemsinfo");
const transactiondetails=document.getElementById("transactiondetails");



const but1=()=>{
    estimateinfo.style.display="block";
    Customerinfo.style.display="none"
    vendorinfo.style.display="none"
    newvendorinfo.style.display="none"
    transactiondetails.style.display="none"
    servicetype.style.display="none"
    itemsinfo.style.display="none"
}

const but2=()=>{
    estimateinfo.style.display="none";
    Customerinfo.style.display="block"
    vendorinfo.style.display="none"
    newvendorinfo.style.display="none"
    transactiondetails.style.display="none"
    servicetype.style.display="none"
    itemsinfo.style.display="none"
}

const but3=()=>{
    estimateinfo.style.display="none";
    Customerinfo.style.display="none"
    vendorinfo.style.display="block"
    newvendorinfo.style.display="none"
    transactiondetails.style.display="none"
    servicetype.style.display="none"
    itemsinfo.style.display="none"
}

const but4=()=>{
    estimateinfo.style.display="none";
    Customerinfo.style.display="none"
    vendorinfo.style.display="none"
    newvendorinfo.style.display="block"
    transactiondetails.style.display="none"
    servicetype.style.display="none"
    itemsinfo.style.display="none"
}

const but5=()=>{
    estimateinfo.style.display="none";
    Customerinfo.style.display="none"
    vendorinfo.style.display="none"
    newvendorinfo.style.display="none"
    transactiondetails.style.display="none"
    servicetype.style.display="block"
    itemsinfo.style.display="none"

}

const but6=()=>{
  estimateinfo.style.display="none";
  Customerinfo.style.display="none"
  vendorinfo.style.display="none"
  newvendorinfo.style.display="none"
  transactiondetails.style.display="none"
  servicetype.style.display="none"
  itemsinfo.style.display="block"
}

const but7=()=>{
    estimateinfo.style.display="none";
    Customerinfo.style.display="none"
    vendorinfo.style.display="none"
    newvendorinfo.style.display="none"
    transactiondetails.style.display="block"
    servicetype.style.display="none"
    itemsinfo.style.display="none"
}



// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}




//model

    
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementById("close");
    btn.onclick = function() {
      modal.style.display = "block";
    }
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    

    var modal1 = document.getElementById("myModal1");
    var btn1 = document.getElementById("myBtn1");
    var span1 = document.getElementById("close1");
    btn1.onclick = function() {
      modal1.style.display = "block";
    }
    span1.onclick = function() {
      modal1.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal1) {
        modal1.style.display = "none";
      }
    }

    var modal2 = document.getElementById("myModal2");
    var btn2 = document.getElementById("myBtn2");
    var span2 = document.getElementById("close2");
    btn2.onclick = function() {
      modal2.style.display = "block";
    }
    span2.onclick = function() {
      modal2.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
    }
    
    var modal3 = document.getElementById("myModal3");
    var btn3 = document.getElementById("myBtn3");
    var span3 = document.getElementById("close3");
    btn3.onclick = function() {
      modal3.style.display = "block";
    }
    span3.onclick = function() {
      modal3.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal3) {
        modal3.style.display = "none";
      }
    }

    var modal4 = document.getElementById("myModal4");
    var btn4 = document.getElementById("myBtn4");
    var span4 = document.getElementById("close4");
    btn4.onclick = function() {
      modal4.style.display = "block";
    }
    span4.onclick = function() {
      modal4.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal4) {
        modal4.style.display = "none";
      }
    }
