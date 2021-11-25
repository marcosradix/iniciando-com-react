import React from "react";
import './App.css';

class App extends React.Component {

  state = {
    nome: 'Fulano'
  }

  modificarNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  criaComboBox = () => {
    const opcoes = ["Marcos", "Miguel"]
    const comboBoxOp = opcoes.map(op => <option key={op + 1}>{op}</option>)

    return (
      <select>
        {comboBoxOp}
      </select>

    )
  }
  componentDidMount() {
    console.log("Executou did mount")
  }
  render() {
    const MeuComboBox = () => this.criaComboBox()
    return (
      <React.Fragment>
        <div className="App">
          <input type="text" value={this.state.nome} onChange={this.modificarNome} />
          <h3>Hello {this.props.nomeCompleto}.</h3>
        </div>
        <br />
        <MeuComboBox />
      </React.Fragment>

    );
  }
}

export default App;
