function addList(myTable) {
	var table = document.getElementById(myTable);
	var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);

	var b = document.getElementById('txt').value;
	var cell1 = row.insertCell(0);
	var element1 = document.createElement("input");
	element1.type = "text";
	element1.style.width = "100%";
    element1.style.background = "#90FEFB";
	element1.name = "txtbox[]";
	element1.value = b;
	cell1.appendChild(element1);

	var cell2 = row.insertCell(1);
	var element2 = document.createElement("input");
	element2.type = "checkbox";
	element2.name = "chkbox[]";
	cell2.appendChild(element2);
	document.getElementById('txt').value = " ";

	var cell3 = row.insertCell(2);
	cell3.innerHTML = '<input type="button" class="btn btn-primary" value="Important">';
	cell3.onclick = function () {
		element1.style.background = "#FFC125";
		element1.style.color = "maroon";
	}

	document.getElementById('txt').value = " ";

	var cell4 = row.insertCell(3);
	cell4.innerHTML = '<input type="button" class="btn btn-danger" value="Done">';
cell4.onclick = function () {
		
		element1.style.background = "red";
		element1.style.color = "white";
	}
	document.getElementById('txt').value = " ";

}

function deleteList(myTable) {
	var table = document.getElementById(myTable);
	var rowCount = table.rows.length;
	for(var i=0;i<rowCount;i++)
	{
		var row = table.rows[i];
		var chkbox = row.cells[1].childNodes[0];
		if(null!=chkbox && true==chkbox.checked) {
		table.deleteRow(i);
			rowCount--;
			i--;
		}
	}
}

function startTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    h = checkTime2(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function checkTime2(i) {
	if (i > 12) {i = i-12 };
	return i;
}