import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props)
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
                <img src="img/About/Headshot.jpg" alt="Headshot"  class="image3"/>    
                <br></br>
                <div id="aboutme">
                    Bartow Weiss is a Full Stack Engineer and Producer based in Los Angeles, who has been working in software and games since 2014. 
                    He has done production and engineering work on VR projects for <a href="http://www.closeyour.com/">GoodbyeWorld Games</a>, <a href="http://www.sonypictures.com/">Sony Pictures Entertainment</a>, and <a href="http://emblematicgroup.com/">Emblematic Group</a>.
                    <br></br>
                    <br></br>
                    He graduated Magna Cum Laude from the University of Southern California in May 2018 with a B.A. in Interactive Media/Game Design and minors in Business Finance and Business Entrepreneurship. After, he attended and graduated from Hack Reactor, Los Angeles to strengthen his Full Stack skills.
                    <br></br>
                    <br></br>
                    Check out his <a href="https://www.linkedin.com/in/bartowweiss/">Linkedin</a>, or some of the <a href="https://bartow.itch.io/">Games</a> he's posted online.
                </div>
            </div>

        )
    }

}

export default About;

