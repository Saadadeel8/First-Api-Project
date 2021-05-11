import React, { Component } from 'react'
import axios from 'axios'

 class Animalnames extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             input: '',
             names: [],
             filterText: [],
             error: ''
             
        }
    }
    
    
    showList(){
        axios.get('https://gist.githubusercontent.com/borlaym/585e2e09dd6abd9b0d0a/raw/6e46db8f5c27cb18fd1dfa50c7c921a0fbacbad0/animals.json')
        .then(list => {
            console.log(list)
            this.setState({names: list.data})
            
        })
        .catch(errormsg =>{
            console.log(errormsg)
            this.setState({error: <ul>"Could not retrieve Data"</ul>})
        })
        
        }
    handleCheckBox = (event) => {
        console.log(event)
        if(event){
            this.setState({input: event.target.value})
            
            this.setState(prevState => ({
            
                names: this.state.names.filter(f => f.toLowerCase().startsWith(prevState.input))
            }))
        }
        }
        
    render() {
        const { input, names, error, filterText} = this.state
        console.log(filterText)
        return (
            <div>
                <div className= 'box'>
                <ul>List of All Animals  </ul>  </div>
            
                <ul><button onClick={() => this.showList()}>Display</button></ul>
                
                <ul>Animal Names from? <input type='text' value= {this.state.input} onChange={this.handleCheckBox} />  </ul>

                {names.length?
                names.map(post => <ul><div key={post.index}>{post}</div></ul>): error
                }
                
               
            
             </div>
        )
    }
 }

export default Animalnames
