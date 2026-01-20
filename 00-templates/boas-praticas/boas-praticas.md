# Boas Práticas — InDesign ExtendScript Journey

Este documento reúne **princípios, recomendações e diretrizes gerais**
para a escrita, organização e manutenção de scripts ExtendScript
utilizados ao longo de todo o Learning Journey.

> 📍 Este não é um material didático sequencial.
> É um **documento de consulta constante**, aplicável a todos os módulos.

---

## 📚 Índice

1. Propósito das Boas Práticas  
2. Filosofia de Escrita de Scripts  
3. Organização Geral de Arquivos  
4. Estrutura Recomendada de um Script `.jsx`  
5. Uso de Comentários e Documentação no Código  
6. Convenções de Nomenclatura  
7. Uso de `#target` e Contexto de Execução  
8. Uso de `"use strict"` no ExtendScript  
9. Boas Práticas de Segurança e Prevenção de Erros  
10. Scripts Didáticos vs Scripts de Produção  
11. Manutenção, Evolução e Limpeza de Scripts  
12. Relação deste Documento com os Módulos do Journey

---

> Este índice pode evoluir conforme o Journey amadurece,
> mas sua função é garantir **consistência, clareza e sustentabilidade**
> no aprendizado e na escrita de código.

---

## 1. Propósito das Boas Práticas

Este documento existe para **definir princípios**, não apenas regras técnicas.

No contexto deste Journey, **Boas Práticas** significam:

- Tornar scripts **legíveis**

- Facilitar **manutenção futura**

- Reduzir **erros difíceis de diagnosticar**

- Permitir **reuso consciente**

- Criar uma **identidade técnica consistente** ao longo do curso

Estas práticas **não são obrigatórias por limitação da linguagem**,
mas sim **recomendadas por experiência**.

---

## 🎯 Por que Boas Práticas são essenciais no ExtendScript?

O ExtendScript:

- É baseado em **JavaScript ES3**

- Não possui:

  - módulos modernos

  - tipagem

  - ferramentas nativas de linting

- Roda **dentro de aplicativos Adobe**, não em ambiente isolado

Isso significa que:

> Um script mal escrito pode quebrar documentos, fluxos de trabalho e tempo de produção.

Boas práticas funcionam como **proteção preventiva**.

---

## 🧠 Boas práticas ≠ Complexidade

Importante deixar claro:

- Boas práticas **não significam código complexo**

- Nem “engenharia excessiva”

- Nem “padrões corporativos rígidos”

Aqui buscamos:

- Clareza > Esperteza

- Simplicidade > Magia

- Consistência > Estilo pessoal aleatório

---

## 🧭 Este documento deve ser usado como

- **📘 Leitura recomendada antes de avançar no Journey**

- **🔁 Consulta constante**

- 🧩 Referência para:

  - aulas

  - scripts

  - templates

  - snippets

  - projetos

Por isso, ele está localizado em:

```bash
00-templates/boas-praticas/
```

E não dentro de um módulo específico.

## 📌 Importante

Este documento é **vivo**:

- Pode (e deve) crescer

- Pode ser ajustado conforme o curso evolui

- Sempre respeitando a filosofia central do Learning Journey

## 🔗 Referência nos READMEs

Sempre que apropriado, os READMEs dos módulos poderão conter algo como:

> “Antes de avançar, consulte o documento de Boas Práticas do Journey.”

Isso garante alinhamento sem repetir conteúdo.

---

## 2. Estrutura mínima e organização de um script `.jsx`

Um script ExtendScript **bem estruturado** é mais fácil de entender, manter, reutilizar e depurar.  
Antes de pensar em automação complexa, é fundamental dominar **a forma correta** de organizar um arquivo `.jsx`.

Esta seção define **o esqueleto mínimo recomendado** para qualquer script do Journey.

---

### 2.1 Por que estrutura importa?

Mesmo scripts pequenos se tornam difíceis de manter quando:

- não têm cabeçalho
- misturam lógica, testes e execução
- não deixam claro *o que fazem* e *para que servem*

Boas práticas de estrutura:

