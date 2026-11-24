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
              <button class="btn-details">عرض الهرم العطري</button>
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

displayPerfumes(perfumes);
