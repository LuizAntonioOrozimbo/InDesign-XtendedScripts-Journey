# InDesign XtendedScript Journey

Bem-vindo ao **InDesign XtendedScript Journey** — repositório dedicado ao estudo de automação do Adobe InDesign usando JavaScript / ExtendScript (`.jsx`).  
> 🌐 **Este repositório faz parte do ecossistema [Learning Journey](https://github.com/LuizAntonioOrozimbo/learning-journey)**  
> Lá você encontra a visão geral do projeto, a filosofia de estudo, os padrões adotados e os demais journeys disponíveis.
Este espaço representa minha jornada de aprendizado: aulas, exercícios, projetos, snippets e materiais de referência voltados à automação de documentos e fluxos de publicação no InDesign.  
Você está convidado a acompanhar, participar e até colaborar com esta jornada.  

---

## Objetivo deste repositório

- Aprender e ensinar, passo a passo, como automatizar tarefas no Adobe InDesign usando ExtendScript (JavaScript para produtos Adobe).  
- Produzir material didático claro e reprodutível (aulas, exemplos, exercícios e projetos).  
- Criar uma biblioteca reutilizável de scripts `.jsx`, templates e snippets para acelerar o trabalho prático.

Este repositório é desenvolvido com o apoio do **ChatGPT**, atuando como ferramenta de estudo, revisão, organização e documentação — sempre como suporte ao aprendizado, não substituto dele.

---

## Estrutura sugerida do repositório

```text
InDesign-Xtended-Script-journey/  
│  
├── README.md ← este arquivo  
├── glossario.md ← termos e comandos comuns  
├── 00-templates/ ← templates, headers, snippets exemplos  
├── 01-introducao/ ← configuração, primeiros passos, ambiente  
│   └── texto.md  
├── 02-basico/ ← fundamentos do DOM do InDesign e manipulação simples  
│   └── aula-01/  
├── 03-intermediario/ ← manipulação de páginas, quadros de texto, estilos  
│   └── aula-01/  
├── 04-avancado/ ← automações complexas, batches, integração com dados  
├── 05-projetos/ ← projetos completos (ex.: geração de folhetos)  
├── 06-boas-praticas/ ← padrões, arquitetura, performance e boas práticas  
├── 07-testes/ ← scripts de experimentação e protótipos  
└── 08-materiais/ ← PDFs, guias, links, exemplos externos
```

## Pré-requisitos recomendados

- Conhecimentos básicos de JavaScript (variáveis, funções, estruturas de controle).  
- Noções básicas do InDesign (criação de documentos, frames, estilos).  
- Editor configurado para `.jsx` (VSCode, ExtendScript Toolkit antigo, Sublime, etc.).  
- Acesso ao Adobe InDesign (versão compatível com ExtendScript) para executar testes.

---

## Como funcionará o curso (modo de trabalho)

1. Serão produzidas **aulas curtas e objetivas** (arquivo `texto.md` por aula e exemplos `.jsx`).  
2. Com o conteúdo em **Markdown** e os exemplos prontos para testar no InDesign.  
3. Iremos também, atualizando o `glossario.md` com novos termos para consulta rápida.  
4. A cada aula, podemos ter também:
   - Snippet `.code-snippets` para VSCode (cabeçalho `.jsx`, novo documento, etc.).  
   - Um arquivo `aula-N.html` ou `aula-N.md` com layout para leitura.  
   - Um script `.jsx` pronto para rodar (ex.: `exemplo-aula-01.jsx`).  
5. Trabalharemos **por partes**: com aulas criadas; que deverão ser testadas; você pode pedir ou sugerir ajustes; nós atualizamos e quem chegar depois, terá um material mais recheado.

---

## Plano de aulas (proposta inicial — ordem didática)

### Módulo 01 — Introdução — Preparação

- Aula 01.1 — O que é ExtendScript / Diferenças entre JS moderno e ExtendScript  
- Aula 01.2 — Configurando o ambiente: VSCode, ExtendScript Debugger / Toolkit, painel Scripts do InDesign  
- Aula 01.3 — Como executar um `.jsx` no InDesign (painel Scripts, execução direta, automatização)

### Módulo 02 — Básico - Fundamentos

- Aula 02.1 — Estrutura básica de um script `.jsx` (comentários, alert(), $.writeln)  
- Aula 02.2 — Acessando o `app` e `documents` (abrir/criar documentos)  
- Aula 02.3 — Criando páginas e `textFrames` simples  
- Aula 02.4 — Inserir texto e alterar propriedades básicas (fonte, tamanho)

### Módulo 03 — Intermediário - Manipulação de Layout

- Aula 03.1 — Trabalhando com `geometricBounds` e posicionamento  
- Aula 03.2 — Estilos de parágrafo e caractere via script  
- Aula 03.3 — Inserindo imagens (place) e ajustando frames  
- Aula 03.4 — Duplicação e iteração sobre páginas e spreads

### Módulo 04 — Avançado - Automação e Dados

- Aula 04.1 — Importar dados CSV / datasets e fazer mala direta básica  
- Aula 04.2 — Looping avançado para geração de múltiplos documentos (batch)  
- Aula 04.3 — Manipulação de camadas e objetos gráficos via script

### Módulo 05 - Projetos práticos

- Projeto 05.1 — Gerador de etiquetas / cartões  
- Projeto 05.2 — Geração automática de periódicos (ficha por linha de CSV)  
- Projeto 05.3 — Exportação automática (PDF) com padrões de exportação

### Módulo 06 — Boas Práticas e Arquitetura

- Aula 06.1 — Tratamento de erros e logs (arquivos, console)  
- Aula 06.2 — Boas práticas em scripts ExtendScript
- Aula 06.3 — Organização de código e padrões reutilizáveis
- Aula 06.4 — Performance e otimização de scripts
- Aula 06.5 — Integrações entre aplicativos Adobe (quando aplicável)  

### Módulo 07 — Testes

Esta pasta é destinada a experimentos, provas de conceito e scripts de teste.

### Módulo 08 — Materiais

Reúne materiais de apoio e referência utilizados ao longo do curso.

### 🧭 Observação geral (opcional, mas recomendada no README)

A numeração das pastas segue uma progressão didática.
Os módulos 06, 07 e 08 funcionam como apoio transversal, laboratório e referência, respectivamente.

---

## Formato das aulas entregues

Para cada aula há:

- `texto.md` com explicação teórica e passos.  
- `exemplo-aula-N.jsx` com o código pronto para testar.  
- Sugestões de exercícios e variações.  
- Atualização no `glossario.md` com novos termos e referências.

---

## Exemplos de materiais e referências (serão adicionados ao `materiais/`)

> Observação: futuramente, buscaremos e adicionaremos links oficiais (guias da Adobe, scripting guides, blogs confiáveis). Pode ser que na época em que estiver lendo este guia, já haja esses links

- Adobe Scripting Guide (oficial) — referência principal (sugestão para adicionar)  
- Exemplos de scripts comunitários (GitHub / fóruns)  
- Tutoriais e vídeos passo a passo (quando relevantes)

---

## Contribuição

Sinta-se à vontade para:

- Sugerir tópicos,
- Enviar exemplos de scripts que queira transformar em aula,
- Pedir que eu priorize algum tema (ex.: mala direta, manipulação de imagens, criação de grids).

---

## Licença

Sinta-se livre para usar e adaptar este material. Recomendo usar uma licença permissiva como a **MIT** se for publicar.
