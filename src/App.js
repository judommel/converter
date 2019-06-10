import React from "react";
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
      <div className="main-div">
        <header>
          <div className="app-title">My R€act Converter($)</div>
        </header>{" "}
        <div>{this.addConverter()}</div>
        <div>
          <AddButton
            value={
              <span>
                <i class="fas fa-plus-circle" />
                {"  Add Converter"}
              </span>
            }
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
            value={
              <span>
                <i class="fas fa-minus-circle" />
                {"  Delete Converter"}
              </span>
            }
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
