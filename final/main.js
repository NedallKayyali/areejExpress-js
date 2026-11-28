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
// 1. مصفوفة بيانات العطور
const perfumes = [
  {
    id: 1,
    name: "عود ملكي فاخر",
    price: 250, // تمت إضافة السعر هنا
    category: "oriental",
    categoryName: "عطور شرقية",
    shortDesc: "مزيج دافئ من العود الكمبودي والعنبر الأصيل.",
    image: "images/1.jpg",
    topNotes: "الزعفران، الهيل",
    heartNotes: "الورد الدمشقي، البخور",
    baseNotes: "العود الكمبودي، العنبر، المسك",
  },
  {
    id: 2,
    name: "خشب الصندل الغامض",
    price: 180, // تمت إضافة السعر هنا
    category: "woody",
    categoryName: "عطور خشبية",
    shortDesc: "رائحة خشبية هادئة تمنحك حضوراً قوياً طوال اليوم.",
    image: "images/2.jpg",
    topNotes: "البرغموت، الفلفل الأسود",
    heartNotes: "خشب الأرز، نجيل الهند",
    baseNotes: "خشب الصندل، الباتشولي",
  },
  {
    id: 3,
    name: "نسيم الياسمين",
    price: 160, // تمت إضافة السعر هنا
    category: "floral",
    categoryName: "عطور زهرية",
    shortDesc: "انتعاش الزهور البيضاء مع لمسة ناعمة من الفانيليا.",
    image: "images/3.jpg",
    topNotes: "زهر البرتقال، اليوسفي",
    heartNotes: "الياسمين، مسك الروم",
    baseNotes: "الفانيليا، المسك الأبيض",
  },
  {
    id: 4,
    name: "ليالي العنبر",
    price: 220, // تمت إضافة السعر هنا
    category: "oriental",
    categoryName: "عطور شرقية",
    shortDesc: "عطر مسائي ثقيل مصمم للمناسبات الخاصة.",
    image: "images/4.jpg",
    topNotes: "القرفة، جوزة الطيب",
    heartNotes: "الجلود، التبغ الحلو",
    baseNotes: "العنبر الداكن، حبوب التونكا",
  },
];

// العناصر الأساسية في الصفحة
const perfumesGrid = document.getElementById("perfumesGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

/* =================================================================== 
الخطوة رقم (1) عمل لوب علي عناصر المصفوفة وعرضها بالصفحة باستخدام الدوم
نريد الان وضع اللوب داخل دالة لكي تسهل استخدامها في اماكن اخري
   =================================================================== */
function displayPerfumes(items) {
  perfumesGrid.innerHTML = items
    .map((item) => {
      return `
        <div class="perfume-card">
          <img src="${item.image}">
          <div class="perfume-info">
              <div class="perfume-text">
                  <div class="perfume-category">${item.categoryName}</div>
                  <h3>${item.name}</h3>
                  <p>${item.shortDesc}</p>
              </div>
              <div class="perfume-price"><strong>${item.price}</strong><span style="color: #d4af37"> جنيه</span></div>
              <button class="btn-details" onclick="openPerfumeModal(${item.id})">عرض الهرم العطري</button>
          </div>
        </div>
      `;
    })
    .join("");
}

/* =================================================================== 
                الخطوة رقم (2) انشاء الفلترة  
   =================================================================== */
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.category;
    if (category === "all") {
      displayPerfumes(perfumes);
    } else {
      const filtered = perfumes.filter((p) => p.category === category);
      displayPerfumes(filtered);
    }
  });
});

/* =================================================================== 
              الخطوة رقم (3) انشاء الموديل  
=================================================================== */
const perfumeModal = document.getElementById("perfumeModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

function openPerfumeModal(id) {
  const perfume = perfumes.find((p) => p.id === id);
  if (!perfume) return;

  modalBody.innerHTML = `
        <img src="${perfume.image}" alt="${perfume.name}">
        <div class="perfume-category">${perfume.categoryName}</div>
        <h2>${perfume.name}</h2>
        <div class="notes-list">
          <p><strong>إفتتاحية العطر:</strong> ${perfume.topNotes}</p>
          <p><strong>قلب العطر:</strong> ${perfume.heartNotes}</p>
          <p><strong>قاعدة العطر:</strong> ${perfume.baseNotes}</p>
        </div>
        <a href="#calculator" class="btn-primary" onclick="selectPerfumeForOrder('${perfume.name}'); selectedPerfumePriceForOrder(${perfume.id})">اطلب توصيل هذا العطر</a>
        `;
  perfumeModal.classList.add("active");
}

// إغلاق النافذة المنبثقة
function closePerfumeModal() {
  perfumeModal.classList.remove("active");
}

// اغلاق النافذة المنبثقة من الزر (✕)
closeModal.addEventListener("click", closePerfumeModal);

/* هذا الكود يقوم بإغلاق النافذة المنبثقة (Modal)
تلقائياً عندما يضغط المستخدم في أي مكان خارج صندوق المحتوى  
(أي على الخلفية السوداء الشفافة المحيطة بالنافذة)
*/
perfumeModal.addEventListener("click", (e) => {
  if (e.target === perfumeModal) closePerfumeModal();
});

// عرض جميع العطور عند فتح الصفحة لأول مرة
displayPerfumes(perfumes);

/*===================================================================================
                                  قسم الحاسبة (4)         
====================================================================================*/
const citySelect = document.querySelector("#citySelect");
const deliveryRadios = document.querySelectorAll(
  'input[name = "deliveryType"]',
);
const totalCostEl = document.querySelector("#totalCost");
const estimatedTimeEl = document.querySelector("#estimatedTime");

/*===================================================================================
        الخطوة 1: إنشاء دالة تستقبل اسم العطر وتضعه في الحقل ثم تغلق النافذة           
====================================================================================*/
function selectPerfumeForOrder(perfumeName) {
  document.getElementById("selectedPerfume").value = perfumeName;
  closePerfumeModal();
}
/*===================================================================================
    الخطوه (2) انشاء دالة يتم استدعاؤها عند الضغط على أي عطر أو فتح نافذته  
====================================================================================*/
let selectedPerfumePrice = 0;

function selectedPerfumePriceForOrder(perfumeId) {
  const perfume = perfumes.find((item) => item.id == perfumeId);
  if (perfume) {
    selectedPerfumePrice = Number(perfume.price);
    calculateDelivery();
  }
}

/*===================================================================================
      الخطوه (3) انشاء دالة إعادة الحساب فوراً بعد اختيار العطر  
====================================================================================*/
let cityPrice = 0;
citySelect.addEventListener("change", () => {
  cityPrice = Number(citySelect.value);
  calculateDelivery();
});

let extraPrice = 0;
deliveryRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.checked) {
      extraPrice = Number(radio.value);
      calculateDelivery();
    }
  });
});