- reduzem erros
- facilitam aprendizado progressivo
- permitem reutilização futura
- ajudam a “ler código como texto”

---

### 2.2 Ordem lógica recomendada de um script

A estrutura padrão sugerida é:

1. Cabeçalho comentado  
2. Configurações iniciais  
3. Funções  
4. Execução principal  
5. Mensagens finais / logs  

Essa ordem **não é obrigatória**, mas é **fortemente recomendada** ao longo do Journey.

---

### 2.3 Cabeçalho comentado (obrigatório no Journey)

Todo script deve começar com um bloco de comentários explicando:

- Nome do script
- Objetivo
- Contexto (aula, teste, projeto)
- Autor (opcional)
- Data (opcional)
- Observações importantes

O cabeçalho deve responder claramente:

- O que este script faz?
- Em qual módulo/aula ele se encaixa?
- Ele altera documentos existentes ou cria novos?
- Há riscos ao executá-lo?

> O cabeçalho substitui a necessidade de um README separado para scripts simples.

---

### 2.4 Configurações iniciais

Logo após o cabeçalho, entram configurações que afetam o comportamento do script, como:

- definição de alvo (`#target`)
- ativação de modo mais rígido (`"use strict"`)
- variáveis globais controladas

Essas diretivas devem ficar **no topo**, para que qualquer leitor saiba  
**como o script se comporta** antes de ler a lógica.

> O detalhamento técnico de `#target` e `"use strict"` será tratado em seção própria.

---

### 2.5 Funções antes da execução

Sempre que possível:

- defina funções antes
- execute no final

Isso:

- melhora a leitura
- evita repetição
- facilita testes isolados

Mesmo scripts simples se beneficiam dessa organização desde o início.

---

### 2.6 Execução principal clara

A parte final do script deve deixar explícito:

- onde o script começa a agir
- qual é o “fluxo principal”

Exemplos conceituais:

- validações iniciais
- chamadas de funções
- feedback ao usuário

Evite lógica espalhada de forma solta pelo arquivo.

---

### 2.7 Comentários: quando e como usar

Comentários devem:

- explicar o **porquê**, não o óbvio
- ajudar quem está aprendendo (inclusive você no futuro)
- ser usados com intenção didática

No Journey, **comentários fazem parte do ensino**, não são ruído.

---

## 3. Diretivas importantes do ExtendScript (`#target` e `"use strict"`)

Antes de qualquer lógica de automação, alguns scripts ExtendScript precisam
de **diretivas especiais** que definem **onde** e **como** o código será executado.

As duas mais importantes no contexto do InDesign são:

- `#target`
- `"use strict"`

Entender essas diretivas evita comportamentos inesperados e erros difíceis de rastrear.

---

### 3.1 A diretiva `#target`

A diretiva `#target` define **qual aplicativo Adobe** irá receber e executar o script.

Exemplo:

```js
#target indesign
```

Com isso, o ExtendScript sabe que:

- o script será executado no **Adobe InDesign**

- os objetos disponíveis (`app`, `documents`, `pages`, etc.) pertencem ao InDesign

Sem essa diretiva:

- o script pode tentar rodar no aplicativo errado

- erros estranhos podem ocorrer

- especialmente ao executar via VSCode ou Toolkit

> No Journey, recomenda-se **sempre declarar o** `#target` **explicitamente**.

---

### 3.2 Valores comuns de #target

Alguns alvos possíveis:

- #target indesign

- #target illustrator

- #target photoshop

- #target aftereffects

Cada alvo expõe um **DOM diferente**.

Um script feito para InDesign **não funciona** em outro aplicativo sem adaptações.

---

### 3.3 Onde colocar o #target

A diretiva deve:

- ficar no **topo absoluto do arquivo**

- vir **antes de qualquer código ou comentário funcional**

Ordem correta:

1. #target

2. "use strict"

3. Cabeçalho comentado

4. Código

Isso garante que o ambiente esteja corretamente definido desde o início.

---

### 3.4 A diretiva `"use strict"`

"use strict" ativa o modo estrito do JavaScript, mesmo no contexto antigo do ES3.

Exemplo:

```js
"use strict";
```

Com ela ativada:

