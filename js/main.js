// Nav Bar

$(".home").html("Home");
$(".service").html("The Service");
$(".service1").html("How It Works");
$(".service2").html("How A Mac Could Help You");
$(".service3").html("Payment Plans");
$(".service4").html("Login");
$(".us").html("About Us");
$(".choose").html("Why Choose Us");
$(".testimonials").html("Testimonials");
$(".oteam").html("Our Team");
$(".contact").html("Contact Us");
$(".account").html("Account");


// Index Body

$(".h3").html("Stay Up-to-Date Easy with the");
$(".arial").html("<b>Latest MacBooks from Apple</b>");
$("#indexbody").html("Get access to a Macbook Air/Pro for free as a trial or rent one for an extended period");
$("#indexbody").append("<br><br><br>with no obligation to buy. This gives our users complete access to the latest and greatest");
$("#indexbody").append("<br><br><br>from Apple, utilizing the latest MacOS and computer without needing to pay to own.");
$(".register").html("REGISTER NOW");
$(".signin").html("SIGN IN");

// Footer

$(".fcontact").html("support@maclove.com</a> <b>|</b> (800)-224-2101");


// Login

$(".login").html("Login");
$(".fpassword").html("Forget Password?");
$(".noaccount").prepend("Don't have an account?");


// Signup

$(".signup").html("Sign Up");
$(".haccount").prepend("Have an Account?");
$(".login1").append("Login Now");

// Forget Password

$(".fpass").html("Forget Password");
$(".ftext").html("Enter your email address and we'll send you an email with instructions to reset your password.");
$(".ftext1").html("Email request has been sent. Please check your inbox to follow the instructions stated.");
$(".ftext2").prepend("Suddenly remember it?");
$(".rpass").html("Reset Password");
$(".aroute").prepend("Alternate Route?");
$(".bth").prepend("Back to Home");
$(".btl").prepend("Back to Login");


// Account Page

$(".apage").html("Account Page");
$(".morders").html("My Orders");
$(".thome").html("To Home");
$(".adetails").html("<strong>Full Name :</strong> James Raymond");
$(".adetails").append("<br><strong>Email :</strong> user@email.com");
$(".adetails").append("<br><strong>Location :</strong> USA");

// Show Password

$(".spass").append(" Show Password");

// Local Storage - Storing Information in Sign Up

function test() {


fname = $('#fname').val();
localStorage.setItem('fname',JSON.stringify(fname));

lname = $('#lname').val();
localStorage.setItem('lname',JSON.stringify(lname));

email = $('#email').val();
localStorage.setItem('email',JSON.stringify(email));

fpassword = $('#fpassword').val();
localStorage.setItem('fpassword',JSON.stringify(fpassword));

cpassword = $('#cpassword').val();
localStorage.setItem('cpassword',JSON.stringify(cpassword));

}

// Local Storage - Login Test

function test1() {

var email = $("#email").val();

var context = JSON.parse(localStorage.getItem('email'));

var fpass = $("#fpassword").val();

var context1 = JSON.parse(localStorage.getItem('fpassword'));

if(email == context && fpass == context1){
  alert('Logged in Successfully'); 
  window.location.href = "../html/index.html";
  

}

else{
  alert('Wrong Credentials. Try Again')
  window.location.href = "../html/login.html";
  
}



}

// Validation - Regex

function fnameval () {

  var fname = $("#fname").val();
  regexfname = /^[A-Za-z]([^0-9]*)$/;
  var result = regexfname.test(fname);
  console.log(result);
  
  if(result) {
    return true
  }

  else {
    alert('Letters Only. Capital or Common')
  }
}

function lnameval () {

  var lname = $("#lname").val();
  regexlname = /^[A-Za-z]([^0-9]*)$/;
  var result = regexlname.test(lname);
  console.log(result);
  
  if(result) {
    return true
  }

  else {
    alert('Letters Only. Capital or Common')
  }
}

function emailval () {

  var email = $("#email").val();
  regexemail = /^\S+@\S+$/;
  var result = regexemail.test(email);
  console.log(result);
  
  if(result) {
    return true
  }

  else {
    alert('Not Valid. Please include "@" sign. eg. test@mail.com')
  }
}

// Password Match //

const form = document.getElementById("myForm");
const password = form.password;
const confirmPassword = form.confirmPassword
const feedback = document.getElementById("confirmPassword-feedback");
let isPasswordMatch = false;

confirmPassword.addEventListener("input",() => {
    if (password.value != confirmPassword.value) {
        feedback.innerHTML = "Password doesn't match";
        isPasswordMatch = false
    }

    else {
        feedback.innerHTML = "";
        isPasswordMatch = true;
    }
});

form.onsubmit = function () {
    if(isPasswordMatch) {
        alert ("Thanks for Successfully Signing up with MacLove");
        return true;
    }

    alert ("Wait! Check your password again. It's not matching");
    return false;
};

// Additional Password Match Code //

function verifyPassword() {  
    var pw = $("#fpassword").val();  
     
   //minimum password length validation  
    if(pw.length < 8) {  
       $("#message").html = "**Password length must be atleast 8 characters";  
       return false;  
    }  
    
  //maximum length of password validation  
    if(pw.length > 15) {  
       $("#message").html = "**Password length must not exceed 15 characters";  
       return false;  
    } else {  
       alert("Password is correct");  
    }  
  }  

// Show or Hide Password //

function myFunction() {
    var pass = document.getElementById("fpassword");
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }

  function myFunction1() {
    var pass = document.getElementById("cpassword");
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }

  // Text Color

  document.body.style.color = "black";

  






