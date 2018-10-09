import React from 'react';

class Code extends React.Component {
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
                <h2 onClick={() => {this.showDiv('yelp')}}>Yelp Front End (Redesign) - More Info Module</h2>
                <div id="yelp">
                    <img src="img/Code/Yelp1.png" alt="Yelp Module"  class="image2"/>    
                    <br></br>
                    <div id="hiddentext">
                        <div style={{'textAlign': 'center'}}>React.js | Node | Mongodb | AWS </div>
                        <br></br>
                        Rebuilt front-end of the sidebar module of Yelp’s product page with sample data
                        <br></br>
                        <br></br>
                        Hosted module bundle and proxy servers on Amazon S3 and EC2 respectively to integrate with 3 other independent modules to form complete product page
                    </div>
   
                </div>
                <h2 onClick={() => {this.showDiv('airbnb')}}>Airbnb Backend (Redesign) - Benchmarking 10 Million Data</h2>
                <div id="airbnb">
                    <img src="img/Code/Airbnb1.png" alt="Airbnb Benchmarking"  class="image2"/>    
                    <br></br>
                    <div id="hiddentext">
                        <div style={{'textAlign': 'center'}}>PostgreSQL | Couchbase</div>
                        <br></br>
                        Populated both databases with 10 million fake records, optimized tables with multicolumn indexes and benchmarked queries to determine faster database for data set
                        <br></br>
                        <br></br>
                        Load balanced to determine max number of queries per second run locally and then on EC2 for PostgreSQL
                        <br></br>
                        <br></br>
                        * Couchbase was scrapped after all 10 trials timed out. The database was conclusively less efficient for the data structure than PostgreSQL
                    </div>
                </div>
            </div>

        )
    }

}

export default Code;

