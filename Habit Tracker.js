//test
function btnClick() {
    var x = document.getElementById("mytable").getElementsByTagName("td");
    x[0].innerHTML = "Completed";
    x[0].style.backgroundColor = "yellow";  
    return 1;          
}

module.exports={ btnClick };
		
function myFunction(x) {
    alert("Row index is: " + x.rowIndex);
    x[0].innerHTML = "Completed";
    x[0].style.backgroundColor = "yellow";    
    return 1; 
  }
	 
module.exports= { myFunction };
