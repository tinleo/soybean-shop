import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchField} from "./components/search-field/search-field.component";

class App extends Component{
  constructor() {
      super();
      this.state = {
          products: [],
          searchField: ''
      }
  }
  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users').then(response =>response.json()).then(users => this.setState({products: users}))
  }

  render() {
      const { products, searchField } = this.state;
      const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
        <div className="App">
            <h1>Monster Rolodex</h1>
            <SearchField placeholder='search product' handlechange={e => {
                this.setState({searchField: e.target.value});
            }}></SearchField>
            <CardList products = {filteredProducts}> </CardList>
        </div>
    );
  }
}

export default App;
