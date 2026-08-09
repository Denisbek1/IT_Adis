// IT Adis Main Web Application Logic

// Language Dictionary (RU is primary; KG prepared structure references RU for now)
const ruTranslations = {
  heroBadge: '⚡ IT-образование нового поколения',
  heroTitle: 'Профессия <br />в <span class="text-green">IT</span> начинается <br /><span class="text-purple">здесь</span>',
  heroSubtitle: 'Практическое обучение от экспертов, реальные проекты и поддержка на каждом этапе.',
  btnStart: 'Начать обучение',
  btnLearnMore: 'Узнать больше',
  stat1Label: 'Студентов обучились',
  stat2Label: 'Актуальных курсов',
  stat3Label: 'Реальных проектов',
  stat4Label: 'Трудоустроенных выпускников',
  aboutTag: 'О ЦЕНТРЕ',
  aboutHeading1: 'Мы готовим IT-специалистов, которые <span class="text-green">нужны рынку</span>',
  aboutDesc1: 'IT Adis — современный образовательный центр в Бишкеке. Мы обучаем востребованным IT-профессиям на практике и помогаем начать карьеру в IT.',
  aboutHeading2: 'Обучаем IT-профессиям и готовим к <span class="text-green">реальной карьере</span>',
  aboutDesc2: 'Мы сочетаем практические знания, поддержку наставников и проекты, которые помогают уверенно стартовать в IT.',
  benefit1Title: 'Опытные наставники',
  benefit1Desc: 'Поддержка экспертов на каждом этапе',
  benefit2Title: 'Практический подход',
  benefit2Desc: 'Учимся на практике и реальных проектах',
  benefit3Title: 'Карьерный рост',
  benefit3Desc: 'Помогаем найти работу и развиваться в IT',
  directionsTag: 'НАПРАВЛЕНИЯ',
  directionsHeading: 'Выберите направление',
  linkAllCourses: 'Все курсы',
  course1Desc: 'Освойте один из самых популярных языков программирования.',
  course2Desc: 'Создавайте современные и быстрые веб-интерфейсы с нуля.',
  course3Desc: 'Проектируйте удобные и красивые интерфейсы для людей.',
  internshipTag: 'СТАЖИРОВКА',
  internshipHeading: 'Стажировка в IT-компаниях',
  internshipDesc: 'Получите реальный опыт, работайте над задачами и развивайтесь вместе с профессионалами.',
  btnInternship: 'Узнать подробнее',
  navHome: 'Главная',
  navCourses: 'Курсы',
  navInternship: 'Стажировка',
  navContact: 'Контакты',
  btnContact: 'Связаться',
  labelName: 'Ваше имя',
  labelPhone: 'Номер телефона',
  btnSubmitForm: 'Отправить заявку',
  modalTitle: 'Связаться с нами',
  modalSubtitle: 'Оставьте заявку и мы перезвоним вам в течение 15 минут'
};

const translations = {
  RU: ruTranslations,
  KG: { ...ruTranslations } // Structure prepared for future KG translation
};

let currentLang = 'RU';

function setLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];

  document.getElementById('langRU').classList.toggle('active', lang === 'RU');
  document.getElementById('langKG').classList.toggle('active', lang === 'KG');

  for (const key in dict) {
    const el = document.getElementById(`t-${key}`);
    if (el) {
      el.innerHTML = dict[key];
    }
  }

  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  if (modalTitle) modalTitle.textContent = dict.modalTitle;
  if (modalSubtitle) modalSubtitle.textContent = dict.modalSubtitle;
}

