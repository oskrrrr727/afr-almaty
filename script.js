/* ==================== БАЗОВОЕ ==================== */
const WHATSAPP = "77474815942";
let currentLang = "ru";

/* ==================== ДАННЫЕ КВАРТИР ====================
   10 квартир (премиум), ЖК «Молодёжный», Шевченко 85.
   Фото — в своих папках: assets/apartments/1/1.jpg ... 1/10.jpg и т.д.
   Названия переведены на 3 языка; rooms/guests — ключи словаря. */
const apartments = [
  { title: { ru: "Премиум-студия «Люкс»",         kk: "«Люкс» премиум-студиясы",       en: "«Lux» premium studio" },        rooms: "room_studio", guests: "guests_2",  folder: 1,  photos: 10 },
  { title: { ru: "Стильная студия",               kk: "Стильді студия",                en: "Stylish studio" },              rooms: "room_studio", guests: "guests_2",  folder: 2,  photos: 10 },
  { title: { ru: "Однокомнатная с видом на горы", kk: "Тауға көрінісі бар бір бөлмелі", en: "One-room with mountain view" }, rooms: "room_one",    guests: "guests_23", folder: 3,  photos: 10 },
  { title: { ru: "Светлая студия",                kk: "Жарық студия",                  en: "Bright studio" },               rooms: "room_studio", guests: "guests_2",  folder: 4,  photos: 10 },
  { title: { ru: "Однушка «Комфорт+»",            kk: "«Комфорт+» бір бөлмелі",         en: "«Comfort+» one-room" },         rooms: "room_one",    guests: "guests_23", folder: 5,  photos: 10 },
  { title: { ru: "Премиум-студия «Панорама»",     kk: "«Панорама» премиум-студиясы",   en: "«Panorama» premium studio" },   rooms: "room_studio", guests: "guests_2",  folder: 6,  photos: 10 },
  { title: { ru: "Дизайнерская студия",           kk: "Дизайнерлік студия",            en: "Designer studio" },             rooms: "room_studio", guests: "guests_2",  folder: 7,  photos: 10 },
  { title: { ru: "Однокомнатная с балконом",      kk: "Балконы бар бір бөлмелі",        en: "One-room with balcony" },       rooms: "room_one",    guests: "guests_23", folder: 8,  photos: 10 },
  { title: { ru: "Студия-лофт",                   kk: "Лофт-студия",                   en: "Loft studio" },                 rooms: "room_studio", guests: "guests_2",  folder: 9,  photos: 10 },
  { title: { ru: "Однушка «Премьер»",             kk: "«Премьер» бір бөлмелі",          en: "«Premier» one-room" },          rooms: "room_one",    guests: "guests_23", folder: 10, photos: 10 },
];

/* ==================== ДАННЫЕ ОФОРМЛЕНИЯ ====================
   Фото — в папках assets/decor/1/1.jpg ... и т.д. photos — число фото. */
const decor = [
  {
    title: { ru: "С днём рождения",     kk: "Туған күнге",           en: "Birthday" },
    text:  { ru: "Воздушные шары, свечи и праздничный декор в квартире.", kk: "Әуе шарлары, шамдар және мерекелік безендіру.", en: "Balloons, candles and festive decor in the apartment." },
    price: "12 000 ₸", folder: 1, photos: 5, wa: "Хочу оформление на день рождения (AFR in Almaty)",
  },
  {
    title: { ru: "Романтический вечер", kk: "Романтикалық кеш",      en: "Romantic evening" },
    text:  { ru: "Свечи, лепестки роз, мягкий свет и атмосфера для двоих.", kk: "Шамдар, раушан жапырақтары, жұмсақ жарық — екеуге арналған атмосфера.", en: "Candles, rose petals, soft light and a mood for two." },
    price: "10 000 ₸", folder: 2, photos: 5, wa: "Хочу романтическое оформление (AFR in Almaty)",
  },
  {
    title: { ru: "Романтика + напитки", kk: "Романтика + сусындар",  en: "Romance + drinks" },
    text:  { ru: "Полное романтическое оформление с игристым и деталями.", kk: "Толық романтикалық безендіру, шампанмен және бөлшектермен.", en: "Full romantic setup with sparkling wine and details." },
    price: "15 000 ₸", folder: 3, photos: 5, wa: "Хочу романтическое оформление с напитками (AFR in Almaty)",
  },
];

