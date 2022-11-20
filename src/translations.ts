const langaugeTexts: { [key in language]: languageText } = {
  en: {
    language: "en",
    title: "Empowering drivers",
    benefits: [
      "Paycheck each friday",
      "Experienced dispatch",
      "Best CPM on the market",
    ],

    textTitleOne: "Who are we?",
    textDescriptionOne:
      "International company focused on creating the best conditions for the drivers and truck owners. With the highest CPM on the market we attract best drivers for the best loads across United States",
    textTitleTwo: "Are you an owner operator?",
    textDescriptionTwoP1:
      "We rent trailers under our authority and provide starting at 12% from gross income",
    textDescriptionTwoP2: "Our operators are waiting for your call 24/7",

    textTitleThree: "What do we provide",
    textDescriptionThreeP1:
      "Flexible schedule to be home with your family every weekend",
    textDescriptionThreeP2:
      "Dispatch experience is based on flatbed, reefer, dry van",
    textDescriptionThreeP3: "Money transfer every friday",
    textDescriptionThreeP4: "Occupational insurance and 24/7 safety dep.",

    navbar: {
      aboutUs: "About us",
      benefits: "Benefits",
      contactUs: "Contact us",
      callNow: "Call now",
      applyNow: "Apply now",
    },
    form: {
      firstName: "First name",
      lastName: "Last name",
      email: "Email address",
      phoneNumber: "Phone number",
      homeZipCode: "Home zip",
      age: "I’m over 21 years old",
      cdla: "I have a valid CDL-A",
      successMessageP1: "You successfully submitted the form",
      successMessageP2: "We will contact you shortly",
      apply: "Apply",
    },
  },
  es: {
    language: "es",
    title: "Para choferes",
    benefits: [
      "Cheque de pago cada viernes",
      "Despacho experimentado",
      "El mejor CPM del mercado",
    ],

    textTitleOne: "Quienes somos",
    textDescriptionOne:
      "Empresa internacional enfocada en crear las mejores condiciones para los conductores y propietarios de camiones. Con el CPM más alto del mercado, atraemos a los mejores conductores para las mejores cargas en todo Estados Unidos",
    textTitleTwo: "Si tiene su camion?",
    textDescriptionTwoP1:
      "Rentamos trailers bajo nuestra autoridad y cobramos solamente 12% de los ingresos brutos",
    textDescriptionTwoP2: "Nuestros operadores están esperando su llamada 24/7",

    textTitleThree: "Que ofrecemos",
    textDescriptionThreeP1:
      "Horario flexible para estar en casa con tu familia todos los fines de semana",
    textDescriptionThreeP2:
      "La experiencia de los dispatchers se basa en camiones de Flatbed, Reefers y DryVan",
    textDescriptionThreeP3: "Transferencia de dinero todos los viernes",
    textDescriptionThreeP4: "Seguro ocupacional y dep. seguridad 24/7",

    navbar: {
      aboutUs: "Sobre nosotros",
      benefits: "Beneficios",
      contactUs: "Contacta con nosotras",
      callNow: "Llama ahora",
      applyNow: "Aplica ahora",
    },
    form: {
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Correo electronico",
      phoneNumber: "Numero de telefono",
      homeZipCode: "Codigo postal",
      age: "Tengo mas de 21 años",
      cdla: "Tengo un CDL-A valido",
      successMessageP1: "Usted ha enviado el formulario correctamente",
      successMessageP2: "Nos pondremos en contacto con usted pronto",
      apply: "Aplica",
    },
  },
  ru: {
    language: "ru",
    title: "Водители имеют приоритет",
    benefits: [
      "Зарплата каждую пятницу",
      "Опытная диспетчерская",
      "Лучшая цена за милю на рынке",
    ],

    textTitleOne: "Кто мы?",
    textDescriptionOne:
      "Международная компания, ориентированная на создание лучших условий для водителей и владельцев грузовиков. Благодаря самой высокой цене за милю на рынке мы привлекаем лучших водителей для лучших грузов по всей территории Соединенных Штатов.",
    textTitleTwo: "Вы оператор-собственник?",
    textDescriptionTwoP1:
      "Мы арендуем прицепы под нашим контролем и предоставляем от 12% от валового дохода.",
    textDescriptionTwoP2: "Наши операторы ждут вашего звонка 24/7",

    textTitleThree: "Что мы предоставляем",
    textDescriptionThreeP1:
      "Гибкий график, чтобы быть дома с семьей каждые выходные",
    textDescriptionThreeP2:
      "Опыт доставки основан на бортовом, рефрижераторном, сухом фургоне.",
    textDescriptionThreeP3: "Денежные переводы каждую пятницу",
    textDescriptionThreeP4:
      "Отдел профессионального страхования и охраны труда 24/7",

    navbar: {
      aboutUs: "О нас",
      benefits: "Преимущества",
      contactUs: "Свяжитесь с нами",
      callNow: "Позвони сейчас",
      applyNow: "Apply now",
    },
    form: {
      firstName: "Имя",
      lastName: "Фамилия",
      email: "Электронная почта",
      phoneNumber: "Номер телефона",
      homeZipCode: "Почтовый индекс",
      age: "Мне больше 21 года",
      cdla: "У меня есть действительный CDL-A",
      successMessageP1: "Вы успешно отправили форму",
      successMessageP2: "Мы свяжемся с вами в ближайшее время",
      apply: "Отправить",
    },
  },
};

export type language = "en" | "es" | "ru";
export type languageText = {
  language: language;
  title: string;
  benefits: string[];
  textTitleOne: string;
  textDescriptionOne: string;
  textTitleTwo: string;
  textDescriptionTwoP1: string;
  textDescriptionTwoP2: string;
  textTitleThree: string;
  textDescriptionThreeP1: string;
  textDescriptionThreeP2: string;
  textDescriptionThreeP3: string;
  textDescriptionThreeP4: string;
  navbar: {
    aboutUs: string;
    benefits: string;
    contactUs: string;
    callNow: string;
    applyNow: string;
  };
  form: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    homeZipCode: string;
    age: string;
    cdla: string;
    successMessageP1: string;
    successMessageP2: string;
    apply: string;
  };
};

export { langaugeTexts };
