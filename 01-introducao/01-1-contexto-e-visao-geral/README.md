# Aula 01.1 — Contexto e visão geral do ExtendScript

Nesta aula, você terá uma visão clara do **papel do ExtendScript** dentro do ecossistema Adobe,
com foco específico no **InDesign**.

O objetivo aqui é **entender o cenário**, não escrever código complexo.

---

## 🎯 Objetivo da aula

Ao final desta aula, você deverá ser capaz de:

- Entender **o que é o ExtendScript**
- Saber **por que ele existe** e onde é utilizado
- Compreender **como o InDesign é automatizado**
- Diferenciar **JavaScript moderno** de **ExtendScript (ES3)** em nível conceitual
- Evitar expectativas incorretas sobre recursos e sintaxe

---

## 🧠 O que é ExtendScript?

**ExtendScript** é a implementação de JavaScript criada pela Adobe para permitir
**automação e scripting** de seus aplicativos.

Ele é utilizado em softwares como:

- Adobe InDesign
- Adobe Illustrator
- Adobe Photoshop
- Adobe After Effects

No contexto deste journey, o foco será **exclusivamente no InDesign**.

---

## ⚙️ ExtendScript não é JavaScript moderno

Um ponto essencial desde o início:

- ExtendScript é baseado em **ECMAScript 3 (ES3)**
- Não possui recursos modernos como:
  - `let` / `const`
  - arrow functions
  - promises
  - async / await
  - modules

Isso significa que **nem tudo que você conhece de JavaScript atual funciona aqui**.

> 📍 Esta limitação não é um problema — é apenas o contexto correto da ferramenta.

---

## 🧩 Como o InDesign é automatizado

O InDesign expõe sua automação através de um **DOM próprio** (modelo de objetos).

Alguns exemplos de objetos comuns:

- `app` → o próprio InDesign
- `Document`
- `Page`
- `TextFrame`
- `ParagraphStyle`
- `CharacterStyle`

Você não “programa o InDesign”,  
você **conversa com ele através desses objetos**.

---

## 📌 O que esta aula NÃO faz

Esta aula **não**:

- aprofunda código
- ensina configuração de ambiente
- mostra onde salvar scripts
- executa fluxos reais de automação

Esses pontos serão tratados **nas próximas aulas do módulo**.

---

## 📎 Script de apoio (opcional)

Para fins de validação conceitual, esta aula pode referenciar um script simples:

- `01-1-alerta-ambiente.jsx`

Este script **não ensina lógica**, apenas confirma que:

- o ExtendScript está funcionando
- o InDesign está executando scripts corretamente

> 📍 A explicação completa de execução ocorre na Aula 01.3.
