document.addEventListener('DOMContentLoaded', function() {
    
    // ================= 1. تسلسل الأنيميشن عند فتح الموقع =================
    const ring = document.getElementById('animatedRing');
    const textWrapper = document.getElementById('animatedText');
    const heroBg = document.getElementById('heroBg');
    const cascadeItems = document.querySelectorAll('.cascade-item');

    // 1. تشغيل تأثير البوابة الزمنية (الغسالة) فوراً
    setTimeout(() => {
        ring.classList.add('spin-anim');
    }, 100);

    // 2. ظهور النص بعد 1.2 ثانية (في اللحظة التي تفتح فيها البوابة وتستقر)
    setTimeout(() => {
        textWrapper.classList.add('text-loaded');
    }, 1200);

    // 3. ظهور الخلفية بتأثير الـ Blur بعد 1.5 ثانية
    setTimeout(() => {
        heroBg.classList.add('bg-loaded');
    }, 1500);

    // 4. ظهور باقي العناصر المتتالية (الأزرار والأخبار)
    // 4. ظهور باقي العناصر المتتالية (الأزرار والأخبار)
    setTimeout(() => {
        cascadeItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 200); 
        });
        
        // التعديل هنا: كود إظهار الشريط العلوي مع باقي العناصر
        const topBar = document.querySelector('.fixed-top-bar');
        if(topBar) {
            topBar.classList.add('show-bar');
        }
    }, 2000);

    // 5. ظهور القائمة الجانبية مقفولة بعد الانتهاء من كل الأنيميشن (عند الثانية 2.5)
    setTimeout(() => {
        const sidebar = document.querySelector('.sidhedar');
        if(sidebar) {
            sidebar.classList.add('show-after-load');
        }
    }, 3000);


    // ================= 2. برمجة القائمة الجانبية المنبثقة =================
    const translations = {
    ar: {
        college_title: "الكلية التكنولوجية بالمطرية",
        home: "الصفحة الرئيسية",
        institutes: "معاهد الكلية",
        inst_mat_ind: "المعهد الفني الصناعي بالمطرية",
        inst_mat_com: "المعهد الفني التجاري بالمطرية",
        inst_shub_ind: "المعهد الفني الصناعي بشبرا",
        inst_shub_com: "المعهد الفني التجاري بشبرا",
        inst_mat_tourism: "المعهد الفني للسياحة والفنادق بالمطرية",
        inst_mat_irrigation: "المعهد الفني للري والصرف والمساحة بالمطرية",
        student_affairs: "شؤون الطلبة",
        affairs_info: "معلومات الشؤون",
        e_services: "الخدمات الإلكترونية",
        pay_fees: "دفع مصاريف المعهد",
        get_form: "استخراج الاستمارة",
        enrollment_cert: "إثبات قيد",
        metro_form: "استمارة المترو",
        institute_card: "كارنيه المعهد",
        materials_cd: "اسطوانة المواد",
        news: "الأخبار والفعاليات",
        maps: "موقع المعاهد",
        about_all: "حول الموقع والمعاهد",
        about_institutes: "حول المعاهد",
        about_site: "حول الموقع",
        contact_us: "تواصل معنا",
        facebook: "فيس بوك",
        whatsapp: "واتس اب",
        email: "البريد الإلكتروني",
        site_lang: "لغة الموقع",
        dark_mode: "الوضع الليلي",
        light_mode: "الوضع الفاتح"
    },
    en: {
        college_title: "Matareya Technological College",
        home: "Home Page",
        institutes: "College Institutes",
        inst_mat_ind: "Matareya Technical Industrial Institute",
        inst_mat_com: "Matareya Commercial Institute",
        inst_shub_ind: "Shubra Technical Industrial Institute",
        inst_shub_com: "Shubra Commercial Institute",
        inst_mat_tourism: "Matareya Tourism & Hotels Institute",
        inst_mat_irrigation: "Matareya Irrigation & Drainage Institute",
        student_affairs: "Student Affairs",
        affairs_info: "Affairs Information",
        e_services: "Electronic Services",
        pay_fees: "Pay Institute Fees",
        get_form: "Extract the Form",
        enrollment_cert: "Enrollment Certificate",
        metro_form: "Metro Form",
        institute_card: "Institute Card",
        materials_cd: "Course Materials CD",
        news: "News & Events",
        maps: "Institutes Locations",
        about_all: "About Site & Institutes",
        about_institutes: "About Institutes",
        about_site: "About Site",
        contact_us: "Contact Us",
        facebook: "Facebook",
        whatsapp: "WhatsApp",
        email: "Email Address",
        site_lang: "Language",
        dark_mode: "Dark Mode",
        light_mode: "Light Mode"
    },
    de: {
        college_title: "Technologisches College Matareya",
        home: "Startseite",
        institutes: "College-Institute",
        inst_mat_ind: "Technisches Industrielles Institut Matareya",
        inst_mat_com: "Kaufmännisches Institut Matareya",
        inst_shub_ind: "Technisches Industrielles Institut Shubra",
        inst_shub_com: "Kaufmännisches Institut Shubra",
        inst_mat_tourism: "Institut für Tourismus & Hotellerie Matareya",
        inst_mat_irrigation: "Institut für Bewässerung & Vermessung Matareya",
        student_affairs: "Studierendenangelegenheiten",
        affairs_info: "Informationen zu Angelegenheiten",
        e_services: "Elektronische Dienste",
        pay_fees: "Institutsgebühren bezahlen",
        get_form: "Formular anfordern",
        enrollment_cert: "Immatrikulationsbescheinigung",
        metro_form: "Metro-Formular",
        institute_card: "Institutsausweis",
        materials_cd: "Kursmaterialien-CD",
        news: "Neuigkeiten & Veranstaltungen",
        maps: "Standorte der Institute",
        about_all: "Über die Website & Institute",
        about_institutes: "Über die Institute",
        about_site: "Über die Website",
        contact_us: "Kontaktieren Sie uns",
        facebook: "Facebook",
        whatsapp: "WhatsApp",
        email: "E-Mail-Adresse",
        site_lang: "Sprache",
        dark_mode: "Dunkelmodus",
        light_mode: "Hellen Modus"
    }
};

// حساب الطول مع حل مشكلة القوائم المتداخلة بنسبة 100%
const updateMenuHeight = (menu) => {
    if (!menu) return;

    const isOpen = menu.parentElement.classList.contains("open");
    
    if (isOpen) {
        menu.style.height = menu.scrollHeight + "px";
    } else {
        // خطوة ضرورية لإلغاء الفراغ أثناء إغلاق القائمة
        menu.style.height = menu.scrollHeight + "px";
        menu.offsetHeight; // تفعيل إعادة رسم المتصفح
        menu.style.height = "0px";
    }

    // هنا يتم إخبار القائمة الأب (شؤون الطلبة) بالتمدد والانكماش مع القائمة الداخلية (الخدمات الإلكترونية)
    let parentMenu = menu.parentElement.closest('.dropdown-menu');
    if (parentMenu && parentMenu.parentElement.classList.contains("open")) {
        parentMenu.style.height = "auto";
    }
};

