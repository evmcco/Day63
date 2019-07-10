import React from "react";
import { connect } from "react-redux";
import { setName } from "../redux/actions/name";

class NameInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleSetName = () => {
    this.props.setName(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={e => this.updateInput(e.target.value)} />
        <button onClick={this.handleSetName}>Set Name</button>
      </div>
    );
  }
}

export default connect(
  null,
  { setName }
)(NameInput);
