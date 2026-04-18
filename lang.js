// ── Stael Gissoni — Language Switcher ──
const TRANSLATIONS = {
  en: {
    // NAV
    nav_lessons: 'English Lessons',
    nav_interpretation: 'Interpretation',
    nav_about: 'About',
    nav_services: 'Services',
    nav_blog: 'Blog',
    nav_faq: 'FAQ',
    nav_book: 'Book a Session',

    // INDEX HERO
    hero_h1: 'Communication<br><span class="accent">without</span> <span class="accent-warm">barriers.</span>',
    hero_p: "Hi, I'm Stael — a professional interpreter offering personalized English–Portuguese sessions and interpretation services. Let me be the bridge between you and the world.",
    hero_btn_book: 'Book a Session',
    hero_btn_services: 'Explore Services',
    hero_link_lessons: '🎓 English Lessons',
    hero_link_interp: '🌐 Interpretation Services',
    hero_trust: '<strong>Trusted</strong> by clients across<br>the US &amp; Brazil',

    // INDEX ABOUT
    about_tag: 'About Me',
    about_h2: 'Your trusted partner in <em>bridging languages</em>',
    about_p: "I'm Stael Gissoni, a professional bilingual interpreter specializing in English and Portuguese. With years of experience across medical, legal, business, and personal settings, I bring clarity and confidence to every conversation. My personalized approach means every session is tailored to your unique needs.",
    about_stat1_n: '500+', about_stat1_l: 'Sessions',
    about_stat2_n: '100%', about_stat2_l: 'Satisfaction',
    about_stat3_n: 'EN↔PT', about_stat3_l: 'Bilingual',
    about_cta: 'Work With Me →',
    about_float1: 'Bilingual Expert', about_float1_sub: 'English & Portuguese',
    about_float2: 'Certified', about_float2_sub: 'Professional Interpreter',

    // INDEX SERVICES
    svc_tag: 'Services',
    svc_h2: 'Here to help you connect',
    svc_sub: "From boardrooms to doctor's offices, I make sure your voice is heard — in both languages.",
    svc_badge_inperson: 'In-Person', svc_badge_virtual: 'Virtual',
    svc_badge_medical: 'Medical', svc_badge_legal: 'Legal',
    svc_badge_education: 'Education', svc_badge_teaching: 'Teaching',
    svc_onsite_name: 'On-Site Interpretation',
    svc_onsite_p: 'Real-time English↔Portuguese for seminars, meetings, events and conferences.',
    svc_remote_name: 'Remote',
    svc_remote_p: 'Professional English↔Portuguese interpretation via Google Meet or phone.',
    svc_medical_name: 'Medical Interpretation',
    svc_medical_p: 'HIPAA-aware interpretation for doctor visits, hospital stays and mental health.',
    svc_legal_name: 'Legal Interpretation',
    svc_legal_p: 'Professional interpretation for immigration hearings, Green Card interviews, USCIS appointments, court depositions, and citizenship test preparation.',
    svc_edu_name: 'Educational Interpretation',
    svc_edu_p: 'Parent-Teacher conferences, student assessments, classroom support, workshops and seminars.',
    svc_lessons_name: 'One-on-One Private Lessons',
    svc_lessons_p: 'Personalized one-on-one English lessons tailored to your goals and skill level.',
    svc_book_link: 'Book',
    svc_book_now: 'Book Now →',

    // SERVICES PAGE
    svc_page_h1: 'Services <em>tailored</em> to you',
    svc_page_sub: 'Professional English–Portuguese interpretation and language coaching — every service designed around your needs.',
    svc_feat_onsite1: 'Seminars & conferences',
    svc_feat_onsite2: 'Corporate & government meetings',
    svc_feat_onsite3: 'Events & presentations',
    svc_feat_remote1: 'Google Meet or phone',
    svc_feat_remote2: 'Flexible scheduling',
    svc_feat_remote3: 'Any time zone',
    svc_feat_med1: 'Doctor & hospital visits',
    svc_feat_med2: 'Mental health & therapy',
    svc_feat_med3: 'Full confidentiality',
    svc_feat_legal1: 'Immigration hearings & Green Card interviews',
    svc_feat_legal2: 'USCIS appointments & court depositions',
    svc_feat_legal3: 'Citizenship test prep & mock interviews',
    svc_feat_edu1: 'Parent-Teacher Conferences',
    svc_feat_edu2: 'Student Assessments & Classroom Support',
    svc_feat_edu3: 'Workshops, Seminars & Professional Development',
    svc_feat_les1: 'All levels welcome',
    svc_feat_les2: 'Conversation focused',
    svc_feat_les3: 'Grammar & pronunciation',

    // INDEX CTA
    cta_h2: 'Ready to speak with confidence?',
    cta_p: 'Book your first session today and experience seamless bilingual communication — personalized just for you.',
    cta_btn: 'Book Your Session →',

    // CTA STRIP (services page)
    cta_unsure_h2: 'Not sure which service fits?',
    cta_unsure_p: 'Book a free 10-minute consultation and Stael will help you figure out exactly what you need.',
    cta_talk: "Let's Talk →",

    // ABOUT PAGE
    about_page_h1: 'Meet <em>Stael</em>',
    about_page_sub: 'Interpreter, translator, language teacher — and the person who makes sure you\'re always understood.',
    about_story_tag: 'My Story',
    about_story_h2: 'Language isn\'t just what I do — it\'s <em>who I am</em>',
    about_story_p1: "I'm Stael Gissoni — a professional interpreter, certified translator, and language teacher specializing in English and Portuguese. Based in Orlando, Florida, I've spent my career helping people communicate across cultures with clarity, confidence, and warmth.",
    about_story_p2: "Whether you're navigating a legal consultation, sitting in a doctor's office, closing a business deal, or simply trying to learn a new language — I'm here to make sure nothing gets lost in translation. My clients range from families and individuals to businesses and organizations that need reliable bilingual support.",
    about_story_p3: "What sets me apart is my personalized approach. I don't believe in one-size-fits-all — every session, every interaction is tailored to you. I take the time to understand your situation so I can deliver exactly what you need.",
    about_quote: '"I believe communication is the foundation of everything. When people truly understand each other, incredible things happen."',
    about_float3: 'Language Teacher', about_float3_sub: 'English & Portuguese',
    about_whatido_tag: 'What I Do',
    about_whatido_h2: 'Three ways I help you connect',
    about_whatido_sub: 'Each service is built around your needs — professional, personal, and always human.',
    about_skill1_h3: 'Interpretation', about_skill1_p: 'Real-time bilingual interpretation for meetings, conferences, medical appointments, legal proceedings, and more. In person or virtual — I adapt to your setting.',
    about_skill2_h3: 'Translation', about_skill2_p: 'Accurate, certified translation of documents, contracts, certificates, and official paperwork. Every word matters, and I treat it that way.',
    about_skill3_h3: 'Language Teaching', about_skill3_p: 'Personalized English and Portuguese lessons for all levels. Whether you\'re starting from scratch or polishing your fluency, I meet you where you are.',
    about_personal_tag: 'Beyond the Work',
    about_personal_h2: 'A little more about me',
    about_personal_p: "When I'm not interpreting, translating, or teaching, you'll probably find me on the pickleball court, sipping a margarita with friends, or planning my next adventure. I bring the same energy to my work that I bring to everything else — proactive, positive, and always 100% in.",
    about_fact1_h4: 'Pickleball Enthusiast', about_fact1_p: 'Competitive spirit on and off the court',
    about_fact2_h4: 'Margarita Lover', about_fact2_p: 'The best meetings happen over margs',
    about_fact3_h4: 'Proactive by Nature', about_fact3_p: "I don't wait for things to happen — I make them happen",
    about_fact4_h4: 'Orlando Based', about_fact4_p: 'Sunshine State living, serving clients everywhere',
    about_test_tag: 'Testimonials',
    about_test_h2: 'What people say about working with Stael',
    about_test_sub: 'Real words from real clients.',
    about_test1_role: 'Immigration Client',
    about_test2_role: 'Business Owner',
    about_test3_role: 'Language Student',
    about_cta_h2: "Let's work together",
    about_cta_p: "Whether you need an interpreter, a translator, or a language teacher — I'd love to hear from you. Book a session or just say hi.",

    // BLOG PAGE
    blog_page_h1: 'The <em>Blog</em>',
    blog_page_sub: 'Tips, insights, and stories about interpretation, translation, and the bilingual experience.',
    blog_feat_tag: 'Featured',
    blog_feat_h3: 'Why Every Brazilian in Orlando Needs a Professional Interpreter',
    blog_feat_p: 'Navigating the US healthcare system, legal proceedings, and business meetings without a professional interpreter can lead to costly mistakes. Here\'s why having a bilingual expert matters.',
    blog_feat_meta: 'March 2026 · 5 min read',
    blog_read_more: 'Read more →',
    blog_read: 'Read →',
    blog2_tag: 'Translation',
    blog2_h3: 'What Documents Do You Need Translated for USCIS?',
    blog2_p: 'A complete guide to which documents need certified translation for your immigration application.',
    blog3_tag: 'Virtual',
    blog3_h3: 'How Virtual Interpretation Works (And Why It\'s Just as Good)',
    blog3_p: 'Everything you need to know about booking a remote interpretation session via Zoom or phone.',
    blog4_tag: 'Medical',
    blog4_h3: '5 Things to Know Before Your Medical Appointment with an Interpreter',
    blog4_p: 'How to prepare for a doctor\'s visit when you\'ll be using a Portuguese interpreter.',
    blog5_tag: 'Legal',
    blog5_h3: 'Your Rights to an Interpreter in Legal Proceedings',
    blog5_p: 'Understanding your legal right to interpretation services in court, depositions, and USCIS interviews.',
    blog6_tag: 'Language',
    blog6_h3: '10 Portuguese Phrases Every English Speaker Should Know',
    blog6_p: 'Starting your Portuguese journey? These everyday phrases will get you communicating right away.',
    blog7_tag: 'Business',
    blog7_h3: 'Working with Brazilian Clients? Here\'s How to Bridge the Culture Gap',
    blog7_p: 'Cultural tips for American businesses collaborating with Portuguese-speaking partners.',

    // FOOTER
    footer_tagline: 'Professional English–Portuguese interpretation and personalized language services. Connecting people, one conversation at a time.',
    footer_services: 'Services', footer_company: 'Company', footer_contact: 'Contact',
    footer_about: 'About', footer_how: 'How It Works', footer_testimonials: 'Testimonials', footer_faq: 'FAQ',
    footer_rights: '© 2026 Stael Gissoni. All rights reserved.',
    footer_privacy: 'Privacy Policy', footer_terms: 'Terms of Service',
    footer_svc_onsite: 'On-Site Interpretation', footer_svc_remote: 'Remote',
    footer_svc_medical: 'Medical Interpretation', footer_svc_legal: 'Legal Interpretation',
    footer_svc_lessons: 'One-on-One Private Lessons',

    // BOOKING
    book_hero_h1_1: 'Book your', book_hero_h1_em: 'session',
    book_hero_p: "Pick a service, choose your time, and you're done — confirmed instantly.",
    step1_title: 'Choose a service', step1_sub: 'What do you need help with?',
    step2_title: 'When & who', step2_sub: 'Pick a date, time, and tell us about yourself.',
    step3_title: 'Review & confirm', step3_sub: "Everything looks good? Let's get you booked.",
    label_date: 'SELECT A DATE', label_time: 'SELECT A TIME',
    label_fname: 'First Name', label_lname: 'Last Name', label_email: 'Email', label_phone: 'Phone',
    label_notes: 'Notes for Stael (optional)', notes_placeholder: 'Any details, requirements, or questions...',
    btn_continue: 'Continue →', btn_back: '← Back', btn_review: 'Review Booking →', btn_pay: 'Confirm & Pay →',
    summary_title: 'Booking Summary', summary_service: 'Service', summary_date: 'Date',
    summary_time: 'Time', summary_name: 'Name', summary_fee: 'Processing fee (3%)', summary_total: 'Total',
    trust_stripe: 'Payment secured by Stripe — encrypted & safe',
    trust_cancel: 'Free cancellation up to 24 hours before your session',
  },

  pt: {
    // NAV
    nav_lessons: 'Aulas de Inglês',
    nav_interpretation: 'Interpretação',
    nav_about: 'Sobre',
    nav_services: 'Serviços',
    nav_blog: 'Blog',
    nav_faq: 'FAQ',
    nav_book: 'Agendar Sessão',

    // INDEX HERO
    hero_h1: 'Comunicação<br><span class="accent">sem</span> <span class="accent-warm">barreiras.</span>',
    hero_p: 'Olá, sou a Stael — intérprete profissional com sessões personalizadas de inglês–português e serviços de interpretação. Deixe-me ser a ponte entre você e o mundo.',
    hero_btn_book: 'Agendar Sessão',
    hero_btn_services: 'Ver Serviços',
    hero_link_lessons: '🎓 Aulas de Inglês',
    hero_link_interp: '🌐 Serviços de Interpretação',
    hero_trust: '<strong>Recomendada</strong> por clientes nos<br>EUA e no Brasil',


    // INDEX ABOUT
    about_tag: 'Sobre Mim',
    about_h2: 'Sua parceira de confiança para <em>unir idiomas</em>',
    about_p: 'Sou Stael Gissoni, intérprete bilíngue profissional especializada em inglês e português. Com anos de experiência nas áreas médica, jurídica, empresarial e pessoal, trago clareza e segurança a cada conversa. Minha abordagem personalizada garante que cada sessão seja adaptada às suas necessidades.',
    about_stat1_n: '500+', about_stat1_l: 'Sessões',
    about_stat2_n: '100%', about_stat2_l: 'Satisfação',
    about_stat3_n: 'EN↔PT', about_stat3_l: 'Bilíngue',
    about_cta: 'Trabalhe Comigo →',
    about_float1: 'Especialista Bilíngue', about_float1_sub: 'Inglês & Português',
    about_float2: 'Certificada', about_float2_sub: 'Intérprete Profissional',

    // INDEX SERVICES
    svc_tag: 'Serviços',
    svc_h2: 'Estou aqui para ajudá-lo a se comunicar',
    svc_sub: 'De salas de reunião a consultórios médicos, garanto que a sua voz seja ouvida — nos dois idiomas.',
    svc_badge_inperson: 'Presencial', svc_badge_virtual: 'Virtual',
    svc_badge_medical: 'Médica', svc_badge_legal: 'Jurídica',
    svc_badge_education: 'Educação', svc_badge_teaching: 'Ensino',
    svc_onsite_name: 'Interpretação Presencial',
    svc_onsite_p: 'Interpretação inglês↔português em tempo real para seminários, reuniões, eventos e conferências.',
    svc_remote_name: 'Interpretação Remota',
    svc_remote_p: 'Interpretação profissional inglês↔português via Google Meet ou telefone.',
    svc_medical_name: 'Interpretação Médica',
    svc_medical_p: 'Interpretação com sigilo HIPAA para consultas médicas, internações e saúde mental.',
    svc_legal_name: 'Interpretação Jurídica',
    svc_legal_p: 'Interpretação profissional para audiências de imigração, entrevistas de Green Card, consultas no USCIS, depoimentos e preparação para o teste de cidadania.',
    svc_edu_name: 'Interpretação Educacional',
    svc_edu_p: 'Reuniões de pais e professores, avaliações de alunos, suporte em sala de aula, workshops e seminários.',
    svc_lessons_name: 'Aulas Particulares 1 a 1',
    svc_lessons_p: 'Aulas de inglês personalizadas de acordo com seus objetivos e nível, com foco em fala, escuta, leitura e escrita.',
    svc_book_link: 'Agendar',
    svc_book_now: 'Agendar →',

    // SERVICES PAGE
    svc_page_h1: 'Serviços <em>feitos</em> para você',
    svc_page_sub: 'Interpretação profissional inglês–português e aulas de idiomas — cada serviço pensado para as suas necessidades.',
    svc_feat_onsite1: 'Seminários e conferências',
    svc_feat_onsite2: 'Reuniões corporativas e governamentais',
    svc_feat_onsite3: 'Eventos e apresentações',
    svc_feat_remote1: 'Google Meet ou telefone',
    svc_feat_remote2: 'Horários flexíveis',
    svc_feat_remote3: 'Qualquer fuso horário',
    svc_feat_med1: 'Consultas e internações',
    svc_feat_med2: 'Saúde mental e terapia',
    svc_feat_med3: 'Total confidencialidade',
    svc_feat_legal1: 'Audiências de imigração e entrevistas de Green Card',
    svc_feat_legal2: 'Consultas no USCIS e depoimentos',
    svc_feat_legal3: 'Preparação para o teste de cidadania e simulações',
    svc_feat_edu1: 'Reuniões de pais e professores',
    svc_feat_edu2: 'Avaliações de alunos e suporte em sala',
    svc_feat_edu3: 'Workshops, seminários e desenvolvimento profissional',
    svc_feat_les1: 'Todos os níveis bem-vindos',
    svc_feat_les2: 'Foco em conversação',
    svc_feat_les3: 'Gramática e pronúncia',

    // INDEX CTA
    cta_h2: 'Pronto(a) para se comunicar com confiança?',
    cta_p: 'Agende sua primeira sessão hoje e experimente uma comunicação bilíngue fluida — feita para você.',
    cta_btn: 'Agendar Minha Sessão →',

    // CTA STRIP
    cta_unsure_h2: 'Não sabe qual serviço escolher?',
    cta_unsure_p: 'Agende uma consulta gratuita de 10 minutos e a Stael vai te ajudar a encontrar a melhor opção.',
    cta_talk: 'Vamos Conversar →',

    // ABOUT PAGE
    about_page_h1: 'Conheça a <em>Stael</em>',
    about_page_sub: 'Intérprete, tradutora, professora de idiomas — e a pessoa que garante que você sempre seja compreendido(a).',
    about_story_tag: 'Minha História',
    about_story_h2: 'Idiomas não são só o que eu faço — é <em>quem eu sou</em>',
    about_story_p1: 'Sou Stael Gissoni — intérprete profissional, tradutora certificada e professora de idiomas especializada em inglês e português. Sediada em Orlando, na Flórida, dedico minha carreira a ajudar pessoas a se comunicarem entre culturas com clareza, confiança e acolhimento.',
    about_story_p2: 'Seja numa consulta jurídica, num consultório médico, numa negociação comercial ou simplesmente aprendendo um novo idioma — estou aqui para garantir que nada se perca na tradução. Meus clientes vão desde famílias e indivíduos até empresas e organizações que precisam de suporte bilíngue de confiança.',
    about_story_p3: 'O que me diferencia é minha abordagem personalizada. Não acredito em soluções genéricas — cada sessão, cada atendimento é moldado para você. Dedico tempo para entender sua situação e entregar exatamente o que você precisa.',
    about_quote: '"Acredito que a comunicação é a base de tudo. Quando as pessoas se entendem de verdade, coisas incríveis acontecem."',
    about_float3: 'Professora de Idiomas', about_float3_sub: 'Inglês & Português',
    about_whatido_tag: 'O Que Eu Faço',
    about_whatido_h2: 'Três formas de te ajudar a se conectar',
    about_whatido_sub: 'Cada serviço é construído em torno das suas necessidades — profissional, pessoal e sempre humano.',
    about_skill1_h3: 'Interpretação', about_skill1_p: 'Interpretação bilíngue em tempo real para reuniões, conferências, consultas médicas, processos jurídicos e muito mais. Presencial ou virtual — me adapto ao seu contexto.',
    about_skill2_h3: 'Tradução', about_skill2_p: 'Tradução precisa e certificada de documentos, contratos, certidões e papéis oficiais. Cada palavra importa, e eu trato assim.',
    about_skill3_h3: 'Aulas de Idiomas', about_skill3_p: 'Aulas personalizadas de inglês e português para todos os níveis. Seja do zero ou refinando sua fluência, eu me adapto ao seu ritmo.',
    about_personal_tag: 'Além do Trabalho',
    about_personal_h2: 'Um pouco mais sobre mim',
    about_personal_p: 'Quando não estou interpretando, traduzindo ou dando aulas, você provavelmente me encontra na quadra de pickleball, tomando uma margarita com amigas ou planejando minha próxima aventura. Trago a mesma energia para o trabalho que trago para tudo — proativa, positiva e sempre 100% presente.',
    about_fact1_h4: 'Fã de Pickleball', about_fact1_p: 'Espírito competitivo dentro e fora da quadra',
    about_fact2_h4: 'Amante de Margarita', about_fact2_p: 'As melhores reuniões acontecem com um drinque na mão',
    about_fact3_h4: 'Proativa por Natureza', about_fact3_p: 'Não espero as coisas acontecerem — eu faço acontecer',
    about_fact4_h4: 'Baseada em Orlando', about_fact4_p: 'Vivendo no Estado do Sol, atendendo clientes em todo o mundo',
    about_test_tag: 'Depoimentos',
    about_test_h2: 'O que dizem quem já trabalhou com a Stael',
    about_test_sub: 'Palavras reais de clientes reais.',
    about_test1_role: 'Cliente de Imigração',
    about_test2_role: 'Empresário',
    about_test3_role: 'Aluna de Idiomas',
    about_cta_h2: 'Vamos trabalhar juntos?',
    about_cta_p: 'Seja para interpretação, tradução ou aulas de idiomas — adoraria conversar com você. Agende uma sessão ou mande um oi.',

    // BLOG PAGE
    blog_page_h1: 'O <em>Blog</em>',
    blog_page_sub: 'Dicas, reflexões e histórias sobre interpretação, tradução e a vida bilíngue.',
    blog_feat_tag: 'Destaque',
    blog_feat_h3: 'Por Que Todo Brasileiro em Orlando Precisa de um Intérprete Profissional',
    blog_feat_p: 'Navegar pelo sistema de saúde americano, processos jurídicos e reuniões de negócios sem um intérprete profissional pode custar caro. Veja por que ter um especialista bilíngue faz toda a diferença.',
    blog_feat_meta: 'Março de 2026 · 5 min de leitura',
    blog_read_more: 'Ler mais →',
    blog_read: 'Ler →',
    blog2_tag: 'Tradução',
    blog2_h3: 'Quais Documentos Precisam de Tradução para o USCIS?',
    blog2_p: 'Um guia completo sobre quais documentos precisam de tradução certificada para o seu processo de imigração.',
    blog3_tag: 'Virtual',
    blog3_h3: 'Como Funciona a Interpretação Virtual (e Por Que É Igualmente Eficaz)',
    blog3_p: 'Tudo o que você precisa saber para agendar uma sessão de interpretação remota via Zoom ou telefone.',
    blog4_tag: 'Médico',
    blog4_h3: '5 Coisas que Você Precisa Saber Antes da Sua Consulta Médica com Intérprete',
    blog4_p: 'Como se preparar para uma consulta médica quando você vai precisar de um intérprete de português.',
    blog5_tag: 'Jurídico',
    blog5_h3: 'Seus Direitos a um Intérprete em Processos Jurídicos',
    blog5_p: 'Entenda seu direito legal a serviços de interpretação em tribunais, depoimentos e entrevistas no USCIS.',
    blog6_tag: 'Idiomas',
    blog6_h3: '10 Expressões em Português que Todo Falante de Inglês Deveria Conhecer',
    blog6_p: 'Começando sua jornada no português? Essas frases do dia a dia vão te ajudar a se comunicar na hora.',
    blog7_tag: 'Negócios',
    blog7_h3: 'Trabalhando com Clientes Brasileiros? Veja Como Superar as Diferenças Culturais',
    blog7_p: 'Dicas culturais para empresas americanas que colaboram com parceiros de língua portuguesa.',

    // FOOTER
    footer_tagline: 'Interpretação profissional inglês–português e serviços de idiomas personalizados. Conectando pessoas, uma conversa de cada vez.',
    footer_services: 'Serviços', footer_company: 'Empresa', footer_contact: 'Contato',
    footer_about: 'Sobre', footer_how: 'Como Funciona', footer_testimonials: 'Depoimentos', footer_faq: 'FAQ',
    footer_rights: '© 2026 Stael Gissoni. Todos os direitos reservados.',
    footer_privacy: 'Política de Privacidade', footer_terms: 'Termos de Uso',
    footer_svc_onsite: 'Interpretação Presencial', footer_svc_remote: 'Interpretação Remota',
    footer_svc_medical: 'Interpretação Médica', footer_svc_legal: 'Interpretação Jurídica',
    footer_svc_lessons: 'Aulas Particulares 1 a 1',

    // BOOKING
    book_hero_h1_1: 'Agende sua', book_hero_h1_em: 'sessão',
    book_hero_p: 'Escolha um serviço, selecione seu horário e pronto — confirmado na hora.',
    step1_title: 'Escolha um serviço', step1_sub: 'Com o que você precisa de ajuda?',
    step2_title: 'Quando e quem', step2_sub: 'Escolha uma data, horário e nos conte sobre você.',
    step3_title: 'Revisar e confirmar', step3_sub: 'Tudo certo? Vamos finalizar o seu agendamento.',
    label_date: 'SELECIONE UMA DATA', label_time: 'SELECIONE UM HORÁRIO',
    label_fname: 'Nome', label_lname: 'Sobrenome', label_email: 'E-mail', label_phone: 'Telefone',
    label_notes: 'Observações para a Stael (opcional)', notes_placeholder: 'Detalhes, requisitos ou dúvidas...',
    btn_continue: 'Continuar →', btn_back: '← Voltar', btn_review: 'Revisar Agendamento →', btn_pay: 'Confirmar e Pagar →',
    summary_title: 'Resumo do Agendamento', summary_service: 'Serviço', summary_date: 'Data',
    summary_time: 'Horário', summary_name: 'Nome', summary_fee: 'Taxa de processamento (3%)', summary_total: 'Total',
    trust_stripe: 'Pagamento seguro via Stripe — criptografado e protegido',
    trust_cancel: 'Cancelamento gratuito até 24 horas antes da sessão',
  }
};

