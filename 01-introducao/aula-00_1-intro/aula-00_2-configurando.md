# 📘 AULA 00.2 — Configurando o Ambiente de Desenvolvimento ExtendScript para InDesign

**🎯 Objetivo da Aula**

Ao final desta aula, você será capaz de:

- Configurar corretamente o **VSCode** para trabalhar com .jsx.

- Instalar e usar o **ExtendScript Debugger** moderno.

- Entender como funciona o painel **Scripts** dentro do InDesign.

- Saber onde colocar os scripts para executá-los rapidamente.

- Saber quando (e quando não) usar o **ExtendScript Toolkit** antigo.

## 📂 1. Estrutura mínima para trabalhar com o curso

Recomendo criar uma pasta assim:

InDesign-ExtendScript-Journey/  
│  
├── modulo-0/  
│   ├── aula-00-1/  
│   ├── aula-00-2/  
│   └── aula-00-3/  
│  
├── modulo-1/  
├── modulo-2/  
├── glossario.md  
└── README.md

Na aula de hoje, você criará:

modulo-0/  
└── aula-00-2/  
    ├── texto.md  
    └── exemplo-aula-00-2.jsx

##🖥️ 2. Configurando o VSCode para ExtendScript

VSCode é, hoje, o ambiente mais estável e moderno para escrever .jsx.

### ✔️ Extensões recomendadas

#### (1) ExtendScript Debugger (Adobe)

Procure por:
**"Adobe ExtendScript Debugger"**
ID: adobe.extendscript-debug

Ele permite:

- Rodar scripts diretamente no InDesign

- Fazer breakpoints

- Ver variáveis

- Consultar o console ($.writeln)

### (2) JavaScript Syntax Support

Qualquer extensão leve de JS já é suficiente, porque ExtendScript usa **JS ES3**.

### (3) Code Runner (opcional)

Para rodar trechos simples sem precisar executar no InDesign (útil para lógica pura).

## 🖥️ 2. Configurando o VSCode para ExtendScript

VSCode é, hoje, o ambiente mais estável e moderno para escrever .jsx.

✔️ Extensões recomendadas
(1) ExtendScript Debugger (Adobe)

Procure por:
"Adobe ExtendScript Debugger"
ID: adobe.extendscript-debug

Ele permite:

Rodar scripts diretamente no InDesign

Fazer breakpoints

Ver variáveis

Consultar o console ($.writeln)

(2) JavaScript Syntax Support

Qualquer extensão leve de JS já é suficiente, porque ExtendScript usa JS ES3.

(3) Code Runner (opcional)

Para rodar trechos simples sem precisar executar no InDesign (útil para lógica pura).

```json
{
  "files.associations": {
    "*.jsx": "javascript"
  }
}
```

Isto garante:

- syntax highlight

- auto-complete básico

- melhor leitura

## 🪟 4. Painel Scripts do InDesign

No InDesign, abra:

Window › Utilities › Scripts

Você verá duas pastas:

### 📁 Application

Scripts globais (todos os usuários).
Herdados do InDesign.

### 📁 User

Onde você deve colocar **seus** arquivos .jsx.

Clique com botão direito em **User** › **Reveal in Explorer**
e você verá a pasta real do sistema:

**📍 Windows:**
C:\Users\SEU_USUARIO\AppData\Roaming\Adobe\InDesign\Version XX\pt_BR\Scripts\Scripts Panel

**📍 macOS:**
~/Library/Preferences/Adobe InDesign/Version XX/pt_BR/Scripts/Scripts Panel

**👉 Coloque aqui seus scripts.**

Depois, basta **duplo clique** no script para rodá-lo.
