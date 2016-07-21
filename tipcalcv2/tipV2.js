$('document').ready(function(){


function calcTip() {
	var tipElem = document.getElementById('tip');
	var subtotalElem = document.getElementById('subtotal');
	var totalElem = document.getElementById('total');
	var subtotal = parseFloat(subtotalElem.value);
	var tip = parseFloat(tipElem.value);
	var total = subtotal + subtotal * (tip / 100);
	totalElem.innerHTML = '$' + total;

}

var btn = document.getElementById('btn');
btn.onclick = calcTip;



});