/* ==================== СЛОВАРЬ ПЕРЕВОДОВ ==================== */
const T = {
  ru: {
    nav_apartments: "Квартиры", nav_tariffs: "Тарифы", nav_decor: "Оформление", nav_reviews: "Отзывы", nav_faq: "Вопросы", nav_contacts: "Контакты",
    book: "Забронировать",
    hero_title: 'Аренда квартир<br /><span class="accent">в Алматы</span> — посуточно<br />и по часовой',
    hero_subtitle: "Премиум-квартиры в ЖК «Молодёжный» на Шевченко. Безупречная чистота, заселение 24/7, бронирование за минуту в WhatsApp.",
    hero_book: "Забронировать в WhatsApp", hero_view: "Смотреть квартиры",
    stat1: "подписчиков в Instagram", stat2: "среднее заселение", stat3: "довольных гостей",
    adv_eyebrow: "Почему выбирают нас", adv_title: "Всё для комфортного проживания",
    feat1_t: "Чистые квартиры", feat1_d: "Генеральная уборка и свежий текстиль перед каждым заездом.",
    feat2_t: "Заселение за 10–15 минут", feat2_d: "Заселим быстро и без ожиданий — в любое время дня и ночи, 24/7.",
    feat3_t: "Конфиденциальность", feat3_d: "Полная приватность и никаких лишних вопросов при заселении.",
    feat4_t: "Всё для жизни", feat4_d: "Wi-Fi, техника, посуда, бытовая химия и полотенца уже на месте.",
    feat5_t: "Локация премиум", feat5_d: "ЖК «Молодёжный» на Шевченко — рядом с центром и главными точками города.",
    feat6_t: "Договор и чек", feat6_d: "Официальное оформление и фискальный чек по запросу.",
    apt_eyebrow: "Каталог", apt_title: "Премиум-квартиры в ЖК «Молодёжный»", apt_lead: "Все квартиры — премиум-класса, в одном комплексе на ул. Шевченко 85. Выберите вариант и напишите нам о датах.",
    tar_eyebrow: "Тарифы", tar_title: "Честные цены без переплат", tar_lead: "Аренда по часам, на день, ночь или полные сутки. Ниже — полный прайс.",
    tar1_name: "По часовой", tar1_desc: "Для встреч, отдыха и коротких визитов.", tar1_price: "от 6 000 ₸<span>/ 2 часа</span>",
    tar1_li1: "Минимум 2 часа", tar1_li2: "Полотенца и чистое бельё", tar1_li3: "Wi-Fi и вся техника", tar1_li4: "Полная конфиденциальность",
    tar_badge: "Популярное",
    tar2_name: "День или ночь", tar2_desc: "Комфортный отдых днём или ночёвка.", tar2_price: "от 15 000 ₸<span>/ день · ночь</span>",
    tar2_li1: "День или ночь на выбор", tar2_li2: "Заселение за 10–15 минут", tar2_li3: "Полный набор для проживания", tar2_li4: "Договор и чек по запросу",
    tar3_name: "Сутки", tar3_desc: "Полные 24 часа для командировок и отдыха.", tar3_price: "от 25 000 ₸<span>/ сутки</span>",
    tar3_li1: "Полные сутки — 24 часа", tar3_li2: "Скидка при длительном сроке", tar3_li3: "Уборка перед заездом", tar3_li4: "Заселение 24/7",
    th_tariff: "Тариф", th_2h: "2 часа", th_day: "День", th_night: "Ночь", th_daily: "Сутки",
    grp_weekday: "Будни · Пн–Пт", grp_weekend: "Выходные · Пт–Вс", cls_standard: "Стандарт", cls_lux: "Люкс",
    tar_note: "Все цены указаны в тенге (₸). Точную стоимость на ваши даты уточним в WhatsApp.",
    dec_eyebrow: "Дополнительно", dec_title: "Оформление праздников", dec_lead: "Сделаем вечер особенным — оформим квартиру под ваш повод.",
    dec_card_eyebrow: "Оформление", order: "Заказать",
    rev_eyebrow: "Отзывы", rev_title: "Что говорят гости",
    rev1_text: "«Прилетела ночным рейсом, заселили в третьем часу ночи без вопросов. Квартира точь-в-точь как на фото — чисто, тепло, уютно. В WhatsApp отвечали за минуту.»", rev1_role: "Посуточно · 2 недели назад",
    rev2_text: "«Жил неделю по работе. До центра пешком, рядом магазины, в квартире есть всё вплоть до зарядок и посуды. Договор и чек дали сразу — для командировки то, что нужно.»", rev2_role: "Командировка · месяц назад",
    rev3_text: "«Заказывали квартиру с романтическим оформлением на годовщину — свечи, шары, всё как просили. Сделали красиво и тактично, без лишних вопросов. Спасибо!»", rev3_role: "Оформление · 3 недели назад",
    faq_eyebrow: "Вопросы и ответы", faq_title: "Частые вопросы",
    faq1_q: "Как забронировать квартиру?", faq1_a: "Напишите нам в WhatsApp, укажите даты и количество гостей — мы подберём подходящий вариант и подтвердим бронь. Обычно это занимает пару минут.",
    faq2_q: "Нужна ли предоплата?", faq2_a: "Для большинства квартир предоплата не требуется — оплата при заселении. Для длительной аренды и праздничных дат условия обсуждаются индивидуально.",
    faq3_q: "Во сколько заезд и выезд?", faq3_a: "Заселяем в любое время — 24/7. Стандартный выезд до 12:00, но при наличии свободных дат мы гибко подходим к времени заезда и выезда.",
    faq4_q: "Что входит в стоимость?", faq4_a: "Wi-Fi, бытовая техника, посуда, свежее постельное бельё и полотенца, бытовая химия и уборка перед заездом. Всё для комфортного проживания уже на месте.",
    faq5_q: "Можно ли заселиться с животными?", faq5_a: "В части квартир — да, по договорённости. Напишите нам заранее, и мы подберём вариант, где можно с питомцем.",
    faq6_q: "Выдаёте ли договор и чек?", faq6_a: "Да, оформляем официальный договор аренды и предоставляем фискальный чек по запросу — удобно для командировочных и отчётности.",
    nav_rules: "Правила",
    rules_eyebrow: "Правила", rules_title: "Правила проживания", rules_lead: "Коротко о главном — чтобы отдых прошёл без сюрпризов.",
    rule1_t: "Заселение по документам", rule1_d: "При заселении нужно удостоверение личности или паспорт.",
    rule2_t: "Возвратный депозит", rule2_d: "Небольшой депозит при заселении — вернём при выезде, если всё в порядке.",
    rule3_t: "Не курим", rule3_d: "Курение в квартирах запрещено — в том числе кальян и вейп.",
    rule4_t: "Без шумных вечеринок", rule4_d: "Тишина с 23:00 до 08:00 — уважаем соседей.",
    rule5_t: "Бережное отношение", rule5_d: "Порча имущества возмещается по договорённости.",
    rule6_t: "Количество гостей", rule6_d: "Заселяются только гости, указанные при бронировании.",
    rules_note: 'Полные правила — в разделе «правила» в нашем <a href="https://instagram.com/afr_inalmaty" target="_blank" rel="noopener">Instagram</a>.',
    map_2gis: "Открыть в 2ГИС", map_google: "Открыть в Google Maps", map_google_short: "Google Maps",
    loc_eyebrow: "Расположение", loc_title: "Алматы, ул. Шевченко 85", loc_lead: "ЖК «Молодёжный» — в центре города, рядом с метро, ТРЦ и главными достопримечательностями.",
    cta_title: "Готовы заселиться?", cta_text: "Напишите нам — подберём квартиру под ваши даты и бюджет за пару минут.", cta_btn: "Написать в WhatsApp",
    footer_tagline: "Аренда квартир в Алматы посуточно и по часовой. Чисто • Конфиденциально • 24/7.",
    footer_contacts: "Контакты", footer_address: "Алматы, ул. Шевченко 85, ЖК «Молодёжный»", footer_nav: "Навигация", footer_rights: "Все права защищены.", footer_city: "Алматы, Казахстан",
    wa_hint: "Обычно отвечаем за пару минут",
    complex: "ЖК «Молодёжный», Шевченко 85", price_from: "от 25 000 ₸ / сутки", badge_premium: "Премиум",
    room_studio: "Студия", room_one: "1 комната", guests_2: "2 гостя", guests_23: "2–3 гостя",
  },

  kk: {
    nav_apartments: "Пәтерлер", nav_tariffs: "Бағалар", nav_decor: "Безендіру", nav_reviews: "Пікірлер", nav_faq: "Сұрақтар", nav_contacts: "Байланыс",
    book: "Брондау",
    hero_title: '<span class="accent">Алматыда</span> пәтер<br />жалдау — тәулікке<br />және сағатпен',
    hero_subtitle: "Шевченко көшесіндегі «Молодёжный» кешеніндегі премиум-пәтерлер. Тап-таза, тәулік бойы орналастырамыз, WhatsApp арқылы бір минутта брондаңыз.",
    hero_book: "WhatsApp арқылы брондау", hero_view: "Пәтерлерді қарау",
    stat1: "Instagram жазылушысы", stat2: "орналасу уақыты", stat3: "риза қонақ",
    adv_eyebrow: "Неге бізді таңдайды", adv_title: "Жайлы тұруға қажеттің бәрі",
    feat1_t: "Таза пәтерлер", feat1_d: "Әр келгенде жалпы тазалық және жаңа төсек-орын.",
    feat2_t: "10–15 минутта орналасу", feat2_d: "Күтусіз әрі жылдам орналастырамыз — тәулік бойы, 24/7.",
    feat3_t: "Құпиялылық", feat3_d: "Толық жеке кеңістік, орналасу кезінде артық сұрақ жоқ.",
    feat4_t: "Өмірге қажеттің бәрі", feat4_d: "Wi-Fi, тұрмыстық техника, ыдыс, тазалық құралдары мен сүлгілер дайын.",
    feat5_t: "Премиум орналасу", feat5_d: "Шевченкодағы «Молодёжный» кешені — орталық пен басты жерлерге жақын.",
    feat6_t: "Шарт пен чек", feat6_d: "Ресми рәсімдеу және сұраныс бойынша фискалдық чек.",
    apt_eyebrow: "Каталог", apt_title: "«Молодёжный» кешеніндегі премиум-пәтерлер", apt_lead: "Барлық пәтер — премиум класс, Шевченко 85-тегі бір кешенде. Ұнағанын таңдап, күндерді бізге жазыңыз.",
    tar_eyebrow: "Бағалар", tar_title: "Артық төлемсіз әділ баға", tar_lead: "Сағатпен, күндізге, түнге не толық тәулікке. Төменде — толық баға тізімі.",
    tar1_name: "Сағатпен", tar1_desc: "Кездесу, демалыс және қысқа сапарға.", tar1_price: "6 000 ₸-ден<span>/ 2 сағат</span>",
    tar1_li1: "Кемінде 2 сағат", tar1_li2: "Сүлгі мен таза төсек-орын", tar1_li3: "Wi-Fi және техника", tar1_li4: "Толық құпиялылық",
    tar_badge: "Танымал",
    tar2_name: "Күндіз не түн", tar2_desc: "Күндіз жайлы демалу немесе түнеу.", tar2_price: "15 000 ₸-ден<span>/ күн · түн</span>",
    tar2_li1: "Күндіз не түнді таңдау", tar2_li2: "10–15 минутта орналасу", tar2_li3: "Тұруға толық жинақ", tar2_li4: "Сұраныс бойынша шарт пен чек",
    tar3_name: "Тәулік", tar3_desc: "Сапар мен демалысқа толық 24 сағат.", tar3_price: "25 000 ₸-ден<span>/ тәулік</span>",
    tar3_li1: "Толық тәулік — 24 сағат", tar3_li2: "Ұзақ мерзімге жеңілдік", tar3_li3: "Келер алдында тазалау", tar3_li4: "Тәулік бойы орналасу",
    th_tariff: "Тариф", th_2h: "2 сағат", th_day: "Күндіз", th_night: "Түн", th_daily: "Тәулік",
    grp_weekday: "Жұмыс күндері · Дс–Жм", grp_weekend: "Демалыс күндері · Жм–Жс", cls_standard: "Стандарт", cls_lux: "Люкс",
    tar_note: "Бағалар теңгемен (₸) берілген. Күндеріңізге нақты бағаны WhatsApp арқылы айтамыз.",
    dec_eyebrow: "Қосымша", dec_title: "Мерекені безендіру", dec_lead: "Кешті ерекше етеміз — пәтерді мерекеңізге сай безендіреміз.",
    dec_card_eyebrow: "Безендіру", order: "Тапсырыс беру",
    rev_eyebrow: "Пікірлер", rev_title: "Қонақтар не дейді",
    rev1_text: "«Түнгі рейспен ұштым, түнгі сағат үште артық сұрақсыз орналастырды. Пәтер суреттегідей — таза, жылы әрі жайлы. WhatsApp-та лезде жауап берді.»", rev1_role: "Тәулікке · 2 апта бұрын",
    rev2_text: "«Жұмыспен бір апта тұрдым. Орталыққа жаяу жақын, маңайда дүкендер, пәтерде қуаттағыштан ыдысқа дейін бәрі бар. Шарт пен чекті бірден берді — сапарға дәл керегі.»", rev2_role: "Іссапар · бір ай бұрын",
    rev3_text: "«Мерейтойға романтикалық безендірумен пәтер алдық — шам, шар, бәрі айтқанымыздай. Әдемі әрі сыпайы жасады. Рахмет!»", rev3_role: "Безендіру · 3 апта бұрын",
    faq_eyebrow: "Сұрақ-жауап", faq_title: "Жиі қойылатын сұрақтар",
    faq1_q: "Пәтерді қалай брондаймын?", faq1_a: "WhatsApp-қа жазып, күндер мен қонақ санын көрсетіңіз — қолайлы нұсқаны тауып, бронды растаймыз. Әдетте бірер минут кетеді.",
    faq2_q: "Алдын ала төлем керек пе?", faq2_a: "Көп пәтерге алдын ала төлем қажет емес — орналасқанда төлейсіз. Ұзақ мерзім мен мереке күндеріне шарт жеке келісіледі.",
    faq3_q: "Кіру мен шығу уақыты қандай?", faq3_a: "Кез келген уақытта орналастырамыз — 24/7. Әдеттегі шығу 12:00-ге дейін, бірақ орын бос болса, уақытқа икемді қараймыз.",
    faq4_q: "Бағаға не кіреді?", faq4_a: "Wi-Fi, техника, ыдыс, жаңа төсек-орын мен сүлгі, тазалық құралдары және келер алдында тазалау. Жайлы тұруға бәрі дайын.",
    faq5_q: "Үй жануарымен келуге бола ма?", faq5_a: "Кейбір пәтерге — иә, келісім бойынша. Алдын ала жазсаңыз, жануарға рұқсат берілетін нұсқаны табамыз.",
    faq6_q: "Шарт пен чек бересіздер ме?", faq6_a: "Иә, ресми жалдау шартын рәсімдеп, сұраныс бойынша фискалдық чек береміз — сапар мен есепке ыңғайлы.",
    nav_rules: "Ережелер",
    rules_eyebrow: "Ережелер", rules_title: "Тұру ережелері", rules_lead: "Ең бастысы қысқаша — демалыс сюрпризсіз өтуі үшін.",
    rule1_t: "Құжатпен орналасу", rule1_d: "Орналасу кезінде жеке куәлік немесе паспорт қажет.",
    rule2_t: "Қайтарымды кепілақы", rule2_d: "Орналасқанда шағын кепілақы аламыз — бәрі тәртіпте болса, шыққанда қайтарамыз.",
    rule3_t: "Темекі шекпейміз", rule3_d: "Пәтерде темекі шегуге тыйым салынған — кальян мен вейпті қоса алғанда.",
    rule4_t: "Шулы кештерсіз", rule4_d: "23:00-ден 08:00-ге дейін тыныштық — көршілерді құрметтейміз.",
    rule5_t: "Мүлікке ұқыпты қарау", rule5_d: "Бүлінген мүлік келісім бойынша өтеледі.",
    rule6_t: "Қонақ саны", rule6_d: "Тек брондау кезінде көрсетілген қонақтар орналасады.",
    rules_note: 'Толық ережелер — <a href="https://instagram.com/afr_inalmaty" target="_blank" rel="noopener">Instagram</a> парақшамыздағы «правила» бөлімінде.',
    map_2gis: "2ГИС-те ашу", map_google: "Google Maps-те ашу", map_google_short: "Google Maps",
    loc_eyebrow: "Орналасу", loc_title: "Алматы, Шевченко к-сі, 85", loc_lead: "«Молодёжный» кешені — қала орталығында, метро, СОО және басты нысандарға жақын.",
    cta_title: "Орналасуға дайынсыз ба?", cta_text: "Бізге жазыңыз — күндеріңіз бен бюджетіңізге пәтерді бірер минутта табамыз.", cta_btn: "WhatsApp-қа жазу",
    footer_tagline: "Алматыда пәтер жалдау — тәулікке және сағатпен. Таза • Құпия • 24/7.",
    footer_contacts: "Байланыс", footer_address: "Алматы, Шевченко к-сі, 85, «Молодёжный» кешені", footer_nav: "Бөлімдер", footer_rights: "Барлық құқық қорғалған.", footer_city: "Алматы, Қазақстан",
    wa_hint: "Әдетте бірер минутта жауап береміз",
    complex: "«Молодёжный» кешені, Шевченко 85", price_from: "25 000 ₸-ден / тәулік", badge_premium: "Премиум",
    room_studio: "Студия", room_one: "1 бөлме", guests_2: "2 қонақ", guests_23: "2–3 қонақ",
  },

  en: {
    nav_apartments: "Apartments", nav_tariffs: "Prices", nav_decor: "Decoration", nav_reviews: "Reviews", nav_faq: "FAQ", nav_contacts: "Contacts",
    book: "Book now",
    hero_title: 'Apartment rental<br />in <span class="accent">Almaty</span> — daily<br />and hourly',
    hero_subtitle: "Premium apartments in the «Molodyozhny» complex on Shevchenko. Spotless clean, 24/7 check-in, book in a minute via WhatsApp.",
    hero_book: "Book via WhatsApp", hero_view: "View apartments",
    stat1: "Instagram followers", stat2: "average check-in", stat3: "happy guests",
    adv_eyebrow: "Why guests choose us", adv_title: "Everything for a comfortable stay",
    feat1_t: "Clean apartments", feat1_d: "Deep cleaning and fresh linens before every check-in.",
    feat2_t: "Check-in in 10–15 minutes", feat2_d: "Fast check-in with no waiting — any time of day or night, 24/7.",
    feat3_t: "Confidentiality", feat3_d: "Full privacy and no unnecessary questions at check-in.",
    feat4_t: "Everything you need", feat4_d: "Wi-Fi, appliances, dishes, toiletries and towels already in place.",
    feat5_t: "Premium location", feat5_d: "«Molodyozhny» complex on Shevchenko — close to the centre and key spots.",
    feat6_t: "Contract & receipt", feat6_d: "Official paperwork and a fiscal receipt on request.",
    apt_eyebrow: "Catalogue", apt_title: "Premium apartments in «Molodyozhny»", apt_lead: "All apartments are premium class, in one complex at Shevchenko 85. Pick one and message us about your dates.",
    tar_eyebrow: "Prices", tar_title: "Fair prices, no overpaying", tar_lead: "Rent by the hour, for a day, a night or full 24 hours. Full price list below.",
    tar1_name: "Hourly", tar1_desc: "For meetings, rest and short visits.", tar1_price: "from 6 000 ₸<span>/ 2 hours</span>",
    tar1_li1: "Minimum 2 hours", tar1_li2: "Towels and clean linens", tar1_li3: "Wi-Fi and all appliances", tar1_li4: "Full confidentiality",
    tar_badge: "Popular",
    tar2_name: "Day or night", tar2_desc: "A comfortable day rest or an overnight stay.", tar2_price: "from 15 000 ₸<span>/ day · night</span>",
    tar2_li1: "Day or night, your choice", tar2_li2: "Check-in in 10–15 minutes", tar2_li3: "Full set for living", tar2_li4: "Contract & receipt on request",
    tar3_name: "Full day", tar3_desc: "Full 24 hours for business trips and rest.", tar3_price: "from 25 000 ₸<span>/ day</span>",
    tar3_li1: "Full day — 24 hours", tar3_li2: "Discount for longer stays", tar3_li3: "Cleaning before check-in", tar3_li4: "24/7 check-in",
    th_tariff: "Plan", th_2h: "2 hours", th_day: "Day", th_night: "Night", th_daily: "24 hours",
    grp_weekday: "Weekdays · Mon–Fri", grp_weekend: "Weekend · Fri–Sun", cls_standard: "Standard", cls_lux: "Lux",
    tar_note: "All prices are in tenge (₸). We will confirm the exact price for your dates via WhatsApp.",
    dec_eyebrow: "Extras", dec_title: "Celebration decoration", dec_lead: "We will make the evening special — decorating the apartment for your occasion.",
    dec_card_eyebrow: "Decoration", order: "Order",
    rev_eyebrow: "Reviews", rev_title: "What guests say",
    rev1_text: "«Landed on a night flight and was checked in at 3 a.m. with no questions. The apartment was exactly like the photos — clean, warm, cosy. They replied on WhatsApp within a minute.»", rev1_role: "Daily · 2 weeks ago",
    rev2_text: "«Stayed a week for work. Walking distance to the centre, shops nearby, and everything from chargers to dishes in the apartment. Got the contract and receipt right away — perfect for a business trip.»", rev2_role: "Business trip · a month ago",
    rev3_text: "«We booked an apartment with romantic decoration for our anniversary — candles, balloons, all as requested. Done beautifully and tactfully, no fuss. Thank you!»", rev3_role: "Decoration · 3 weeks ago",
    faq_eyebrow: "Questions & answers", faq_title: "Frequently asked questions",
    faq1_q: "How do I book an apartment?", faq1_a: "Message us on WhatsApp with your dates and number of guests — we will pick a suitable option and confirm the booking. It usually takes a couple of minutes.",
    faq2_q: "Is a prepayment required?", faq2_a: "Most apartments require no prepayment — you pay at check-in. For long stays and holidays the terms are discussed individually.",
    faq3_q: "What are the check-in and check-out times?", faq3_a: "We check guests in any time — 24/7. Standard check-out is by 12:00, but when dates are free we are flexible with timing.",
    faq4_q: "What is included in the price?", faq4_a: "Wi-Fi, appliances, dishes, fresh linens and towels, toiletries and cleaning before check-in. Everything for a comfortable stay is already there.",
    faq5_q: "Can I check in with pets?", faq5_a: "In some apartments — yes, by arrangement. Message us in advance and we will find an option where pets are allowed.",
    faq6_q: "Do you provide a contract and receipt?", faq6_a: "Yes, we draw up an official rental contract and provide a fiscal receipt on request — handy for business trips and reporting.",
    nav_rules: "Rules",
    rules_eyebrow: "Rules", rules_title: "House rules", rules_lead: "The essentials in short — so your stay goes without surprises.",
    rule1_t: "ID at check-in", rule1_d: "An ID card or passport is required at check-in.",
    rule2_t: "Refundable deposit", rule2_d: "A small deposit at check-in — returned at check-out if everything is in order.",
    rule3_t: "No smoking", rule3_d: "Smoking is not allowed in the apartments — including hookah and vapes.",
    rule4_t: "No loud parties", rule4_d: "Quiet hours from 11:00 pm to 8:00 am — we respect the neighbours.",
    rule5_t: "Care for the property", rule5_d: "Damage to the property is compensated by agreement.",
    rule6_t: "Guest count", rule6_d: "Only guests specified at booking may stay.",
    rules_note: 'Full rules — in the «правила» highlight on our <a href="https://instagram.com/afr_inalmaty" target="_blank" rel="noopener">Instagram</a>.',
    map_2gis: "Open in 2GIS", map_google: "Open in Google Maps", map_google_short: "Google Maps",
    loc_eyebrow: "Location", loc_title: "Almaty, Shevchenko St. 85", loc_lead: "«Molodyozhny» complex — in the city centre, near the metro, malls and main sights.",
    cta_title: "Ready to check in?", cta_text: "Message us — we will pick an apartment for your dates and budget in a couple of minutes.", cta_btn: "Message on WhatsApp",
    footer_tagline: "Apartment rental in Almaty, daily and hourly. Clean • Private • 24/7.",
    footer_contacts: "Contacts", footer_address: "Almaty, Shevchenko St. 85, «Molodyozhny» complex", footer_nav: "Navigation", footer_rights: "All rights reserved.", footer_city: "Almaty, Kazakhstan",
    wa_hint: "We usually reply within a couple of minutes",
    complex: "«Molodyozhny» complex, Shevchenko 85", price_from: "from 25 000 ₸ / day", badge_premium: "Premium",
    room_studio: "Studio", room_one: "1 room", guests_2: "2 guests", guests_23: "2–3 guests",
  },
};

