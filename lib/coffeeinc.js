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
[[[1,24,59,500],[2,83,56,400],[4,15,45,600]],
 [[1,34,79,500],[2,21,55,400],[1,80,65,600]],
 [[2,50,60,500],[0,0,0,0],[-1,0,0,0]]];

var empPicId=0;
var empSkill=34;
var empSat=99;
var empSalary=0;

function changeProfileInfo (empPicIdx,empPicIdy) {
  empPicId=employeepic[empPicIdx][empPicIdy][0];
    document.getElementById('emp_profile_pic').src="/CoffeeInc/assets/emp_"+empPicId+".svg";
    document.getElementById('empProfileSkill').innerHTML="Skill: "+employeepic[empPicIdx][empPicIdy][1];
    document.getElementById('empProfileSkillBar').innerHTML=Lungo.Element.progress("#progress-normal", employeepic[empPicIdx][empPicIdy][1], false);
    document.getElementById('empProfileSat').innerHTML="Satisfaction: "+employeepic[empPicIdx][empPicIdy][2];
    document.getElementById('empProfileSatBar').innerHTML=Lungo.Element.progress("#progress-normal", employeepic[empPicIdx][empPicIdy][2], false);
    document.getElementById('empProfileSalary').innerHTML="Salary: "+employeepic[empPicIdx][empPicIdy][3];
}
