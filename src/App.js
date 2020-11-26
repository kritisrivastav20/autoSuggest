import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  constructor(props) {
		super(props);
		this.state = {
      results: [],
      value: '',
			countries: ['India', 'Japan', 'Australia', 'United States', 'Germany', 'France', 'Spain', 'Turkey', 'Isreal'],
		};
  }
  
  onChange = (event) => {
    const matches = this.state.countries.filter(item => item.includes(event.target.value));    
    this.setState(
      {
        results: matches,
        value: event.target.value,
      }
    )
  }
  
  handleClick = () => {
    alert(this.state.results.length + ' records found!');
  }


  render() {

    const { results, value } = this.state;

  	return (
			<div className="header">
				<h1>Start search</h1>
				<input placeholder="Ex: Add your text here..." onChange={this.onChange}/>
				<button onClick={this.handleClick}>+</button>

        {value && !results && <div>No records found...</div>}
				
        { results && value && 
        results.map((item, id) =>
        <div key = {id}>
          <ul className="resultItem">{item}</ul>
        </div>
        )
        }
			</div>
		);
}
}

