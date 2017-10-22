// Router for back-end
var friends = require('../data/friends.js');

var express = require("express");
var router = express.Router();

router.get('/friends', function(req, res){
    res.json(friends.friends);
})

router.post('/friends', function(req, res){
    console.log('POST to /friends');
    console.log(req.body);

    var friend = req.body;

    var newFriend = new friends.Friend(
    	friend.first_name,
    	friend.last_name,
    	friend.email,
    	friend.picUrl,
    	friend.pets,
		friend.healthy,
		friend.comedy,
		friend.horror,
		friend.travel,
		friend.work,
		friend.alcohol,
		friend.religion,
		friend.kids,
		friend.politics
    );

   	var match = friends.findMatch(newFriend);
   	console.log('returning: ', match.first_name);
    res.json(match);
});

module.exports = router;
