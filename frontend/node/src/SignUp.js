import { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }

  handleNameChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Um nome foi enviado: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nomee:
          <input type="text" value={this.state.value} onChange={this.handleNameChange} />
        </label>
        
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

export default NameForm;