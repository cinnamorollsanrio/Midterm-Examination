// wait until page is fully loaded before running JS
document.addEventListener("DOMContentLoaded", () => {
  // get the <span id="cart-count"> so we can change the number inside
  const cartCount = document.getElementById("cart-count");
  // start with 0 items in the cart
  let count = 0;

  // find all buttons with class "add"
  document.querySelectorAll(".add").forEach(btn => {
    // when you click an "add" button
    btn.addEventListener("click", e => {
      // hide the "add" button itself
      btn.classList.add("hidden");
      // show the next button (the "remove" button) right after it in HTML
      btn.nextElementSibling.classList.remove("hidden");
      // add 1 to the cart count
      count++;
      // update the number in <span id="cart-count">
      cartCount.textContent = count;
    });
  });

  // find all buttons with class "remove"
  document.querySelectorAll(".remove").forEach(btn => {
    // when you click a "remove" button
    btn.addEventListener("click", e => {
      // hide the "remove" button itself
      btn.classList.add("hidden");
      // show the previous button (the "add" button) before it in HTML
      btn.previousElementSibling.classList.remove("hidden");
      // subtract 1 from the cart count
      count--;
      // update the number in <span id="cart-count">
      cartCount.textContent = count;
    });
  });

  // get the contact form if it exists on the page
  const form = document.getElementById("contactForm");
  if (form) {
    // when you click submit on the form
    form.addEventListener("submit", e => {
      // stop the page from reloading (default form action)
      e.preventDefault();
      // show a simple popup message to the user
      alert("Message submitted. Thank you!");
      // clear all input fields back to empty
      form.reset();
    });
  }
});
