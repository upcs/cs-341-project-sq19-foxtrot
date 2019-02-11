function btnClick() {
    var x = document.getElementById("mytable").getElementsByTagName("td");
    x[0].innerHTML = "Completed";
    x[0].style.backgroundColor = "yellow";            
}
function myFunction(x) {
    alert("Row index is: " + x.rowIndex);
    x[0].innerHTML = "Completed";
    x[0].style.backgroundColor = "yellow";     
  }