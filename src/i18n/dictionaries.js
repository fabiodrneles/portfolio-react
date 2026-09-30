import pt from "./dictionaries/pt";
import en from "./dictionaries/en";
import fr from "./dictionaries/fr";

const dictionaries = { pt, en, fr };

/** Textos do site no idioma pedido (cai no português se o idioma não existir). */
export const getDictionary = (lang) => dictionaries[lang] ?? pt;
