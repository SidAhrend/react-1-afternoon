import React, {Component} from 'react'

class FilterObject extends Component {
constructor() {
    super();
    this.state={
        employees: [
            {
                name: 'Sid Ahrend',
                title: 'idiot',
                age: 18
            },
            {
                name: 'Joe Mama',
                hairColor: 'ginger',
                age: 27

            },
            {
                name: 'Steve Harvey',
                title: 'show host'
            }
        ],
        userInput: '',
        filteredEmployees: []
    }
}
    handleChange(value){
    this.setState({userInput: value});
    }

    filterEmployees(prop){
        let employees = this.state.employees;
        let filteredEmployees = this.state.filteredEmployees
        
        for(let i = 0; i < employees.length; i++){
            console.log(prop)
            if (employees[i].name.indexOf(prop) ) {
                console.log('hit')
                filteredEmployees.push(employees[i]);
            }
        }
        // console.log(filteredEmployees)
        this.setState({ filteredEmployees: filteredEmployees });
        console.log(this.state)
    }
    
    render (){
        return(
            <div className='puzzleBox filterObjectPB'>
                <h1>Filter Object</h1>
                <span className='puzzleText'> Original: {JSON.stringify(this.state.employees, null, 10) }</span>
                <input className='inputLine' onChange={ (event) => this.handleChange(event.target.value) }></input>
                <button className='confirmationButton' onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
                <span className='resultsBox filterObjectRB'> Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
            </div>
        )
    }
}

export default FilterObject;