const closeAllDropdownsExcept = (currentDropdown) => {
    document.querySelectorAll(".dropdown-container.open").forEach(openDropdown => {
        if (openDropdown !== currentDropdown && !openDropdown.contains(currentDropdown)) {
            openDropdown.classList.remove("open");
            const menu = openDropdown.querySelector(":scope > .dropdown-menu");
            if (menu) menu.style.height = "0px";
        }
    });
};

document.querySelectorAll(".dropdown-toggle").forEach(dropdownToggle => {
    dropdownToggle.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();

        const dropdown = dropdownToggle.parentElement;
        const menu = dropdown.querySelector(":scope > .dropdown-menu");
        const isOpen = dropdown.classList.contains("open");

        closeAllDropdownsExcept(dropdown);
        dropdown.classList.toggle("open", !isOpen);
        updateMenuHeight(menu);
    });
});

const closeAllDropdowns = () => {
    document.querySelectorAll(".dropdown-container.open").forEach(openDropdown => {
        openDropdown.classList.remove("open");
        const menu = openDropdown.querySelector(":scope > .dropdown-menu");
        if (menu) menu.style.height = "0px";
    });
};

document.querySelectorAll(".sidebar-toggler").forEach(button => {
    button.addEventListener("click", () => {
        closeAllDropdowns();
        document.querySelector(".sidhedar").classList.toggle("sidebar-collapsed");
        
        // إزالة تأثيرات اللمس عند الإغلاق
        document.querySelectorAll('.nav-item.touch-hover').forEach(item => {
            item.classList.remove('touch-hover');
        });
    });
});

// إعداد القائمة بشكل افتراضي مصغر للموبايل

// ----------------------------------------------------
// تفعيل اللمس للموبايل (بديل الماوس عند القائمة المقفولة)
// ----------------------------------------------------
// ----------------------------------------------------
// تفعيل اللمس للموبايل (بديل الماوس عند القائمة المقفولة)
// ----------------------------------------------------
document.querySelectorAll('.nav-item').forEach(item => {
    
    // 1. تفعيل الضغطة (للموبايل أو الكمبيوتر)
    item.addEventListener('click', (e) => {
        const sidebar = document.querySelector('.sidhedar');
        if (sidebar.classList.contains('sidebar-collapsed')) {
            if (item.classList.contains('dropdown-container')) {
                e.preventDefault(); 
            }
            // إغلاق أي خانة تانية مفتوحة
            document.querySelectorAll('.nav-item.touch-hover').forEach(other => {
                if (other !== item) other.classList.remove('touch-hover');
            });
            // تفعيل الخانة دي
            item.classList.toggle('touch-hover');
        }
    });

    // 2. التعديل الجديد: إزالة التعليقة بمجرد خروج الماوس من الخانة
    item.addEventListener('mouseleave', () => {
        item.classList.remove('touch-hover');
    });
    
});


// إغلاق الخانات المفتوحة باللمس لو ضغطت بره
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item')) {
        document.querySelectorAll('.nav-item.touch-hover').forEach(item => {
            item.classList.remove('touch-hover');
        });
    }
});

// ----------------------------------------------------
// اللغات والوضع الليلي
// ----------------------------------------------------
document.querySelectorAll(".lang-selector").forEach(langBtn => {
    langBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const selectedLang = langBtn.getAttribute("data-lang");
        
        if (selectedLang === "ar") {
            document.documentElement.setAttribute("dir", "rtl");
            document.documentElement.setAttribute("lang", "ar");
        } else {
            document.documentElement.setAttribute("dir", "ltr");
            document.documentElement.setAttribute("lang", selectedLang);
        }

        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (translations[selectedLang][key]) {
                element.textContent = translations[selectedLang][key];
            }
        });
        
        closeAllDropdowns();
    });
});

const themeToggleBtn = document.getElementById("theme-toggle-btn");
const themeIcon = document.getElementById("theme-icon");
const themeText = document.getElementById("theme-text");

themeToggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.toggle("dark-theme");
    
    const isDark = document.body.classList.contains("dark-theme");
    const currentLang = document.documentElement.getAttribute("lang") || "ar";
    
    if (isDark) {
        themeIcon.textContent = "light_mode";
        themeText.textContent = translations[currentLang]["light_mode"];
        themeText.setAttribute("data-i18n", "light_mode");
    } else {
        themeIcon.textContent = "dark_mode";
        themeText.textContent = translations[currentLang]["dark_mode"];
        themeText.setAttribute("data-i18n", "dark_mode");
    }
});


    // ================= 3. برمجة تقليب الأخبار (Pagination) =================
    const newsItems = document.querySelectorAll('.news-item');
    const prevBtn = document.getElementById('prevPageBtn');
    const nextBtn = document.getElementById('nextPageBtn');
    const pageNumberDisplay = document.getElementById('pageNumberDisplay');
    
    const itemsPerPage = 4; // عدد الأخبار في كل صفحة (زي الصورة)
    const totalPages = Math.ceil(newsItems.length / itemsPerPage);
    let currentPage = 1;

    function showPage(page) {
        // حساب البداية والنهاية للأخبار المطلوبة
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        // إخفاء كل الأخبار أولاً
        newsItems.forEach(item => {
            item.style.display = 'none';
        });

        // إظهار الأخبار الخاصة بالصفحة الحالية فقط
        for(let i = startIndex; i < endIndex; i++) {
            if(newsItems[i]) {
                newsItems[i].style.display = 'flex';
            }
        }

        pageNumberDisplay.textContent = page;
    }

    // أزرار التقليب
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    // تشغيل الصفحة الأولى مبدئياً
    showPage(1);

});
// =========================================================================
// 4. برمجة صفحة المعهد التفاعلية (الانتقال، الأنيميشن، السكرول، والأزرار)
// =========================================================================

// الداتا الخاصة بالشعب (الاسم والأيقونة)
const departmentsData = {
    year1: [
        { name: "عمارة", icon: "fa-building" },
        { name: "شبكات وآلات كهربية", icon: "fa-network-wired" },
        { name: "سيارات", icon: "fa-car" },
        { name: "تشغيل وتشكيل", icon: "fa-cogs" },
        { name: "تكنولوجيا معلومات", icon: "fa-laptop-code" },
        { name: "مدني", icon: "fa-helmet-safety" },
        { name: "تبريد وتكييف", icon: "fa-snowflake" },
        { name: "أجهزة إلكترونية", icon: "fa-microchip" }
    ],
    year2: [
        { name: "ديكور", icon: "fa-paint-roller" },
        { name: "تكنولوجيا أشغال عامة", icon: "fa-road" },
        { name: "تكنولوجيا عمارة", icon: "fa-city" },
        { name: "جرافيك ووسائط متعددة", icon: "fa-photo-film" },
        { name: "تشغيل معادن", icon: "fa-gear" },
        { name: "تشكيل معادن", icon: "fa-hammer" },
        { name: "تكنولوجيا البناء والتشييد", icon: "fa-trowel-bricks" },
        { name: "تبريد وتكييف", icon: "fa-wind" },
        { name: "شبكات قوى كهربية", icon: "fa-bolt" },
        { name: "حسابات وشبكات", icon: "fa-server" },
        { name: "أجهزة إلكترونية", icon: "fa-plug" },
        { name: "الات كهربية", icon: "fa-motorcycle" }, // رمز تعبيري للآلات
        { name: "الكترونيات سيارات", icon: "fa-car-battery" },
        { name: "ميكانيكا سيارات", icon: "fa-wrench" }
    ]
};

