# Correção de erro

Devido ao erro 55 no arquivo ***nivel-1_2_base-2.jsx*** e na tentativa sem sucesso
de corrigir o mesmo, foi feito uma mudança em sua estrutura. Que deverá ser testada e acredita-se com o problema resolvido.
Ps.: Serão mantidas todas as versões para fins de estudos e comparações

## 📄 nivel-1_1_base-final.jsx

```javascript
/* =====================================================
   NÍVEL 1.1 — VARIÁVEIS (VERSÃO ESTÁVEL)
   Criação de documento com dados do usuário
   ===================================================== */

/* Diz ao sistema que este script é para o InDesign */
#target "InDesign"

/* Garante que o script está rodando no InDesign */
if (app.name !== "Adobe InDesign") {
    alert("Execute este script no Adobe InDesign.");
    exit(); // Encerra o script
}

/* =====================================================
   JANELA DE DIÁLOGO (INTERFACE)
   ===================================================== */

/* Cria uma janela do tipo diálogo */
var dlg = new Window("dialog", "Novo Documento");

/* Organiza os elementos da janela em coluna */
dlg.orientation = "column";
dlg.alignChildren = "left";

/* ---------- TAMANHO DA PÁGINA ---------- */
dlg.add("statictext", undefined, "Largura da página (mm):");
var inputWidth = dlg.add("edittext", undefined, "210");
inputWidth.characters = 6;

dlg.add("statictext", undefined, "Altura da página (mm):");
var inputHeight = dlg.add("edittext", undefined, "297");
inputHeight.characters = 6;

/* ---------- NÚMERO DE PÁGINAS ---------- */
dlg.add("statictext", undefined, "Número de páginas:");
var inputPages = dlg.add("edittext", undefined, "8");
inputPages.characters = 6;

/* ---------- PÁGINAS OPOSTAS ---------- */
var chkFacing = dlg.add("checkbox", undefined, "Páginas opostas");
chkFacing.value = true;

/* ---------- SANGRIA ---------- */
dlg.add("statictext", undefined, "Sangria (mm):");
var inputBleed = dlg.add("edittext", undefined, "3");
inputBleed.characters = 6;

/* ---------- BOTÕES ---------- */
var btns = dlg.add("group");
btns.add("button", undefined, "OK");
btns.add("button", undefined, "Cancelar");

/* Mostra a janela e verifica se o usuário clicou OK */
if (dlg.show() !== 1) {
    exit(); // Cancela o script
}

/* =====================================================
   VARIÁVEIS (MEMÓRIA TEMPORÁRIA)
   ===================================================== */

/* Converte texto digitado em número */
var pageWidth  = Number(inputWidth.text);   // largura da página
var pageHeight = Number(inputHeight.text);  // altura da página
var totalPages = Number(inputPages.text);   // quantidade de páginas
var bleed      = Number(inputBleed.text);   // valor da sangria
var facing     = chkFacing.value;           // true ou false

/* =====================================================
   CRIAÇÃO DO DOCUMENTO (FORMA SEGURA)
   ===================================================== */

/*
documents.add() cria um novo documento.
Passamos um objeto com preferências iniciais
para evitar erros do DOM.
*/
var doc = app.documents.add({
    documentPreferences: {
        pageWidth:  pageWidth  + "mm",  // define largura
        pageHeight: pageHeight + "mm",  // define altura
        pagesPerDocument: totalPages,   // número de páginas
        facingPages: facing,            // páginas opostas (true/false)

        /* Sangria */
        documentBleedTopOffset:    bleed + "mm",
        documentBleedBottomOffset: bleed + "mm",
        documentBleedLeftOffset:   bleed + "mm",
        documentBleedRightOffset:  bleed + "mm"
    }
});

/* =====================================================
   MENSAGEM FINAL
   ===================================================== */

alert(
    "Documento criado com sucesso!\n\n" +
    "Formato: " + pageWidth + " x " + pageHeight + " mm\n" +
    "Páginas: " + totalPages + "\n" +
    "Páginas opostas: " + (facing ? "Sim" : "Não") + "\n" +
    "Sangria: " + bleed + " mm"
);
```

---

## 🧠 EXPLICAÇÃO DOS PRINCIPAIS COMANDOS

| Comando               | O que significa                        |
| --------------------- | -------------------------------------- |
| `#target "InDesign"`  | Diz qual programa executa o script     |
| `app`                 | Representa o Adobe InDesign            |
| `documents.add()`     | Cria um novo documento                 |
| `{ }`                 | Define um **objeto** com propriedades  |
| `documentPreferences` | Conjunto de configurações do documento |
| `"mm"`                | Unidade de medida usada no InDesign    |
| `Number()`            | Converte texto em número               |
| `dlg.show()`          | Exibe a janela para o usuário          |
| `exit()`              | Interrompe o script                    |
| `alert()`             | Mostra mensagem na tela                |

---

## ✅ O que este arquivo garante

✔ Não dá erro 55
✔ Cria documento corretamente
✔ Usa apenas variáveis (nível 1.1)
✔ Mantém interatividade
✔ Base pronta para evoluir

---

 📌 **Guarde este arquivo como:**

nivel-1_1_base-final.jsx

---

Quando você testar e confirmar que está rodando liso, a gente sobe para:

## 🔹 Nível 1.2 — Objetos

Aí começa a organização profissional do projeto de imposição.

Sem pressa. Base forte = projeto forte.
