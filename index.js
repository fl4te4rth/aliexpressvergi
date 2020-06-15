const aliexpressPrice = document.querySelector("#price_input_ali");

aliexpressPrice.addEventListener("keyup", event => {
  const selectedItemType = document.querySelector('input[name="radio"]:checked')
    .value;
  let OTVshare = 0;
  const itemPrice = parseFloat(event.target.value);
  console.log(`You like ${event.target.value} , ${selectedItemType}`);

  switch (selectedItemType) {
    case "radio-1":
      OTVshare = 0;
      break;
    case "radio-2":
      OTVshare = 3;

      break;
    case "radio-3":
      OTVshare = 6.7;

      break;
    case "radio-4":
      OTVshare = 20;

      break;
    case "radio-5":
      OTVshare = 25;
      break;
      case "radio-6":
        OTVshare = 25;
        break;
    default:
      OTVshare = 20;
      break;
  }
  const priceWithOTV = itemPrice + (itemPrice * OTVshare) / 100;
  const priceWithKDV = priceWithOTV + (priceWithOTV / 100) * 8;
  const priceWithGSV = priceWithKDV + 4.5;
  const priceWithDPV = priceWithGSV + 0.7;
  console.log("new value is ", priceWithDPV);

  let newPriceInput = document.getElementById("price_input_tr");
  newPriceInput.value = priceWithDPV ? priceWithDPV : 0;
});

document.querySelector("body").addEventListener("click", e => {
  console.log(e.target);
  const aliexpressPrice = document.querySelector("#price_input_ali");

  const selectedItemType = document.querySelector('input[name="radio"]:checked')
    .value;
  let OTVshare = 0;
  const itemPrice = parseFloat(aliexpressPrice.value);
  if (itemPrice === 0) return;
  console.log(`You like ${aliexpressPrice.value} , ${selectedItemType}`);

  switch (selectedItemType) {
    case "radio-1":
      OTVshare = 0;
      break;
    case "radio-2":
      OTVshare = 3;

      break;
    case "radio-3":
      OTVshare = 6.7;

      break;
    case "radio-4":
      OTVshare = 20;

      break;
    case "radio-5":
      OTVshare = 25;
      break;

    default:
      OTVshare = 20;
      break;
  }
  const priceWithOTV = itemPrice + (itemPrice * OTVshare) / 100;
  const priceWithKDV = priceWithOTV + (priceWithOTV / 100) * 8;
  const priceWithGSV = priceWithKDV + 4.5;
  const priceWithDPV = (priceWithGSV + 0.7).toFixed(2);
  console.log("new value is ", priceWithDPV);

  let newPriceInput = document.getElementById("price_input_tr");
  newPriceInput.value = priceWithDPV ? priceWithDPV : 0;
});
