const connRequestCount = document.querySelector("#conn-req .count");
const connRequestPlural = document.querySelector("#conn-req-plural");
const yourConnCount = document.querySelector("#your-conns .count");
const yourConnsList = document.querySelector("#your-conn-content");

function clickPrompt(elem) {
  const newName = prompt("Please enter new name");
  const userName = document.querySelector(elem);
  if (newName.length > 0) {
    userName.innerText = newName;
  }
}

function checkRequestsEmpty() {}

function acceptRequest(elem, name, img) {
  const connectionReq = document.querySelector(elem);
  let currentCount = Number(connRequestCount.innerText);
  currentCount--;
  connRequestCount.innerText = currentCount;
  if (currentCount == 1) {
    connRequestPlural.innerText = "";
  } else if (currentCount == 0) {
    document.querySelector("#conn-req").classList.add("hidden");
  } else {
    connRequestPlural.innerText = "s";
  }

  // code for accepting
  let yourCurrCount = Number(yourConnCount.innerText);
  yourCurrCount++;
  yourConnCount.innerText = yourCurrCount;

  const newConn = document.createElement("div");
  newConn.innerHTML = `<div class="connection">
  <div class="conn-left">
    <img src="${img}" alt="something" />
    <h3>${name}</h3>
  </div>
</div>`;
  yourConnsList.appendChild(newConn);
  // code to decrease conn requests

  // would be cool to add requests based on setTimeout
  // would be cool to make a noise happen when new request hits

  // removes the element from conn requests
  connectionReq.remove();
}

function rejectRequest(elem) {
  const connectionReq = document.querySelector(elem);
  let currentCount = Number(connRequestCount.innerText);
  currentCount--;
  connRequestCount.innerText = currentCount;
  if (currentCount == 1) {
    connRequestPlural.innerText = "";
  } else if (currentCount == 0) {
    document.querySelector("#conn-req").classList.add("hidden");
  } else {
    connRequestPlural.innerText = "s";
  }
  connectionReq.remove();
}
