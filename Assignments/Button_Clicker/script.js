let firstDefLikes = 13;
let secDefLikes = 37;

function changeText(element) {
  if (element.innerText == "Login") {
    element.innerText = "Logout";
  } else {
    element.innerText = "Login";
  }
}

function removeElement(element) {
  element.remove();
}

function likeDefinition(element) {
  let count = Number(element.firstChild.textContent);
  console.log(count);
  console.log(typeof count);
  count++;
  element.firstChild.textContent = count;
  alert("Ninja was liked");
}
