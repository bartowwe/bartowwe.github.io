import React from 'react';

class Games extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isToggleOn: true};
    }
    
    showDiv (d) {
        var x = document.getElementById(d);
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    render () {
        return (
            <div className="container">
                <h2 onClick={() => {this.showDiv('closeyour')}}>Close Your (2014 - Present)</h2>
                <div id="closeyour">
                    <div className="video-container">
                        <iframe src="https://www.youtube.com/embed/6h2coI9y93U" allowFullScreen="allowfullscreen" size="75%" frameBorder="0">
                        </iframe>  
                    </div>                    
                    <br></br>

                    <div id="hiddentext">
                        Close Your is a first person interactive short story where you live an entire life, from birth to death, and make decisions big and small that shape the outcome of that life. The catch is that each scene only lasts as long as you can keep your eyes open. The game uses your webcam to track your eyes in real life, so every time you blink, you skip forward: could be five seconds or five years. Life literally flashes before your eyes as you try desperately to hold onto each fleeting moment.
                        <br></br>
                        <br></br>
                        <b>Role(s):</b> Designer
                        <br></br>
                    </div>

                    <img src="img/Games/CloseYour4.png" alt="Awards" className="image"></img>

                    <div className="row">
                        <div className="column">
                            <img src="img/Games/CloseYour1.jpg" alt="Close Your" width="100%" />
                        </div>
                        <div className="column">
                            <img src="img/Games/CloseYour2.jpg" alt="Close Your" width="100%" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <img src="img/Games/CloseYour3.jpg" alt="Close Your" width="100%" />
                        </div>
                        <div className="column">
                            <img src="img/Games/CloseYour5.jpg" alt="Close Your" width="100%" />
                        </div>
                    </div>
                </div>
                <h2 onClick={() => {this.showDiv('pulse')}}>Pulse (2015 - 2016)</h2>
                <div id="pulse">

                    <img src="img/Games/PulseLogo.png" alt="Pulse" className="image"></img>

                    <br></br>
                    <div id="hiddentext">
                        Pulse Color Match is meditative arcade-style game designed to put it's players in a state of flow by easing them in to an engaging and addictive rhythm-based color matching challenge. Originally published on the iOS App Store in 2016.
                        <br></br>
                        <br></br>
                        <b>Role(s):</b> Solo Developer/All Roles
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="column3">
                            <img src="img/Games/Pulse_Panel1.png" alt="Pulse" width="100%" />
                        </div>
                        <div className="column3">
                            <img src="img/Games/Pulse_Panel3.png" alt="Pulse" width="100%" />
                        </div>
                        <div className="column3">
                            <img src="img/Games/Pulse_Panel2.png" alt="Pulse" width="100%" />
                        </div>
                    </div>
                </div>

                <h2 onClick={() => {this.showDiv('adelie')}}>Adelie and the Obelisk (2015 - 2016)</h2>
                <div id="adelie">
                    <div className="video-container">
                        <iframe src="https://player.vimeo.com/video/165829564?autoplay=0&title=0&byline=0&portrait=0" allowFullScreen="allowfullscreen" size="75%" frameBorder="0">
                        </iframe>  
                    </div>
                    <br></br>
                    <div id="hiddentext">
                        USC Advanced Games project. Team size 20
                        <br></br>
                        A doe-eyed penguin upsets the natural balance between the creatures of day and night and must fight to restore it with it's newfound powers.                    <br></br>
                        <br></br>
                        <b>Role(s):</b> Lead Producer
                    </div>
                    <br></br>
                    <br></br>
                    <img src="img/Games/Adelie_Panel2.png" alt="Adelie and the Obelisk" width="100%" />
                </div>

                <h2 onClick={() => {this.showDiv('objectivity')}}>Objectivity (2015)</h2>
                <div id="objectivity">
                    <img src="img/Games/Objectivity_Title.png" alt="Objectivity" className="image" />
                    <br></br>
                    <div className="video-container">
                        <iframe src="https://www.youtube.com/embed/6UjG2zDkR2A" allowFullScreen="allowfullscreen" size="75%" frameBorder="0">
                        </iframe>  
                    </div>

                    <br></br>
                    <div id="hiddentext">
                        USC Intermediate Games project. Team size 5
                        <br></br>
                        Objectivity is a game about romantic relationships: the good, the bad, and how our partners make us feel, told through an adorable little asteroid traveling through space, finding different planets to orbit.
                        <br></br>
                        <br></br>
                        <b>Role(s):</b> Producer/Designer/Engineer
                    </div>
                    <br></br>
                    <br></br>
                    <img src="img/Games/Objectivity_Panel1.png" alt="Objectivity" width="100%" />
                </div>
            </div>
        )
    }
}

export default Games;