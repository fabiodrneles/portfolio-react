/**
 * @typedef {{ icon: string, titleLines: string[], description: string, items: string[] }} ServiceCategory
 * @type {ServiceCategory[]}
 */
export const services = [
  {
    icon: "uil uil-web-grid",
    titleLines: ["Front-End", "Development"],
    description:
      "Enhancing user experiences through meticulous and stylized interface development. Translating visionary designs into elegant code, creating visually appealing and highly functional websites and applications.",
    items: [
      "User Interface Development.",
      "Web Development with API Integration.",
      "Collaboration with Designers for Creative Implementation.",
      "Provide a seamless and enjoyable browsing experience across devices.",
      "Innovative Solutions in Front-End Development.",
    ],
  },
  {
    icon: "uil uil-arrow",
    titleLines: ["Back-End", "Development"],
    description:
      "Powering user experiences through efficient and flexible backend solutions. I transform intricate ideas into functional and secure server-side implementations, ensuring high-quality interactions and data management.",
    items: [
      "Smart Database Management.",
      "Flexible and Secure Backend Architectures:.",
      "Strategic Collaboration in Problem Resolution:.",
      "Efficient Infrastructure Scalability.",
      "Development of Restful APIs.",
    ],
  },
  {
    icon: "uil uil-flask",
    titleLines: ["QA", "Engineer"],
    description:
      "Delivering robust and efficient testing solutions to ensure high-quality software and seamless user experiences across platforms.",
    items: [
      "Test Automation Development.",
      "API Testing and Validation.",
      "Cross-Browser and Cross-Platform Testing.",
      "Mobile App Testing.",
      "CI/CD Pipeline Integration.",
    ],
  },
];
