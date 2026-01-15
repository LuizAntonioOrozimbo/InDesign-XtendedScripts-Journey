/*
==================================================
 Aula 01.1 — Contexto e visão geral do ExtendScript
 Script: 01-1-alerta-ambiente.jsx
--------------------------------------------------

 OBJETIVO DESTE SCRIPT
 -------------------------------------------------
 Este script tem um único propósito:
 confirmar que o ambiente de ExtendScript
 está funcionando corretamente no Adobe InDesign.

 Ele NÃO ensina lógica de programação.
 Ele NÃO aprofunda automação.
 Ele NÃO cria documentos nem altera arquivos.

 Este é apenas um "sinal verde" inicial.
==================================================
*/


/*
--------------------------------------------------
 O objeto global `app`
 --------------------------------------------------
 Em ExtendScript para InDesign, `app` representa
 o próprio aplicativo InDesign.

 Se este script estiver sendo executado corretamente,
 significa que:
 - O InDesign está aberto
 - O mecanismo de ExtendScript está ativo
 - O script foi reconhecido e executado
--------------------------------------------------
*/

// A função alert() exibe uma caixa de diálogo simples.
// É o jeito mais direto de obter um feedback visual.

alert(
    "Olá!\n\n" +
    "Se você está vendo esta mensagem, significa que:\n\n" +
    "- O InDesign executou o script com sucesso\n" +
    "- O ambiente ExtendScript está funcionando\n" +
    "- Você está pronto para seguir no Journey\n\n" +
    "Próximo passo:\n" +
    "Configurar o ambiente de trabalho (Aula 01.2)."
);


/*
--------------------------------------------------
 Observações importantes
 --------------------------------------------------

 1) Este script foi propositalmente mantido simples.
    Ele serve apenas como confirmação de ambiente.

 2) O uso de alert() é comum em scripts iniciais
    e em testes rápidos, mas NÃO é ideal para
    automações complexas.

 3) Ao longo do curso, você aprenderá outras formas
    de depuração e comunicação, como:
    - $.writeln()
    - logs em arquivo
    - tratamento de erros

 4) Se este alerta NÃO aparecer:
    - Verifique se o script está na pasta correta
    - Confirme se está executando via painel Scripts
    - Verifique se o InDesign está aberto

==================================================
 5) GLOSSÁRIO — Aula 01.1
--------------------------------------------------

 ExtendScript
 -------------------------------------------------
 Linguagem de scripting da Adobe baseada em
 JavaScript ES3, usada para automatizar aplicativos
 como InDesign, Illustrator e Photoshop.

 No contexto deste curso, ExtendScript é o meio
 pelo qual controlamos o InDesign via código.


 Script (.jsx)
 -------------------------------------------------
 Arquivo de texto contendo instruções em
 ExtendScript, geralmente com extensão `.jsx`.

 No InDesign, scripts podem ser executados
 diretamente pelo painel Scripts.


 Adobe InDesign
 -------------------------------------------------
 Aplicativo de editoração eletrônica da Adobe.
 No ExtendScript, ele é acessado e controlado
 por meio do objeto global `app`.


 app
 -------------------------------------------------
 Objeto global que representa o aplicativo Adobe
 que está executando o script.

 No caso deste Journey:
 `app` === Adobe InDesign

 Se `app` estiver disponível, significa que o
 script está rodando dentro do InDesign.


 alert()
 -------------------------------------------------
 Função que exibe uma caixa de diálogo simples
 com uma mensagem ao usuário.

 É frequentemente usada em:
 - Testes iniciais
 - Validação de ambiente
 - Feedback rápido

 Não é indicada para automações complexas.


 Painel Scripts
 -------------------------------------------------
 Painel do InDesign onde os scripts `.jsx`
 são listados e executados.

 Caminho:
 Window → Utilities → Scripts


 Pasta User
 -------------------------------------------------
 Pasta de scripts específica do usuário atual.

 Scripts colocados aqui:
 - Não afetam outros usuários
 - São ideais para estudo e testes


 Ambiente de execução
 -------------------------------------------------
 Conjunto formado por:
 - InDesign aberto
 - Script `.jsx`
 - Mecanismo ExtendScript ativo

 Se o ambiente estiver correto, o script
 será executado sem erros.

--------------------------------------------------
 Este glossário pode ser:
 - Expandido
 - Refinado
 - Copiado para o glossario.md geral
--------------------------------------------------

--------------------------------------------------
 Fim do script
--------------------------------------------------
*/