- variáveis precisam ser declaradas corretamente

- erros silenciosos passam a gerar exceções

- o código se torna mais previsível

Isso ajuda a evitar erros comuns durante o aprendizado.

---

### 3.5 Benefícios de usar `"use strict"`

Principais vantagens:

- evita criação acidental de variáveis globais

- força escrita de código mais disciplinado

- facilita manutenção e leitura

- aproxima o estilo do JS moderno

Mesmo sendo ES3, o ExtendScript se beneficia bastante dessa diretiva.

---

### 3.6 Possíveis cuidados ao usar `"use strict"`

Em scripts muito antigos ou copiados da internet:

- alguns códigos podem quebrar

- práticas antigas podem não funcionar

No Journey:

- scripts novos devem **sempre usar** `"use strict"`

- códigos legados devem ser adaptados conscientemente

---

### 3.7 Resumo prático

- #target define onde o script roda

- "use strict" define como o script se comporta

- ambas devem aparecer antes da lógica principal

- são parte do padrão oficial do Journey

Essas diretivas ajudam a criar scripts mais seguros, claros e reutilizáveis.

---

## 4. Comentários, legibilidade e intenção didática

No contexto do **Learning Journey**, o código não serve apenas para funcionar,
mas também para **ensinar**, **documentar** e **ser revisitado no futuro**.

Por isso, comentários e organização visual não são opcionais — fazem parte da
qualidade do script.

---

### 4.1 Comentários como parte do código

Comentários em ExtendScript devem:

- explicar **o porquê**, não apenas **o que**
- orientar quem está estudando (inclusive você mesmo no futuro)
- servir como mini-documentação embutida

Um script bem comentado reduz a necessidade de arquivos explicativos externos.

---

### 4.2 Tipos de comentários recomendados

#### Comentários de cabeçalho

Todo script deve começar com um cabeçalho comentado, contendo:

- nome do script
- módulo e aula
- objetivo do script
- observações importantes (quando houver)

Exemplo:

```js
/*
 Script: exemplo-01-1-contexto.jsx
 Módulo: 01 — Introdução
 Aula: 01.1 — Contexto e visão geral
 Objetivo: Validar ambiente e introduzir ExtendScript
*/
```

---

#### Comentários de seção

Use comentários para dividir o script em blocos lógicos:

```js
// ================================
// CONFIGURAÇÃO INICIAL
// ================================
```

Isso ajuda na leitura e na navegação do código.

---

#### Comentários explicativos

Sempre que um conceito novo aparecer, explique:

```js
// O objeto `app` representa o InDesign em execução
var doc = app.activeDocument;
```

Esse tipo de comentário é essencial nas aulas iniciais.

---

### 4.3 Comentários excessivos x comentários úteis

Evite comentários óbvios:

```js
i++; // incrementa i
```

Prefira comentários que expliquem a **intenção**:

```js
// Avança para o próximo item da lista de páginas
i++;
```

Comentário bom é o que **agrega contexto**, não o que repete o código.

---

#### 4.4 Legibilidade do código

Algumas práticas simples melhoram muito a leitura:

- uma instrução por linha

- espaçamento consistente

- nomes de variáveis claros

- blocos bem delimitados

Exemplo ruim:

```js
var a=1;var b=2;if(a<b){alert("ok");}
```

Exemplo melhor:

```js
var a = 1;
var b = 2;

if (a < b) {
    alert("ok");
}
```

---

#### 4.5 Código como material didático

No Journey:

- scripts podem ser lidos mais do que executados

- clareza é mais importante que “esperteza”

- soluções simples são preferidas a soluções curtas

O foco é aprendizado sustentável, não atalhos.

---

#### 4.6 Glossário embutido em scripts

Sempre que possível, inclua um **glossário comentado** no final do script.

Exemplo:

```js
/*
 GLOSSÁRIO
 ----------
 app            → objeto principal do InDesign
 document        → arquivo aberto no InDesign
 textFrame       → quadro de texto
 geometricBounds → coordenadas de posição do objeto
*/
```

Isso facilita:

- revisão rápida

- extração posterior para glossario.md

- consolidação do aprendizado

---

