# 🔹 Nível 1 — Item 1: Variáveis

## 1. Conceito (sem InDesign ainda)

Variáveis servem para:

- guardar valores temporários

- dar nome a informações

- permitir cálculos e decisões

👉 No contexto de imposição:

- medidas

- quantidades

- estados (true / false)

- escolhas do usuário

Nada aqui é visual ainda.

---

## 2. Onde isso vive no InDesign (DOM)

Antes de qualquer página existir, temos:

```nginx
app
```

O script sempre começa **fora do documento**.

Variáveis **não pertencem ao DOM** —
elas **alimentam** o DOM depois.

Isso é importante:

> você pensa → calcula → decide → aplica no InDesign

---

## 3. Exemplo 1 — Variáveis básicas de projeto

```javascript
// ===============================
// VARIÁVEIS DE PROJETO (TEMPORÁRIAS)
// ===============================

// Formato da página (em milímetros)
var pageWidth  = 210;
var pageHeight = 297;

// Sangria
var bleed = 3;

// Margens
var marginTop    = 15;
var marginBottom = 15;
var marginInner  = 20;
var marginOuter  = 15;

// Quantidade de páginas do miolo
var totalPages = 32;
```

**O que está acontecendo aqui?**

- apenas **armazenamento**

- nenhuma ação no InDesign

- tudo vive **apenas enquanto o script roda**

---

## 4. Teste simples (sem criar documento)

```javascript
alert(
  "Formato: " + pageWidth + " x " + pageHeight + " mm\n" +
  "Sangria: " + bleed + " mm\n" +
  "Total de páginas: " + totalPages
);
```

👉 Isso prova que:

- os dados existem

- podem ser lidos

- podem ser usados em decisões futuras

---

## 5. Exemplo 2 — Variáveis como base de cálculo

```javascript
// Área útil da página
var usableWidth  = pageWidth  - (marginInner + marginOuter);
var usableHeight = pageHeight - (marginTop + marginBottom);

// Debug
alert(
  "Área útil:\n" +
  usableWidth + " x " + usableHeight + " mm"
);
```

Aqui começa algo importante:

> variáveis **derivadas** de outras variáveis

Isso será essencial na imposição.

---

## 6. Relação direta com sua ideia modular

Você disse:

> “primeiro criarei a página com todas as necessidades do projeto…”

Esse é exatamente o papel das variáveis:

- definir o contrato do projeto

- antes de qualquer elemento existir

Depois:

- essas variáveis alimentam a criação da página

- depois alimentam imagens

- depois marcas, registros, informações técnicas etc.

Tudo encadeado.

---

## 7. Mini-vocabulário (Nível 1 — Variáveis)

| Termo      | Significado                              |
| ---------- | ---------------------------------------- |
| variável   | espaço nomeado para guardar um valor     |
| valor      | dado armazenado (número, texto, boolean) |
| escopo     | onde a variável existe e pode ser usada  |
| temporário | existe só durante a execução do script   |
| derivada   | variável calculada a partir de outras    |

---

## Alinhamento total (oficializando regra do projeto)

A partir de agora:

✅ **Todo script terá interação com o usuário**
✅ **Nenhum dado crítico será digitado “no código”**
✅ O código interno continua existindo (para estudo e manutenção)
✅ O usuário final **nunca precisa entender JavaScript**

👉 O script vira um **assistente técnico**, não um programa cru.

Isso vale para:

- formatos

- margens

- sangrias

- páginas

- acabamentos

- qualquer coisa daqui pra frente

---

## Como isso se encaixa no Nível 1

Importante conceitualmente:

> As caixas de diálogo **não são persistência**  
> Elas alimentam a memória temporária

Ou seja:

- o usuário escolhe

- o script guarda em variáveis

- usa

- termina

- tudo some

Exatamente como deve ser no **Nível 1**.

---

## 🔹 Nível 1 — Variáveis COM Interação

Vamos refazer o mesmo exemplo anterior, agora corretamente, com usuário leigo.

---

### 1️⃣ Caixa de diálogo simples (ScriptUI)

**Objetivo**

