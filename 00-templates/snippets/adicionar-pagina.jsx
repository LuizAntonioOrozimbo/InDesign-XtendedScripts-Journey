/*
------------------------------------------------------------
 Script:        criar-pagina.jsx
 Descrição:     Cria uma nova página em um documento do InDesign
 Autor:         Luiz Antonio Rodrigues de Oliveira
 Projeto:       InDesign ExtendScript Journey
------------------------------------------------------------
*/

// ==========================================================
// FUNÇÃO PRINCIPAL
// ==========================================================

/**
 * Cria uma nova página em um documento do InDesign.
 * Se nenhum documento for informado, usa o documento ativo.
 *
 * @param {Document} docOpcional - Documento onde a página será criada
 * @returns {Page} - Página criada
 */
function criarPagina(docOpcional) {

    var doc;

    // Se um documento foi passado como parâmetro, usa ele
    if (docOpcional) {
        doc = docOpcional;
    } 
    // Caso contrário, tenta usar o documento ativo
    else if (app.documents.length > 0) {
        doc = app.activeDocument;
    } 
    // Se não houver documentos abertos, aborta
    else {
        alert("Nenhum documento disponível para criar página.");
        return null;
    }

    // Cria a nova página no documento
    var pagina = doc.pages.add();

    return pagina;
}

// ==========================================================
// EXECUÇÃO (opcional para testes)
// ==========================================================

// Descomente para testar isoladamente
// var novaPagina = criarPagina();
// alert("Página criada com sucesso!");

/*
============================================================
 GLOSSÁRIO — criar-pagina.jsx
============================================================

Page
→ Objeto que representa uma página dentro de um documento
  do InDesign.

pages
→ Coleção de páginas pertencentes a um documento.

pages.add()
→ Método que cria uma nova página no documento.

Document
→ Objeto que representa um documento do InDesign.
  Contém páginas, estilos, preferências, etc.

app.activeDocument
→ Retorna o documento atualmente ativo (em foco) no InDesign.

Parâmetro opcional
→ Valor que pode ou não ser passado para uma função.
  Neste snippet, o documento é opcional.

docOpcional
→ Variável que recebe um documento, caso o usuário
  queira controlar onde a página será criada.

return null
→ Indica que a função não conseguiu executar sua tarefa,
  geralmente por falta de contexto válido.

Validação de contexto
→ Verificação feita antes da execução principal para evitar
  erros (ex.: tentar criar página sem documento).

Snippet reutilizável
→ Código que pode ser usado tanto isoladamente quanto
  integrado a outros scripts maiores.

============================================================
 FIM DO GLOSSÁRIO
============================================================
*/
