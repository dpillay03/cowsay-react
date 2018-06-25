import React from 'react';
import ReactDOM from 'react-dom';
import { say } from 'cowsay';
import faker from 'faker';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: 'Generate Cowsay Lorem!',
            content: say({text: faker.hacker.phrase()})
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => {
            let returnCow = faker.hacker.phrase();
            return {content: say({text: returnCow})};
        });
    }
    
    render() { 
        console.log(say({ text: 'grazing in the browser' }));
        return (<div className="App">
            <h1>{this.state.header}</h1>
            <button onClick={this.handleClick}>Click Me</button>
            <pre>{this.state.content}</pre>
        </div>)
    }
};

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);