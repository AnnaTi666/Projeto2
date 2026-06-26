import { useState } from "react";                                 // componente de estado do React, para criar variáveis de estado e atualizar a interface do usuário quando essas variáveis mudarem

export default function App() {                                   // export para tornar o componente App disponível para outros arquivos importarem. default para indicar que este é o componente principal do arquivo
  const [pokemon, setPokemon] = useState(null);                   // guarda os dados da API
  const [nomePokemon, setNomePokemon] = useState("");             // guarda o nome do Pokémon digitado no input

  async function buscarPokemon({nomePokemon}) {
    const resposta = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`
    );

    const dados = await resposta.json();
    setPokemon(dados);
  }

  return (                                                        // App retorna um JSX que representa a interface do usuário. O JSX é uma sintaxe que permite escrever HTML dentro do JavaScript, facilitando a criação de componentes React.
    <div>
      <input
        id="pokemon"
        value={nomePokemon}
        type="text"
        placeholder="Escreva o nome de um Pokémon"
        onChange={(event) => setNomePokemon(event.target.value)}  // onChange é um evento que é acionado sempre que o valor do input muda. Aqui, ele atualiza nomePokemon com o valor digitado pelo usuário. 
      />

      <button onClick={() => buscarPokemon({ nomePokemon })}>
        Buscar
      </button>


      <h1>{pokemon?.name}</h1>                                   
      <img src={pokemon?.sprites?.front_default} />
    </div>
  );
}

// O operador de encadeamento opcional (?.) é usado para acessar a propriedade name do objeto pokemon. Se pokemon for null ou undefined, ele não tentará acessar name e retornará undefined, evitando erros.
