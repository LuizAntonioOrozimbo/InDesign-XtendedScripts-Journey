/*
===========================================================
 Aula 01.3 — Execução de scripts no InDesign
 Script: Formas de executar scripts ExtendScript (.jsx)
-----------------------------------------------------------
 Este script demonstra e valida:
 - A execução manual via Painel Scripts
 - A execução com documento aberto ou fechado
 - O fluxo básico de interação script ↔ InDesign
===========================================================

 IMPORTANTE:
 Este script é educacional.
 Seu objetivo é ensinar COMO executar scripts
 e COMO interpretar o comportamento do InDesign.
===========================================================
*/

/*
-----------------------------------------------------------
 1. Onde este script é executado?
-----------------------------------------------------------

Scripts ExtendScript (.jsx) são executados:

- A partir do Painel Scripts do InDesign
- Dentro do próprio aplicativo InDesign
- Nunca no navegador ou Node.js

Se você está vendo este alerta,
significa que o script foi executado corretamente.
*/

alert("▶ Script executado com sucesso!\n\nOrigem: Painel Scripts do InDesign");

/*
-----------------------------------------------------------
 2. Execução com ou sem documento aberto
-----------------------------------------------------------

Nem todo script exige um documento aberto.
É responsabilidade do script verificar esse estado.
*/

if (app.documents.length === 0) {

    alert(
        "ℹ Nenhum documento aberto.\n\n" +
        "Este script foi executado corretamente,\n" +
        "mas não há documentos para manipular.\n\n" +
        "Isso é normal para scripts de validação."
    );

} else {

    alert(
        "📄 Documento detectado!\n\n" +
        "Quantidade de documentos abertos: " +
        app.documents.length
    );
}

/*
-----------------------------------------------------------
 3. Execução repetida
-----------------------------------------------------------

Scripts no InDesign podem ser executados:

- Quantas vezes forem necessárias
- Sem necessidade de reiniciar o aplicativo
- Basta clicar novamente no script

Isso é essencial para testes e automação.
*/

/*
-----------------------------------------------------------
 4. Boas práticas iniciais
-----------------------------------------------------------

Mesmo scripts simples devem:

- Verificar condições antes de agir
- Evitar assumir estados (documento aberto, seleção etc.)
- Informar claramente o que está acontecendo
*/

/*
===========================================================
 5. Glossário interno — Aula 01.3
===========================================================

Este glossário é específico sobre EXECUÇÃO de scripts
e pode ser integrado futuramente ao glossario.md
-----------------------------------------------------------

Painel Scripts
- Interface do InDesign para listar e executar scripts
- Caminho: Window → Utilities → Scripts

Execução manual
- Execução iniciada pelo usuário ao clicar no script

app.documents.length
- Indica quantos documentos estão abertos no InDesign
- Muito usado para validações iniciais

Fluxo de execução
- Sequência de instruções executadas pelo InDesign
- Começa no topo do arquivo .jsx e segue até o final

Script de validação
- Script simples usado para testar ambiente e execução
- Não altera documentos nem cria estruturas complexas

Boas práticas
- Conjunto de cuidados para evitar erros e comportamentos inesperados
- Serão aprofundadas em módulos futuros

===========================================================
 Fim do script — Aula 01.3
===========================================================
*/
