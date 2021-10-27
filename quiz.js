function quiz() {
  event.preventDefault();

  let name;
  if (!document.getElementById("name").value.trim()) {
    alert("Enter your name");
    return false;
  } else if (!(document.getElementById("name").value.trim()=="")) {
    name = document.getElementById("name").value;
  } else {
    alert("Name is not a string");
    return false;
  }

  let nameId;
  if (!document.getElementById("nameId").value.trim()) {
    alert("Entert your ID");
    return false;
  } else if (!(document.getElementById("nameId").value.trim()=="")) {
      nameId = document.getElementById("nameId").value;
  } else {
    alert("ID is not a string");
    return false;
  }

  let element;
  if (!document.getElementById("element").value.trim()) {
    alert("Choose one");
    return false;
  } else if (!(document.getElementById("element").value.trim()=="")) {
    element = document.getElementById("element").value;
  } else {
    alert("The answer is empty");
    return false;
  }

  let alertBox;
  if (!document.getElementById("alertBox").value.trim()) {
    alert("Choose one");
    return false;
  } else if (!(document.getElementById("alertBox").value.trim()=="")) {
    element = document.getElementById("alertBox").value;
  } else {
    alert("The answer is empty");
    return false;
  }

  let calcObj = {
    name,
    nameId,
    element,
    alertBox,
  };
  if (document.getElementById("Agreement").checked) {
    localStorage.setItem("calc", JSON.stringify(calcObj));
  }

  return true;
}

function again() {
  document.getElementById("result").style.display = "none";
}