# Async e Await

- As funções assincronas funcionam como Promises, porém com uma sintaxe mais simples.


#### Promises

- É um objeto que representa a eventual conclusão ou falha de uma operação assincrona.
- Essencialmente, uma promise é um objeto retornado para o qual você adiciona callbacks para uma função.

## Funcões assíncronas

É uma função que pode ser executada sem bloquear a execução do código principal. Isso é possivel porque ela pode lidar com tarefas que podem demorar um pouco, como requisições de rede, sem impedir que o programa continue funcionando.

- Definição : É definida com uma palavra-chave 'async'
- Retorno de Promessa: Uma função assíncrona sempre retorna uma Promise.
- Await: Serve para esperar o resultado de uma Promise. 
- Tratamento de erro: Erros em, funções assíncronas são tratados como rejeições de Promise.

````
async function fetchData() {
  const response = await fetch('https://example.com/data'); // Pausa a execução até que a requisição seja concluída
  const data = await response.json(); // Pausa a execução até que a resposta seja processada
  return data;
}

async function main() {
  try {
    const data = await fetchData(); // Espera o resultado de fetchData()
    console.log(data);
  } catch (error) {
    console.error(error); // Trata erros
  }
}

main();

````