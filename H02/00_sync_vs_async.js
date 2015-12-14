
//****************
// synchronous code:
//****************
var user = User.findById(100);
// ...wait for operation to complete, then do something with user


//****************
// asynchronous code:
//****************
User.findById(100, function(user){
	// do something with user, once operation has completed
});

