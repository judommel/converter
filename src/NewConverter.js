import React from "react";
import AmountInput from "./AmountInput";
import CurrList from "./CurrList";
import AddButton from "./AddButton";
import rates from "./rates";

class NewConverter extends React.Component {
  state = { cashIn: "", cashOut: "", currIn: "EUR", currOut: "USD" };

  calculate = () => {
    this.setState({
      cashOut:
        (rates[this.state.currOut] / rates[this.state.currIn]) *
        this.state.cashIn
    });
  };

  calculateRev = () => {
    this.setState({
      cashIn:
        (rates[this.state.currIn] / rates[this.state.currOut]) *
        this.state.cashOut
    });
  };

  render() {
    return (
      <div>
        {" "}
        <AmountInput
          value={this.state.cashIn}
          onNewValue={event => {
            this.setState(
              {
                cashIn: event.target.value
              },
              () => {
                this.calculate();
              }
            );
          }}
        />{" "}
        =
        <AmountInput
          value={this.state.cashOut}
          onNewValue={event => {
            this.setState(
              {
                cashOut: event.target.value
              },
              () => {
                this.calculateRev();
              }
            );
          }}
        />{" "}
        <div>
          <CurrList
            value={this.state.currIn}
            onSelectCountry={event => {
              {
                this.setState(
                  {
                    currIn: event.target.value
                  },
                  () => {
                    this.calculate();
                  }
                );
              }
            }}
          />{" "}
          <AddButton
            value="Reset"
            theme="reset-button"
            onAdd={() => {
              this.setState({
                cashIn: 0,
                cashOut: 0
              });
            }}
          />
          <CurrList
            value={this.state.currOut}
            onSelectCountry={event => {
              {
                this.setState(
                  {
                    currOut: event.target.value
                  },
                  () => {
                    this.calculate();
                  }
                );
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default NewConverter;
