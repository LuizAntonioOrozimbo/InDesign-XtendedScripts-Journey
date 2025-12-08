/* 
==================================================
Script: modelo_base.jsx
Autor: Luiz Antonio Rodrigues de Oliveira
Descrição: Iniciando o aprendizado em automação para o adobe  InDesign.
Este projeto visa a criação de IMPOSIÇÃO de páginas.
Data: 05/11/2025
==================================================
*/

// --- 1. Define o aplicativo alvo ---
// Garante que o script será executado no InDesign.
#target "InDesign"

// --- 2. Ativa o modo estrito ---
// Obriga boas práticas: exige declaração de variáveis e evita erros silenciosos.
"use strict";

// --- 3. Bloco principal com captura de erro ---
// try/catch garante que qualquer erro seja tratado e exibido sem travar o InDesign.
try {

    // --- 4. Função principal ---
    // Todo o código principal do seu script começa e termina dentro dela.
    main();

} catch (e) {
    // --- 5. Tratamento de erro global ---
    // Mostra a mensagem de erro e a linha onde ocorreu.
    alert(
        "Ocorreu um erro:\n" +
        e.message + "\n\n" +
        "Linha: " + (e.line || "desconhecida")
    );
}

// --- 6. Definição da função principal ---
// Aqui você cria a lógica do script (caixas de diálogo, imposição etc.)
function main() {
    // --- Modo estrito também pode ser reforçado dentro da função (opcional) ---
    "use strict";