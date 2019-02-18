const table = document.getElementById("table");

if (window.XMLHttpRequest) {
	xmlhttp = new XMLHttpRequest();
} else {
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

const chargeData = (xmlhttp) => {
	xmlhttp.open("GET", "inventaire.xml", false);
	xmlhttp.send();
	xmlDoc = xmlhttp.responseXML;

	let booksList = xmlDoc.getElementsByTagName("LIVRE");

	for (i = 0; i < booksList.length; i++) {
		let row = document.createElement("tr");
		let firstCell = document.createElement("td");
		firstCell.innerHTML = xmlDoc.getElementsByTagName("TITRE")[i].childNodes[0].nodeValue;
		row.append(firstCell);
		let secondCell = document.createElement("td");
		secondCell.innerHTML = xmlDoc.getElementsByTagName("AUTEUR")[i].childNodes[0].nodeValue;
		row.append(secondCell);
		let thirdCell = document.createElement("td");
		thirdCell.innerHTML = xmlDoc.getElementsByTagName("RELIURE")[i].childNodes[0].nodeValue;
		row.append(thirdCell);
		let fourthCell = document.createElement("td");
		fourthCell.innerHTML = xmlDoc.getElementsByTagName("PAGE")[i].childNodes[0].nodeValue;
		row.append(fourthCell);
		let fifthCell = document.createElement("td");
		fifthCell.innerHTML = xmlDoc.getElementsByTagName("PRIX")[i].childNodes[0].nodeValue;
		row.append(fifthCell);

		table.append(row);
	}
}

chargeData(xmlhttp);