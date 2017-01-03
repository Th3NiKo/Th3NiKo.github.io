
//MAIN SETTINGS
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

mainId = 0;

var tablica = [];

var addButton = document.getElementById("add-new");
addButton.addEventListener("click", addElement, true);


var deleteButton = document.getElementById("delete-all");
deleteButton.addEventListener("click", deleteElements, true);



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
		    var data = document.createElement("h3");
		    var tekst = document.createElement("p");
		   // var deleteTekst = document.createElement("");
		    var czekbox = document.createElement("input");
		    //lix.innerHTML = tablica[index].data + " " + tablica[index].tekst + " " + "<div class=\"delete\">  Delete:  <input id='" +  tablica[index].idObiektu + "' type=\"checkbox\"></div>";
		    //lix.innerHTML = `${tablica[index].data} ${tablica[index].tekst}`;

		    data.innerHTML = tablica[index].data;
		    lix.appendChild(data);

		    tekst.innerHTML = tablica[index].tekst;
		    lix.appendChild(tekst);

		   // deleteTekst.innerHTML = "Delete: ";
		    //lix.appendChild(deleteTekst);
			czekbox.id = index;
		    czekbox.addEventListener("click", changeChecked);
		    czekbox.type = "checkbox";
		    lix.appendChild(czekbox);

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
		var dateDay = new Date();
		var n = weekday[dateDay.getDay()];
	    var date = new Date().toJSON().slice(0,10);
		var obiekt = {
			checkedd: false,
			tekst: "<p class=\"hyphenate\">" + tekstInput.value + "</p>" , 
			data: n + ", "+ date ,


		}
		mainId++;
		tablica.push(obiekt);
		render();
	}

}

function deleteElements()
{
	var index;
	for(index = 0; index < tablica.length; index++)
	{
		if(tablica[index].checkedd == true)
		{
			 tablica.splice(index,1);	
			 index--;
		}
	}
	render();
}


function changeChecked(event)
{
	//var temp = getElementById(indexx + "");
	//console.log(this.id,event);
	tablica[this.id].checkedd = !tablica[this.id].checkedd;

}
