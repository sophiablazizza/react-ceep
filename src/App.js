import React from 'react';
import { ListaDeNotas } from './componentes/listaDeNotas';


function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Título"/>
        <textarea placeholder="Escreva sua nota..."/>
        <button>Criar nota</button>
      </form>
      <ListaDeNotas/>
    </section>
  );
}

export default App;
