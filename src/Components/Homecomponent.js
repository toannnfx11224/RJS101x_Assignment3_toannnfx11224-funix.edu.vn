import React from "react";

import { Jumbotron } from "reactstrap";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
  
        <div className="container-fluid" style={{ marginTop: "50px" }}>
          <Jumbotron>
            <div className="container">
              <div className="row row-header">
                <div className="col-12 col-sm-6">
                  <h1>Ristorante con Fusion</h1>
                  <p>
                    We take inspiration from the World's best cuisines, and
                    create a unique fusion experience. Our lipsmacking creations
                    will tickle your culinary senses!
                  </p>
                </div>
              </div>
            </div>
          </Jumbotron>
        </div>
    
      </React.Fragment>
    );
  }
}
export default Home;