# 🔹 NÍVEL 1.2 — PARTE 2

## 🧱 Criando um OBJETO PRINCIPAL (estrutura hierárquica)

Até agora você tem objetos separados:

```javascript
pageSetup
pagesSetup
bleedSetup
```

Agora vamos juntar tudo em **um único objeto central**.

Isso é o que scripts profissionais fazem.

---

## 🧩 PASSO 1 — Criar o objeto mestre

Adicione **logo após os objetos que já criamos**:

```javascript
/* Objeto principal que reúne todas as configurações */
var documentSetup = {
    page: pageSetup,
    pages: pagesSetup,
    bleed: bleedSetup
};
```

Agora temos isso na memória:

```css
documentSetup
 ├─ page
 ├─ pages
 └─ bleed
```

---

## 🧠 O que isso muda?

Agora você não pensa mais em variáveis soltas.

Você pensa assim:

```javascript
documentSetup.page.width
documentSetup.pages.total
documentSetup.bleed.top
```

Isso é **exatamente a lógica que vamos usar na imposição**.

---

## 🧩 PASSO 2 — Usar o objeto principal

Agora vamos deixar o código ainda mais organizado.

🔁 Substitua o bloco de criação do documento por:

```javascript
var doc = app.documents.add({
    documentPreferences: {
        pageWidth:  documentSetup.page.width  + documentSetup.page.unit,
        pageHeight: documentSetup.page.height + documentSetup.page.unit,

        pagesPerDocument: documentSetup.pages.total,
        facingPages: documentSetup.pages.facing,

        documentBleedTopOffset:    documentSetup.bleed.top    + documentSetup.bleed.unit,
        documentBleedBottomOffset: documentSetup.bleed.bottom + documentSetup.bleed.unit,
        documentBleedLeftOffset:   documentSetup.bleed.left   + documentSetup.bleed.unit,
        documentBleedRightOffset:  documentSetup.bleed.right  + documentSetup.bleed.unit
    }
});
```

---

## 📘 O que você acabou de aprender (nível profissional)

| Conceito         | O que significa na prática             |
| ---------------- | -------------------------------------- |
| Objeto principal | Um “pacote geral” do projeto           |
| Hierarquia       | Dados organizados por níveis           |
| Escalabilidade   | Fácil de adicionar novas partes depois |

---

### 🚀 E por que isso é IMPORTANTE para a imposição?

Porque mais pra frente você terá:

```javascript
documentSetup.imposition.signature
documentSetup.imposition.gutter
documentSetup.marks.crop
documentSetup.marks.registration
```

Você está literalmente montando a **base de um motor de imposição**.

---

### ✅ Missão agora

Teste o script novamente.
Nada deve mudar visualmente — **mas internamente está muito mais evoluído**.

Se rodar certo, o próximo passo será:

## 🔹 NÍVEL 1.3 — ARRAYS

(Aqui começa a parte que permite calcular posições, folhas, páginas por chapa… 👀)

Quando estiver pronto, diga:
“**Estrutura mestre funcionando**”
