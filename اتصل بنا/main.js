// دالة السؤال والاجواب
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question")
    question.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
  // _____________________________الجدول___________________________

// const contactForm = document.querySelector('.contact-form form');

// contactForm.addEventListener('submit', function(event) {
//     // منع  لإرسال النموذج
//     event.preventDefault();

//     // الحصول على قيم الحقول
//     const name = this.querySelector('input[placeholder="الاسم"]').value;
//     const email = document.getElementById("email").value;
//     const phone = this.querySelector('input[placeholder="رقم الجوال"]').value;
//     const subject = this.querySelector('input[placeholder="الموضوع"]').value;
//     const message = this.querySelector('textarea').value;

//     // تخزين البيانات التخزين المحلي
//     const formData = {
//         name: name,
//         email: email,
//         phone: phone,
//         subject: subject,
//         message: message
//     };
//     localStorage.setItem('contactFormData', JSON.stringify(formData));
//     alert('تم إرسال النموذج بنجاح!');
// });

// const storedData = localStorage.getItem('contactFormData');
// if (storedData) {
//     const formData = JSON.parse(storedData);
//     console.log(formData);
// }
// تجربة 2
    const email = document.getElementById("email").value.trim();
    const name2 = document.getElementById("Name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("text").value.trim();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let errors = [];

    const email1 = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // شروط
    if (!email || !email1.test(email)) {
      errors.push("يرجى إدخال بريد إلكتروني صالح.");
    }
    if (!name2) {
      errors.push("يرجى إدخال الاسم.");
    }
    const phone1 = /^[0-9]{7,15}$/; // برضه زي الشروط
    if (!phone || !phone1.test(phone)) {
      errors.push("يرجى إدخال رقم جوال صحيح.");
    }
    if (!subject) {
      errors.push("يرجى إدخال الموضوع.");
    }
    if (errors.length > 0) {
      alert(errors.join(" || "));
    } else {
      alert(" تم إرسال النموذج بنجاح!");
      form.submit(); // إرسال
    }
  });
});
