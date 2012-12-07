function signup () {
	var user = new Parse.User();
	user.set("username", "my name");
	user.set("password", "my pass");
	user.set("email", "email@example.com");
	 
	// other fields can be set just like with Parse.Object
	 
	user.signUp(null, {
	  success: function(user) {
	    alert("hooray");
		// Hooray! Let them use the app now.
	  },
	  error: function(user, error) {
		// Show the error message somewhere and let the user try again.
		alert("Error: " + error.code + " " + error.message);
	  }
	});
}

var employeepic=new Array ();
employeepic = 
[[1,3,2],
 [1,3,2],
 [1,3,2]];
