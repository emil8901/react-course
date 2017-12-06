import React from 'react';
import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    // pierwsze this.handleDeleteOptions to tutaj po prostu dodajemy
    // do klasy IndecisionApp nowa zmienna handleDeleteOptions
    // przez ktora bedziemy sie odwolywac do czegos.
    // W naszym wypadku bedzie to metoda handleDeleteOptions
    // ktora bez przypisania bind(this) zgubi klase IndecisionApp,
    // tzn. jezeli zostanie ona wywolana i w niej bedzie wywolanie 'this'
    // to nie wskaze na klase, tylko na undefined. Dlatego wazne jest,
    // aby uwiazac (bind) 'this' do klasy, i w momencie gdy wywolamy funkcje
    // handleDeleteOptions to this bedzie ustawione na IndecisionApp.
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleResetState = this.handleResetState.bind(this);
    this.state = {
      options: props.options,
      selectedOption: undefined
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options) {
        this.setState(() => ({ options: options }));
      }
    } catch(e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
    console.log('componentDidUpdate!');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    console.log(option);
    this.setState(() => ({ selectedOption: option }));
  }
  handleAddOption(option) {
    if(!option) {
      return 'Enter valid string.';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option already exist.';
    }

    this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handleResetState() {
    console.log('test');
    this.setState(() => ({ selectedOption: undefined }));
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          />
        <Options
           options={this.state.options}
           handleDeleteOptions={this.handleDeleteOptions}
           handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleResetState={this.handleResetState}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};
