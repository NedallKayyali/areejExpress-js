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

for (let i = 0; i < perfumes.length; i++) {
  perfumesGrid.innerHTML += `
    <div class="perfume-card">
        <img src="${perfumes[i].image}">
        <div class="perfume-info">
            <div>
                <div class="perfume-category">${perfumes[i].categoryName}</div>
                <h3>${perfumes[i].name}</h3>
                <p>${perfumes[i].shortDesc}</p>
                </div>
                <div><strong>${perfumes[i].price}</strong></div>
            <button class="btn-details">عرض الهرم العطري</button>
        </div>
    </div>
    `;
}
