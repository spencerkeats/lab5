var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	var newName = request.query.name;
	var newDescription = request.query.description;
	{
		newFriend = {
			"name": newName,
			"description": newDescription,
			"imageURL": "http://lorempixel.com/400/400/people"			
		}
		
	}
	console.log(newName);
	console.log(newDescription);
	data.friends.push(newFriend);
	response.render("index", data);
 }