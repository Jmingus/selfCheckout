'use strict';
let $ = require('jquery');
let list = [];
let total = 0;
let subTotal = 0;
let finalTotal = 0;
function listing(){
	let allItems = list.map(function(item){
		return(`<div>${item[0]} ${item[1]} ${item[2]}</div>`)
	})
	$('#listing').html(`${allItems.join('')}`);
}

function input(item, quantity, price){
	list.push([item, quantity, price]);
	calc(quantity, price);
	listing();
}

function calc(amount, price){
	total += amount * price
}

function taxCalc(){
	subTotal = parseFloat(Math.round(total / 5.50).toFixed(2));
	finalTotal = total + subTotal;
}

$(document).ready(function(){
	$('#add-item').on('click', function(e){
		e.preventDefault();
		input($('#item').val(), $('#quantity').val(), $('#price').val());
		$('form > label > input').val('');
	});
	$('#submit-button').on('click', function(e){
		e.preventDefault();
		taxCalc();
		$('#total').append(`<div>SubTotal: ${total} Tax: ${subTotal} Final: ${finalTotal}</div>`)
	})
});
