# 🔹 Nível 1 — Item 2: Objetos

Agora saímos de “valores soltos” e começamos a organizar informações em estruturas.

> 🔹 Variável = guarda 1 valor
> 🔹 Objeto = guarda um conjunto de propriedades relacionadas

Isso é essencial para o seu projeto, porque imposição trabalha com:

- formatos

- margens

- sangrias

- posições

- marcas

Tudo isso é **grupo de informações**, não valores isolados.

---

## 🧠 Conceito simples

Em vez de:

```javascript
var pageWidth = 210;
var pageHeight = 297;
var bleed = 3;
```

Passamos a ter:

```javascript
var documentSetup = {
    width: 210,
    height: 297,
    bleed: 3
};
```

Agora tudo pertence a **um mesmo “pacote” de informações**.

---

## 🧩 Exemplo 1 — Objeto de Formato de Página

```javascript
var pageFormat = {
    width: Number(inputPageWidth.text),
    height: Number(inputPageHeight.text),
    unit: "mm"
};
```

### 📌 O que temos aqui?

| Parte        | O que é             |
| ------------ | ------------------- |
| `pageFormat` | Nome do objeto      |
| `width`      | Propriedade         |
| `height`     | Propriedade         |
| `unit`       | Propriedade         |
| `:`          | separa nome e valor |
| `,`          | separa propriedades |

---

## 🧩 Exemplo 2 — Objeto de Margens

```javascript
var margins = {
    top: Number(inputMarginTop.text),
    bottom: Number(inputMarginBottom.text),
    inside: Number(inputMarginInner.text),
    outside: Number(inputMarginOuter.text),
    unit: "mm"
};
```

Agora as margens **não estão mais espalhadas**, estão organizadas.

---

## 🧩 Exemplo 3 — Objeto Geral do Documento

Aqui começa a ficar nível profissional:

```javascript
var documentConfig = {
    size: {
        width: Number(inputPageWidth.text),
        height: Number(inputPageHeight.text),
        unit: "mm"
    },
    pages: {
        total: Number(inputTotalPages.text),
        facing: inputFacingPages.value
    },
    bleed: {
        value: Number(inputBleed.text),
        unit: "mm"
    },
    margins: {
        top: Number(inputMarginTop.text),
        bottom: Number(inputMarginBottom.text),
        inside: Number(inputMarginInner.text),
        outside: Number(inputMarginOuter.text),
        unit: "mm"
    }
};
```

---

## 🔍 Como acessar depois?

```javascript
documentConfig.size.width
documentConfig.pages.total
documentConfig.bleed.value
documentConfig.margins.top
```

Isso é **fundamental** para scripts grandes (como o seu de imposição).

---

## 🎯 Por que isso é importante para o seu projeto?

Mais pra frente você poderá ter:

```javascript
imposition.sheet
imposition.gutter
imposition.signature
imposition.marks.crop
imposition.marks.registration
```

Tudo organizado em **objetos hierárquicos**.

Você está literalmente montando a base de um **sistema de imposição**, não só um script.

---

## 🧪 Exercício prático (bem simples)

Depois das variáveis, crie:

```javascript
var bleedSetup = {
    top: bleed,
    bottom: bleed,
    left: bleed,
    right: bleed,
    unit: "mm"
};

alert(
    "Sangria configurada:\n" +
    "Topo: " + bleedSetup.top + bleedSetup.unit + "\n" +
    "Base: " + bleedSetup.bottom + bleedSetup.unit
);
```

Só para você **ver o objeto funcionando**.

---

## 📘 Glossário do Nível 1.2

| Termo                 | Significado                                |
| --------------------- | ------------------------------------------ |
| Objeto                | Estrutura que agrupa dados relacionados    |
| Propriedade           | Informação dentro do objeto                |
| Notação ponto         | Forma de acessar propriedades (`obj.prop`) |
| Estrutura hierárquica | Objetos dentro de objetos                  |
