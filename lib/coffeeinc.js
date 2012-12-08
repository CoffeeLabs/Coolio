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
[[1,2,4],
 [3,4,1],
 [2,3,0]];

var empPicId=0;
var empSkill=34;
var empSat=99;
var empSalary=0;

function changeProfileInfo (empPicIdx,empPicIdy) {
  empPicId=employeepic[empPicIdx][empPicIdy];
    document.getElementById('emp_profile_pic').src="/CoffeeInc/assets/emp_"+empPicId+".png";
}
