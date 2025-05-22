Claro, Kauã! Vamos montar um README completo, claro e bem explicativo sobre o uso do **Local Storage** em uma aplicação feita com **TypeScript**. Vou explicar cada parte ao longo do conteúdo para garantir que você entenda bem o que está sendo feito.

---

## 🧠 Sobre este Projeto

Este projeto demonstra de forma prática **como utilizar o Local Storage com TypeScript** para armazenar e recuperar dados no navegador. É ideal para quem está aprendendo sobre manipulação de dados no front-end com JavaScript/TypeScript e quer entender como persistir informações mesmo após o usuário recarregar a página.

---

## 📂 O que é Local Storage?

O **Local Storage** é uma API do navegador que permite **armazenar dados localmente no dispositivo do usuário**, em formato de **pares chave-valor**, de forma **persistente** (ou seja, os dados não somem ao fechar o navegador).

> 🧠 **Exemplo prático:** Você salva o nome de um usuário e, mesmo que ele feche o navegador, ao voltar, o nome continua salvo.

---

## 🚀 Funcionalidades do Projeto

* ✅ Inserir dados no Local Storage
* ✅ Ler dados salvos
* ✅ Atualizar os dados
* ✅ Remover dados específicos
* ✅ Limpar todo o Local Storage
* ✅ Interface simples para interagir com as funções (opcional)

---

## 🛠️ Tecnologias Utilizadas

* [TypeScript](https://www.typescriptlang.org/)
* HTML5
* CSS3 (opcional para estilização)
* Navegador (sem necessidade de servidor)

---

## 🧩 Como Funciona o Local Storage?

### Estrutura de armazenamento

```typescript
localStorage.setItem('chave', 'valor');
```

* **`setItem`**: salva um dado
* **`getItem`**: busca um dado
* **`removeItem`**: remove um dado específico
* **`clear`**: limpa todos os dados

---

## 📦 Exemplo de Código Comentado

```ts
// Salvando um valor
localStorage.setItem("nome", "Kauã Rodrigo");
// Aqui estamos salvando uma informação no navegador com a chave "nome" e o valor "Kauã Rodrigo"

// Lendo o valor salvo
const nome = localStorage.getItem("nome");
console.log(nome); // "Kauã Rodrigo"

// Atualizando é basicamente sobrescrever
localStorage.setItem("nome", "Kauã Atualizado");

// Removendo um item
localStorage.removeItem("nome");

// Limpando todo o localStorage
localStorage.clear();
```

---

## 💡 Como Usar no Seu Projeto TypeScript

### Estrutura sugerida:

```ts
interface Usuario {
  nome: string;
  email: string;
}

// Salvando um objeto no localStorage
const usuario: Usuario = {
  nome: "Kauã",
  email: "kaua@email.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperando esse objeto
const dados = localStorage.getItem("usuario");

if (dados) {
  const usuarioRecuperado: Usuario = JSON.parse(dados);
  console.log(usuarioRecuperado.nome); // Kauã
}
```

> 🎯 Dica: Use `JSON.stringify()` para salvar objetos e `JSON.parse()` para transformar de volta em objeto.

---

## 📁 Organização dos Arquivos

```
📦 projeto-localstorage-ts
 ┣ 📜 index.html
 ┣ 📜 style.css
 ┣ 📜 script.ts
 ┣ 📜 tsconfig.json
 ┗ 📜 README.md
```

---

## 🧪 Testando Local Storage no Navegador

1. Abra a aplicação em seu navegador.
2. Vá até as ferramentas de desenvolvedor (F12).
3. Clique na aba **Application** → **Local Storage**.
4. Você verá os dados armazenados pela aplicação.

---

## 🛎️ Possíveis Aplicações Reais

* Lembrar o tema claro/escuro escolhido pelo usuário
* Armazenar carrinho de compras
* Salvar preferências de idioma
* Guardar progresso de formulários

---

## 📌 Conclusão

O **Local Storage** é uma solução simples e eficaz para guardar pequenas informações no navegador do usuário. Combinando com o **TypeScript**, ganhamos mais segurança, previsibilidade e produtividade.

---
