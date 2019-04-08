import React, { Component } from 'react';
// import './App.css';
import List from './List';

const container = {
    width: '100%',
    height: '100%',
};

const input = {
    width: '100%',
    backgroundColor: 'rgba(31, 24, 25, 0.88)',
    color: 'white',
    padding: '20px 10px',
    border: 'none',
    fontSize: '25px'
}

const btnStyle = {
    fontSize: '30px',
    color: 'white',
    backgroundColor: 'lightgreen',
    border: 'none',
    padding: '5px 10px'
}



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
    this.removeTodo = this.removeTodo.bind(this);
    
  }

  

  

  

  componentDidMount() {
    this.setState({ items: [...this.props.online] });
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  removeTodo(name, i) {
    // splice this.props.todos??
    let items = this.state.items.slice();
        items.splice(i, 1);
        this.setState({
            items
        });
}

  render() {
    return (
      <div style={container}>
        <form className="todoform" onSubmit={this.onSubmit}>
          <input style={input} value={this.state.term} onChange={this.onChange} />
          <button style={btnStyle}>Submit</button>
        </form>
        <List items={this.state.items} removeTodo={this.removeTodo}/>
      </div>
    );
  }
}




