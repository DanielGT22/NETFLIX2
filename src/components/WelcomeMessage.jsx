const WelcomeMessage = function (props) {
  // TUTTE le props che invocate con un componente, nei componenti a funzione,
  // vengono ricevuti come PARAMETRI del componente fatto a funzione

  // props sarà SEMPRE un oggetto -> dove trovo il parametro welcomeName? props.welcomeName
  return <p>Ciao, {props.welcomeName}!</p>
}

export default WelcomeMessage
