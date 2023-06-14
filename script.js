// // 1 - 1
const numbersArray = [11, 22, 33, 44, 55, 66];
let sum = 0;
function getSum(numArr) {
  for (let i = 0; i < numArr.length; i++) {
    let eachNum = numArr[i];
    sum += eachNum;
  }
  return sum;
}

const getSumWithFor = getSum(numbersArray);
console.log(getSumWithFor);

// 1 - 2
function accumulate(numArr) {
  const sum = numArr.reduce((acumulator, currentvalue) => {
    return acumulator + currentvalue;
  }, 0);
  return sum;
}
const sumWithReduce = accumulate(numbersArray);
console.log(sumWithReduce);

// 2
const isTeenager = "you are teenager";
const isAdult = "you are adult";
const guest = {
  firstName: "luka",
  lastName: "davitadze",
};

function getAge(age) {
  guest.age = age;
}

function getStatus(user) {
  getAge(22);
  const adult = user.age < 18 ? `${isTeenager}` : `${isAdult}`;
  return adult;
}

function permission(user) {
  if (getStatus(guest) === `${isTeenager}`) {
    return `you are not allowed to access this site ${isTeenager}.`;
  } else if (getStatus(guest) === `${isAdult}`) {
    return `welcome to our site ${isAdult}.`;
  } else "please enter information correctly.";
}
const userPermission = permission(guest);
console.log(userPermission);

// 3

function square(num) {
  let numSquare = 0;
  numSquare = Math.pow(num, 2);
  return numSquare;
}
const result = square(3);
console.log(result);

// 4

function addStatus(user) {
  (user.status = `${permission(user)} you have full points as new member`),
    (user.points = 100);
}
addStatus(guest);
console.log(guest);

// 5

function compare(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}
const compared = compare(22, 32);
console.log(compared);

// 6
const star = "gia suramelashvili";

function getTextLength(text) {
  if (text.length < 6) {
    return;
  }
}
getTextLength(star);

// 7

function getProfile(firstName, lastName) {
  function experience(years) {
    if (years < 2) {
      return "junior developer";
    } else if (2 < years && years < 4) {
      return "middle developer";
    } else {
      return "senior developer";
    }
  }
  return `my name is ${firstName} ${lastName} i am ${experience(10)}.`;
}
const profile = getProfile("dato", "sulxanishvili");
console.log(profile);

// 8

textArr = ["dato", "gio", 312, "22", "saba", 928];
function arrayToString(array) {
  return array.toString();
}
const stringedArr = arrayToString(textArr);
console.log(stringedArr);

// 9 - 1
function addNameToHTML(name) {
  document.body.innerHTML = `<p>${name.toString()}</p>`;
}
addNameToHTML(textArr);

// 9 - 2
function addNameToHTML2(name) {
  const nameText = document.createElement("p");
  nameText.textContent = name;
  document.body.appendChild(nameText);
}
addNameToHTML2("giorgi");

// 10
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);
container.innerHTML = `<button id="alert">click on me</button>`;
const button = document.getElementById("alert");
button.addEventListener("click", () => {
  alert("saba abzhandadze");
});