// عناصر الـ DOM
const mainMatIndBtn = document.getElementById('mainMatIndBtn');
const sidebarMatInd = document.getElementById('sidebarMatInd');
const mainContent = document.querySelector('.main-content');
const specialPage = document.getElementById('instituteSpecialPage');
const movedButton = document.getElementById('movedButton');
const aboutText = document.getElementById('aboutText');
const typingBox = document.getElementById('typingBox');

const termsSection = document.getElementById('termsSection');
const deptsSection = document.getElementById('deptsSection');
const deptsGrid = document.getElementById('deptsGrid');
const waterBtns = document.querySelectorAll('.water-btn');

let selectedYear = null;
let selectedTerm = null; // ضفنا متغير الترم علشان نعرف نحدد المواد

// =========================================================================
// قاعدة بيانات المواد لكل شعبة (من الفرقة والترم)
// =========================================================================
const allSubjectsData = {
    // ---- الفرقة الأولى - الترم الأول ----
    "1_1_عمارة": ["تك ورش معمارية - الدرجة (150)", "مواد بناء - الدرجة (100)", "تك معلومات - الدرجة (150)", "رياضيات - الدرجة (150)", "لغة إنجليزية - الدرجة (50)", "رسم معماري - الدرجة (200)", "كتابة تقارير - الدرجة (100)"],
    "1_1_شبكات وآلات كهربية": ["رياضيات - الدرجة (150)", "لغة إنجليزية - الدرجة (50)", "تك ورش ميكانيكية - الدرجة (100)", "هندسة كهربية - الدرجة (150)", "تك ورش كهربية - الدرجة (100)", "تك معلومات - الدرجة (150)", "فيزياء - الدرجة (200)"],
    "1_1_سيارات": ["رسم فني - الدرجة (100)", "سلامة مهنية - الدرجة (50)", "هيدروليكا - الدرجة (150)", "رياضيات - الدرجة (150)", "لغة إنجليزية - الدرجة (50)", "مقدمة في تك سيارات - الدرجة (200)", "تك ورش سيارات - الدرجة (100)"],
    "1_1_تشغيل وتشكيل": ["تك ورش ميكانيكية - الدرجة (150)", "تك معلومات - الدرجة (150)", "رياضيات - الدرجة (150)", "مواد هندسية - الدرجة (150)", "تك ورش تشكيل - الدرجة (200)", "رسم فني - الدرجة (100)"],
    "1_1_تكنولوجيا معلومات": ["رياضيات - الدرجة (150)", "لغة إنجليزية - الدرجة (50)", "تك ورش شبكات - الدرجة (50)", "سلامة مهنية - الدرجة (50)", "أساسيات شبكات - الدرجة (150)", "تك معلومات - الدرجة (150)", "فيزياء - الدرجة (200)", "رسم فني - الدرجة (100)"],
    "1_1_مدني": ["رياضيات - الدرجة (150)", "لغة إنجليزية - الدرجة (50)", "تك ورش أساسية - الدرجة (100)", "خواص واختبار المواد - الدرجة (150)", "سلامة مهنية وبيئية - الدرجة (100)", "تك معلومات - الدرجة (150)", "رسم إنشائي - الدرجة (200)"],
    "1_1_تبريد وتكييف": ["رسم فني - الدرجة (100)", "أساسيات حراره - الدرجة (150)", "تكنولوجيا كهرباء - الدرجة (100)", "رياضيات - الدرجة (150)", "لغة إنجليزية - الدرجة (50)", "تك ورش ميكانيكية - الدرجة (150)", "فيزياء - الدرجة (200)"],
    "1_1_أجهزة إلكترونية": ["رسم فني - الدرجة (100)", "رياضيات - الدرجة (150)", "لغة إنجليزية - الدرجة (50)", "تك ورش ميكانيكية - الدرجة (100)", "سلامة مهنية - الدرجة (50)", "تك ورش إلكترونية - الدرجة (100)", "تك معلومات - الدرجة (150)", "فيزياء - الدرجة (200)"],

    // ---- الفرقة الأولى - الترم الثاني ----
    "1_2_سيارات": ["محركات - الدرجة (150)", "فيزياء - الدرجة (200)", "رسم صناعي - الدرجة (100)", "كهرباء سيارات - الدرجة (100)", "تك معلومات - الدرجة (150)", "تك ورش سيارات - الدرجة (200)"],
    "1_2_عمارة": ["تطبيقات حاسب - الدرجة (100)", "رسم تخصصي بالحاسب - الدرجة (150)", "تك ورش معمارية - الدرجة (150)", "رسم إنشائي مباني - الدرجة (150)", "لغة إنجليزية - الدرجة (50)", "مساحة عامة - الدرجة (150)", "قانون وتشريعات - الدرجة (150)"],
    "1_2_تشغيل وتشكيل": ["رسم صناعي - الدرجة (100)", "فيزياء - الدرجة (200)", "تقارير فنية - الدرجة (100)", "تك ورش تشغيل - الدرجة (200)", "لغة إنجليزية - الدرجة (50)", "سلامة - الدرجة (50)", "معاملات حرارية - الدرجة (200)"],
    "1_2_شبكات وآلات كهربية": ["آلات كهربية - الدرجة (200)", "تك ورش كهربية - الدرجة (100)", "تك مواد كهربية - الدرجة (100)", "رسم فني - الدرجة (100)", "لغة إنجليزية - الدرجة (50)", "تك إلكترونيات - الدرجة (150)", "دوائر منطق - الدرجة (150)", "سلامة مهنية - الدرجة (50)"],
    "1_2_أجهزة إلكترونية": ["هندسة كهربية - الدرجة (150)", "برامج تطبيقية - الدرجة (150)", "تك ورش إلكترونية - الدرجة (100)", "قياسات - الدرجة (150)", "لغة إنجليزية - الدرجة (50)", "تك إلكترونيات - الدرجة (150)", "دوائر منطق - الدرجة (150)"],
    "1_2_تكنولوجيا معلومات": ["هندسة كهربية - الدرجة (150)", "ربط شبكات - الدرجة (200)", "تحليل نظم - الدرجة (100)", "برمجة بلغة C++ - الدرجة (100)", "لغة إنجليزية - الدرجة (50)", "تك إلكترونيات - الدرجة (150)", "دوائر منطق - الدرجة (150)"],
    "1_2_تبريد وتكييف": ["أساسيات تبريد - الدرجة (200)", "رسم صناعي - الدرجة (100)", "أجهزة قياس - الدرجة (150)", "تحكم آلي - الدرجة (150)", "تك معلومات - الدرجة (150)", "سلامة مهنية - الدرجة (50)", "منظومات موائع - الدرجة (100)"],
    "1_2_مدني": ["تطبيقات حاسب - الدرجة (100)", "رسم إنشائي بالحاسب - الدرجة (150)", "مساحة مستوية - الدرجة (150)", "علاقات مهنية - الدرجة (100)", "لغة إنجليزية - الدرجة (50)", "تك تشييد - الدرجة (200)", "تحليل وإنشاءات - الدرجة (150)"],

    // ---- الفرقة الثانية - الترم الأول ----
    "2_1_ديكور": ["تنسيق مواقع (داخلية وخارجية) - الدرجة (100)", "دراسات بصرية - الدرجة (50)", "تكنولوجيا الديكور والتشطيبات - الدرجة (150)", "مواصفات فنية وحساب كميات - الدرجة (100)", "منظور داخلي ومجسمات - الدرجة (200)", "مبادئ رسومات تنفيذية - الدرجة (150)", "تك ورش معمارية متقدمة - الدرجة (100)"],
    "2_1_تكنولوجيا أشغال عامة": ["مبادئ تصميم وتنفيذ الطرق - الدرجة (150)", "أعمال الري والصرف - الدرجة (100)", "تنفيذ الأعمال المساحية - الدرجة (200)", "تكنولوجيا الأعمال المدنية - الدرجة (150)", "مبادئ تصميم وتنفيذ أعمال شبكات الهندسة الصحية - الدرجة (100)", "إعداد الرسومات التنفيذية (أشغال) - الدرجة (150)", "مبادئ الهيدروليكا - الدرجة (50)"],
    "2_1_تكنولوجيا عمارة": ["تنسيق مواقع (داخلية وخارجية) - الدرجة (100)", "تحليل إنشاءات ومبادئ خرسانة مسلحة - الدرجة (200)", "منظور معماري ومجسمات - الدرجة (150)", "مواصفات فنية وحساب كميات - الدرجة (100)", "تكنولوجيا العمارة وأساليب تنفيذ - الدرجة (150)", "مبادئ رسومات تنفيذية - الدرجة (150)", "تك ورش معمارية متقدمة - الدرجة (50)"],
    "2_1_جرافيك ووسائط متعددة": ["نظم التشغيل - الدرجة (100)", "قواعد البيانات Access - الدرجة (150)", "البرمجة المرئية - الدرجة (200)", "تصميم مواقع الإنترنت - الدرجة (150)", "كتابة تقارير فنية - الدرجة (50)", "مبادئ الجرافيك - الدرجة (100)", "برمجيات الإنترنت PHP - الدرجة (150)"],
    "2_1_تشغيل معادن": ["ضبط جودة إنتاج - الدرجة (100)", "تكنولوجيا قياس - الدرجة (100)", "لغة إنجليزية فنية (ميكانيكا) - الدرجة (50)", "مثبتات ومرشدات - الدرجة (150)", "تكنولوجيا تشغيل معادن - الدرجة (200)", "رسم هندسي بالحاسب - الدرجة (150)"],
    "2_1_تشكيل معادن": ["ضبط جودة الإنتاج - الدرجة (100)", "تكنولوجيا قياسات - الدرجة (100)", "لغة إنجليزية فنية (ميكانيكا) - الدرجة (50)", "اسطمبات التشكيل - الدرجة (150)", "تكنولوجيا تشكيل معادن - الدرجة (200)", "رسم هندسي بالحاسب - الدرجة (150)"],
    "2_1_تكنولوجيا البناء والتشييد": ["مبادئ تصميم وتنفيذ الخرسانة المسلحة - الدرجة (200)", "إدارة للمشروعات - الدرجة (100)", "مبادئ ميكانيكا التربة والأساسات - الدرجة (150)", "إعداد الرسومات التنفيذية (تشييد) - الدرجة (150)", "مبادئ تصميم وتنفيذ المنشآت المعدنية - الدرجة (150)", "إنشاء معماري - الدرجة (100)", "تكنولوجيا الإنشاءات - الدرجة (150)"],
    "2_1_تبريد وتكييف": ["ضبط جودة الإنتاج - الدرجة (100)", "أنظمة تكييف الهواء - الدرجة (150)", "لغة إنجليزية فنية (ميكانيكا) - الدرجة (50)", "التحكم في معدات التبريد - الدرجة (150)", "مبادئ تكنولوجيا التبريد - الدرجة (200)", "آلات كهربية تخصصية - الدرجة (100)", "رسم فني تخصصي - الدرجة (150)"],
    "2_1_شبكات قوى كهربية": ["شبكات قوى كهربية - الدرجة (200)", "إلكترونيات القوى الكهربية - الدرجة (150)", "ضبط جودة إنتاج - الدرجة (100)", "المعالجات والمتحكمات الدقيقة - الدرجة (150)", "أنظمة توليد القوى الكهربية - الدرجة (150)", "تحكم آلي - الدرجة (100)", "تك ورش الشبكات - الدرجة (50)"],
    "2_1_حسابات وشبكات": ["بنية وتصميم الشبكات - الدرجة (150)", "قواعد البيانات (Access) - الدرجة (100)", "البرمجة المرئية - الدرجة (200)", "المعالجات والمتحكمات الدقيقة - الدرجة (150)", "كتابة تقارير فنية - الدرجة (50)", "مكونات وترقية وصيانة الحاسبات - الدرجة (150)", "نظم تشغيل الجهاز الخادم - الدرجة (100)"],
    "2_1_أجهزة إلكترونية": ["إلكترونيات رقمية - الدرجة (150)", "إلكترونيات القوى الكهربية - الدرجة (150)", "أساسيات شبكات الحاسب - الدرجة (100)", "المعالجات والمتحكمات الدقيقة - الدرجة (200)", "دوائر إلكترونية - الدرجة (150)", "مكونات وترقية وصيانة الحاسبات - الدرجة (100)", "تك ورش إلكترونية متقدمة - الدرجة (50)"],
    "2_1_الات كهربية": ["شبكات قوى كهربية - الدرجة (150)", "إلكترونيات القوى الكهربية - الدرجة (150)", "ضبط جودة الإنتاج - الدرجة (100)", "المعالجات والمتحكمات الدقيقة - الدرجة (200)", "آلات كهربية متقدمة - الدرجة (150)", "تحكم آلي - الدرجة (100)", "تك ورش آلات - الدرجة (50)"],
    "2_1_الكترونيات سيارات": ["منظومات نقل الحركة - الدرجة (150)", "قياسات وتحكم - الدرجة (100)", "لغة إنجليزية فنية (سيارات) - الدرجة (50)", "محركات احتراق داخلي ونظم تشغيل - الدرجة (200)", "الدوائر الكهربية والإلكترونية بالمركبات - الدرجة (150)", "منظومات التعليق والتوجيه والفرامل - الدرجة (150)"],
    "2_1_ميكانيكا سيارات": ["منظومات نقل الحركة - الدرجة (150)", "منظومات وقود البنزين والحد من التلوث - الدرجة (200)", "لغة إنجليزية فنية (سيارات) - الدرجة (50)", "كهرباء سيارات - الدرجة (100)", "نظم إدارة المرور - الدرجة (100)", "منظومات التعليق والتوجيه والفرامل - الدرجة (150)"],

    // ---- الفرقة الثانية - الترم الثاني ----
    "2_2_ديكور": ["رسومات تنفيذية - الدرجة (150)", "إدارة مشروعات وتعاقدات - الدرجة (100)", "تجهيزات وتركيبات فنية - الدرجة (200)", "ظل وإظهار معماري - الدرجة (150)", "تاريخ العمارة والتذوق الفني - الدرجة (100)", "مشروع وثقافة العمل الحر (كاب) - الدرجة (50)", "سلامة مهنية وبيئية - الدرجة (100)"],
    "2_2_تكنولوجيا أشغال عامة": ["حساب كميات وتحليل أسعار أشغال - الدرجة (150)", "رسومات تشغيلية أشغال - الدرجة (200)", "صيانة شبكات الطرق ومبادئ النقل والمرور - الدرجة (100)", "تكنولوجيا الأعمال المدنية المتقدمة - الدرجة (150)", "كتابة التقارير الفنية - الدرجة (50)", "مشروع وثقافة العمل الحر (كاب) - الدرجة (50)", "أساليب التنفيذ ومعدات التشييد - الدرجة (100)", "التفتيش الفني وضبط الجودة أشغال - الدرجة (100)"],
    "2_2_تكنولوجيا عمارة": ["رسومات تنفيذية - الدرجة (150)", "إدارة المشروعات وتعاقدات - الدرجة (100)", "تجهيزات وتركيبات فنية - الدرجة (200)", "ظل وإظهار معماري - الدرجة (150)", "تاريخ عمارة وأسس تصميم - الدرجة (100)", "مشروع وثقافة العمل الحر (كاب) - الدرجة (50)", "سلامة مهنية وبيئية - الدرجة (100)"],
    "2_2_جرافيك ووسائط متعددة": ["برمجة الإنترنت بدقة Asp Net - الدرجة (150)", "البرمجة بلغة الجافا - الدرجة (200)", "برنامج معالجة الصور (فوتوشوب) - الدرجة (150)", "برمجة تطبيقات الويب - الدرجة (100)", "برنامج فلاش Flash - الدرجة (100)", "مشروع وثقافة العمل الحر (كاب) - الدرجة (50)"],
    "2_2_تشغيل معادن": ["ماكينات التشغيل الحديثة C.N.C - الدرجة (200)", "علاقات عمل ومهارات اتصال - الدرجة (50)", "صيانة ماكينات التشغيل - الدرجة (150)", "التشغيل الغير تقليدي - الدرجة (100)", "تنظيم صناعي - الدرجة (100)", "مشروع وثقافة العمل الحر (كاب) - الدرجة (50)"],
    "2_2_تشكيل معادن": ["تصنيع اللدائن - الدرجة (150)", "علاقات عمل ومهارات اتصال - الدرجة (50)", "صيانة ماكينات التشكيل - الدرجة (150)", "تكنولوجيا أفران وماكينات اللحام - الدرجة (200)", "تنظيم صناعي - الدرجة (100)", "مشروع وثقافة العمل الحر (كاب) - الدرجة (50)"],
    "2_2_تكنولوجيا البناء والتشييد": ["حساب كميات وتحليل أسعار تشييد - الدرجة (150)", "رسومات تشغيلية تشييد - الدرجة (150)", "تكنولوجيا الأعمال التكميلية - الدرجة (100)", "صيانة وإعادة تأهيل المنشآت - الدرجة (100)", "كتابة التقارير الفنية - الدرجة (50)", "مشروع وثقافة العمل الحر (كاب) - الدرجة (50)", "أساليب التنفيذ ومعدات التشييد - الدرجة (150)", "التفتيش الفني وضبط الجودة تشييد - الدرجة (100)"],
    "2_2_تبريد وتكييف": ["التحكم في معدات تكييف الهواء - الدرجة (150)", "تطبيقات تكييف الهواء - الدرجة (150)", "مقايسة صيانة وإصلاح معدات التكييف والتبريد - الدرجة (100)", "التحكم المنطقي المبرمج في منظومات التبريد وتكييف الهواء - الدرجة (200)", "كتابة التقارير الفنية - الدرجة (50)", "مشروع وثقافة العمل الحر (كاب) - الدرجة (50)", "تطبيقات تكنولوجيا التبريد - الدرجة (100)"],
    "2_2_شبكات قوى كهربية": ["محطات التوزيع الكهربي - الدرجة (150)", "وقاية شبكات قوى كهربية - الدرجة (150)", "صيانة شبكات قوى كهربية - الدرجة (100)", "المتحكمات المبرمجة PLC - الدرجة (200)", "كتابة التقارير الفنية - الدرجة (50)", "مشروع وثقافة العمل الحر (كاب) - الدرجة (50)", "برامج تطبيقية تخصصية (شبكات) - الدرجة (100)"],
    "2_2_حسابات وشبكات": ["الشبكات المتسعة WAN - الدرجة (150)", "تطبيقات مكتبية وإنترنت - الدرجة (100)", "معامل تطبيقية - الدرجة (200)", "نظم تشغيل الشبكات - الدرجة (150)", "قواعد البيانات المتقدمة - الدرجة (150)", "مشروع وثقافة العمل الحر (كاب) - الدرجة (50)"],
    "2_2_أجهزة إلكترونية": ["دوائر إلكترونية متقدمة - الدرجة (200)", "معامل تطبيقية - الدرجة (150)", "صيانة وإصلاح الأجهزة الإلكترونية - الدرجة (150)", "المتحكمات المبرمجة PLC - الدرجة (100)", "كتابة التقارير الفنية - الدرجة (50)", "مشروع وثقافة العمل الحر (كاب) - الدرجة (50)", "أجهزة اتصالات إلكترونية - الدرجة (100)"],
    "2_2_الات كهربية": ["محطات توليد القوى الكهربية وأجهزة الوقاية - الدرجة (200)", "آلات الجر الكهربي - الدرجة (100)", "صيانة الآلات الكهربية - الدرجة (150)", "المتحكمات المبرمجة PLC - الدرجة (100)", "كتابة التقارير الفنية - الدرجة (50)", "مشروع وثقافة العمل الحر (كاب) - الدرجة (50)", "برامج تطبيقية تخصصية (آلات) - الدرجة (100)"],
    "2_2_الكترونيات سيارات": ["منظومات كهربية وإلكترونية وتحكم - الدرجة (200)", "علاقات عمل ومهارات اتصال - الدرجة (50)", "صيانة وتشخيص أعطال المركبات - الدرجة (150)", "تخطيط وإدارة مراكز الصيانة - الدرجة (100)", "كتابة التقارير الفنية - الدرجة (50)", "مشروع وثقافة العمل الحر (كاب) - الدرجة (50)", "النظم الإلكترونية المدمجة - الدرجة (150)"],
    "2_2_ميكانيكا سيارات": ["منظومات وقود الديزل - الدرجة (200)", "علاقات عمل ومهارات اتصال - الدرجة (50)", "صيانة وتشخيص أعطال المركبات - الدرجة (150)", "تخطيط وإدارة مراكز الصيانة - الدرجة (100)", "كتابة التقارير الفنية - الدرجة (50)", "مشروع وثقافة العمل الحر (كاب) - الدرجة (50)", "ناقل الحركة الأوتوماتيكي - الدرجة (150)"]
};