function t(key) {
  const l = T[currentLang] || T.ru;
  return key in l ? l[key] : (key in T.ru ? T.ru[key] : "");
}

/* Собирает слайдер-карусель из набора фото */
function buildSlides(pathFor, count) {
  let slides = "";
  let dots = "";
  for (let i = 1; i <= count; i++) {
    slides += `<div class="slide" style="background-image: linear-gradient(180deg, rgba(139,92,246,0.05), rgba(0,0,0,0.55)), url('${pathFor(i)}')"></div>`;
    dots += `<span class="dot${i === 1 ? " is-active" : ""}" data-i="${i - 1}"></span>`;
  }
  const controls =
    count > 1
      ? `<button class="slider__btn slider__btn--prev" aria-label="←">‹</button>
         <button class="slider__btn slider__btn--next" aria-label="→">›</button>
         <div class="slider__dots">${dots}</div>`
      : "";
  return `<div class="slider"><div class="slider__track">${slides}</div>${controls}</div>`;
}

/* ==================== РЕНДЕР КВАРТИР ==================== */
function renderApartments() {
  const grid = document.getElementById("apartments-grid");
  if (!grid) return;

  grid.innerHTML = apartments
    .map((a) => {
      const title = a.title[currentLang] || a.title.ru;
      const msg = encodeURIComponent(
        `Здравствуйте! Интересует квартира «${a.title.ru}» (${T.ru.complex}). Подскажите наличие и даты. AFR in Almaty`
      );
      const waLink = `https://wa.me/${WHATSAPP}?text=${msg}`;
      const slider = buildSlides((i) => `assets/apartments/${a.folder}/${i}.jpg`, Math.max(1, a.photos || 1));

      return `
        <article class="card reveal">
          <div class="card__media">
            ${slider}
            <span class="card__badge">${t("badge_premium")}</span>
            <span class="card__price-tag">${t("price_from")}</span>
          </div>
          <div class="card__body">
            <div class="card__district">${t("complex")}</div>
            <h3 class="card__title">${title}</h3>
            <div class="card__meta">
              <span>${t(a.rooms)}</span>
              <span>${a.area}</span>
              <span>${t(a.guests)}</span>
            </div>
            <a href="${waLink}" class="btn btn--accent card__btn" target="_blank" rel="noopener">${t("book")}</a>
          </div>
        </article>`;
    })
    .join("");

  initSliders();
  observeReveals();
}

