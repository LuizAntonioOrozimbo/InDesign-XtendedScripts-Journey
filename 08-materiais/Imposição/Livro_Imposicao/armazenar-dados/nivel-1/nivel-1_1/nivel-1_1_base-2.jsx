/* =====================================================
   NÍVEL 1.1 — BASE 2
   Projeto: Imposição com InDesign ExtendScript
   Foco: VARIÁVEIS + CRIAÇÃO DE DOCUMENTO
   ===================================================== */

/*
   Define explicitamente que este script
   será executado no Adobe InDesign.
*/
#target "InDesign"

/*
   Verificação de segurança:
   garante que o script está rodando
   dentro do InDesign.
*/
if (app.name !== "Adobe InDesign") {
    alert("Este script deve ser executado no Adobe InDesign.");
    exit();
}

/* =====================================================
   INTERFACE — COLETA DE DADOS DO USUÁRIO
   ===================================================== */

/*
   Cria uma janela de diálogo modal.
   "dialog" impede o uso do InDesign
   até o usuário tomar uma decisão.
*/
var dlg = new Window("dialog", "Criar Documento Básico");

/*
   Define a orientação geral da janela.
*/
dlg.orientation = "column";
dlg.alignChildren = "left";

/* ---------- FORMATO DA PÁGINA ---------- */
var panelFormat = dlg.add("panel", undefined, "Formato da Página (mm)");
panelFormat.orientation = "row";

panelFormat.add("statictext", undefined, "Largura:");
var inputPageWidth = panelFormat.add("edittext", undefined, "210");
inputPageWidth.characters = 5;

panelFormat.add("statictext", undefined, "Altura:");
var inputPageHeight = panelFormat.add("edittext", undefined, "297");
inputPageHeight.characters = 5;

/* ---------- NÚMERO DE PÁGINAS ---------- */
var panelPages = dlg.add("panel", undefined, "Páginas");
panelPages.orientation = "row";

panelPages.add("statictext", undefined, "Quantidade:");
var inputTotalPages = panelPages.add("edittext", undefined, "8");
inputTotalPages.characters = 5;

/* ---------- PÁGINAS OPOSTAS ---------- */
var panelFacing = dlg.add("panel", undefined, "Configuração");
panelFacing.orientation = "row";

var inputFacingPages = panelFacing.add(
    "checkbox",
    undefined,
    "Usar páginas opostas"
);
inputFacingPages.value = true;

/* ---------- SANGRIA ---------- */
var panelBleed = dlg.add("panel", undefined, "Sangria (mm)");
panelBleed.orientation = "row";

panelBleed.add("statictext", undefined, "Valor:");
var inputBleed = panelBleed.add("edittext", undefined, "3");
inputBleed.characters = 5;

/* ---------- MARGENS ---------- */
var panelMargins = dlg.add("panel", undefined, "Margens (mm)");
panelMargins.orientation = "grid";
panelMargins.columns = 2;

panelMargins.add("statictext", undefined, "Superior:");
var inputMarginTop = panelMargins.add("edittext", undefined, "15");

panelMargins.add("statictext", undefined, "Inferior:");
var inputMarginBottom = panelMargins.add("edittext", undefined, "15");

panelMargins.add("statictext", undefined, "Interna:");
var inputMarginInner = panelMargins.add("edittext", undefined, "20");

panelMargins.add("statictext", undefined, "Externa:");
var inputMarginOuter = panelMargins.add("edittext", undefined, "15");

/* ---------- BOTÕES ---------- */
var groupButtons = dlg.add("group");
groupButtons.alignment = "right";

groupButtons.add("button", undefined, "OK");
groupButtons.add("button", undefined, "Cancelar");

/*
   Exibe a janela.
   Se o usuário cancelar, o script termina.
*/
if (dlg.show() !== 1) {
    exit();
}

/* =====================================================
   VARIÁVEIS — MEMÓRIA DE EXECUÇÃO (NÍVEL 1)
   ===================================================== */

/*
   Converte os valores digitados pelo usuário
   (que são texto) para números.
*/
var pageWidth   = Number(inputPageWidth.text);
var pageHeight  = Number(inputPageHeight.text);
var totalPages  = Number(inputTotalPages.text);
var useFacing   = inputFacingPages.value;
var bleed       = Number(inputBleed.text);

var marginTop    = Number(inputMarginTop.text);
var marginBottom = Number(inputMarginBottom.text);
var marginInner  = Number(inputMarginInner.text);
var marginOuter  = Number(inputMarginOuter.text);

/* =====================================================
   CRIAÇÃO DO DOCUMENTO
   ===================================================== */

/*
   Cria um novo documento no InDesign.
*/
var doc = app.documents.add();

/*
   Define o tamanho da página.
   O InDesign aceita valores com unidade.
*/
doc.documentPreferences.pageWidth  = pageWidth  + "mm";
doc.documentPreferences.pageHeight = pageHeight + "mm";

/*
   Define o número total de páginas.
*/
doc.documentPreferences.pagesPerDocument = totalPages;

/*
   Ativa ou desativa páginas opostas.
*/
doc.documentPreferences.facingPages = useFacing;

/*
   Define sangria em todos os lados.
*/
//O código abaixo, causou erro, não excluí a fim de estudo. Explicações no livro
/*
doc.documentPreferences.documentBleedTopOffset    = bleed + "mm";
doc.documentPreferences.documentBleedBottomOffset = bleed + "mm";
doc.documentPreferences.documentBleedInsideOffset = bleed + "mm";
doc.documentPreferences.documentBleedOutsideOffset= bleed + "mm";
*/
// Substituído pelo código a seguir
/*
   Define sangria em todos os lados.
   Usamos Top / Bottom / Left / Right
   para evitar erros com páginas opostas.
*/
// O código abaixo, ficará como comentário para efeito de estudos
/*
doc.documentPreferences.documentBleedTopOffset    = bleed + "mm";
doc.documentPreferences.documentBleedBottomOffset = bleed + "mm";
doc.documentPreferences.documentBleedLeftOffset   = bleed + "mm";
doc.documentPreferences.documentBleedRightOffset  = bleed + "mm";
*/
//Será substituído pelo codigo abaixo
/*
   Define margens no nível do documento.
   Isso evita erro 55, pois o DOM ainda
   não inicializou completamente as páginas.
*/
doc.documentPreferences.topMargin    = marginTop    + "mm";
doc.documentPreferences.bottomMargin = marginBottom + "mm";
doc.documentPreferences.leftMargin   = marginInner  + "mm";
doc.documentPreferences.rightMargin  = marginOuter  + "mm";

// O código abaixo, ficará como comentário para fins de estudos e não terá substituição
/*
   Acessa a primeira página do documento
   para configurar as margens.
*/
/*
var firstPage = doc.pages[0];

firstPage.marginPreferences.top    = marginTop    + "mm";
firstPage.marginPreferences.bottom = marginBottom + "mm";
firstPage.marginPreferences.left   = marginInner  + "mm";
firstPage.marginPreferences.right  = marginOuter  + "mm";
*/

/* =====================================================
   FEEDBACK FINAL AO USUÁRIO
   ===================================================== */

alert(
    "Documento criado com sucesso!\n\n" +
    "Formato: " + pageWidth + " x " + pageHeight + " mm\n" +
    "Páginas: " + totalPages + "\n" +
    "Páginas opostas: " + (useFacing ? "Sim" : "Não") + "\n" +
    "Sangria: " + bleed + " mm"
);