// 1. دالة تفعيل انتقال الصفحة
function triggerInstitutePage(e) {
    e.preventDefault();
    
    // جلب اسم المعهد ديناميكياً من الزرار الذي تم الضغط عليه
    let instituteName = "المعهد الفني";
    if(this.querySelector('span')) {
        instituteName = this.querySelector('span').innerText.replace(/\n/g, ' ');
    } else if (this.innerText) {
        instituteName = this.innerText;
    }

    mainContent.classList.add('fade-out-main');
    specialPage.classList.add('active-page');
    setTimeout(() => { movedButton.classList.add('fly-top-right'); }, 100);
    prepareTypingText();

    // ---- الكود الجديد الخاص بإضافة المعهد للمسارات ----
    currentPath = [
        { id: 'home', title: 'الصفحة الرئيسية' },
        { id: 'sections', title: 'الأقسام' },
        { id: 'institute', title: instituteName }
    ];
    renderBreadcrumbs();
}
if(mainMatIndBtn) mainMatIndBtn.addEventListener('click', triggerInstitutePage);
if(sidebarMatInd) sidebarMatInd.addEventListener('click', triggerInstitutePage);


function prepareTypingText() {
    // 1. جلب النص وتنظيفه من المسافات المكررة
    const rawText = aboutText.textContent;
    const cleanText = rawText.replace(/\s+/g, ' ').trim(); 
    
    aboutText.innerHTML = '';
    const spans = [];
    
    // 2. التعديل الجوهري: قسمنا النص لـ (كلمات) بدل (حروف) لضمان اتصال الحروف
    const words = cleanText.split(' ');
    
    words.forEach((word, index) => {
        let span = document.createElement('span');
        // هنا نضع الكلمة ككتلة واحدة في الـ span لضمان اتصال الحروف
        span.textContent = word;
        
        // إضافة مسافة بعد كل كلمة إلا الكلمة الأخيرة
        if (index < words.length - 1) {
            span.textContent += ' '; 
        }

        aboutText.appendChild(span);
        spans.push(span);
    });

    setTimeout(() => {
        let currentIndex = 0;
        
        // 3. رجعنا السرعة لـ 150 ملي ثانية لتكون سرعة كلمة بكلمة طبيعية ومريحة للعين
        const typingInterval = setInterval(() => {
            if(currentIndex < spans.length) {
                spans[currentIndex].classList.add('revealed');
                currentIndex++;
            } else {
                clearInterval(typingInterval); // بيوقف لما يخلص كل الكلمات
            }
        }, 150); 
    }, 1000);
}

