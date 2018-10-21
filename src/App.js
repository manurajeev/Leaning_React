import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    person: [ {id:'adgfds',name:'Max',age:'100'},
              {id:'a3re3f',name:'Manu',age:'50'},
              {id:'afdg443',name:'Min',age:'0'}
    ],
    showPersons: false
  };

 
  nameChangeHandler = (event,id) => {
    const personIndex = this.state.person.findIndex(p => {return p.id === id});
    const person = {
      ...this.state.person[personIndex]
    }

    person.name = event.target.value ;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState({person: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    });
  };

  deletePersonHandler = (personId) => {
    const persons = [...this.state.person];
    persons.splice(personId,1);
    this.setState({
      person: persons
    })
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor:'pointer'
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        this.state.person.map((p,index) => <Person 
        key={p.id} 
        name={p.name} 
        age={p.age}
        click={() => this.deletePersonHandler(index)}
        changed= {(event) => this.nameChangeHandler(event,p.id)}
        />)
      );
    }

    return (
      <div className="App">
        <h1>App Component</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Switch Names</button>
        { persons }
      </div>
    );
  }
}

export default App;


// <div>
//         <Person id:'a',={this.state.person[0].id:'a',} age={this.state.person[0].age} />
//         <Person id:'a',={this.state.person[1].id:'a',} 
//         age={this.state.person[1].age}
//         fun={this.handleSwitch.bind(this,'Max!!')}
//         changed={this.handleChange}
//         > Rajeev K</Person>
//         <Person id:'a',={this.state.person[2].id:'a',} age={this.state.person[2].age}/>
//       </div>