#### 4.7 Resumo da seção

- comentários são parte do código

- scripts do Journey têm função didática

- legibilidade é prioridade

- glossários embutidos enriquecem o material

- escrever para humanos vem antes de escrever para a máquina

---

## 5. Uso consciente de `#target` e `#targetengine`

No ecossistema Adobe, scripts ExtendScript podem interagir com **diferentes aplicativos** e até com **interfaces persistentes**.
Por isso, diretivas como `#target` e `#targetengine` fazem parte das boas práticas — mas devem ser usadas **com consciência**.

---

### 5.1 O que é `#target`

A diretiva `#target` define **qual aplicativo Adobe** o script irá controlar.

Exemplo:

```js
#target "InDesign"
```

Isso garante que:

- o script será executado no InDesign

- objetos como app.documents estarão disponíveis

- o script não será interpretado por outro aplicativo (Illustrator, Photoshop etc.)

#### 👉 Boa prática

Sempre declarar explicitamente o `#target` em scripts do Journey.

---

### 5.2 Quando usar `#target` é obrigatório

O uso é altamente recomendado quando:

- você trabalha com mais de um aplicativo Adobe instalado

- o script pode ser reutilizado fora do painel Scripts

- o script faz parte de aulas ou templates reutilizáveis

Evita comportamentos inesperados e facilita manutenção futura.

---

### 5.3 O que é #targetengine

A diretiva #targetengine define um **motor de execução persistente**.

Exemplo:

```js
#targetengine "learningJourneyEngine"
```

Ela permite que:

- variáveis permaneçam na memória entre execuções

- interfaces ScriptUI continuem abertas

- estados sejam preservados

---

### 5.4 Quando não usar `#targetengine`

Apesar de poderosa, essa diretiva não deve ser usada por padrão.

Evite #targetengine quando:

- o script é simples e pontual

- o objetivo é didático inicial

- não há interface persistente

- não há necessidade de manter estado

Em aulas iniciais, ela pode gerar confusão.

---

### 5.5 Uso recomendado no Learning Journey

No padrão do Journey:

- `#target` → sim, sempre

- `#targetengine` → apenas quando justificado

Regra prática:

> Se você precisa explicar por que está usando #targetengine,
provavelmente é o momento certo de usá-lo.

---

### 5.6 Exemplo comentado

```js
#target "InDesign"
// Define explicitamente que este script controla o InDesign

//#targetengine "persistentEngine"
// Comentado: só usar quando houver necessidade real
```

Esse padrão ajuda quem está aprendendo a **perceber decisões técnicas**.

---

### 5.7 Relação com didática

No Journey:

- diretivas devem ser **visíveis**

- decisões devem ser **comentadas**

- nada deve parecer “mágico”

O código ensina não só o que fazer, mas por que fazer.

---

### 5.8 Resumo da seção

- `#target` define o aplicativo controlado

- deve ser usado como padrão

- `#targetengine` cria execução persistente

- só usar quando houver necessidade clara

- decisões técnicas devem ser explícitas e comentadas

---

## 6. Tratamento de erros e uso de logs

Em scripts ExtendScript, **erros acontecem** — seja por documentos inexistentes, seleções inválidas ou diferenças de ambiente.
Boas práticas não eliminam erros, mas **tornam erros compreensíveis, rastreáveis e controláveis**.

---

### 6.1 Por que tratar erros?

Sem tratamento adequado:

- o script pode falhar silenciosamente
- mensagens confusas aparecem ao usuário
- fica difícil entender *onde* e *por que* algo deu errado

Tratar erros é uma forma de **respeito a quem usa e a quem mantém o código**.

---

### 6.2 Uso de `try...catch`

A estrutura básica para capturar erros em ExtendScript é:

```js
try {
    // código principal
} catch (erro) {
    // tratamento do erro
}
```

#### 👉 Isso evita que o script “quebre” abruptamente

---

### 6.3 O objeto `Error`

Quando um erro ocorre, o objeto capturado contém informações úteis:

- `erro.name`

- `erro.message`

- (em alguns casos) `erro.line`

Exemplo:

```js
catch (erro) {
    alert("Erro: " + erro.message);
}
```