// التعديل 3: تم حذف كود (specialPage.addEventListener('scroll')) نهائياً
// لضمان عدم اختفاء وظهور النص مرة أخرى عند النزول والصعود بالبكرة.

// برمجة اختفاء السطور (سطر سطر) من فوق لتحت عند النزول بالبكرة


// 3. برمجة أزرار الفرقة والترم (تأثير الماس)
const subjectsSection = document.getElementById('subjectsSection'); // جلبنا الجدول

waterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const type = this.getAttribute('data-type');
        const val = this.getAttribute('data-val');

        const siblings = this.parentElement.querySelectorAll('.water-btn');
        siblings.forEach(sib => sib.classList.remove('active-water'));
        this.classList.add('active-water');

        if (type === 'year') {
            selectedYear = val;
            
            // -- كود المسار الجديد (إضافة الفرقة) --
            const instIndex = currentPath.findIndex(p => p.id === 'institute');
            if(instIndex !== -1) currentPath = currentPath.slice(0, instIndex + 1);
            currentPath.push({ id: 'year', title: this.innerText });
            renderBreadcrumbs();
            // ------------------------------------

            termsSection.classList.add('show-block');
            deptsSection.classList.remove('show-block');
            subjectsSection.classList.remove('show-block');
            document.querySelectorAll('[data-type="term"]').forEach(t => t.classList.remove('active-water'));
        } 
        else if (type === 'term') {
            selectedTerm = val;
            
            // -- كود المسار الجديد (إضافة الترم) --
            const yearIndex = currentPath.findIndex(p => p.id === 'year');
            if(yearIndex !== -1) currentPath = currentPath.slice(0, yearIndex + 1);
            currentPath.push({ id: 'term', title: this.innerText });
            renderBreadcrumbs();
            // ------------------------------------

            subjectsSection.classList.remove('show-block');
            deptsSection.classList.add('show-block');
            buildDepartments(selectedYear);
        }
    });
});

