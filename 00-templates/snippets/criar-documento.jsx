/*
------------------------------------------------------------
 Script:        criar-documento.jsx
 Descrição:     Cria um novo documento no Adobe InDesign
 Autor:         Luiz Antonio Rodrigues de Oliveira
 Projeto:       InDesign ExtendScript Journey
------------------------------------------------------------
*/

// ==========================================================
// CONFIGURAÇÕES
// ==========================================================

// Número inicial de páginas
var NUM_PAGINAS = 1;

// ==========================================================
// FUNÇÃO PRINCIPAL
// ==========================================================

function criarDocumento() {

    if (app.documents.length > 0) {
        // Não interfere em documentos já abertos
        $.writeln("Há documentos abertos. Criando um novo mesmo assim.");
    }

    var doc = app.documents.add();

    doc.documentPreferences.pagesPerDocument = NUM_PAGINAS;

    return doc;
}

// ==========================================================
// EXECUÇÃO (opcional para testes)
// ==========================================================

// Descomente para testar isoladamente
// var documento = criarDocumento();
// alert("Documento criado com sucesso!");
