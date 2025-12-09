# InDesign Xtended Script Journey

Bem-vindo ao **InDesign Xtended Script Journey** — repositório dedicado ao estudo de automação do Adobe InDesign usando JavaScript / ExtendScript (`.jsx`).  
Este espaço é a sua jornada de aprendizado: aulas, exercícios, projetos, snippets e materiais de referência para dominar a automação de documentos e fluxos de publicação no InDesign.

---

## Objetivo deste repositório

- Ensinar, passo a passo, como automatizar tarefas no Adobe InDesign usando ExtendScript (JavaScript para produtos Adobe).  
- Produzir material didático claro e reprodutível (aulas, exemplos, exercícios e projetos).  
- Criar uma biblioteca reutilizável de scripts `.jsx`, templates e snippets para acelerar o trabalho prático.

---

## Estrutura sugerida do repositório

InDesign-Xtended-Script-journey/  
│  
├── README.md ← este arquivo  
├── glossario.md ← termos e comandos comuns  
├── 00-templates/ ← templates, headers, snippets exemplos  
├── 01-introducao/ ← configuração, primeiros passos, ambiente  
│ └── texto.md  
├── 02-basico/ ← fundamentos do DOM do InDesign e manipulação simples  
│ └── aula-01/  
├── 03-intermediario/ ← manipulação de páginas, quadros de texto, estilos  
│ └── aula-01/  
├── 04-avancado/ ← automações complexas, batches, integração com dados  
├── 05-projetos/ ← projetos completos (ex.: geração de folhetos)  
├── 06-testes/ ← scripts de experimentação e protótipos  
└── materiais/ ← PDFs, guias, links, exemplos externos

## Pré-requisitos recomendados

- Conhecimentos básicos de JavaScript (variáveis, funções, estruturas de controle).  
- Noções básicas do InDesign (criação de documentos, frames, estilos).  
- Editor configurado para `.jsx` (VSCode, ExtendScript Toolkit antigo, Sublime, etc.).  
- Acesso ao Adobe InDesign (versão compatível com ExtendScript) para executar testes.

---

## Como funcionará o curso (modo de trabalho)

1. Produziremos **aulas curtas e objetivas** (arquivo `texto.md` por aula e exemplos `.jsx`).  
2. Você recebe o conteúdo em **Markdown** e os exemplos prontos para testar no InDesign.  
3. Iremos atualizando o `glossario.md` com novos termos para consulta rápida.  
4. A cada aula, posso gerar também:
   - Snippet `.code-snippets` para VSCode (cabeçalho `.jsx`, novo documento, etc.).  
   - Um arquivo `aula-N.html` ou `aula-N.md` com layout para leitura.  
   - Um script `.jsx` pronto para rodar (ex.: `exemplo-aula-01.jsx`).  
5. Trabalharemos **por partes**: eu crio a aula; você testa; você pede ajustes; eu atualizo.

---

## Plano de aulas (proposta inicial — ordem didática)

### Módulo 0 — Preparação

- Aula 00.1 — O que é ExtendScript / Diferenças entre JS moderno e ExtendScript  
- Aula 00.2 — Configurando o ambiente: VSCode, ExtendScript Debugger / Toolkit, painel Scripts do InDesign  
- Aula 00.3 — Como executar um `.jsx` no InDesign (painel Scripts, execução direta, automatização)

### Módulo 1 — Fundamentos

- Aula 01.1 — Estrutura básica de um script `.jsx` (comentários, alert(), $.writeln)  
- Aula 01.2 — Acessando o `app` e `documents` (abrir/criar documentos)  
- Aula 01.3 — Criando páginas e `textFrames` simples  
- Aula 01.4 — Inserir texto e alterar propriedades básicas (fonte, tamanho)

### Módulo 2 — Manipulação de Layout

- Aula 02.1 — Trabalhando com `geometricBounds` e posicionamento  
- Aula 02.2 — Estilos de parágrafo e caractere via script  
- Aula 02.3 — Inserindo imagens (place) e ajustando frames  
- Aula 02.4 — Duplicação e iteração sobre páginas e spreads

### Módulo 3 — Automação e Dados

- Aula 03.1 — Importar dados CSV / datasets e fazer mala direta básica  
- Aula 03.2 — Looping avançado para geração de múltiplos documentos (batch)  
- Aula 03.3 — Manipulação de camadas e objetos gráficos via script

### Módulo 4 — Projetos práticos

- Projeto 04.1 — Gerador de etiquetas / cartões  
- Projeto 04.2 — Geração automática de periódicos (ficha por linha de CSV)  
- Projeto 04.3 — Exportação automática (PDF) com padrões de exportação

### Módulo 5 — Avançado / Integrações

- Aula 05.1 — Tratamento de erros e logs (arquivos, console)  
- Aula 05.2 — Comunicação com outros apps Adobe (ex.: Illustrator) — quando aplicável  
- Aula 05.3 — Boas práticas e performance em scripts ExtendScript

---

## Formato das aulas entregues

Para cada aula eu entregarei:

- `texto.md` com explicação teórica e passos.  
- `exemplo-aula-N.jsx` com o código pronto para testar.  
- Sugestões de exercícios e variações.  
- Atualização no `glossario.md` com novos termos e referências.

---

## Exemplos de materiais e referências (serão adicionados ao `materiais/`)

> Observação: se você quiser, eu posso buscar e adicionar links oficiais (guias da Adobe, scripting guides, blogs confiáveis). Posso fazer isso a cada aula ou agora — diga como prefere.

- Adobe Scripting Guide (oficial) — referência principal (sugestão para adicionar)  
- Exemplos de scripts comunitários (GitHub / fóruns)  
- Tutoriais e vídeos passo a passo (quando relevantes)

---

## Como vamos começar (próximo passo sugerido)

Se concordar com este plano, eu:

1. **Gero agora o README.md** (este conteúdo) e o `glossario.md` inicial.  
2. Em seguida, **crio a Aula 00.1** (arquivo `texto.md` + `exemplo-aula-00-1.jsx`) com:
   - explicação curta,
   - instruções de execução,
   - script de exemplo “Hello, ExtendScript”.

Diga **"gerar Aula 00.1"** quando quiser que eu crie o primeiro material — ou me peça modificações no plano.

---

## Contribuição

Sinta-se à vontade para:

- Sugerir tópicos,
- Enviar exemplos de scripts que queira transformar em aula,
- Pedir que eu priorize algum tema (ex.: mala direta, manipulação de imagens, criação de grids).

---

## Licença

Sinta-se livre para usar e adaptar este material. Recomendo usar uma licença permissiva como a **MIT** se for publicar.

---

## Contato

Se precisar de ajustes no formato ou preferir que eu gere os arquivos prontos (`.md` e `.jsx`) para download, é só pedir.

## 📌 Sobre os arquivos .jsx

- ExtendScript é JavaScript ES3 com recursos extras (voltado para automação da Adobe).

- Ele roda no ExtendScript Toolkit, VSCode com plugin, ou direto no InDesign através de Scripts Panel.

- Muitas funções são específicas da Adobe, como:

  - app.activeDocument

  - app.documents.add()

  - doc.pages.add()

  - textFrame.contents = "Texto"

  - etc.
  