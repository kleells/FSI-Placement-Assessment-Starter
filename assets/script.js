// HINT: You can delete this console.log after you no longer need it!
console.log("JavaScript code has loaded!");
// First, tell us your name
let yourName = "Katie Eells"; // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0;
let cc = 0;
let sugar = 0;

// selecting the element with an id of credit
const credit = document.querySelector("#credit");

// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector("#add-gb");

// Code to update name display
credit.textContent = `Created by ${yourName}`;

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener("click", function () {
	gb = gb + 1;
	let qtygb = document.querySelector("#qty-gb");
	qtygb.textContent = gb;
	let qtyTotal = document.querySelector("#qty-total");
	qtyTotal.textContent = gb + cc + sugar;
});

// TODO: Hook up event listeners for the rest of the buttons

//add cc button
const ccPlusBtn = document.querySelector("#add-cc");
ccPlusBtn.addEventListener("click", function () {
	cc = cc + 1;
	let qtycc = document.querySelector("#qty-cc");
	qtycc.textContent = cc;
	let qtyTotal = document.querySelector("#qty-total");
	qtyTotal.textContent = gb + cc + sugar;
});

//add sugar button
const sugarPlusBtn = document.querySelector("#add-sugar");
sugarPlusBtn.addEventListener("click", function () {
	sugar = sugar + 1;
	let qtySugar = document.querySelector("#qty-sugar");
	qtySugar.textContent = sugar;
	let qtyTotal = document.querySelector("#qty-total");
	qtyTotal.textContent = gb + cc + sugar;
});

//minus Gingerbread Button
const gbMinusBtn = document.querySelector("#minus-gb");
gbMinusBtn.addEventListener("click", function () {
	gb = gb - 1;
	if (gb < 0) {
		gb = 0;
	}
	let qtygb = document.querySelector("#qty-gb");
	qtygb.textContent = gb;
	let qtyTotal = document.querySelector("#qty-total");
	qtyTotal.textContent = gb + cc + sugar;
});

//minus cc button
const ccMinusBtn = document.querySelector("#minus-cc");
ccMinusBtn.addEventListener("click", function () {
	cc = cc - 1;
	if (cc < 0) {
		cc = 0;
	}
	let qtycc = document.querySelector("#qty-cc");
	qtycc.textContent = cc;
	let qtyTotal = document.querySelector("#qty-total");
	qtyTotal.textContent = gb + cc + sugar;
});

//minus sugar button
const sugarMinusBtn =
	document.querySelector("#minus-sugar");
sugarMinusBtn.addEventListener("click", function () {
	sugar = sugar - 1;
	if (sugar < 0) {
		sugar = 0;
	}
	let qtySugar = document.querySelector("#qty-sugar");
	qtySugar.textContent = sugar;
	let qtyTotal = document.querySelector("#qty-total");
	qtyTotal.textContent = gb + cc + sugar;
});