// 4. بناء أزرار الشعب وتأثير انتقال الأيقونة وبناء الجدول
function buildDepartments(year) {
    deptsGrid.innerHTML = ''; 
    let targetData = year === '1' ? departmentsData.year1 : departmentsData.year2;

    targetData.forEach((dept, index) => {
        const btn = document.createElement('button');
        btn.className = 'dept-btn';
        btn.style.animation = `fadeInNews 0.5s ease forwards ${index * 0.05}s`;
        btn.style.opacity = '0';
        
        btn.innerHTML = `
            <span>${dept.name}</span>
            <i class="fa-solid ${dept.icon}"></i>
        `;

        btn.addEventListener('click', function() {
            document.querySelectorAll('.dept-btn').forEach(b => {
                if(b !== this) b.classList.remove('selected-dept');
            });
            this.classList.toggle('selected-dept');

            if(this.classList.contains('selected-dept')) {
                // -- كود المسار الجديد (إضافة اسم الشعبة) --
                const termIndex = currentPath.findIndex(p => p.id === 'term');
                if(termIndex !== -1) currentPath = currentPath.slice(0, termIndex + 1);
                currentPath.push({ id: 'dept', title: dept.name });
                renderBreadcrumbs();
                // ------------------------------------------
                
                showSubjectsTable(selectedYear, selectedTerm, dept.name);
            } else {
                subjectsSection.classList.remove('show-block');
            }
        });

        deptsGrid.appendChild(btn);
    });
}

