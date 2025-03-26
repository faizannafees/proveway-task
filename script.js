const containerPairs = document.querySelectorAll(".container-pair");
const totalPriceElement = document.querySelector(".total-price");

containerPairs.forEach((pair) => {
  if (pair.classList.contains("active")) {
    const radioInput = pair.querySelector("input[type='radio']");
    radioInput.checked = true;
    totalPriceElement.textContent = radioInput.value; // Set initial price if active
  }

  pair.addEventListener("click", () => {
    containerPairs.forEach((p) => {
      p.classList.remove("active");
    });

    pair.classList.add("active");

    const radioInput = pair.querySelector('input[type="radio"]');
    radioInput.checked = true;

    // Update the total-price span with the value of the selected radio input
    totalPriceElement.textContent = radioInput.value;
  });
});