/* ==================== РЕНДЕР ОФОРМЛЕНИЯ ==================== */
function renderDecor() {
  const grid = document.getElementById("decor-grid");
  if (!grid) return;

  grid.innerHTML = decor
    .map((d) => {
      const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(d.wa)}`;
      const slider = buildSlides((i) => `assets/decor/${d.folder}/${i}.jpg`, Math.max(1, d.photos || 1));

      return `
        <article class="dcard reveal">
          <div class="dcard__media">
            ${slider}
            <span class="dcard__price">${d.price}</span>
          </div>
          <div class="dcard__body">
            <div class="dcard__eyebrow">${t("dec_card_eyebrow")}</div>
            <h3 class="dcard__title">${d.title[currentLang] || d.title.ru}</h3>
            <p class="dcard__text">${d.text[currentLang] || d.text.ru}</p>
            <a href="${waLink}" class="btn btn--accent dcard__btn" target="_blank" rel="noopener">${t("order")}</a>
          </div>
        </article>`;
    })
    .join("");

  initSliders();
  observeReveals();
}

/* ==================== ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА ==================== */
function setLang(lang) {
  if (!T[lang]) lang = "ru";
  currentLang = lang;
  document.documentElement.lang = lang;
  try { localStorage.setItem("afr_lang", lang); } catch (e) {}

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = t(el.dataset.i18n);
    if (v) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const v = t(el.dataset.i18nHtml);
    if (v) el.innerHTML = v;
  });
  document.querySelectorAll(".lang").forEach((b) =>
    b.classList.toggle("is-active", b.dataset.lang === lang)
  );

  renderApartments();
  renderDecor();
}

function initLang() {
  let saved = "ru";
  try { saved = localStorage.getItem("afr_lang") || "ru"; } catch (e) {}
  document.querySelectorAll(".lang").forEach((b) =>
    b.addEventListener("click", () => setLang(b.dataset.lang))
  );
  setLang(saved);
}

/* ==================== АНИМАЦИЯ СЧЁТЧИКОВ ==================== */
function initCounters() {
  const nums = document.querySelectorAll("[data-count]");
  if (!nums.length) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fmt = (n) => n.toLocaleString("ru-RU");

  const run = (el) => {
    const target = parseFloat(el.dataset.count);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    if (reduce) { el.textContent = prefix + fmt(target) + suffix; return; }

    const dur = 1500;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + fmt(Math.round(target * eased)) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if (!("IntersectionObserver" in window)) { nums.forEach(run); return; }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
      });
    },
    { threshold: 0.5 }
  );
  nums.forEach((n) => io.observe(n));
}

/* ============ ПРОГРЕСС ЧТЕНИЯ + АКТИВНЫЙ ПУНКТ МЕНЮ ============ */
function initScrollUX() {
  const progress = document.getElementById("progress");
  const links = [...document.querySelectorAll(".nav__link")];
  const sections = links.map((l) => {
    const id = l.getAttribute("href");
    return id && id.startsWith("#") ? document.querySelector(id) : null;
  });

  const onScroll = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    if (progress) progress.style.width = pct + "%";

    const pos = window.scrollY + 120;
    let activeIdx = -1;
    sections.forEach((sec, i) => {
      if (sec && sec.offsetTop <= pos) activeIdx = i;
    });
    links.forEach((l, i) => l.classList.toggle("is-active", i === activeIdx));
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();
}

/* ==================== КАРУСЕЛЬ ФОТО ==================== */
function initSliders() {
  document.querySelectorAll(".slider").forEach((slider) => {
    if (slider.dataset.bound) return;
    slider.dataset.bound = "1";
    const track = slider.querySelector(".slider__track");
    const dots = [...slider.querySelectorAll(".dot")];
    const total = track ? track.children.length : 0;
    if (!track || total <= 1) return;

    let idx = 0;
    const go = (n) => {
      idx = (n + total) % total;
      track.style.transform = `translateX(-${idx * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle("is-active", i === idx));
    };

    const prev = slider.querySelector(".slider__btn--prev");
    const next = slider.querySelector(".slider__btn--next");
    if (prev) prev.addEventListener("click", (e) => { e.preventDefault(); go(idx - 1); });
    if (next) next.addEventListener("click", (e) => { e.preventDefault(); go(idx + 1); });
    dots.forEach((d, i) => d.addEventListener("click", (e) => { e.preventDefault(); go(i); }));
  });
}

/* ==================== STICKY HEADER ==================== */
function initHeader() {
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("header--scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ==================== МОБИЛЬНОЕ МЕНЮ ==================== */
function initBurgerMenu() {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  if (!burger || !nav) return;

  const toggle = (open) => {
    const isOpen = open ?? !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", isOpen);
    burger.classList.toggle("is-open", isOpen);
    burger.setAttribute("aria-expanded", String(isOpen));
  };

  burger.addEventListener("click", () => toggle());
  nav.querySelectorAll(".nav__link").forEach((link) =>
    link.addEventListener("click", () => toggle(false))
  );
}

/* ==================== SCROLL REVEAL ==================== */
let revealObserver;
function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
  }
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => revealObserver.observe(el));
}

/* ==================== INIT ==================== */
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initLang();       // выставляет язык + рендерит квартиры и оформление
  initHeader();
  initBurgerMenu();
  initScrollUX();
  initCounters();
  observeReveals();
});
