/**Navbar Logic STARTS here */
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");
  const icon = document.getElementById("menu-icon");

  // ১. মেনু ওপেন/ক্লোজ করার লজিক (আগের মতই)
  btn.addEventListener("click", () => {
    toggleMenu();
  });

  // ২. মেনুর ভেতরকার সব লিঙ্কে ক্লিক করলে যেন মেনু বন্ধ হয়
  const menuLinks = menu.querySelectorAll("a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // লিঙ্কে ক্লিক করলে মেনুটি বন্ধ করে দিবে
      if (!menu.classList.contains("hidden")) {
        toggleMenu();
      }
    });
  });

  // মেনু টগল করার জন্য একটি কমন ফাংশন
  function toggleMenu() {
    menu.classList.toggle("hidden");

    if (menu.classList.contains("hidden")) {
      // হ্যামবার্গার আইকন দেখাবে
      icon.innerHTML =
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
    } else {
      // 'X' আইকন দেখাবে
      icon.innerHTML =
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
    }
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
/**Payment Logic STARTS here */

/* === পেমেন্ট মডাল কন্ট্রোল === */
window.openModal = function () {
  const modal = document.getElementById("enroll-modal");
  // ব্যাজটিকে ধরার জন্য ID ব্যবহার করা হয়েছে
  const badge = document.getElementById("enroll-badge");

  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // স্ক্রল বন্ধ হবে

    // মডাল খুললে ব্যাজটি লুকিয়ে ফেলবে
    if (badge) {
      badge.classList.add("hidden");
    }
  }
};

window.closeModal = function () {
  const modal = document.getElementById("enroll-modal");
  const badge = document.getElementById("enroll-badge");

  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto"; // স্ক্রল চালু হবে

    // মডাল বন্ধ হলে ব্যাজটি আবার দেখাবে
    if (badge) {
      badge.classList.remove("hidden");
    }
  }
};

/* === ফর্ম সাবমিশন লজিক === */
document.addEventListener("DOMContentLoaded", () => {
  const bootcampForm = document.getElementById("bootcampForm");

  if (bootcampForm) {
    bootcampForm.addEventListener("submit", function (e) {
      e.preventDefault(); // পেজ রিলোড হবে না

      const nameField = document.getElementById("userName");
      const phoneField = document.getElementById("userPhone");
      const trxField = document.getElementById("trxId");

      if (nameField && phoneField && trxField) {
        // ফর্ম ক্লিয়ার করা
        bootcampForm.reset();

        // মডাল বন্ধ করা ও ব্যাজ ফিরিয়ে আনা
        window.closeModal();

        // সাকসেস পেজে রিডাইরেক্ট করা
        window.location.href = "success.html";
      } else {
        alert("একটি সমস্যা হয়েছে। দয়া করে ডেভেলপার কনসোল চেক করুন।");
        console.error("ID mismatch: HTML এ id='userName' আছে কি না চেক করুন।");
      }
    });
  }
});
/**Payment Logic ENDS here */
/**Payment Logic ENDS her */
