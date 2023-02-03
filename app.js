const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

// import all the fields from the form.
// eg.
// const name = document.getElementById("name");

// function handleSubmit(e) {
//   e.preventDefault();
function handleSubmit(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  document.getElementById("display-name").innerHTML = name;
  //document.getElementById("display-name").style.fontSize = "30px";
 // document.getElementById("display-name").style.color = "pink";
  document.getElementById("name").value = '';
//---------------email

  var name = document.getElementById("Email").value;
  document.getElementById("display-Email").innerHTML = name;
  document.getElementById("display-Email").style.fontSize = "20px";
 // document.getElementById("display-Email").style.color = "pink";
  document.getElementById("Email").value = '';
//-----------------phone

  var name = document.getElementById("Phone").value;
  document.getElementById("display-Phone").innerHTML = name;
  document.getElementById("display-Phone").style.fontSize = "20px";
  //document.getElementById("display-Phone").style.color = "pink";
  document.getElementById("Phone").value = '';
//---------------------github

  var name = document.getElementById("Github").value;
  document.getElementById("display-Github").innerHTML = name;
  document.getElementById("display-Github").style.fontSize = "20px";
 // document.getElementById("display-Github").style.color = "pink";
  document.getElementById("Github").value = '';
//------------lik
  var name = document.getElementById("Linkedin").value;
  document.getElementById("display-Linkedin").innerHTML = name;
  document.getElementById("display-Linkedin").style.fontSize = "20px";
 // document.getElementById("display-Linkedin").style.color = "pink";
  document.getElementById("Linkedin").value = '';
//----------------------------------------------edu
  var name = document.getElementById("Degree").value;
  document.getElementById("display-Degree").innerHTML = name;
  document.getElementById("display-Degree").style.fontSize = "15px";
 // document.getElementById("display-Degree").style.color = "pink";
  document.getElementById("Degree").value = '';

  var name = document.getElementById("College").value;
  document.getElementById("display-College").innerHTML = name;
  document.getElementById("display-College").style.fontSize = "15px";
 // document.getElementById("display-College").style.color = "pink";
  document.getElementById("College").value = '';

  var name = document.getElementById("Starting Year").value;
  document.getElementById("display-Starting Year").innerHTML = name;
  document.getElementById("display-Starting Year").style.fontSize = "15px";
  //document.getElementById("display-Starting Year").style.color = "pink";
  document.getElementById("Starting Year").value = '';


  var name = document.getElementById("Passing Year").value;
  document.getElementById("display-Passing Year").innerHTML = name;
  document.getElementById("display-Passing Year").style.fontSize = "15px";
  //document.getElementById("display-Passing Year").style.color = "pink";
  document.getElementById("Passing Year").value = '';

  var name = document.getElementById("CGPA").value;
  document.getElementById("display-CGPA").innerHTML = name;
  document.getElementById("display-CGPA").style.fontSize = "15px";
  //document.getElementById("display-CGPA").style.color = "pink";
  document.getElementById("CGPA").value = '';


  //-------------------skills
  var name = document.getElementById("Skills").value;
  document.getElementById("display-Skills").innerHTML = name;
  document.getElementById("display-Skills").style.fontSize = "15px";
  //document.getElementById("display-Skills").style.color = "pink";
  document.getElementById("Skills").value = '';

  //----------------------------project
  var name = document.getElementById("Project").value;
  document.getElementById("display-Project").innerHTML = name;
  document.getElementById("display-Project").style.fontSize = "15px";
  //document.getElementById("display-Project").style.color = "pink";
  document.getElementById("Project").value = '';

  var name = document.getElementById("Description").value;
  document.getElementById("display-Description").innerHTML = name;
  document.getElementById("display-Description").style.fontSize = "15px";
  //document.getElementById("display-Description").style.color = "pink";
  document.getElementById("Description").value = '';

  var name = document.getElementById("Link").value;
  document.getElementById("display-Link").innerHTML = name;
  document.getElementById("display-Link").style.fontSize = "15px";
  //document.getElementById("display-Link").style.color = "pink";
  document.getElementById("Link").value = '';

  var name = document.getElementById("Company").value;
  document.getElementById("display-Company").innerHTML = name;
  document.getElementById("display-Company").style.fontSize = "15px";
  //document.getElementById("display-Company").style.color = "pink";
  document.getElementById("Company").value = '';

  var name = document.getElementById("Designation").value;
  document.getElementById("display-Designation").innerHTML = name;
  document.getElementById("display-Designation").style.fontSize = "15px";
  //document.getElementById("display-Designation").style.color = "pink";
  document.getElementById("Designation").value = '';

  var name = document.getElementById("Duration").value;
  document.getElementById("display-Duration").innerHTML = name;
  document.getElementById("display-Duration").style.fontSize = "15px";
  //document.getElementById("display-Duration").style.color = "pink";
  document.getElementById("Duration").value = '';

  var name = document.getElementById("description").value;
  document.getElementById("display-description").innerHTML = name;
  document.getElementById("display-description").style.fontSize = "15px";
  //document.getElementById("display-description").style.color = "pink";
  document.getElementById("description").value = '';
  }
  //   here get the values from the form and set it to the resume
  // eg.
  //   const name_resume = document.getElementById("name_resume");
  //   name_resume.innerHTML = name.value;
  //   similarly for all the other fields


function handleLeft( ) {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const print = document.querySelector(".print");
  
  // write more codes here
}
function handlePrint() {
  const right = document.querySelector(".right");
  const left = document.querySelector(".left");
  const print = document.querySelector(".print");
  // write more codes here
}