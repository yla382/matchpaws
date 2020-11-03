

/*after DB setup, pull 10-15 user profiles to put in array, insert as cards to html page*/
/*for now, 4 demo cards*/

/*keeping record of swiped left and right profiles*/
var addedlist = [];
var subtractedlist = [];

function card(id){
	this.id = id; 
}

function deck(){
	this.ids = ['1','2','3','4'];	/* 4 demo id */
	var cards =[];

	for (var i = 0; i < this.ids.length;i++){
		cards.push(new card(this.ids[i]));	
	}
	return cards;
}

var carddeck = new deck();

window.onload = function(){

	var ul = document.getElementById("cards");
	for (var i = 0; i < carddeck.length; i++){
		var li = document.createElement("li");
		li.innerHTML = carddeck[i].id;
		ul.appendChild(li);
	}

	$("li").addClass("card");


}

/*leftbutton.onclick*/
$(document).ready(function(){
	$("#leftbutton").click(function(){
		$('#cards li:last').animate({
			right:'150px'
		},'fast');
		$('#cards li:last').fadeOut('fast',function(){
			/*console.log($(this).html());*/
			addedlist.push($(this).html()); /*record id of usercard*/
			console.log(addedlist);
			$(this).remove();

		});
	});

});

/*rightbutton.onclick*/
$(document).ready(function(){
	$("#rightbutton").click(function(){
		$('#cards li:last').animate({
			left:'150px'
		},'fast');
		$('#cards li:last').fadeOut('fast',function(){
			subtractedlist.push($(this).html()); /*record id of usercard*/
			console.log(subtractedlist);
			$(this).remove();
		});
	});

});

