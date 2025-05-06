## Uso dos estados no REACT

Pensou por um segundo


# README: Entendendo o `useState` no React

---

## Sumário

1. [O que é o `useState`](#o-que-é-o-usestate)
2. [Por que usar o `useState`](#por-que-usar-o-usestate)
3. [Importação e sintaxe básica](#importação-e-sintaxe-básica)
4. [Exemplos de uso](#exemplos-de-uso)

   * [Estado primitivo](#estado-primitivo)
   * [Estado de objeto](#estado-de-objeto)
   * [Estado de array](#estado-de-array)
5. [Boas práticas](#boas-práticas)
6. [Dicas avançadas](#dicas-avançadas)
7. [Referências](#referências)

---

## O que é o `useState`

O `useState` é um **Hook** do React que permite adicionar e gerenciar estado em **componentes funcionais**. Antes dos Hooks, o estado só podia ser usado em componentes de classe; hoje, com `useState`, trabalhamos com estado de forma muito mais concisa.

```jsx
const [valor, setValor] = useState(valorInicial);
```

* **`valor`**: variável que armazena o estado atual.
* **`setValor`**: função para atualizar o estado.
* **`valorInicial`**: valor definido na primeira renderização.

---

## Por que usar o `useState`

* **Leveza e legibilidade**: componente funcional + Hooks é mais conciso que classes.
* **Isolamento de lógica**: cada chamada a `useState` isola um pedaço de estado.
* **Reatividade**: atualizar o estado dispara re-render automático do componente.

---

## Importação e sintaxe básica

1. **Importar** o Hook:

   ```js
   import React, { useState } from 'react';
   ```

2. **Declarar** o estado:

   ```js
   function MeuComponente() {
     const [contador, setContador] = useState(0);
     // ...
   }
   ```

3. **Atualizar** o estado:

   ```js
   setContador(contador + 1);
   ```

---

## Exemplos de uso

### Estado primitivo

```jsx
import React, { useState } from 'react';

export default function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}
```

### Estado de objeto

Ao gerenciar objetos, **sempre espalhe** (`...`) o estado anterior:

```jsx
import React, { useState } from 'react';

export default function PerfilUsuario() {
  const [user, setUser] = useState({
    nome: 'Ana',
    idade: 30
  });

  function atualizarIdade() {
    setUser(prev => ({ 
      ...prev, 
      idade: prev.idade + 1 
    }));
  }

  return (
    <div>
      <h1>{user.nome}</h1>
      <p>Idade: {user.idade}</p>
      <button onClick={atualizarIdade}>Fazer aniversário</button>
    </div>
  );
}
```

### Estado de array

Para listas, use as funções do array em imutabilidade:

```jsx
import React, { useState } from 'react';

export default function ListaTarefas() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: 'Estudar React' },
    { id: 2, texto: 'Praticar Hooks' }
  ]);

  function adicionarTarefa() {
    const nova = { id: Date.now(), texto: 'Nova tarefa' };
    setTarefas(prev => [...prev, nova]);
  }

  function removerTarefa(id) {
    setTarefas(prev => prev.filter(t => t.id !== id));
  }

  return (
    <div>
      <ul>
        {tarefas.map(t => (
          <li key={t.id}>
            {t.texto} 
            <button onClick={() => removerTarefa(t.id)}>×</button>
          </li>
        ))}
      </ul>
      <button onClick={adicionarTarefa}>Adicionar</button>
    </div>
  );
}
```

---

## Boas práticas

* **Estado mínimo**: armazene só o necessário.
* **Evite efeitos colaterais** dentro do setter; faça lógica externa.
* **Separar contextos**: múltiplos `useState` para diferentes variáveis, ao invés de um único objeto grande.
* **Nomes claros**: `[valor, setValor]` → `[count, setCount]`, `[user, setUser]`.

---

## Dicas avançadas

* **Inicialização preguiçosa**: passe uma função ao `useState` para computar valor inicial somente uma vez:

  ```js
  const [data, setData] = useState(() => calcularValorPesado());
  ```

* **Atualização baseada em estado anterior**: use *functional update* quando o novo valor depende do anterior:

  ```js
  setCount(prev => prev + 1);
  ```

* **Resetar estado**: guarde valor inicial em variável ou Hook personalizado:

  ```js
  const initial = { a: 1, b: 2 };
  const [obj, setObj] = useState(initial);
  // reset:
  setObj(initial);
  ```

* **Hook personalizado**: encapsule lógica de estado repetitiva:

  ```js
  function useContador(inicial = 0) {
    const [count, setCount] = useState(inicial);
    const inc = () => setCount(c => c + 1);
    const dec = () => setCount(c => c - 1);
    return { count, inc, dec };
  }
  ```

---

## Referências

* React Docs – [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
* Kent C. Dodds – [Making sense of React Hooks](https://kentcdodds.com/blog/hooks)
* Dave Ceddia – [State Management with Hooks](https://daveceddia.com/react-hooks/#usetate)
