import React from 'react';
import Games from './games';
import Code from './code';
import About from './about';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: true,
            gamesOn: false,
            codeOn: false,
            aboutOn: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.rGames = this.rGames.bind(this);
        this.rCode = this.rCode.bind(this);
        this.rAbout = this.rAbout.bind(this);
    }

    handleClick(e) {
        //e.preventDefault();
        console.log(e.target.hash.substr(1));
        var topic = e.target.hash.substr(1);
         if (topic === 'games'){this.rGames()}
         if (topic === 'code'){this.rCode()}
         if (topic === 'about'){this.rAbout()}
    }

    rGames(){
        this.setState(state => ({
            gamesOn: true,
            codeOn: false,
            aboutOn: false
          }));
    }

    rCode(){
        this.setState(state => ({
            gamesOn: false,
            codeOn: true,
            aboutOn: false
          }));
    }

    rAbout(){
        this.setState(state => ({
            gamesOn: false,
            codeOn: false,
            aboutOn: true
          }));
    }


    showSection() {
        render (
            <div>           
                {this.state.isToggleOn ? 'Showing' : ''}
            </div>
        )
    }

    render () {
        return (
            <div id="header">
                <div id="name">
                    Bartow Weiss
                </div>
                <div id="description">
                    <br></br>
                    Full Stack Engineer & Producer
                </div>
                <br></br>
                <br></br>
                <nav>
                    <ul id="description">
                        <li><a href="#games" onClick={this.handleClick}>Games</a></li>
                        <li><a href="#code" onClick={this.handleClick}>Code</a></li>
                        <li><a href="#about" onClick={this.handleClick}>About</a></li>
                    </ul>
                </nav>      
                <br></br>
                {this.state.gamesOn && <Games />}
                {this.state.codeOn && <Code />}
                {this.state.aboutOn && <About />}


            </div>
        )
    }
}

export default App;