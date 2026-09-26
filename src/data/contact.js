/**
 * @typedef {{ icon: string, title: string, data: string, link: string, linkText?: string }} ContactCard
 * @type {ContactCard[]}
 */
export const contactCards = [
  {
    icon: "bx bx-mail-send",
    title: "Email",
    data: "fabiodrneles@gmail.com",
    link: "mailto:fabiodrneles@gmail.com",
  },
  {
    icon: "bx bxl-whatsapp",
    title: "Whatsapp",
    data: "55-55-99210-9068",
    link: "https://api.whatsapp.com/send?phone=5555992109068&text=Hello! I'm interested in your services. Can we discuss more about how we can collaborate?",
  },
  {
    icon: "bx bxl-messenger",
    title: "Messenger",
    data: "FabioDrneles",
    link: "https://m.me/FabioDrneles",
  },
];