// Event Listeners Initialization
document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Toggle Button
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'RU' ? 'KG' : 'RU';
      setLanguage(nextLang);
    });
  }

  // 2. Mobile Menu Drawer
  const menuOpenBtn = document.getElementById('menuOpenBtn');
  const menuCloseBtn = document.getElementById('menuCloseBtn');
  const menuDrawer = document.getElementById('menuDrawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    menuDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    menuDrawer.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (menuOpenBtn) menuOpenBtn.addEventListener('click', openDrawer);
  if (menuCloseBtn) menuCloseBtn.addEventListener('click', closeDrawer);
  if (menuDrawer) {
    menuDrawer.addEventListener('click', (e) => {
      if (e.target === menuDrawer) closeDrawer();
    });
  }
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));



  // 4. Courses Carousel Scroll Indicators Sync
  const coursesTrack = document.getElementById('coursesTrack');
  const dots = document.querySelectorAll('.carousel-dots .dot');

  if (coursesTrack && dots.length > 0) {
    coursesTrack.addEventListener('scroll', () => {
      const scrollLeft = coursesTrack.scrollLeft;
      const cardWidth = coursesTrack.querySelector('.course-card')?.offsetWidth || 280;
      const index = Math.round(scrollLeft / cardWidth);

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        const cardWidth = coursesTrack.querySelector('.course-card')?.offsetWidth || 280;
        coursesTrack.scrollTo({
          left: i * cardWidth,
          behavior: 'smooth'
        });
      });
    });
  }

  // 5. FAQ Accordion Logic (Strictly one open at a time)
  const faqAccordion = document.getElementById('faqAccordion');
  if (faqAccordion) {
    const faqItems = faqAccordion.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const header = item.querySelector('.faq-header');
      if (header) {
        header.addEventListener('click', () => {
          const isOpen = item.classList.contains('active');
          
          // Close all items
          faqItems.forEach(i => i.classList.remove('active'));

          // If clicked item wasn't open, open it
          if (!isOpen) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  // 6. Course Detail Page Dynamic Loader
  const courseDetailTitle = document.getElementById('courseDetailTitle');
  if (courseDetailTitle) {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('course') || 'python';

    const coursesData = {
      'python': {
        title: 'Python Developer',
        badge: 'Back-end разработка',
        desc: 'Освойте один из самых популярных и востребованных языков программирования. Обучение с нуля до первых реальных проектов под руководством экспертов.',
        duration: '6 месяцев',
        schedule: '3 раза в неделю',
        format: 'Офлайн / Онлайн'
      },
      'frontend': {
        title: 'Frontend Developer',
        badge: 'Web разработка',
        desc: 'Создавайте современные, быстрые и адаптивные веб-интерфейсы с нуля. Изучите HTML5, CSS3, JavaScript и React на практических кейсах.',
        duration: '5 месяцев',
        schedule: '3 раза в неделю',
        format: 'Офлайн / Онлайн'
      },
      'ux-ui': {
        title: 'UX/UI Дизайнер',
        badge: 'UI/UX Дизайн',
        desc: 'Проектируйте удобные и эстетичные интерфейсы для сайтов и мобильных приложений. Освойте Figma, логику интерфейсов и исследование пользователей.',
        duration: '4 месяца',
        schedule: '2 раза в неделю',
        format: 'Офлайн / Онлайн'
      },
      'data-analyst': {
        title: 'Data Analyst',
        badge: 'Анализ данных',
        desc: 'Анализируйте большие массивы данных и помогайте бизнесу принимать верные решения. Изучите SQL, Excel, Python для аналитики и визуализацию.',
        duration: '5 месяцев',
        schedule: '3 раза в неделю',
        format: 'Офлайн / Онлайн'
      }
    };

    const data = coursesData[courseId] || coursesData['python'];
    courseDetailTitle.textContent = data.title;
    
    const descEl = document.getElementById('courseDetailDesc');
    if (descEl) descEl.textContent = data.desc;

    const badgeEl = document.getElementById('courseDetailBadge');
    if (badgeEl) badgeEl.textContent = data.badge;

    const durationEl = document.getElementById('courseDetailDuration');
    if (durationEl) durationEl.textContent = data.duration;

    const scheduleEl = document.getElementById('courseDetailSchedule');
    if (scheduleEl) scheduleEl.textContent = data.schedule;

    const formatEl = document.getElementById('courseDetailFormat');
    if (formatEl) formatEl.textContent = data.format;

    const courseRegisterBtn = document.getElementById('courseRegisterBtn');
    if (courseRegisterBtn) {
      courseRegisterBtn.addEventListener('click', openModal);
    }
  }

  // 7. Standard Navigation & Anchor Scroll Handling
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      if (href === '#contactModal') {
        e.preventDefault();
        openModal();
        return;
      }

      if (href && href !== '#' && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          const targetTop = targetElement.offsetTop - 70;
          window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
          });
        }
      }

      const drawer = document.getElementById('menuDrawer');
      if (drawer && drawer.classList.contains('active')) {
        closeDrawer();
      }
    });
  });
});
