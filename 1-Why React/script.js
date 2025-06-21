const firstBasket = document.querySelector(".first-basket span");
const secondBasket = document.querySelector(".second-basket span");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const totalAppleCount = 10;
let secondBasketAppleCount = 0;
let firstBasketAppleCount = totalAppleCount - secondBasketAppleCount;

firstBasket.innerHTML = firstBasketAppleCount;
secondBasket.innerHTML = secondBasketAppleCount;

rightArrow.addEventListener("click", function () {
  if (firstBasketAppleCount > 0) {
    firstBasketAppleCount--;
    secondBasketAppleCount++;
    firstBasket.innerHTML = firstBasketAppleCount;
    secondBasket.innerHTML = secondBasketAppleCount;
  }
});

leftArrow.addEventListener("click", () => {
  if (secondBasketAppleCount > 0) {
    firstBasketAppleCount++;
    secondBasketAppleCount--;
    firstBasket.innerHTML = firstBasketAppleCount;
    secondBasket.innerHTML = secondBasketAppleCount;
  }
});
