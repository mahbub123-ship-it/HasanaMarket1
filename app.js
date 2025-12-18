// ===============================
// BUTTON CLICK HANDLERS
// ===============================

// নিরাপদভাবে পেজে নেভিগেট করার ফাংশন
function goTo(page) {
  window.location.href = `pages/${page}.html`;
}

// নোটিফিকেশন দেখানোর সহজ ফাংশন (page না থাকলে)
function showAlert(title) {
  alert(`${title} পেইজটি এখনো তৈরি করা হয়নি!`);
}

// ===============================
// PRODUCT MANAGEMENT
// ===============================

document.querySelector('#section-products .card:nth-child(1)')
  .addEventListener('click', () => goTo('buy-product'));

document.querySelector('#section-products .card:nth-child(2)')
  .addEventListener('click', () => goTo('sell-product'));

document.querySelector('#section-products .card:nth-child(3)')
  .addEventListener('click', () => goTo('product-list'));

document.querySelector('#section-products .card:nth-child(4)')
  .addEventListener('click', () => goTo('sold-products'));


// ===============================
// ONLINE MARKET & RECORDS
// ===============================

document.querySelector('#section-online .card:nth-child(1)')
  .addEventListener('click', () => goTo('online-market'));

document.querySelector('#section-online .card:nth-child(2)')
  .addEventListener('click', () => goTo('area-sales'));

document.querySelector('#section-online .card:nth-child(3)')
  .addEventListener('click', () => goTo('product-wise-sale'));

document.querySelector('#section-online .card:nth-child(4)')
  .addEventListener('click', () => goTo('khata'));

document.querySelector('#section-online .card:nth-child(5)')
  .addEventListener('click', () => goTo('deposit-book'));


// ===============================
// LISTS SECTION
// ===============================

document.querySelector('#section-lists .card:nth-child(1)')
  .addEventListener('click', () => goTo('customer-list'));

document.querySelector('#section-lists .card:nth-child(2)')
  .addEventListener('click', () => goTo('user-list'));

document.querySelector('#section-lists .card:nth-child(3)')
  .addEventListener('click', () => goTo('supplier-list'));

document.querySelector('#section-lists .card:nth-child(4)')
  .addEventListener('click', () => goTo('staff-list'));


// ===============================
// CREDIT SYSTEM
// ===============================

document.querySelector('#section-credit .card:nth-child(1)')
  .addEventListener('click', () => goTo('agent-balance'));

document.querySelector('#section-credit .card:nth-child(2)')
  .addEventListener('click', () => goTo('money-transfer'));


// ===============================
// ADMIN PANEL (Only Admin)
// ===============================

document.querySelector('#section-admin .card:nth-child(1)')
  .addEventListener('click', () => goTo('control-panel'));

document.querySelector('#section-admin .card:nth-child(2)')
  .addEventListener('click', () => goTo('permission-setting'));


// ===============================
// Optional: User Role Check Example
// ===============================

const isAdmin = false; // আপনার ডাটাবেজ থেকে আসবে

document.querySelectorAll(".admin-only").forEach(btn => {
  if (!isAdmin) btn.style.display = "none";
});
document.getElementById("sellProductBtn").onclick = () => {
  window.location.href = "pages/sell.html";
};

document.getElementById("areaSaleBtn").onclick = () => {
  window.location.href = "pages/area-sale.html";
};

document.getElementById("supplierListBtn").onclick = () => {
  window.location.href = "pages/supplier.html";
};

function saveSupplier() {
  const supplier = {
    name: supName.value,
    phone: supPhone.value,
    area: supArea.value,
    status: "active"
  };

  firebase.database().ref("suppliers").push(supplier);
  alert("Supplier Added & Area Bound");
}

const supplierArea = "Dhaka-Mirpur-10"; // login থেকে

firebase.database()
  .ref("areaSales/" + supplierArea)
  .on("value", snap => {
    const data = snap.val();
    console.log("Today Purchase List:", data);
  });
  
document.addEventListener("DOMContentLoaded", () => {

  // 🔹 লগইন রোল সেট করা
  // পরীক্ষা করার জন্য সরাসরি localStorage এ সেট করুন
  // সম্ভবত আপনার মূল অ্যাপের লগইন ফাংশন থেকে এটি আসবে
  // "admin", "supplier", "customer" ইত্যাদি
  if (!localStorage.getItem("userType")) {
    localStorage.setItem("userType", "admin"); // ডিফল্ট Admin
  }

  const userType = localStorage.getItem("userType");
  console.log("Current User Type:", userType);

  // 🔹 অ্যাপ ইউজার লিস্ট বাটন ভিজিবিলিটি কন্ট্রোল
  const appUserListBtn = document.getElementById("appUserListBtn");
  if (userType !== "admin" && userType !== "supplier") {
    // শুধু Admin & Supplier দেখবে
    appUserListBtn.parentElement.style.display = "none"; // লিংক সহ লুকানো
  } else {
    appUserListBtn.parentElement.style.display = "block";
  }
});
