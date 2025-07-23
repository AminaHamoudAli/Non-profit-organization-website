// // يمكنك مستقبلاً إضافة تفاعل بحث أو قائمة منبثقة هنا
// document.getElementById('searchBtn').addEventListener('click', () => {
//   alert('زر البحث يعمل!');
// });
 const dropdownLinks = document.querySelectorAll(".dropdown > a");
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// تحقق من الوضع المخزن في localStorage عند تحميل الصفحة
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}
 
  // دالة لإظهار/إخفاء القوائم المنسدلة عند الضغط
  document.addEventListener("DOMContentLoaded", function () {
    dropdownLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // يمنع الانتقال للرابط #

        // إغلاق أي قائمة مفتوحة أخرى
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