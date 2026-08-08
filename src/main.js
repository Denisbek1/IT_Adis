// IT Adis Main Web Application Logic

// Language Dictionary (RU is primary; KG prepared structure references RU for now)
const ruTranslations = {
  logoSubtitle: 'ОКУУ БОРБОРУ',
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

  // 3. Contact & Application Modal
  const contactModal = document.getElementById('contactModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const contactModalOpenBtn = document.getElementById('contactModalOpenBtn');
  const startModalOpenBtn = document.getElementById('startModalOpenBtn');
  const internshipModalBtn = document.getElementById('internshipModalBtn');
  const bottomNavContact = document.getElementById('bottomNavContact');
  const drawerContactLink = document.getElementById('drawerContactLink');
  const contactForm = document.getElementById('contactForm');

  function openModal() {
    contactModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    contactModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (contactModalOpenBtn) contactModalOpenBtn.addEventListener('click', openModal);
  if (startModalOpenBtn) startModalOpenBtn.addEventListener('click', openModal);
  if (internshipModalBtn) internshipModalBtn.addEventListener('click', openModal);
  if (bottomNavContact) bottomNavContact.addEventListener('click', (e) => { e.preventDefault(); openModal(); });
  if (drawerContactLink) drawerContactLink.addEventListener('click', (e) => { e.preventDefault(); closeDrawer(); openModal(); });
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (contactModal) {
    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) closeModal();
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Спасибо! Ваша заявка успешно отправлена. Менеджер IT Adis свяжется с вами.');
      closeModal();
      contactForm.reset();
    });
  }

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

  // 5. Active state for mobile bottom navigation on scroll
  const sections = document.querySelectorAll('section[id]');
  const bottomNavItems = document.querySelectorAll('.bottom-nav-item');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    bottomNavItems.forEach(item => {
      const href = item.getAttribute('href');
      if (href && href.includes(currentSectionId)) {
        item.classList.add('active');
      } else if (currentSectionId === 'hero' && href && href.includes('hero')) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });
});