function calculateDelivery() {
  totalCostEl.textContent = selectedPerfumePrice + cityPrice + extraPrice;
  const selectedOption = citySelect.options[citySelect.selectedIndex];
  const time = selectedOption.getAttribute("data-time");
  estimatedTimeEl.textContent = time;
}

/*===================================================================================
                                    Whats App  
====================================================================================*/
const orderForm = document.getElementById("orderForm");
const formMessage = document.getElementById("formMessage");

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const perfume = document.getElementById("selectedPerfume").value.trim();
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();

  if (perfume === "" || name === "" || phone === "") {
    formMessage.textContent =
      "⚠️ يرجى تعبئة جميع الحقول المطلوبة قبل تأكيد الطلب.";
    formMessage.style.color = "#e74c3c";
    return;
  }

  const citySelect = document.getElementById("citySelect");
  const cityName = citySelect.options[citySelect.selectedIndex].text;
  const checkedRadio = document.querySelector(
    'input[name="deliveryType"]:checked',
  );
  const deliveryTypeName = checkedRadio.nextElementSibling.textContent;
  const finalCost = document.getElementById("totalCost").textContent;

  const CustomerData = {
    name: name,
    phone: phone,
    cityValue: citySelect.value,
  };
  localStorage.setItem("savedCustomer", JSON.stringify(CustomerData));

  const message = `
مرحباً، أود تأكيد طلب توصيل عطر جديد:
 *العطر المختار:* ${perfume}
 *الاسم:* ${name}
 *رقم الموبيل:* ${phone}
 *المدينة:* ${cityName}
 *نوع التوصيل:* ${deliveryTypeName}
 *الإجمالي المطلوب (شامل التوصيل):* ${finalCost}
`;

  const storeWhatsAppNumber = "970597758175";

  const whatsappURL = `https://wa.me/${storeWhatsAppNumber}?text=${encodeURIComponent(message)}`;

  formMessage.innerHTML = `⏳ جاري تحويلك إلى واتساب لإرسال الطلب...`;
  formMessage.style.color = "#2ecc71";

  // تفريغ خانة العطر وتصفير سعره
  document.getElementById("selectedPerfume").value = "";
  selectedPerfumePrice = 0;
  calculateDelivery();

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  setTimeout(() => {
    if (isMobile) {
      window.location.href = whatsappURL;
    } else {
      window.open(whatsappURL, "_blank");
    }
  }, 500);
});

/*
  ===> ToDo قائمة المهام اليوم/الخميس الموافق/26-11-2026
✅ 1- Create Function To Show Perfume-Name In selectedPerfume Input When Clicked On <a class="Calculator"> Link => selectPerfumeForOrder()
✅ 2- Create Function To Find Perfume-Price By Perfume-Id When Clicked On Calculator Link => selectedPerfumePriceForOrder()
✅ 3- Create Function To calculate Perfume Price + CitySelectCost + DeliveryCost When Clicked On Calculator Link => calculateDelivery():
✅ 3.1- Create AddEventListener To CitySelect To Change & call => calculateDelivery()
✅ 3.2- Create ForEach For Each Radio & Radio.AddEventListener To Change & IF Condition if(radio.chechked) & call => calculateDelivery()
✅ 4- Print Time In <p>الوقت المتوقع للوصول: <strong id="estimatedTime">24 ساعة</strong></p> From CitySelect data-time:
✅ 4.1- Bring selectedOption <option value="20" data-time="24 ساعة">القاهرة (داخل العاصمة)</option> By selectedIndex[0]  
✅ 4.2- Bring Time By selectedOption.getAttribute("data-time")
✅ 4.3- estimatedTime.textcontent = time
✅ 5- Create AddEventListner When Clicked on Submit Form Send selectedPerfume + customerName + customerPhone To Whats Up:
✅ 5.1- PreventDefault()
✅ 5.2- Bring CustomerData From (selectedPerfume + customerName + customerPhone) Value
✅ 5.3- Show Message If Data Is Empty In <p id="formMessage" class="form-message"></p> Show Message
✅ 5.4- Save CustomerData In LocalStorage
✅ 5.5- Style Whats App Message
✅ 5.6- Whats App Url
❌ 6
✅ 7- ScrollTopBtn: 
✅ 7.1- Show scrollTopBtn When Window.ScrollY > 300 
✅ 7.2- Create AddEventListener To scrollTopBtn To Make Window Go UP => window.scrollTo({ top: 0, behavior: "smooth" }); 
*/

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
