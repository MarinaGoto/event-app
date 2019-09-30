import React, {Component, Fragment} from 'react';
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import Nav from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Nav />
                <Container className="main">
                    <EventDashboard/>
                </Container>
            </Fragment>
        );
    }
}

export default App;
