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

// Abaixo, script adicionado aconforme instrução do Passo 1 do nivel 1.2

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