// 5. دالة سحرية لإنشاء جدول المواد بناءً على الفرقة والترم والشعبة
// 5. دالة سحرية لإنشاء جدول المواد بناءً على الفرقة والترم والشعبة (معدلة بـ 4 خانات)
function showSubjectsTable(year, term, deptName) {
    const subjectsTitle = document.getElementById('subjectsTitle');
    const subjectsTbody = document.getElementById('subjectsTbody');

    // 1. تغيير عنوان الزرار اللامع لاسم الشعبة
    subjectsTitle.innerHTML = `شعبة ${deptName}`;

    // 2. البحث عن المواد في قاعدة البيانات الخاصة بنا
    const dataKey = `${year}_${term}_${deptName}`;
    let subjectsList = allSubjectsData[dataKey];

    // تصفير الجدول
    subjectsTbody.innerHTML = '';

    if (!subjectsList || subjectsList.length === 0) {
        // لو مفيش مواد متسجلة للشعبة دي (دمجنا الـ 4 خانات)
        subjectsTbody.innerHTML = `<tr><td colspan="4"><div class="td-content" style="color:#e74c3c; font-weight:bold;">عفواً، لم يتم إدراج مواد لهذه الشعبة بعد.</div></td></tr>`;
    } else {
        // لو فيه مواد، هنرصها صف صف
        subjectsList.forEach(subjectString => {
            // كود سحري لفصل المادة عن الدرجة وحذف الكلمات الزيادة
            let parts = subjectString.split('-');
            let subjectName = parts[0] ? parts[0].trim() : subjectString;
            let gradeOnly = parts[1] ? parts[1].replace('الدرجة', '').replace('(', '').replace(')', '').trim() : 'غير محدد';

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><div class="td-content">${subjectName}</div></td>
                <td><div class="td-content">${gradeOnly}</div></td>
                <td><div class="td-content">لم يتم التحديد</div></td>
                <td><div class="td-content">لم يتم تحديد CV <i class="fa-solid fa-file-pdf pdf-icon"></i></div></td>
            `;
            subjectsTbody.appendChild(tr);
        });
    }

    // 3. إظهار الجدول بحركة ناعمة
    subjectsSection.classList.add('show-block');
    
    // 4. النزول بالبكرة أوتوماتيك علشان الطالب يشوف الجدول
    setTimeout(() => {
        subjectsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 200);
}

// =========================================================================
// 5. نظام مسارات التنقل (Breadcrumbs) وزر الرجوع للرئيسية
// =========================================================================

const breadcrumbContainer = document.getElementById('breadcrumbContainer');

// المصفوفة التي تحفظ المكان الحالي
let currentPath = [
    { id: 'home', title: 'الصفحة الرئيسية' }
];

// دالة لرسم المسارات في الـ HTML
function renderBreadcrumbs() {
    breadcrumbContainer.innerHTML = ''; 
    
    currentPath.forEach((step, index) => {
        const item = document.createElement('div');
        item.className = 'breadcrumb-item';
        item.dataset.id = step.id;
        item.textContent = step.title;
        
        // لو ضغطنا على المسار
        item.addEventListener('click', () => handleBreadcrumbClick(step.id, index));
        breadcrumbContainer.appendChild(item);

        // إضافة علامة السهم (>) بين الخانات، ما عدا آخر خانة
        if (index < currentPath.length - 1) {
            const separator = document.createElement('span');
            separator.className = 'breadcrumb-separator';
            separator.textContent = '>'; // علامة السهم التي طلبتها
            breadcrumbContainer.appendChild(separator);
        }
    });
}

// إظهار المسار الأساسي "الصفحة الرئيسية" بعد انتهاء أنيميشن فتح الموقع (عند الثانية 2.5)
setTimeout(() => {
    breadcrumbContainer.classList.add('visible');
    renderBreadcrumbs();
}, 2500);

// ================= دالة الرجوع للصفحة الرئيسية بأنيميشن البلع =================
function returnToHome() {
    // 1. إعادة الصفحة الأصلية وإخفاء صفحة المعهد الخاصة
    const specialPage = document.getElementById('instituteSpecialPage');
    const mainContent = document.querySelector('.main-content');
    const movedBtn = document.getElementById('movedButton');
    
    if(specialPage) specialPage.classList.remove('active-page');
    if(mainContent) mainContent.classList.remove('fade-out-main');
    if(movedBtn) movedBtn.classList.remove('fly-top-right');

    // مسح نص البحث عند العودة للرئيسية
    if(siteSearchInput) siteSearchInput.value = '';

    // 2. تصفير كل التحديدات داخل صفحة المعهد
    const termsSection = document.getElementById('termsSection');
    const deptsSection = document.getElementById('deptsSection');
    const subjectsSection = document.getElementById('subjectsSection');
    
    if(termsSection) termsSection.classList.remove('show-block');
    if(deptsSection) deptsSection.classList.remove('show-block');
    if(subjectsSection) subjectsSection.classList.remove('show-block');
    
    document.querySelectorAll('.water-btn').forEach(btn => btn.classList.remove('active-water'));
    document.querySelectorAll('.dept-btn').forEach(btn => btn.classList.remove('selected-dept'));
    
    selectedYear = null;
    selectedTerm = null;

    // 3. تشغيل أنيميشن "البلع" باتجاه اليمين للمسارات الفرعية فقط
    const items = breadcrumbContainer.querySelectorAll('.breadcrumb-item, .breadcrumb-separator');
    items.forEach((el, index) => {
        if (index > 0) {
            el.classList.add('swallowed'); 
        }
    });

    // 4. تحديث مصفوفة المسارات بعد انتهاء تأثير الأنيميشن
    setTimeout(() => {
        currentPath = [{ id: 'home', title: 'الصفحة الرئيسية' }];
        renderBreadcrumbs();
    }, 400);
}

// دالة التحكم عند الضغط على أي مسار من فوق
function handleBreadcrumbClick(id, index) {
    if (id === 'home') {
        returnToHome();
    } else {
        // لو ضغط على مسار في المنتصف، نقص المصفوفة لحد المسار ده
        const itemsToRemove = currentPath.length - 1 - index;
        if(itemsToRemove > 0) {
            currentPath = currentPath.slice(0, index + 1);
            renderBreadcrumbs();
            
            // نخفي الأقسام بناءً على رجوعنا لفين
            if (id === 'institute') {
                document.getElementById('termsSection').classList.remove('show-block');
                document.getElementById('deptsSection').classList.remove('show-block');
                document.getElementById('subjectsSection').classList.remove('show-block');
                document.querySelectorAll('.water-btn').forEach(btn => btn.classList.remove('active-water'));
            } else if (id === 'year') {
                 document.getElementById('deptsSection').classList.remove('show-block');
                 document.getElementById('subjectsSection').classList.remove('show-block');
                 // مسح تحديد الترم
                 document.querySelectorAll('[data-type="term"]').forEach(t => t.classList.remove('active-water'));
            } else if (id === 'term') {
                document.getElementById('subjectsSection').classList.remove('show-block');
                document.querySelectorAll('.dept-btn').forEach(btn => btn.classList.remove('selected-dept'));
            }
        }
    }
}

// 5. تفعيل زر القائمة الجانبية (الصفحة الرئيسية)
const sidebarHomeBtn = document.getElementById('sidebarHomeBtn');
if (sidebarHomeBtn) {
    sidebarHomeBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        returnToHome(); // نفس دالة الرجوع
        
        // إغلاق القائمة الجانبية في الموبايل لو كانت مفتوحة
        document.querySelector(".sidhedar").classList.add("sidebar-collapsed");
    });
}

// =========================================================================
// =========================================================================
// 6. تشغيل نظام البحث الذكي (باقتراحات فورية)
// =========================================================================
const siteSearchInput = document.getElementById('siteSearchInput');
const searchSuggestions = document.getElementById('searchSuggestions');
const siteSearchBtn = document.getElementById('siteSearchBtn');

// 1. تجميع الداتا الموجودة في الموقع عشان نبحث فيها (المعاهد، الشعب، المواد)
let smartSearchData = [];

// إضافة المعاهد يدوياً
const instituteList = ["المعهد الفني الصناعي بالمطرية", "المعهد الفني التجاري بالمطرية", "المعهد الفني الصناعي بشبرا", "المعهد الفني التجاري بشبرا", "المعهد الفني للسياحة والفنادق بالمطرية", "المعهد الفني للري والصرف بالمطرية"];
instituteList.forEach(inst => smartSearchData.push({ text: inst, type: "معهد" }));

// إضافة الشعب (بنجيبها من المتغير departmentsData بتاعك)
Object.values(departmentsData).forEach(year => {
    year.forEach(dept => {
        // نمنع التكرار لو الشعبة موجودة في سنة تانية
        if (!smartSearchData.some(item => item.text === dept.name)) {
            smartSearchData.push({ text: dept.name, type: "شعبة" });
        }
    });
});

// إضافة المواد (بنجيبها من المتغير allSubjectsData بتاعك)
let addedSubjects = [];
Object.values(allSubjectsData).forEach(subjectArray => {
    subjectArray.forEach(subjectString => {
        // بنفصل اسم المادة عن الدرجة زي ما أنت عامل في الكود
        let subjectName = subjectString.split('-')[0].trim();
        if (!addedSubjects.includes(subjectName)) {
            addedSubjects.push(subjectName);
            smartSearchData.push({ text: subjectName, type: "مادة" });
        }
    });
});

// 2. برمجة ظهور الاقتراحات بمجرد ما يكتب حرفين
if (siteSearchInput && searchSuggestions) {
    siteSearchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        
        // لو مسح الكلام أو كتب حرف واحد، نخفي القائمة
        if (query.length < 2) {
            searchSuggestions.style.display = 'none';
            return;
        }

        // فلترة الداتا بناءً على اللي بيكتبه
        const matchedResults = smartSearchData.filter(item => 
            item.text.toLowerCase().includes(query)
        );

        // تفريغ القائمة القديمة
        searchSuggestions.innerHTML = '';

        if (matchedResults.length > 0) {
            matchedResults.forEach(result => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.innerHTML = `<span class="suggestion-badge">${result.type}</span> ${result.text}`;
                
                // لما يدوس على الاقتراح
                div.addEventListener('click', () => {
                    siteSearchInput.value = result.text;
                    searchSuggestions.style.display = 'none';
                    executeSearch(result.text, result.type);
                });

                searchSuggestions.appendChild(div);
            });
            searchSuggestions.style.display = 'block';
        } else {
            searchSuggestions.innerHTML = `<div class="suggestion-item" style="color: #e74c3c; justify-content:center;">لا توجد نتائج مطابقة</div>`;
            searchSuggestions.style.display = 'block';
        }
    });

    // إخفاء القائمة لو ضغط بالماوس في أي مكان فاضي في الشاشة
    document.addEventListener('click', function(e) {
        if (e.target !== siteSearchInput && e.target !== searchSuggestions) {
            searchSuggestions.style.display = 'none';
        }
    });
}

// 3. الدالة اللي بتنفذ الحدث لما نختار حاجة من البحث
function executeSearch(keyword, type) {
    if (type === "معهد" || type === "شعبة") {
        // بيبحث عن الزرار اللي فيه اسم المعهد أو الشعبة ويعمل عليه إضاءة
        const buttons = document.querySelectorAll('.cascade-item, .water-btn, .dept-btn');
        let found = false;
        buttons.forEach(btn => {
            if (btn.innerText.toLowerCase().includes(keyword.toLowerCase())) {
                btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
                btn.style.animation = "glowingEffect 1.5s infinite alternate";
                setTimeout(() => { btn.style.animation = ""; }, 4000);
                found = true;
            }
        });
        if(!found) {
            alert("يرجى اختيار الفرقة والترم لتظهر أقسام/شعب هذا الاختيار.");
        }
    } 
    else if (type === "مادة") {
        // لو اختار مادة، بيشوف لو الجدول مفتوح يعمل تظليل عليها
        const tableRows = document.querySelectorAll('.subjects-table tbody tr');
        let foundSubject = false;
        
        tableRows.forEach(row => {
            if (row.innerText.toLowerCase().includes(keyword.toLowerCase())) {
                row.style.background = "rgba(241, 196, 15, 0.4)"; // أصفر قوي
                row.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => { row.style.background = ""; }, 4000); // يختفي بعد 4 ثواني
                foundSubject = true;
            }
        });

        if (!foundSubject) {
            alert(`المادة (${keyword}) صحيحة، لكن يجب فتح الشعبة الخاصة بها من جدول المعهد لتحديدها.`);
        }
    }
}

// إضافة تأثير الإضاءة للـ CSS برمجياً (زي ما كانت عندك)
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes glowingEffect {
        0% { box-shadow: 0 0 5px #4facfe; border-color: #4facfe; }
        100% { box-shadow: 0 0 20px #FFD700; border-color: #FFD700; transform: scale(1.03); }
    }
`, styleSheet.cssRules.length);

// ================= زر العودة للأعلى =================
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// إظهار وإخفاء الزرار بناءً على النزول في الصفحة
window.addEventListener('scroll', () => {
    // لو المستخدم نزل أكتر من 300 بيكسل، الزرار يظهر
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        // لو طلع فوق تاني، الزرار يختفي
        scrollToTopBtn.classList.remove('show');
    }
});

// لما المستخدم يدوس على الزرار
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0, // يطلع لأول الصفحة خالص
        behavior: 'smooth' // يطلع بنعومة مش مرة واحدة
    });
});