Permitir que o usuário informe:

- formato da página

- sangria

- total de páginas

Sem tocar no código.

---

### 2️⃣ Exemplo completo (simples, didático e comentado)

```javascript
// ===============================
// CAIXA DE DIÁLOGO — DADOS DO PROJETO
// ===============================

var dlg = new Window("dialog", "Configuração do Projeto");

// Grupo principal
dlg.orientation = "column";
dlg.alignChildren = "left";

// ---------- FORMATO ----------
var formatPanel = dlg.add("panel", undefined, "Formato da Página (mm)");
formatPanel.orientation = "row";

formatPanel.add("statictext", undefined, "Largura:");
var inputWidth = formatPanel.add("edittext", undefined, "210");
inputWidth.characters = 5;

formatPanel.add("statictext", undefined, "Altura:");
var inputHeight = formatPanel.add("edittext", undefined, "297");
inputHeight.characters = 5;

// ---------- SANGRIA ----------
var bleedPanel = dlg.add("panel", undefined, "Sangria (mm)");
bleedPanel.orientation = "row";

bleedPanel.add("statictext", undefined, "Valor:");
var inputBleed = bleedPanel.add("edittext", undefined, "3");
inputBleed.characters = 5;

// ---------- PÁGINAS ----------
var pagesPanel = dlg.add("panel", undefined, "Total de Páginas");
pagesPanel.orientation = "row";

pagesPanel.add("statictext", undefined, "Quantidade:");
var inputPages = pagesPanel.add("edittext", undefined, "32");
inputPages.characters = 5;

// ---------- BOTÕES ----------
var buttons = dlg.add("group");
buttons.alignment = "right";

buttons.add("button", undefined, "OK");
buttons.add("button", undefined, "Cancelar");

// Mostrar diálogo
if (dlg.show() != 1) {
    exit(); // usuário cancelou
}
```

Até aqui:

- **nenhuma lógica**

- apenas **coleta de dados**

- interface amigável

---

### 3️⃣ Transferindo dados para variáveis (Nível 1 puro)

```javascript
// ===============================
// VARIÁVEIS (MEMÓRIA TEMPORÁRIA)
// ===============================

var pageWidth  = Number(inputWidth.text);
var pageHeight = Number(inputHeight.text);
var bleed      = Number(inputBleed.text);
var totalPages = Number(inputPages.text);
```

Aqui acontece a mágica:

> o usuário alimenta o script  
> o script trabalha com variáveis  
> o InDesign só entra depois

---

### 4️⃣ Teste visual (feedback ao usuário)

```javascript
alert(
  "Resumo do Projeto:\n\n" +
  "Formato: " + pageWidth + " x " + pageHeight + " mm\n" +
  "Sangria: " + bleed + " mm\n" +
  "Páginas: " + totalPages
);
```

Isso dá confiança ao usuário:

- ele vê o que escolheu

- pode cancelar antes de qualquer ação pesada

---

### 5️⃣ Por que isso é essencial no seu projeto

✔️ Designers usam sem medo  
✔️ Você pode distribuir o .jsx  
✔️ Evita erro humano no código  
✔️ Facilita manutenção  
✔️ Escala para projetos grandes

E o melhor:

> **o mesmo padrão vai servir para TODOS os próximos scripts**

---

| Termo              | Significado                           |
| ------------------ | ------------------------------------- |
| ScriptUI           | sistema de interfaces do ExtendScript |
| dialog             | janela modal de interação             |
| edittext           | campo de entrada de dados             |
| panel              | agrupamento visual                    |
| memória temporária | dados vivos só durante o script       |

> **Usuário → diálogo → variáveis → ação real no InDesign**

---

## 🔹 Criando a página no InDesign a partir das informações do usuário

Até aqui nós temos:

- dados vindos da interface

- armazenados em variáveis

- vivendo apenas na memória de execução

Agora vamos **materializar isso** no InDesign.

---

### 1️⃣ Onde isso acontece no DOM do InDesign

A hierarquia básica envolvida é esta:

