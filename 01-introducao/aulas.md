
# Aula 00.1 — O que é ExtendScript?

(Introdução ao JavaScript para Adobe InDesign)

## 1. O que é o ExtendScript?

**ExtendScript** é a versão do JavaScript criada pela Adobe para automatizar aplicativos como:

- InDesign  
- Illustrator  
- Photoshop  
- After Effects  

Ele é baseado em **JavaScript ES3** (uma versão antiga), mas possui **objetos e funções extras**, exclusivos da Adobe.  
No InDesign, você interage com o aplicativo usando objetos como:

- `app` — o próprio InDesign  
- `app.activeDocument` — o documento aberto  
- `Document`, `Page`, `TextFrame` — elementos de layout  
- `ParagraphStyle`, `CharacterStyle` — estilos  
- Entre muitos outros.

Enquanto o JavaScript comum roda em navegadores e Node.js, o **ExtendScript roda dentro do InDesign** (ou pelo painel Scripts).

---

## 2. Onde os scripts ExtendScript são usados?

Você pode rodar scripts `.jsx` no InDesign para:

- Criar documentos automaticamente  
- Inserir textos, imagens, quadros  
- Aplicar estilos automaticamente  
- Repetir tarefas repetitivas  
- Gerar PDFs  
- Importar dados (como CSV)  
- Criar sistemas completos de diagramação automatizada  

---

## 3. Onde instalar scripts?

No InDesign, abra:  
**Window → Utilities → Scripts**

Existem duas pastas:

### ✔ Application

Scripts disponíveis para todos os documentos.

### ✔ User

Scripts só para o seu usuário.

Basta arrastar seu arquivo `.jsx` para a pasta **User**.

---

## 4. Como executar um script?

Depois de colocar o arquivo `.jsx` na pasta User:

1. Abra o InDesign  
2. Vá em **Window → Utilities → Scripts**  
3. Clique duas vezes no script — ele roda na hora!

Outra forma:

- Botão direito > **Run**  
- Ou `Ctrl+Enter` (dependendo da versão)

---

## 5. Ferramentas para escrever ExtendScript

Você pode usar:

### ✔ VSCode (RECOMENDADO)

Com a extensão oficial **ExtendScript Debugger**.

### ✔ ExtendScript Toolkit (antigo)

Descontinuado, mas ainda funciona em algumas versões.

### ✔ Qualquer editor de texto

Só precisa salvar como `.jsx`.

---

## 6. Primeiro comando: alert()

Vamos testar o primeiro script para garantir que tudo está funcionando.

Exemplo:

```js
alert("Olá, ExtendScript! Seu ambiente está funcionando.");
```

Esse comando exibe uma janela de alerta quando o script é executado no InDesign.
