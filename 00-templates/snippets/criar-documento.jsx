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
        // Verifica se já existem documentos abertos no InDesign
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

/*
============================================================
 GLOSSÁRIO — criar-documento.jsx
============================================================

ExtendScript
→ Implementação do JavaScript usada pela Adobe para automação
  de aplicativos como InDesign, Illustrator e Photoshop.

app
→ Objeto global que representa o aplicativo Adobe InDesign
  em execução. É o ponto de entrada para qualquer automação.

app.documents
→ Coleção que representa todos os documentos atualmente
  abertos no InDesign.

app.documents.length
→ Retorna a quantidade de documentos abertos no momento.

app.documents.add()
→ Cria e retorna um novo documento do InDesign.

Document
→ Objeto que representa um documento do InDesign.
  Permite acessar páginas, estilos, preferências, etc.

documentPreferences
→ Conjunto de preferências globais do documento, como:
  - número de páginas
  - tamanho da página
  - margens
  - orientação

pagesPerDocument
→ Propriedade de documentPreferences que define
  quantas páginas o documento terá ao ser criado.

Função
→ Bloco reutilizável de código que executa uma tarefa específica.
  Neste snippet, a função cria e retorna um documento.

return
→ Palavra-chave que devolve um valor da função para quem a chamou.

$.writeln()
→ Escreve mensagens no Console do ExtendScript.
  Usado para logs e depuração.

Snippet
→ Trecho de código pequeno, reutilizável e autocontido,
  que pode ser copiado para outros scripts.

Execução opcional
→ Bloco de código comentado que permite testar o snippet
  isoladamente, sem interferir em outros scripts.

============================================================
 FIM DO GLOSSÁRIO
============================================================
*/