---

### 6.4 Uso de logs durante o desenvolvimento

Durante o aprendizado e testes, é fundamental registrar o que está acontecendo.

Ferramentas comuns:

✔ alert()

- simples

- interrompe o fluxo

- útil para iniciantes

```js
alert("Checkpoint atingido");
```

✔ $.writeln()

- escreve no console do ExtendScript Toolkit / Debugger

- não interrompe o script

```js
$.writeln("Documento criado com sucesso");
```

#### 👉 Ideal para acompanhamento passo a passo

---

### 6.5 Logs não são mensagens ao usuário

Boa prática importante:

- logs → para quem desenvolve

- alerts → para quem usa

Evite misturar os dois indiscriminadamente.

Exemplo:

```js
$.writeln("Iniciando criação do documento");

if (app.documents.length === 0) {
    alert("Abra um documento antes de executar este script.");
}
```

---

### 6.6 Quando usar logs no Learning Journey

No contexto do Journey:

- logs são **bem-vindos em aulas e testes**

- ajudam a entender o fluxo do script

- facilitam o aprendizado incremental

Em scripts finais ou projetos:

- logs devem ser reduzidos ou organizados

- mensagens ao usuário devem ser claras e objetivas

---

### 6.7 Erros como ferramenta didática

Durante o curso:

- erros **serão analisados**

- mensagens de erro **serão explicadas**

- scripts podem conter erros **intencionais** para estudo

Errar faz parte do processo — o importante é **entender o erro**.

---

### 6.8 Resumo da seção

- erros devem ser tratados com `try...catch`

- mensagens precisam ser claras

- logs ajudam no desenvolvimento

- não confundir logs com mensagens ao usuário

- no Journey, erros também ensinam

---

## 7. Organização de código e reutilização

À medida que os scripts crescem, a **organização do código** deixa de ser estética e passa a ser **necessidade técnica**.
Código organizado é mais fácil de entender, manter, reutilizar e ensinar.

---

### 7.1 Por que organizar o código?

Scripts desorganizados tendem a:

- gerar erros difíceis de localizar
- se tornar impossíveis de reaproveitar
- causar retrabalho constante
- afastar a compreensão didática

Boa organização melhora:

- leitura
- manutenção
- reaproveitamento
- aprendizado progressivo

---

### 7.2 Uso de funções desde cedo

Mesmo em scripts simples, prefira funções.

Exemplo ruim (tudo solto):

```js
var doc = app.documents.add();
doc.pages[0].textFrames.add();
```

Exemplo melhor:

```js
function criarDocumento() {
    return app.documents.add();
}

var doc = criarDocumento();
```

#### 👉 Isso facilita reutilização e testes

---

### 7.3 Uma responsabilidade por função

Cada função deve fazer **uma coisa bem definida**.

Evite funções que:

- criam documentos

- inserem texto

- exportam PDF

  tudo ao mesmo tempo.

Prefira:

```js
function criarDocumento() {}
function inserirTexto(doc) {}
function exportarPDF(doc) {}
```

---

### 7.4 Separação entre configuração e execução

Boa prática essencial:

- **configurações no topo**

- **execução no final**

Exemplo:

```js
var CONFIG = {
    pageWidth: 210,
    pageHeight: 297
};

function criarDocumento(config) {
    return app.documents.add({
        documentPreferences: {
            pageWidth: config.pageWidth,
            pageHeight: config.pageHeight
        }
    });
}

// execução
var doc = criarDocumento(CONFIG);
```

Isso torna o script:

- mais legível

- mais ajustável

- mais didático

---

### 7.5 Comentários que explicam decisões, não o óbvio

Evite comentários como:

```js
var x = 10; // define x como 10
```

Prefira comentários que expliquem **por quê**, não **o quê**:

```js
// valor fixo usado para manter compatibilidade com ES3
var timeout = 1000;
```

---

### 7.6 Reutilização via snippets e templates

No Learning Journey:

- códigos reutilizáveis devem virar **snippets**

- estruturas recorrentes devem virar **templates**

Isso **evita**:

- copiar e colar desorganizado

- divergência entre scripts

