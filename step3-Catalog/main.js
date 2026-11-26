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
        <a href="#calculator" class="btn-primary" onclick="selectPerfumeForOrder(this.dataset.perfume)" data-perfume= "${perfume.name}">اطلب توصيل هذا العطر</a>
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
              الخطوه (3) انشاء دالة لنقل اسم المنتج الي حقل العطر المختار      
====================================================================================*/
function selectPerfumeForOrder(perfumeName) {
  document.getElementById("selectedPerfume").value = perfumeName;

  closePerfumeModal();
}

/*===================================================================================
              الخطوه (4) انشاء متغير لتخزين سعر العطر المختار
             ثانيا-انشاء دالة يتم استدعائها عند اختيار اي عطر  
====================================================================================*/
let selectedPerfumePrice = 0;

function selectedPerfumePriceForOrder(perfumeId) {
  const perfume = perfumes.find((item) => item.id == perfumeId);
  if (perfume) {
    selectPerfumeForOrder = Number(perfume.price);
  }
  console.log(selectPerfumeForOrder);
}
