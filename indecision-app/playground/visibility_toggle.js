let app = document.getElementById('app');

class VisibilityToggle extends React.Component {
  constructor(params) {
    super(params);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      text: ''
    };
  }
  handleToggleVisibility() {
    if (this.state.text) {
      this.setState(() => {
        return {
          text: ''
        };
      });
    } else {
      this.setState(() => {
        return {
          text: 'This is hidden text.'
        };
      });
    }
  }
  render() {
    return (
      <section>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>Show details</button>
        <p>{this.state.text}</p>
      </section>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, app);

let click = 0;

const renderApp = document.getElementById('app'),
      showHiddenContent = () => {
        click ? click = 0 : click = 1;
        renderStuff();
      },
      renderStuff = () => {
        const template = (
          <section>
            <h1>Visibility Toggle</h1>
            <button onClick={showHiddenContent}>Show details</button>
            {click ? <p>This is hidden text.</p> : ''}
          </section>
        );

        ReactDOM.render(template, renderApp);
      };

renderStuff();
