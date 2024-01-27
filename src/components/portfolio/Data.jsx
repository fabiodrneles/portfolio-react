import Image1 from "../../assets/java.png";
import Image2 from "../../assets/angular.png";
import Image3 from "../../assets/nextjs.png";

export const Data = [
  {
    id: 1,
    image: Image1,
    title: "Aplicação Java",
    description: "Aplicação backend construída com java, spring framework.",
    link: (
      <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
        ver mais
      </a>
    ),
  },
  {
    id: 2,
    image: Image2,
    title: "Aplicação Angular",
    description: "Aplicação frontend construída com Angular 2+",
    link: (
      <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
        ver mais
      </a>
    ),
  },
  {
    id: 3,
    image: Image3,
    title: "Aplicação Next.js / React.js",
    description: "Aplicação frontend construída com Next.js",
    link: (
      <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
        ver mais
      </a>
    ),
  },
];
