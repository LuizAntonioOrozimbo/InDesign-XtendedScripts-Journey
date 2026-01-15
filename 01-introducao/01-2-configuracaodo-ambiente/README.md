# Aula 01.2 — Configuração do ambiente de trabalho

Este documento orienta a **configuração mínima e recomendada do ambiente**
para trabalhar com **ExtendScript no Adobe InDesign** ao longo deste Journey.

> 📍 Esta aula faz parte do Módulo 01 — Introdução
> Seu foco é preparar o terreno, não aprofundar código.

---

## 🎯 Objetivo desta aula

Ao final desta aula, você deverá:

- Ter um **editor de código configurado** para trabalhar com arquivos `.jsx`

- Saber **onde os scripts ficam localizados** no InDesign

- Estar apto a **executar e testar scripts** com segurança

- Compreender o papel das ferramentas no fluxo de estudo

---

## 🛠️ Ferramentas recomendadas

### ✔ Editor de código

**VS Code (recomendado)**

- Gratuito

- Multiplataforma

- Excelente para organização e leitura de código

Extensão sugerida:

- **ExtendScript Debugger** (Adobe)

> ⚠️ O debugger é útil, mas **não obrigatório** neste início.

Outras opções possíveis:

- ExtendScript Toolkit (legado / descontinuado)

- Sublime Text

- Qualquer editor de texto (desde que salve como `.jsx`)

---

## 📁 Estrutura de scripts no InDesign

No InDesign, os scripts são gerenciados pelo **Painel Scripts**:

**Caminho:**
`Window → Utilities → Scripts`

Existem duas pastas principais:

- **Application**
    Scripts disponíveis para todos os usuários da máquina.

- **User**
    Scripts disponíveis apenas para o usuário atual.
    **👉 Recomendado para estudo e testes.**

Nesta aula, todos os scripts devem ser colocados na pasta User.

---

## ▶️ Execução básica de scripts

Um script `.jsx` pode ser executado de diferentes formas:

- Duplo clique sobre o script no Painel Scripts

- Clique com o botão direito → *Run*

- Atalho de teclado (dependendo da versão do InDesign)

> 📌 Se o script executar sem erro, o ambiente está corretamente configurado.

---

## 📄 Script desta aula

Esta aula utiliza **um script simples de validação de ambiente**.

- Ele confirma que:

    - O InDesign está executando corretamente

    - O ExtendScript está ativo

    - O script está sendo reconhecido pelo aplicativo

📎 O script contém:

- Comentários explicativos

- Um glossário interno (em comentário)

- Código mínimo apenas para validação

> 📌 Consulte o arquivo .jsx desta aula para o conteúdo técnico detalhado.

---

## 🧭 Observações importantes

- Não se preocupe com performance ou arquitetura neste momento

- O foco é **funcionar**, **entender** e **validar**

- Este ambiente será reutilizado **em todas as aulas seguintes**

---

## Próxima aula

**➡️ Aula 01.3 — Execução de scripts no InDesign**
Onde veremos, com mais clareza, **como o InDesign executa scripts** e quais cuidados iniciais devemos ter.
