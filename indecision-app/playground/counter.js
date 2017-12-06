class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    // domyslne wartosci
    this.state = {
      count: 0,
      name: 'Julie'
    };
  }
  handleAddOne() {
    // prevState nie musi byc tak nazwane, mamy tutaj dostep do obiektu state
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
        name: prevState.name + 'test'
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0,
        name: 'Julie'
      };
    });
  }
  render() {
    return (
      <div>
        {this.state.name}
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 0,
//     someId = 'myidhere';
//
// const addOne = () => {
//         count++;
//         renderCounterApp();
//       },
//       minusOne = () => {
//         count--;
//         renderCounterApp();
//       },
//       reset = () => {
//         count = 0;
//         renderCounterApp();
//       };
//
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button id={someId} className="button" onClick={addOne}>+1</button>
//       <button id={someId} className="button" onClick={minusOne}>-1</button>
//       <button id={someId} className="button" onClick={reset}>reset</button>
//     </div>
//   );
//
//   ReactDOM.render(templateTwo, appRoot);
// };
//
// renderCounterApp();
