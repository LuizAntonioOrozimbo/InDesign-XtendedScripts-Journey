# 🧭 Aula 00.1 — Introdução ao JavaScript para InDesign (ExtendScript)

Bem-vindo(a) à primeira aula da nossa jornada em **InDesign ExtendScript**!
Nesta etapa, vamos entender o que é ExtendScript, como funciona, e preparar o ambiente para começar a escrever os primeiros scripts.

## 🎯 Objetivos da Aula

- Entender o **que é ExtendScript** e por que ele existe.

- Saber **onde os scripts rodam** dentro do InDesign.

- Preparar o ambiente para estudo.

- Fazer seu **primeiro script simples**.

## 1. 🧩 O que é ExtendScript?

**ExtendScript** é a implementação própria de JavaScript utilizada pela Adobe para automatizar seus apps (InDesign, Illustrator, Photoshop, After Effects, etc.).

Ele é baseado no padrão **ECMAScript 3**, o que significa:

- É *JavaScript de verdade*, mas **antigo** (sem let, const, classes… ainda não existiam).

- Não funciona igual ao JavaScript moderno do navegador.

- Possui **objetos adicionais**, fornecidos pelo InDesign (Document, Page, TextFrame...).

Portanto, quando estudamos ExtendScript, estudamos ao mesmo tempo:

**1. JavaScript base (versão clássica)**

**2. Objetos e APIs do InDesign**

## 2. 🏛 Como o InDesign executa scripts?

Existem 3 formas principais:

### ✔️ 1. Pelo painel Scripts

No InDesign:
Window (Janela) → Utilities (Utilidades) → Scripts

- Ali você encontra:

- Scripts de usuário (User)

Scripts da aplicação (Application)

➡️ Basta clicar duas vezes no script para executá-lo.

### ✔️ 2. Pelo ExtendScript Toolkit (legacy) ou VSCode (recomendado)

A Adobe abandonou o antigo *ExtendScript Toolkit*.
Hoje, recomenda-se:

- **VSCode + extensão “ExtendScript Debugger”**

- Rode scripts direto do editor

(Instalação veremos na próxima aula.)

### ✔️ 3. Colocando scripts na pasta oficial

Pasta típica no Windows:
C:\Users\<seu-nome>\AppData\Roaming\Adobe\InDesign\<versão>\<lingua>\Scripts\Scripts Panel

---
No macOS:
/Users/<seu-nome>/Library/Preferences/Adobe InDesign/<versão>/<lingua>/Scripts/Scripts Panel

## 3. ⚙️ Preparando o Ambiente

Para continuar seu treinamento, você vai precisar:

### ✔️ Requisitos

- Adobe InDesign instalado

- VSCode instalado

- Extensão *ExtendScript Debugger* (instalaremos na Aula 00.2)

### ✔️ Criação da pasta de estudos

No seu repositório InDesign-Xtended-Script-journey, organize assim:

InDesign-Xtended-Script-journey/  
 ├── aulas/  
 │     └── aula-00.1/  
 ├── projetos/  
 ├── testes/  
 ├── snippets/  
 └── README.md

## 4. 🧪 Seu Primeiro Script ExtendScript

Vamos criar um script extremamente simples para testar o ambiente.

Crie um arquivo:
ola-mundo.jsx

E coloque dentro:

```js
alert("Olá, mundo do InDesign ExtendScript!");
```

Agora:

1. Abra o InDesign

1. Vá em Window → Utilities → Scripts

1. Coloque o arquivo dentro de User > Scripts Panel

1. Clique duas vezes no script

Você deve ver uma janelinha com a mensagem.

**🎉 Parabéns! Você executou seu primeiro script ExtendScript.**

## 5. 📚 Conceitos Fundamentais (preview das próximas aulas)

A partir da próxima aula, começaremos com:

**🔹 Aula 00.2 — Instalando e configurando o VSCode para ExtendScript**  
**🔹 Aula 01 — JavaScript base (versão ES3) aplicado ao InDesign**  
**🔹 Aula 02 — Estrutura do DOM do InDesign**  
**🔹 Aula 03 — Criando documentos, páginas, caixas de texto**  
**🔹 Aula 04 — Manipulando texto, parágrafos e estilos**  
**🔹 Aula 05 — Automatizando fluxos reais de produção**

E muito mais.

## 6. ✔️ Exercícios da Aula 00.1

1. **Crie o script “ola-mundo.jsx”** e execute no InDesign.

1. Crie um novo script chamado info.jsx com:

    ```js
    alert(app.name + " - Versão: " + app.version);
    ```

1. Abra e execute. Isso confirma que o InDesign está respondendo ao script.
