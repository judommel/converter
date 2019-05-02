import React from "react";
import CurrList from "./CurrList";
import AmountInput from "./AmountInput";
import AddButton from "./AddButton";
import NewConverter from "./NewConverter";

class App extends React.Component {
  state = {
    count: 1
  };

  addConverter = () => {
    let converters = [];

    for (let i = 0; i < this.state.count; i++) {
      converters.push(<NewConverter key={i} />);
    }

    return converters;
  };

  render() {
    return (
      <div>
        <div>{this.addConverter()}</div>
        <div>
          <AddButton
            value="Add Converter"
            theme="add-button"
            onAdd={() => {
              this.setState({
                count: this.state.count + 1
              });
            }}
          />
        </div>

        <div>
          <AddButton
            value="Delete Converter"
            theme="delete-button"
            onAdd={() => {
              this.setState({
                count: this.state.count - 1
              });
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