```markdown
app
 └── documents
      └── documentPreferences
           ├── pageWidth
           ├── pageHeight
           ├── pagesPerDocument
           ├── facingPages
           └── bleedPreferences
```

Ou seja:

- **criamos o documento**

- **configuramos suas preferências**

- o InDesign cria a(s) página(s)

---

### 2️⃣ Criar um novo documento

```javascript
// ===============================
// CRIAÇÃO DO DOCUMENTO
// ===============================

var doc = app.documents.add();
```

🔎 O que isso faz:

- cria um documento vazio

- ainda com valores padrão do InDesign

- **nada está correto ainda**

---

### 3️⃣ Configurando o documento com os dados do usuário

**3.1 — Formato da página**

⚠️ Importante:
O InDesign trabalha internamente em **points**, mas aceita **strings com unidade**.

Vamos usar `"mm"` para clareza didática.

```javascript
doc.documentPreferences.pageWidth  = pageWidth  + "mm";
doc.documentPreferences.pageHeight = pageHeight + "mm";
```

---

### 3.2 — Número de páginas

```javascript
doc.documentPreferences.pagesPerDocument = totalPages;
```

👉 Aqui:

- o InDesign cria automaticamente todas as páginas

- ainda **sem margens corretas**

- ainda **sem sangria**

---

### 3.3 — Páginas opostas (exemplo)

```javascript
doc.documentPreferences.facingPages = true;
```

📌 Isso é importante para:

- livros

- revistas

- imposição editorial

Depois tornaremos isso uma opção do usuário.

---

### 4️⃣ Configurando sangria (bleed)

Sangria fica em **bleedPreferences**, não em documentPreferences.

```javascript
doc.documentPreferences.documentBleedTopOffset    = bleed + "mm";
doc.documentPreferences.documentBleedBottomOffset = bleed + "mm";
doc.documentPreferences.documentBleedInsideOffset = bleed + "mm";
doc.documentPreferences.documentBleedOutsideOffset = bleed + "mm";
```

👉 Agora o documento já nasce **corretamente preparado para impressão**.

---

### 5️⃣ Configurando margens (primeira página)

Margens pertencem **à página**, não ao documento.

```javascript
var firstPage = doc.pages[0];

firstPage.marginPreferences.top    = marginTop    + "mm";
firstPage.marginPreferences.bottom = marginBottom + "mm";
firstPage.marginPreferences.left   = marginInner  + "mm";
firstPage.marginPreferences.right  = marginOuter  + "mm";
```

📌 Observação importante:

- em páginas opostas, depois trataremos **inside / outside**

- aqui o foco é **entender a mecânica**

---

### 6️⃣ Feedback final ao usuário (boa prática)

```javascript
alert(
  "Documento criado com sucesso!\n\n" +
  "Formato: " + pageWidth + " x " + pageHeight + " mm\n" +
  "Páginas: " + totalPages + "\n" +
  "Sangria: " + bleed + " mm"
);
```

Isso:

- confirma a ação

- evita insegurança

- deixa o script “amigável”

---

7️⃣ O que fizemos (isso é MUITO importante)

Você acabou de construir:

✔️ Interface para leigos  
✔️ Memória temporária organizada  
✔️ Criação real de documento  
✔️ Configuração técnica correta  
✔️ Base para imposição automática

Tudo **modular**.

Nada amarrado.
Nada rígido.

---

### Mini-vocabulário (DOM aplicado)

| Termo               | Significado                       |
| ------------------- | --------------------------------- |
| app                 | aplicação InDesign                |
| documents.add()     | cria um novo documento            |
| documentPreferences | configurações gerais do documento |
| pages               | coleção de páginas                |
| marginPreferences   | margens da página                 |
| bleedPreferences    | sangria do documento              |

---

### Sugestão prática (opcional, mas útil)

Ao testar, observe principalmente:

- o que acontece se o usuário digitar texto em vez de número

- o que acontece se cancelar o diálogo

- como o InDesign reage a valores muito pequenos ou muito grandes

- diferenças entre páginas simples e páginas opostas

Essas observações vão render **ótimas notas técnicas** para a apostila depois.
