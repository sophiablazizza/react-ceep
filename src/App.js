import React, { Component } from 'react';
import FormularioCadastro from './componentes/FormularioCadastro';
import ListaDeNotas from './componentes/ListaDeNotas';


class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }

}

export default App;
