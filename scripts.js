

var tablica = [];

var addButton = document.getElementById("add-new");
addButton.addEventListener("click", addElement, true);


//var deleteButton = document.getElementById("delete-all");
//deleteButton.addEventListener("click", deleteElements, true);

//Drawing things on list
function render()
{
	// Clearing
	var parent = document.getElementById("lista");
	while(parent.hasChildNodes())
	{
		parent.removeChild(parent.lastChild);
	}



	//Rendering
	var index;
	for(index = tablica.length - 1; index >= 0; --index)
	{
		    var lix = document.createElement("li");
			
		    lix.innerHTML = tablica[index].data + " " + tablica[index].tekst + " " + "<div class=\"delete\"> Delete:  <input type=\"checkbox\"></div>";
			parent.appendChild(lix);
	}
	
}


//Adding single element to list 
function addElement()
{
	var obiekt = {};
	var tekstInput = document.getElementById("textinput");
	if(tekstInput.value != "")
	{
	    var date = new Date().toJSON().slice(0,10);
		var obiekt = {
			tekst: "<p>" + tekstInput.value + "</p>" , 
			data: "<h3>" + date +"</h3>"
		}


	
		tablica.push(obiekt);
		render();
	}

}