const I18N = {
  current: localStorage.getItem('sf_lang') || 'en',

  t(key) {
    return TRANSLATIONS[this.current][key] || TRANSLATIONS['en'][key] || key;
  },

  set(lang) {
    this.current = lang;
    localStorage.setItem('sf_lang', lang);
    this.apply();
    this.updateToggle();
  },

  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = this.t(el.getAttribute('data-i18n-html'));
    });
    document.documentElement.lang = this.current === 'pt' ? 'pt-BR' : 'en';
  },

  updateToggle() {
    const btnEn = document.getElementById('langBtn_en');
    const btnPt = document.getElementById('langBtn_pt');
    if (btnEn) {
      btnEn.style.background = this.current === 'en' ? 'var(--primary, #2a7c6f)' : 'transparent';
      btnEn.style.color = this.current === 'en' ? '#fff' : 'var(--text)';
    }
    if (btnPt) {
      btnPt.style.background = this.current === 'pt' ? 'var(--primary, #2a7c6f)' : 'transparent';
      btnPt.style.color = this.current === 'pt' ? '#fff' : 'var(--text)';
    }
    const chipEn = document.querySelector('.chip-en');
    const chipPt = document.querySelector('.chip-pt');
    if (chipEn && chipPt) {
      chipEn.style.opacity = this.current === 'en' ? '1' : '0.45';
      chipEn.style.fontWeight = this.current === 'en' ? '800' : '500';
      chipPt.style.opacity = this.current === 'pt' ? '1' : '0.45';
      chipPt.style.fontWeight = this.current === 'pt' ? '800' : '500';
    }
  },

  toggle() {
    this.set(this.current === 'en' ? 'pt' : 'en');
  },

  init() {
    this.apply();
    this.updateToggle();
    const chipEn = document.querySelector('.chip-en');
    const chipPt = document.querySelector('.chip-pt');
    if (chipEn) { chipEn.style.cursor = 'pointer'; chipEn.onclick = () => this.set('en'); }
    if (chipPt) { chipPt.style.cursor = 'pointer'; chipPt.onclick = () => this.set('pt'); }
  }
};

document.addEventListener('DOMContentLoaded', () => I18N.init());
