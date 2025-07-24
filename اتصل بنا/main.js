
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question")
    question.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
  // _____________________________الجدول___________________________

const contactForm = document.querySelector('.contact-form form');

contactForm.addEventListener('submit', function(event) {
    // منع  لإرسال النموذج
    event.preventDefault();

    // الحصول على قيم الحقول
    const name = this.querySelector('input[placeholder="الاسم"]').value;
    const email = document.getElementById("email").value;
    const phone = this.querySelector('input[placeholder="رقم الجوال"]').value;
    const subject = this.querySelector('input[placeholder="الموضوع"]').value;
    const message = this.querySelector('textarea').value;

    // تخزين البيانات في التخزين المحلي
    const formData = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message
    };

    localStorage.setItem('contactFormData', JSON.stringify(formData));

    //  رسالة تأكيد 
    alert('تم إرسال النموذج بنجاح!');
});

// استرجاع البيانات من التخزين المحلي
const storedData = localStorage.getItem('contactFormData');
// تحويل البيانات من سلسلة نصية إلى كائن
if (storedData) {
    const formData = JSON.parse(storedData);

    // عرض البيانات في مكان ما على الصفحة
    console.log(formData);
   
}
