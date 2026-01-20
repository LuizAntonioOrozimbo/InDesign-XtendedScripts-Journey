# Uso de `"use strict"` em ExtendScript

Este documento explica o uso da diretiva `"use strict"` no contexto
do **InDesign ExtendScript Journey**, abordando seus benefícios,
limitações e boas práticas.

> 📍 Este não é um requisito obrigatório do Journey.
> Trata-se de uma **decisão consciente**, que deve ser entendida antes de ser aplicada.

---

## 1. O que é `"use strict"`

`"use strict"` ativa o **modo estrito do JavaScript**.

Mesmo o ExtendScript sendo baseado em **JavaScript ES3**,
a Adobe implementou suporte parcial ao modo estrito,
especialmente em aplicações mais recentes como o InDesign.

Quando ativado, o JavaScript passa a:

- lançar erros onde antes falhava silenciosamente
- exigir declarações explícitas de variáveis
- restringir comportamentos ambíguos da linguagem

---

## 2. Benefícios do `"use strict"` no ExtendScript

Quando usado corretamente, `"use strict"` ajuda a:

- evitar criação acidental de variáveis globais
- detectar erros mais cedo
- tornar o código mais previsível
- aproximar o estilo do JavaScript moderno
- melhorar a disciplina na escrita de código

No contexto didático, ele **reforça bons hábitos**.

---

## 3. Limitações e cuidados

Apesar dos benefícios, `"use strict"` **não é neutro** no ExtendScript.

Cuidados importantes:

- scripts antigos podem quebrar
- códigos copiados da internet podem falhar
- algumas práticas antigas não funcionam em modo estrito
- o comportamento pode variar entre versões do InDesign

Por isso, **não deve ser ativado automaticamente sem critério**.

---

## 4. Uso recomendado no Learning Journey

No padrão do Journey:

- `"use strict"` **não é obrigatório**
- pode ser usado em:
  - scripts didáticos
  - exemplos controlados
  - códigos novos
- deve ser **comentado quando ativado**

Exemplo recomendado:

```js
"use strict";
// Modo estrito ativado para reforçar boas práticas de escrita
```

Ou, quando não utilizado:

```js
// "use strict";
// Desativado por compatibilidade com scripts legados
```

---

## 5. Relação com os headers do Journey

- `header-padrao.jsx`  
    Não utiliza "use strict" por padrão (neutralidade e compatibilidade).

- `header-didatico.jsx`  
    Pode utilizar "use strict" como ferramenta pedagógica.

- `header-producao.jsx`
    Uso opcional, conforme decisão do autor do script.

O importante é que a escolha **nunca seja implícita ou “mágica”**.

---

## 6. Conclusão

O `"use strict"` não é um vilão nem uma obrigação.

No InDesign ExtendScript Journey, ele é tratado como:

- uma ferramenta

- uma escolha técnica

- um reforço didático opcional

> 📌 Aprender quando usar é mais importante do que usar sempre.
