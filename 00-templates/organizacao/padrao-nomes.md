# Padrão de nomenclatura e organização

Este documento define os **padrões adotados** no projeto
**InDesign ExtendScript Journey** para manter consistência,
clareza e fácil navegação no repositório.

---

## 📁 Pastas de módulos

Os módulos seguem uma numeração progressiva:

- 00-templates
- 01-introducao
- 02-basico
- 03-intermediario
- 04-avancado
- 05-projetos
- 06-boas-praticas
- 07-testes
- 08-materiais

A numeração reflete a progressão didática do curso.

---

## 📄 Arquivos de aula

Padrão sugerido:

- `texto.md`
- `exemplo-aula-XX-X.jsx`

Exemplo:

```text
02-basico/
└── aula-02-1/
    ├── texto.md
    └── exemplo-aula-02-1.jsx
```

---

## 📄 Scripts .jsx

Os scripts ExtendScript devem seguir nomes claros, descritivos e previsíveis.

**Regras:**

- Usar letras minúsculas

- Separar palavras com hífen (`-`)

- Evitar abreviações não óbvias

- Evitar versionamento no nome do arquivo (sempre que possível)

**Exemplos corretos:**

- criar-documento.jsx

- criar-textframe.jsx

- exportar-pdf.jsx

**Evitar:**

- script1.jsx

- testeFinal.jsx

- doc.jsx

## 🧪 Arquivos de teste

Arquivos de teste devem deixar explícito seu caráter experimental.

**Padrão sugerido:**

- `teste-nome-do-objetivo.jsx`

**Exemplos:**

- teste-criacao-documento.jsx

- teste-loop-paginas.jsx

👉 Scripts de teste não devem ser reutilizados diretamente em aulas ou projetos.

## 🧩 Snippets

Snippets são trechos reutilizáveis de código e seguem o mesmo padrão de nomenclatura dos scripts.

**Exemplos:**

- criar-documento.jsx

- criar-pagina.jsx

- log-mensagem.jsx

👉 Snippets devem ser pequenos, focados e autocontidos.

## 🏷️ Versionamento simples

Quando necessário indicar evolução de um script (casos raros):

- Preferir controle por **Git**

- Evitar versões no nome
