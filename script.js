var form = document.querySelector("#userForm");
const allUsersData = [];

const resetForm = function () {
  form.classList.remove("was-validated");
  const name = document.getElementById("t1");
  name.value = "";

  const rollNumber = document.getElementById("t2");
  rollNumber.value = "";

  const dob = document.getElementById("t3");
  dob.value = "";

  const email = document.getElementById("t5");
  email.value = "";

  const mobileNumber = document.getElementById("t6");
  mobileNumber.value = "";

  const password = document.getElementById("t7");
  password.value = "";

  const cpassword = document.getElementById("t8");
  cpassword.value = "";
};

const getData = function () {
  const name = document.getElementById("t1").value;
  const rollNumber = document.getElementById("t2").value;
  const dob = document.getElementById("t3").value;
  const email = document.getElementById("t5").value;
  const mobileNumber = document.getElementById("t6").value;
  const password = document.getElementById("t7").value;
  const cpassword = document.getElementById("t8").value;

  return {name,rollNumber,dob,email,mobileNumber,password,cpassword};
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (form.checkValidity()) {
    const data = getData();
    allUsersData.push(data);
    printResult(data);
    resetForm();
  } else {
    form.classList.add("was-validated");
  }
  removeSpan();
});

function removeSpan() {
  var span = document.getElementById("span");
  if (span) {
    span.remove();
  }
}

function printResult(data) {
  const resultEl = document.getElementById("enrolled-students");
  let sectionHeading = null;
  if (allUsersData.length == 1) {
    sectionHeading = document.createElement("div");
    const description = document.createElement("p");
    description.innerHTML = "Description";
    description.className = "description";

    sectionHeading.className = "sectionHeading";
    sectionHeading.append(description);
  }

  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  wrapper.addEventListener("click", function (e) {
    console.log(e.target.className);
    if (e.target.className.includes("userDeleteBtn")) {
      console.log("aaadfasdfasdf");
      e.currentTarget.remove();
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "+";
  deleteBtn.className = "userDeleteBtn";

  const textInfoContainer = document.createElement("div");
  textInfoContainer.className = "textInfoContainer";

  let name = document.createElement("p");
  name.className = "infoText userName";
  name.innerHTML = data.name;

  let rollNumber = document.createElement("p");
  rollNumber.className = "infoText userrollNumber";
  rollNumber.innerHTML = data.rollNumber;

  let dob = document.createElement("p");
  dob.className = "infoText userdob";
  dob.innerHTML = data.dob;

  let email = document.createElement("p");
  email.className = "infoText email";
  email.innerHTML = data.email;

  let mobileNumber = document.createElement("p");
  mobileNumber.className = "infoText usermobileNumber";
  mobileNumber.innerHTML = data.mobileNumber;

  textInfoContainer.append(name, rollNumber, dob, email, mobileNumber);

  wrapper.append(textInfoContainer, deleteBtn);

  if (sectionHeading == null) {
    resultEl.append(wrapper);
  } else {
    resultEl.append(sectionHeading, wrapper);
  }
}
