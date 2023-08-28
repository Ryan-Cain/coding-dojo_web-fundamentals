function addLike(element) {
  let count =
    element.parentElement.firstElementChild.nextElementSibling
      .firstElementChild;
  let currCount = Number(
    element.parentElement.firstElementChild.nextElementSibling.firstElementChild
      .innerText
  );
  if (typeof currCount !== "number") {
    currCount = 1;
  } else {
    currCount++;
  }
  console.log(count);
  console.log(typeof count);
  console.log(currCount);
  console.log(typeof currCount);
  count.innerText = currCount;
  let likeText =
    element.parentElement.firstElementChild.nextElementSibling.firstElementChild
      .nextElementSibling;
  console.log(likeText);
  if (currCount == 1) {
    likeText.innerText = " like";
  } else {
    likeText.innerText = " likes";
  }
}
