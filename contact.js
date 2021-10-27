function quiz() {
  event.preventDefault();

  let surName;
  if (!document.getElementById("surName").value.trim()) {
    alert("Enter your surname");
    return false;
  } else if (!(document.getElementById("surName").value.trim()=="")) {
    surName = document.getElementById("surName").value;
  } else {
    alert("Sur name is empty");
    return false;
  }

  let name
  if (!document.getElementById("name").value.trim()) {
    alert("Enter your name");
    return false;
  } else if (!(document.getElementById("name").value.trim()=="")) {
    name = document.getElementById("name").value;
  } else {
    alert("Name is empty");
    return false;
  }

  let studentId;
  if (!document.getElementById("studentId").value.trim()) {
    alert("Entert student ID");
    return false;
  } else if (!(document.getElementById("studentId").value.trim()=="")) {
      studentId = document.getElementById("studentId").value;
  } else {
    alert("Student ID is empty");
    return false;
  }

  let eMail;
  if (!document.getElementById("eMail").value.trim()) {
    alert("Enter e-mail");
    return false;
  } else if (validateEmail(document.getElementById("eMail").value.trim())) {
      eMail = document.getElementById("eMail").value;
  } else {
    alert("e-mail is not valid");
    return false;
  }

  let calcObj = {
    surName,
    name,
    studentId,
    eMail,
  };
  if (document.getElementById("Agreement").checked) {
    localStorage.setItem("calc", JSON.stringify(calcObj));
  }

  return true;
}

function validateEmail(email)
{
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function again() {
  document.getElementById("result").style.display = "none";
}