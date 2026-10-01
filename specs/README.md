# Specs: desenvolvimento guiado por especificação

Toda mudança começa numa spec curta e termina com a spec atualizada. Assim o contexto do site fica escrito aqui, e ninguém (nem o Claude) precisa reler o código inteiro para saber como algo deve se comportar.

## Como usar

1. **Antes de mexer**, leia só a spec da área (um arquivo pequeno) em vez de explorar o repositório.
2. **Mudança nova ou de comportamento**: crie ou atualize a spec primeiro (copie `_template.md`), com critérios de aceite verificáveis.
3. **Implemente** até os critérios passarem. Cada critério aponta para o teste que o prova. Se não houver teste, crie um novo (nunca altere os existentes sem autorização, veja `CLAUDE.md`).
4. **Feche**: marque o status, ajuste a spec ao que foi feito e registre a sessão no journal (documento do Claude Docs, fora do repositório; veja `CLAUDE.md`).

## Por que economiza tokens

- A spec resume decisões, limites e testes em poucas linhas, então a leitura custa uma fração da leitura do código.
- Critérios de aceite claros evitam idas e vindas ("era isso que você queria?").
- O que já foi decidido fica escrito e não é rediscutido.

## Regras

- Spec curta: uma tela. Se passar disso, divida.
- Escreva o **quê** e o **porquê**; o **como** está no código.
- Os testes continuam soberanos: se spec e teste discordam, vale o teste e a spec é corrigida com autorização do dono.
- Status: `rascunho` → `aprovada` → `implementada`.

## Índice

| Spec | Área | Status |
| --- | --- | --- |
| [001-idiomas-e-rotas](001-idiomas-e-rotas.md) | PT/EN/FR, rotas e cookie `lang` | implementada |
| [002-formulario-de-contato](002-formulario-de-contato.md) | Formulário, anti-spam e privacidade | implementada |
| [003-blog](003-blog.md) | Artigos, traduções, compartilhar | implementada |
| [004-privacidade-lgpd](004-privacidade-lgpd.md) | Política de privacidade e LGPD | implementada |
| [005-qualidade-e-pipelines](005-qualidade-e-pipelines.md) | Testes e pipelines de CI | implementada |
| [006-notas-maximas](006-notas-maximas.md) | Meta: nota máxima em avaliadores externos | rascunho |
| [007-fontes-locais](007-fontes-locais.md) | Fontes servidas pelo próprio site | implementada |
| [008-identidade-e-credibilidade](008-identidade-e-credibilidade.md) | Redes, formação no HTML, selo de contato, JSON-LD | aprovada |
| [009-qualidade-do-site](009-qualidade-do-site.md) | Página "Qualidade deste site" | implementada |
