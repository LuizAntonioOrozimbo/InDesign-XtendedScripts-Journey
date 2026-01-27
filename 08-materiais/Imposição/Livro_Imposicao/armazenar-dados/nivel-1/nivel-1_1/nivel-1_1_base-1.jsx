/* =====================================================
   NÍVEL 1.1 — BASE DO SCRIPT
   Projeto: Imposição com InDesign ExtendScript
   Objetivo: Criar a estrutura mínima funcional
   ===================================================== */

/*
   A diretiva #target informa ao ExtendScript
   qual aplicação Adobe este script deve controlar.
   Neste caso, estamos apontando explicitamente
   para o Adobe InDesign.
*/
#target "InDesign"

/*
   O objeto global "app" representa a aplicação ativa.
   Aqui fazemos uma verificação de segurança:
   se, por algum motivo, o script não estiver sendo
   executado dentro do InDesign, ele será interrompido.
*/
if (app.name !== "Adobe InDesign") {

    /*
       Exibe uma mensagem ao usuário explicando
       que o script só funciona no InDesign.
    */
    alert("Este script deve ser executado no Adobe InDesign.");

    /*
       A função exit() encerra imediatamente
       a execução do script.
       Nenhuma linha abaixo disso será executada.
    */
    exit();
}

/*
   Se o script chegou até aqui, significa que:
   - o target está correto
   - o InDesign está ativo
   - o ambiente é seguro para continuar

   Este alert é apenas um teste inicial
   para confirmar que o script foi carregado
   e executado com sucesso.
*/
alert("Script Nível 1.1 carregado com sucesso.");
