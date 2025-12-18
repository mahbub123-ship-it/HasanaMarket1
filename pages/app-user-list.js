document.addEventListener("DOMContentLoaded", () => {
  // লগইন থেকে userType নেওয়া হবে, উদাহরণ:
  // localStorage থেকে বা Firebase Auth থেকে পাওয়া যাবে
  const userType = localStorage.getItem("userType") || "admin"; // ডিফল্ট admin

  const supplierSection = document.getElementById("supplierSection");
  const accessDenied = document.getElementById("accessDenied");

  if (userType === "admin" || userType === "supplier") {
    supplierSection.style.display = "grid";
    accessDenied.style.display = "none";
  } else {
    supplierSection.style.display = "none";
    accessDenied.style.display = "block";
  }
});
