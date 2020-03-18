import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {Search} from './components/search/search.component';


// import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters:[],
      searchField:''

    };
    // this.handleChange=this.handleChange.bind(this);

  }
// handleChange(e){
//   this.setState({searchField:e.target.value})
// }

handleChange=(e)=>(
  this.setState({searchField:e.target.value})
)

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users').then((response)=>response.json()).then((users)=>{this.setState({monsters:users})});
    
  }
  render() {
// const f=this.state.monsters.filter((monster)=>monster.name.toLowerCase().startsWith(this.state.searchField.toLowerCase()));

 const {monsters,searchField}=this.state;
 const filterMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
<h1> Monters Rolodex</h1>
        <Search placeholder={"search monsters"} handleChange={this.handleChange}/>
        
        <CardList monsters={filterMonsters}>
        
        </CardList>

      </div>
    );


  }

}

export default App;