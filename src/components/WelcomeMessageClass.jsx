import { Component } from 'react'

class WelcomeMessageClass extends Component {
  render() {
    return <p>Ciao, {this.props.welcomeName}!</p>
    // in un componente a classe le props si trovano nell'oggetto "this.props", che rappresenta
    // le props ricevute da questa specifica istanza del componente WelcomeMessageClass
  }
}

export default WelcomeMessageClass

// dove arriva welcomeName
