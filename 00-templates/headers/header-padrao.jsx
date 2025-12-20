/*
------------------------------------------------------------
 Script:        NOME-DO-SCRIPT.jsx
 Descrição:     Descrição curta do objetivo do script
 Autor:         Luiz Antonio Rodrigues de Oliveira
 Projeto:       InDesign ExtendScript Journey
 Versão:        1.0.0
 Data:          AAAA-MM-DD
------------------------------------------------------------

 Ambiente:
 - Adobe InDesign
 - ExtendScript (.jsx)

 Observações:
 - Script educacional / experimental
 - Pode ser reutilizado e evoluído ao longo do curso
------------------------------------------------------------
*/

// ==========================================================
// CONFIGURAÇÕES GERAIS
// ==========================================================

// Ativa ou desativa mensagens de log
var DEBUG = true;

// ==========================================================
// FUNÇÕES AUXILIARES
// ==========================================================

/**
 * Exibe mensagens no Console do ExtendScript
 * quando DEBUG estiver ativado.
 */
function log(message) {
    if (DEBUG) {
        $.writeln(message);
    }
}

// ==========================================================
// EXECUÇÃO PRINCIPAL
// ==========================================================

(function main() {

    log("Início do script.");

    // TODO: lógica principal do script

    log("Fim do script.");

})();
