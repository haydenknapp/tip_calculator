var percent = 20;
var nPeople = 4;
var totalInCents = 5235;

function centsFloatToDollarsAndCents(value) {
	var ret = '$' + parseInt(String(value / 100)) + '.' + parseInt(String(value + 0.05)) % 100;
//	if (ret.length - ret.indexOf('.') < 3)
//		ret += '0';
	return ret;
}

function changeDollarResult(resultId, valueFloat) {
	document.getElementById(resultId).innerHTML = centsFloatToDollarsAndCents(valueFloat);
}

function updateAll() {
	var tipTotal = totalInCents * percent / 100;
	changeDollarResult("tipPerPerson", tipTotal / nPeople);
	changeDollarResult("totalPerPerson", totalInCents / nPeople + tipTotal / nPeople);
	changeDollarResult("fullAmount", totalInCents + tipTotal);
}

function changeCents() {
	var dollarString = document.getElementById("billInput").value;
	var newCents = "";
	var newDollars = "";
	var hasDecimal = false;
	var pastDecimal = 0;
	for (var i = 0; i < dollarString.length && pastDecimal < 2; ++i) {
		if (dollarString.charAt(i) >= '0' && dollarString.charAt(i) <= '9') {
			if (hasDecimal) {
				newCents += dollarString.charAt(i);
				++pastDecimal;
			}
			else
				newDollars += dollarString.charAt(i);
		}
		if ('.' == dollarString.charAt(i)) {
			hasDecimal = true;
		}
	}

	totalInCents = 0;

	if ("" != newCents) {
		totalInCents += Number(newCents);
	}
	if ("" != newDollars) {
		totalInCents += 100 * Number(newDollars);
	}
	updateAll();
}

function setPercentage() {
	document.getElementById("tipPercent").innerHTML = "" + percent + "%";
}

function minusPercent() {
	if (percent > 0)
		--percent;
	setPercentage();
	updateAll();
}

function plusPercent() {
	if (percent < 100)
		++percent;
	setPercentage();
	updateAll();
}

function setPeople() {
	document.getElementById("numPeople").innerHTML = nPeople;
}

function minusPeople() {
	if (nPeople > 0)
		--nPeople;
	setPeople();
	updateAll();
}

function plusPeople() {
	++nPeople;
	setPeople();
	updateAll();
}

