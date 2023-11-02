// questo sarà un componente a CLASSE
// i componenti a classe sono PIÙ POTENTI dei componenti a funzione, hanno funzionalità in più!

// questa importazione con le graffe serve quando il componente NON è stato esportato come default
import { Component } from 'react'

// Component è il componente a classe più famoso che c'è, che si chiama proprio "Component"
class MyClassComponent extends Component {
  // dobbiamo sempre ritornare del JSX!
  // come ritorno del JSX da un componente a classe?

  render() {
    // render è un metodo OBBLIGATORIO in ogni class component
    return <h3>Componente a classe!</h3>
  }
}

export default MyClassComponent
