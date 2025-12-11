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

## 🧪 5. Teste rápido — Rodando um script no painel

Crie um arquivo:
exemplo-aula-00-2.jsx

```js
// Aula 00.2
// Testando execução via Painel Scripts do InDesign

alert("Funcionando! Ambiente configurado com sucesso.");
```
Coloque-o na pasta **Scripts Panel** e execute.

Se o alerta aparecer → tudo certo 🎉

## 🧰 6. (Opcional) Uso do antigo ExtendScript Toolkit (ESTK)

O **ESTK está oficialmente descontinuado**, mas ainda funciona para:

- Debug com console integrado

- Rodar scripts mais antigos

- Ver logs com precisão

Pode ser útil **apenas para consultas e debugging leve**, mas não recomendo depender dele.

## ⚡ 7. Configurando Debug direto no VSCode

Com a extensão oficial instalada:

1. Vá em: **Run** › **Add Configuration**

1. Escolha: **ExtendScript Debugger**

1. Isso cria um .vscode/launch.json assim:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "extendscript-debug",
      "request": "launch",
      "name": "InDesign",
      "program": "${file}"
    }
  ]
}
```

Agora:

- Abra seu .jsx

- Pressione **F5**

- O script é enviado ao InDesign

- Breakpoints funcionam normalmente

## 📘 Arquivo: texto.md (pronto para salvar)

```markdown
# Aula 00.2 — Configurando o Ambiente de Desenvolvimento

## Objetivo
Configurar corretamente o ambiente para escrever, rodar e depurar scripts ExtendScript para Adobe InDesign usando VSCode e o painel Scripts.

---

## 1. Extensões recomendadas
- Adobe ExtendScript Debugger  
- Suporte JS para `.jsx`  
- (Opcional) Code Runner

---

## 2. Ajuste no `settings.json`

```json
{
  "files.associations": {
    "*.jsx": "javascript"
  }
}
```

### 3. Usando o painel Scripts do InDesign

1. Window › Utilities › Scripts

1. Pasta **User** → clique com botão direito → Reveal in Explorer

1. Copie seus .jsx para esta pasta

1. Execute com duplo clique

### 4. Teste rápido

Crie exemplo-aula-00-2.jsx:

```js
alert("Funcionando! Ambiente configurado com sucesso.");
```
Execute pelo painel.

### 5. Configuração de Debug no VSCode

Crie .vscode/launch.json:

```jason
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "extendscript-debug",
      "request": "launch",
      "name": "InDesign",
      "program": "${file}"
    }
  ]
}
```
Agora:

- Abra seu .jsx

- Pressione **F5**

- Debug funcionará no InDesign

### 6. (Opcional) ExtendScript Toolkit

Ferramenta antiga — útil para referência e debugging simples, mas não recomendada para trabalho principal.

### Conclusão

Com o ambiente configurado, estamos prontos para seguir para exemplos práticos e escrever nosso primeiro script real na próxima aula (00.3).

```yaml

---

# 📄 **Arquivo: `exemplo-aula-00-2.jsx`**

```javascript
// Aula 00.2 — Configuração do Ambiente
// Teste básico executado pelo Painel Scripts

alert("Funcionando! Ambiente configurado com sucesso.");
```

