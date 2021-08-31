$(function() {
	'use strict';
	
  $('.form-control').on('input', function() {
	  var $field = $(this).closest('.form-group');
	  if (this.value) {
	    $field.addClass('field--not-empty');
	  } else {
	    $field.removeClass('field--not-empty');
	  }
	});

});



var    input_mail=document.getElementById("input-email");
var    input_password=document.getElementById("input-password");
var    text_error=document.getElementById("text-error");
var    button=document.getElementById("btn-login");
button.onclick=function(){
	if(input_mail.value==="42018143@hti.edu.eg" && input_password.value==="wcapp"){
	//window.open ("https://asd5742.blogspot.com/","Get Your Pictures");
	location = "G:/مشروع التخرج/project/Log-in/student/studend services/studend services.html";
	}else{
		text_error.innerHTML="The Email OR Password is Wrong";
	}
};

