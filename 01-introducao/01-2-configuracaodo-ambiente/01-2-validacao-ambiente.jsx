/*
===========================================================
 Aula 01.2 — Configuração do ambiente de trabalho
 Script: Validação do ambiente ExtendScript no InDesign
-----------------------------------------------------------
 Este script tem como objetivo confirmar que:
 - O InDesign está executando corretamente
 - O ExtendScript está ativo
 - O script está sendo reconhecido e executado
 - O ambiente está pronto para as próximas aulas
===========================================================

 IMPORTANTE:
 Este NÃO é um script de produção.
 Ele existe apenas para validação, aprendizado e referência.
===========================================================
*/

/*
-----------------------------------------------------------
 1. O que este script faz?
-----------------------------------------------------------

Ao ser executado, este script:

- Acessa o objeto global `app`
- Verifica se há documentos abertos
- Exibe mensagens simples usando `alert()`
- Demonstra a interação básica entre script e InDesign

Se você conseguir executar este script sem erros,
seu ambiente está corretamente configurado.
-----------------------------------------------------------
*/

/*
-----------------------------------------------------------
 2. Acesso ao aplicativo InDesign
-----------------------------------------------------------

No ExtendScript, o objeto `app` representa
o aplicativo Adobe que está executando o script.

No nosso caso:
- `app` === Adobe InDesign
*/

var appName = app.name; // Nome do aplicativo
var appVersion = app.version; // Versão do InDesign

/*
-----------------------------------------------------------
 3. Verificando documentos abertos
-----------------------------------------------------------

`app.documents` representa a coleção de documentos abertos.

- app.documents.length → quantidade de documentos abertos
*/

var totalDocuments = app.documents.length;

/*
-----------------------------------------------------------
 4. Mensagens de validação
-----------------------------------------------------------

`alert()` exibe uma janela de alerta no InDesign.
É o "Hello World" do ExtendScript.
*/

alert(
    "✅ ExtendScript funcionando corretamente!\n\n" +
    "Aplicativo: " + appName + "\n" +
    "Versão: " + appVersion + "\n" +
    "Documentos abertos: " + totalDocuments + "\n\n" +
    "Seu ambiente está pronto para continuar 🚀"
);

/*
===========================================================
 5. Glossário interno — Aula 01.2
===========================================================

Este glossário serve como referência rápida
e pode ser copiado futuramente para o glossario.md
-----------------------------------------------------------

ExtendScript
- Linguagem baseada em JavaScript (ES3) criada pela Adobe
- Usada para automatizar aplicativos Adobe

.jsx
- Extensão padrão de arquivos ExtendScript
- Executados diretamente dentro do InDesign

app
- Objeto global que representa o aplicativo Adobe em execução
- Ponto de entrada para qualquer automação

app.name
- Retorna o nome do aplicativo (ex.: "Adobe InDesign")

app.version
- Retorna a versão do aplicativo

app.documents
- Coleção de documentos abertos no InDesign

documents.length
- Quantidade de documentos abertos

alert()
- Função que exibe uma caixa de diálogo no InDesign
- Usada para mensagens simples e testes iniciais

Painel Scripts
- Local no InDesign onde scripts .jsx são listados e executados
- Caminho: Window → Utilities → Scripts

Application / User
- Pastas onde os scripts podem ser armazenados
- User é recomendada para estudo e testes

===========================================================
 Fim do script — Aula 01.2
===========================================================
*/
