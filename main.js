/**Navbar Logic STARTS here */
const btn = document.getElementById("mobile-menu-button");
const menu = document.getElementById("mobile-menu");
const icon = document.getElementById("menu-icon");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");

  // Change icon to 'X' when menu is open
  if (menu.classList.contains("hidden")) {
    icon.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
  } else {
    icon.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
  }
});

/**Navbar Logic ENDS here */

/**Your Question Logic STARTS here */
document.querySelectorAll(".faq-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    const answer = button.nextElementSibling;
    const icon = button.querySelector(".faq-icon");

    // Close other open FAQ items
    document.querySelectorAll(".faq-answer").forEach((el) => {
      if (el !== answer) {
        el.style.maxHeight = null;
        el.parentElement.classList.remove(
          "ring-2",
          "ring-blue-500",
          "shadow-xl",
        );
        el.previousElementSibling.querySelector(".faq-icon").textContent = "+";
      }
    });

    // Toggle current FAQ item
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      icon.textContent = "+";
      faqItem.classList.remove("ring-2", "ring-blue-500", "shadow-xl");
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.textContent = "−";
      faqItem.classList.add("ring-2", "ring-blue-500", "shadow-xl");
    }
  });
});
/**Your Question Logic ENDS here */

/**Payment Logic STARTS her */
document
  .getElementById("bootcampForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("userName").value;
    alert(
      "ধন্যবাদ " +
        name +
        "! আপনার তথ্য আমরা পেয়েছি। ট্রানজেকশন আইডি চেক করে আমরা ২৪ ঘণ্টার মধ্যে আপনার হোয়াটসঅ্যাপ নম্বরে যোগাযোগ করব।",
    );
    this.reset();
  });

/**Payment Logic ENDS her */
