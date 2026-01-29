# 🔹 NÍVEL 1.2 — OBJETOS

> Organizando informações em estruturas inteligentes

Até agora você guardava dados assim:

```javascript
var pageWidth = 210;
var pageHeight = 297;
var bleed = 3;
```

Isso funciona…
Mas em projetos grandes (como **imposição**) isso vira bagunça rápido.

Agora vamos **agrupar informações relacionadas**.

---

## 🧠 O que é um OBJETO?

Um objeto é uma “caixa organizadora” de informações.

📦 Exemplo simples:

```javascript
var page = {
    width: 210,
    height: 297,
    unit: "mm"
};
```

Agora largura e altura **pertencem ao mesmo conjunto lógico**.

---

## 🧩 PASSO 1 — Transformando variáveis em objetos

Abra seu arquivo funcionando e **ABAIXO DAS VARIÁVEIS**, adicione:

```javascript
/* =====================================================
   NÍVEL 1.2 — ORGANIZANDO EM OBJETOS
   ===================================================== */

/* Objeto com informações do tamanho da página */
var pageSetup = {
    width: pageWidth,
    height: pageHeight,
    unit: "mm"
};

/* Objeto com informações de páginas */
var pagesSetup = {
    total: totalPages,
    facing: facing
};

/* Objeto de sangria */
var bleedSetup = {
    top: bleed,
    bottom: bleed,
    left: bleed,
    right: bleed,
    unit: "mm"
};
```

---

### 🧠 O que fizemos aqui?

Criamos **3 blocos organizados**:

| Objeto       | Guarda                       |
| ------------ | ---------------------------- |
| `pageSetup`  | Tamanho da página            |
| `pagesSetup` | Quantidade e tipo de páginas |
| `bleedSetup` | Sangria em cada lado         |

---

## 🧩 PASSO 2 — USANDO o objeto na criação do documento

Agora vamos trocar o bloco de criação do documento para usar os objetos.

🔁 Substitua este trecho:

```javascript
var doc = app.documents.add({
    documentPreferences: {
        pageWidth:  pageWidth  + "mm",
        pageHeight: pageHeight + "mm",
        pagesPerDocument: totalPages,
        facingPages: facing,
        documentBleedTopOffset:    bleed + "mm",
        documentBleedBottomOffset: bleed + "mm",
        documentBleedLeftOffset:   bleed + "mm",
        documentBleedRightOffset:  bleed + "mm"
    }
});
```

🚀 Por este:

```javascript
var doc = app.documents.add({
    documentPreferences: {
        pageWidth:  pageSetup.width  + pageSetup.unit,
        pageHeight: pageSetup.height + pageSetup.unit,

        pagesPerDocument: pagesSetup.total,
        facingPages: pagesSetup.facing,

        documentBleedTopOffset:    bleedSetup.top    + bleedSetup.unit,
        documentBleedBottomOffset: bleedSetup.bottom + bleedSetup.unit,
        documentBleedLeftOffset:   bleedSetup.left   + bleedSetup.unit,
        documentBleedRightOffset:  bleedSetup.right  + bleedSetup.unit
    }
});
```

📌 O resultado visual é o mesmo
📌 Mas a **organização interna mudou completamente**

---

## 🧠 COMO LER ISSO

Exemplo:

```javascript
pageSetup.width
```

Significa:
> “Dentro do objeto **pageSetup**, pegue a propriedade **width**”

Isso é chamado de **notação ponto**.

---

## 📘 VOCABULÁRIO DO NÍVEL 1.2

📘 VOCABULÁRIO DO NÍVEL 1.2

| Termo                 | Significado                                |
| --------------------- | ------------------------------------------ |
| Objeto                | Estrutura que agrupa dados                 |
| Propriedade           | Informação dentro do objeto                |
| Notação ponto         | Forma de acessar (`obj.propriedade`)       |
| Estrutura hierárquica | Objetos dentro de objetos (veremos depois) |

---

### ✅ O que você ganha com isso

✔ Código organizado
✔ Fácil de expandir
✔ Base perfeita para cálculos de imposição
✔ Preparação para Nível 2 (arrays e lógica)

---

💬 **Próximo passo depois que testar:**

Vamos criar um **objeto geral do documento** (objeto dentro de objeto)
➡ isso já começa a parecer um **sistema de imposição profissional**

Ps.: Testei o arquivo `"nivel-1_2.jsx"` e está funcionando!