- repetição de erros antigos

👉 Sempre que um trecho se repetir, considere promovê-lo a snippet.

---

### 7.7 Padronização de nomes

Use nomes:

- claros

- descritivos

- consistentes

Exemplos:

- `criarDocumento.jsx`

- `inserirTexto.jsx`

- `exportarPDF.jsx`

Evite:

- abreviações confusas

- misturar idiomas

- nomes genéricos como `script1.jsx`

---

### 7.8 Organização ajuda o aprendizado

Neste Journey:

- código organizado é parte do conteúdo

- estrutura também ensina

- clareza vem antes de sofisticação

Um script simples e claro vale mais do que um complexo e obscuro.

### 7.9 Resumo da seção

- organize código desde o início

- use funções

- uma responsabilidade por função

- separe configuração de execução

- reaproveite via snippets e templates

- mantenha padrões de nomes

---

## 8. Performance e otimização de scripts

Mesmo scripts simples podem se tornar lentos quando aplicados a
documentos grandes, muitas páginas ou execuções repetidas.

Performance em ExtendScript **não é micro-otimização**, e sim:

- reduzir chamadas desnecessárias
- evitar operações custosas
- trabalhar de forma consciente com o DOM do InDesign

---

### 8.1 Entenda o custo das operações

No ExtendScript, **cada acesso ao DOM do InDesign tem custo**.

Exemplos de operações custosas:

- criar objetos repetidamente
- acessar propriedades dentro de loops
- buscar itens sem filtros
- atualizar a interface a cada ação

👉 Regra de ouro:  
**quanto menos vezes você “fala” com o InDesign, melhor.**

---

### 8.2 Evite acessar o DOM dentro de loops sempre que possível

Exemplo ruim:

```js
for (var i = 0; i < app.documents.length; i++) {
    alert(app.documents[i].name);
}
```

Melhor:

```js
var docs = app.documents;
for (var i = 0; i < docs.length; i++) {
    alert(docs[i].name);
}
```

Armazenar referências evita chamadas repetidas ao DOM.

---

### 8.3 Trabalhe com referências locais

Sempre que acessar um objeto mais de uma vez, guarde-o em uma variável.

Exemplo:

```js
var doc = app.activeDocument;
var pages = doc.pages;

for (var i = 0; i < pages.length; i++) {
    // operações com pages[i]
}
```

Isso melhora:

- performance

- legibilidade

- segurança do código

---

### 8.4 Evite alert() em excesso

`alert()` é útil para testes iniciais, mas:

- interrompe o fluxo

- deixa scripts lentos

- atrapalha automações longas

Prefira:

- `$.writeln()` para logs

- logs em arquivo (em módulos mais avançados)

👉 Use `alert()` apenas quando **precisar de interação humana**.

---

### 8.5 Desative atualizações visuais quando possível

Em scripts mais pesados, é possível reduzir impacto visual:

- evite seleção desnecessária

- não force redraws

- evite `select()` dentro de loops

Sempre que possível, trabalhe **sem selecionar objetos**.

---

### 8.6 Criação em lote é mais eficiente

Exemplo ruim:

```js
for (var i = 0; i < 100; i++) {
    doc.pages.add();
}
```

Melhor abordagem (quando aplicável):

- crie o documento já com o número necessário de páginas

- configure propriedades em bloco

Isso reduz chamadas repetidas ao InDesign.

---

### 8.7 Scripts rápidos são mais confiáveis

Scripts lentos tendem a:

- travar o InDesign

- causar falhas inesperadas

- gerar má experiência

Performance também é:

- estabilidade

- previsibilidade

- confiança na automação

---

### 8.8 Não otimize cedo demais

Regra importante:

> **Primeiro faça funcionar.  
Depois faça ficar claro.  
Só então pense em otimizar.**

Evite:

- complexidade prematura

- truques obscuros

- otimizações sem necessidade real

---

### 8.9 Resumo da seção

- acesso ao DOM tem custo

- use referências locais

- evite DOM dentro de loops

- minimize `alert()`

- evite operações visuais desnecessárias

- prefira criação e configuração em bloco

- clareza vem antes da otimização
