// Friend finder backend 

function add(a, b) {
    return a + b;
}

function Friend(first_name, last_name, email, picUrl, pets, healthy, comedy, horror,
		travel, work, alcohol, religion, kids, politics){
	this.first_name = String(first_name);
	this.last_name = String(last_name);
	this.email = String(email);
	this.picUrl = String(picUrl);
	this.pets = parseInt(pets);
	this.healthy = parseInt(healthy);
	this.comedy = parseInt(comedy);
	this.horror = parseInt(horror);
	this.travel = parseInt(travel);
	this.work = parseInt(work);
	this.alcohol = parseInt(alcohol);
	this.religion = parseInt(religion);
	this.kids = parseInt(kids);
	this.politics = parseInt(politics);

	this.scoreVector = [
		this.pets,
		this.healthy,
		this.comedy,
		this.horror,
		this.travel,
		this.work,
		this.alcohol,
		this.religion,
		this.kids,
		this.politics
	];
};

friends = [
	new Friend('Bill', 'Gates', 'bill@microsoft.com',
		"https://pbs.twimg.com/profile_images/889736688624312321/xVAFH9ZH_400x400.jpg", 
		56, 12, 44, 56, 78, 34, 33, 23, 23, 100),
	new Friend('Donald', 'Trump', 'donald@us.gov',
		"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/05/12/104466932-PE_Color.240x240.jpg?v=1494613853",
		100, 85, 75, 55, 34, 33, 23, 41, 42, 42),
	new Friend('Kim', 'Kardashian', 'kimk_412123@yahoo.com',
		"https://pbs.twimg.com/profile_images/875432723837362176/j5NOs7Dj_400x400.jpg",
		45, 68, 12, 35, 89, 20, 10, 34, 10, 90),
	new Friend("Taylor", "Swift", "taylor@gmail.com",
		"https://i.scdn.co/image/54969dd8c24693d05c8445c0de4ad74a719f1d65",
		98, 97, 96, 99, 100, 90, 90, 100, 100, 100),
	new Friend('Bill', 'Murray', 'bmurray@hotmail.com',
		"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1OTM0MjEwOF5BMl5BanBnXkFtZTYwNTQwNzI1._V1_UY317_CR1,0,214,317_AL_.jpg",
		50, 50, 50, 50, 50, 50, 50, 50, 50, 50),
]


function findMatch(friend){
	var topMatch;
	var lowScore;

	console.log(friend.first_name);
	console.log(friend.scoreVector);

	for(var i = 0; i < friends.length; i++){
		var friendB = friends[i];

		var scoreA = friend.scoreVector;
		var scoreB = friendB.scoreVector;
		var diffVector = [];

		
		console.log(friendB.first_name);
		console.log(scoreB);

		if(scoreA.length != scoreB.length){
			throw 'Score lengths unequal!';
		}

		for(var j = 0; j < scoreA.length; j++){
			diffVector.push(Math.abs(scoreA[j]-scoreB[j]));
		};

		var diffScore = diffVector.reduce(add, 0);
		console.log(diffVector);
		console.log(diffScore);

		if(!lowScore){
			lowScore = diffScore;
			topMatch = friends[i];
		} else {
			if(diffScore < lowScore){
				lowScore = diffScore;
				topMatch = friends[i];
			}
		}
	}

	return topMatch;
}


module.exports = {
	friends: friends,
	Friend: Friend,
	findMatch: findMatch,
}
