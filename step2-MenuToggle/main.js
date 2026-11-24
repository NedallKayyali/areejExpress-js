const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function setMenuState(open) {
  if (open) {
    navLinks.classList.add("active");
    menuToggle.textContent = "✕";

    const fullHeight = navLinks.scrollHeight + "px";

    navLinks.animate(
      [
        { height: "0px", opacity: 0, overflow: "hidden" },
        { height: fullHeight, opacity: 1, overflow: "hidden" },
      ],
      {
        duration: 350,
        easing: "ease-out",
      },
    );
  } else {
    const fullHeight = navLinks.scrollHeight + "px";
    menuToggle.textContent = "☰";

    const closeAnimate = navLinks.animate(
      [
        { height: fullHeight, opacity: 1, overflow: "hidden" },
        { height: "0px", opacity: 0, overflow: "hidden" },
      ],
      {
        duration: 300,
        easing: "ease-in",
      },
    );

    closeAnimate.onfinish = () => {
      navLinks.classList.remove("active");
    };
  }
}

menuToggle.addEventListener("click", () => {
  const isCurrentlyOpen = navLinks.classList.contains("active");
  setMenuState(!isCurrentlyOpen);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      setMenuState(false);
    }
  });
});

/*
====================================================================
شرح مبسط لآلية عمل كود القائمة المنسدلة (تخيلها كستارة نافذة):
====================================================================

1. التجهيز: إمساك العناصر باليد
- menuToggle: هو الزر الذي نضغط عليه (☰).
- navLinks: هي القائمة التي تحتوي على الروابط.

2. الدالة setMenuState(open): عقل العملية
نعطيها كلمة سر واحدة: (true للفتح) أو (false للإغلاق).

أولاً: في حالة الفتح -> if (open)
- إظهار القائمة أولاً: نضع كلاس active لكي تظهر في الصفحة ونتمكن من قياس طولها.
- تغيير شكل الزر: نبدل رمز الثلاثة خطوط (☰) إلى علامة الإغلاق (✕).
- قياس الطول بالمتر (scrollHeight): نسأل المتصفح عن طول القائمة الفعلي بالبكسل.
- تشغيل الحركة (animate): نصنع حركة مدتها 0.35 ثانية تبدأ من ارتفاع صفر وشفافية معدومة، وتصل للطول الكامل بوضوح تام.

ثانياً: في حالة الإغلاق -> else
- قياس الطول الحالي: نقيس طول القائمة وهي مفتوحة قبل أن نطويها.
- إعادة شكل الزر: نرجع علامة (✕) إلى رمز القائمة (☰).
- تشغيل حركة الإغلاق: حركة عكسية تبدأ من الطول الكامل وتنكمش تدريجياً حتى تصل للصفر.
- الانتظار حتى النهاية (onfinish): ننتظر انتهاء الانكماش البصري تماماً، ثم نحذف كلاس active لإخفائها نهائياً حتى لا تختفي فجأة قبل رؤية الحركة.

3. متى يعمل هذا الكود؟ (الأحداث)
1. menuToggle.addEventListener("click", () => { ... })
	• يربط حدث النقر (click) بزر القائمة (menuToggle).
	• عندما يضغط المستخدم على هذا الزر، يتم تنفيذ الكود الموجود داخل الأقواس.
2. const isCurrentlyOpen = navLinks.classList.contains("active");
	• يتحقق مما إذا كانت القائمة (navLinks) مفتوحة حالياً أم لا.
	• يقوم بذلك عبر فحص وجود كلاس باسم "active" داخل عنصر القائمة:
		• إذا كان الكلاس موجوداً، تكون النتيجة true (القائمة مفتوحة).
		• إذا لم يكن موجوداً، تكون النتيجة false (القائمة مغلقة).
3. setMenuState(!isCurrentlyOpen);
	• يستدعي دالة أخرى اسمها setMenuState لتغيير حالة القائمة.
	• علامة التعجب ! تعني العكس:
		• إذا كانت القائمة مفتوحة (true)، فسيتم إرسال false لإغلاقها.
		• إذا كانت مغلقة (false)، فسيتم إرسال true لفتحها.
الخلاصة: الكود يعمل كمفتاح تبديل (Toggle)يفتح القائمة إذا كانت مغلقة، ويغلقها إذا كانت مفتوحة 
====================================================================
*/
