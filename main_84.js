pizzaListArray = ["Pizza de Calabresa",
                  "Pizza de Peperonni",
                  "Pizza de Queijo",
                  "Pizza Quatro Queijos",
                  "Pizza Portuguesa",
                  "Pizza Extravaganza",
                  "Pizza de Kitkat"];

function getmenu() {    
        
        var htmldata = "";
        menuListArray.sort();
        
        for(var i=0;i <menuListArray.length;i++){
                htmldata=htmldata+ menuListArray[i] + '<br>'
        }
        document.getElementById("displayMenu").innerHTML = htmldata;
        
	}
function addItem() {
        var htmldata;
        var imgtags='<img id"im1" src="pizza.png"/>'
        var item=document.getElementById("addItem").value;
        menuListArray.sort();
        htmldata=""
        for(var i=0;i<menuListArray.length;i++){
                htmldata= htmmldata + imgtags + menuListArray[i]+'<br>';
        }
        document.getElementById("displayAddedMenu").innerHTML = htmldata;
}
function addTop() {
        var item=document.getElementById("addItem").value;
        menuListArray.push(item)
        addItem();
}