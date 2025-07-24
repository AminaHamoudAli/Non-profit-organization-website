
document.addEventListener("DOMContentLoaded", function () {
  const dropdownLinks = document.querySelectorAll(".dropdown > a");

  dropdownLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // إغلاق أي قائمة مفتوحة 
      document.querySelectorAll(".dropdown-menu").forEach(menu => {
        if (menu !== this.nextElementSibling) {
          menu.style.display = "none";
        }
      });

      // تبديل إظهار/إخفاء القائمة الحالية
      const submenu = this.nextElementSibling;
      if (submenu.style.display === "block") {
        submenu.style.display = "none";
      } else {
        submenu.style.display = "block";
      }
    });
  });

  // إغلاق القائمة إذا تم النقر خارجها
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown-menu").forEach(menu => {
        menu.style.display = "none";
      });
    }
  });
});

// // --------------طريقة اخرى-----------------------
//  const dropdownLinks = document.getElementById("toggleButton")
//  dropdownLinks.addEventListener('click',function(){
//   document.body.classList.toggle("dark-mode")
//  })

  const toggleBtn = document.getElementById("darkModeToggle");

  // تحميل الوضع من localStorage عند دخول الصفحة
  window.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("dark-mode");
    if (savedMode === "enabled") {
      document.body.classList.add("dark-mode");
    }
  });

  // تبديل الوضع وحفظه
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
    } else {
      localStorage.setItem("dark-mode", "disabled");
    }
  });


