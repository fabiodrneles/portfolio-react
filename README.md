# Portfolio — Fabio Dorneles

Portfólio pessoal e blog construídos com [Next.js](https://nextjs.org) (App Router) e React.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run start    # serve o build de produção
npm run lint
```

## Estrutura

- `src/app/[lang]/` — rotas (`/`, `/blog`, `/blog/[slug]`, `/admin`) e metadata/SEO, em cada idioma
- `src/proxy.js` — escolhe o idioma de cada visita (veja abaixo)
- `src/i18n/` — configuração dos idiomas e textos traduzidos (`dictionaries/pt.js`, `en.js`, `fr.js`)
- `src/components/` — componentes das seções e páginas
- `src/data/portfolio.js` e `src/posts/posts.js` — dados do portfólio (links, projetos, trajetória) e artigos
- `public/` — arquivos estáticos (CV, robots, favicon)

Os artigos em `src/posts/posts.js` são gerados estaticamente no build (SSG). Para criar um novo,
use a página `/admin`, copie o código gerado e cole como primeiro item do array `posts`.
Os artigos são escritos em português; nas versões em inglês e francês aparece um aviso.

## Idiomas

O site existe em português do Brasil (padrão, sem prefixo: `/`), inglês (`/en`) e francês (`/fr`).

- **Primeira visita:** o `proxy.js` lê o idioma do navegador (`Accept-Language`). Se for inglês ou
  francês, redireciona para `/en` ou `/fr`; qualquer outro idioma fica em português.
- **Escolha manual:** o seletor PT · EN · FR no topo grava o cookie `lang` por 1 ano. A partir daí
  a escolha do visitante vale mais que o idioma do navegador.
- **SEO:** cada página tem URL própria por idioma, `hreflang` e sitemap com as três versões.

Para mudar um texto, edite a mesma chave nos três arquivos de `src/i18n/dictionaries/`.

## Variáveis de ambiente (EmailJS)

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

Por compatibilidade, as antigas `REACT_APP_EMAILJS_*` continuam sendo aceitas (veja `next.config.mjs`).

## Screenshots

![image](https://github.com/fabiodrneles/portfolio-react/assets/42509240/5e53708e-7560-40cb-8c93-a5f6715661a5)
![image](https://github.com/fabiodrneles/portfolio-react/assets/42509240/7b082a0f-343e-4d8e-8067-d7de7e670d98)
![image](https://github.com/fabiodrneles/portfolio-react/assets/42509240/ebed7718-b59a-4bb1-a53a-4b51597e3aa3)
![image](https://github.com/fabiodrneles/portfolio-react/assets/42509240/b3a0b8fd-fa28-47ff-92c8-ef60ee591804)
![image](https://github.com/fabiodrneles/portfolio-react/assets/42509240/9e3bf8b6-eca5-417d-a129-3f0ba2599fa2)
![image](https://github.com/fabiodrneles/portfolio-react/assets/42509240/12fc1fa5-e76e-40a0-8497-01b7a214cce5)
![image](https://github.com/fabiodrneles/portfolio-react/assets/42509240/85775e2f-9579-4ca8-af61-9cc19699c40c)

![image](https://github.com/fabiodrneles/portfolio-react/assets/42509240/f469c1b0-58e0-4bc6-9015-d5462394fff5)
![image](https://github.com/fabiodrneles/portfolio-react/assets/42509240/36db3c2d-18fb-4e05-a599-b6b88f86dc84)
![image](https://github.com/fabiodrneles/portfolio-react/assets/42509240/67dd896a-e73f-4102-98bf-4b786b6c5d01)
![image](https://github.com/fabiodrneles/portfolio-react/assets/42509240/38073c9c-ea77-490f-b1b9-7ded5f1a675b)
