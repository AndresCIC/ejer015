class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      apellidos: '',
      edad: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value

    });
  }

  handleSubmitChange(event) {



  }
  handleEdad(event){

    this.state.nombre > 100 ? "NOPE" : ''

  }


    

  render() {
    return (
      <form action="/" method="POST" id="personalDataForm">
        <label>
          Nombre: 
          <input
                 id="nombre"
            name="nombre"
            type="text"
            maxLength="20"
            value={this.state.nombre}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Apellidos: 
          <input
                 id="apellidos"
            name="apellidos"
            type="text"
            maxLength="20"
            value={this.state.apellidos}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Edad: 
          <input
                 id="edad"
            name="edad"
            type="number"
            value={this.state.edad}
            min={0}
            max={120}
            onChange={this.handleInputChange} />
        </label>

          <br />
        <label>          
          <input
            name="enviar"
            type="submit"
            value="Enviar"
            onChange={this.handleSubmitChange} />
        </label>


      </form>
    );
  }
}

ReactDOM.render(
  <Formulario />,
  document.getElementById('root')
);
