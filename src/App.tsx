import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import cat from "./assets/cat.jpeg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Matthew Gwin Section
                010
            </header>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: "100px",
                                backgroundColor: "red",
                                margin: "50px,50px,0px,0px",
                                padding: "10px, 10px, 0px, 0px"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                height: "100px",
                                backgroundColor: "red",
                                margin: "50px,50px,0px,0px",
                                padding: "10px, 10px, 0px, 0px"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <h1>The Danimal</h1>
            <img
                src={cat}
                alt="A picture of my Cat Phoebe"
                style={{ width: "500px" }}
            />
            <ol>
                <li>Cat 1</li>
                <li>Cat 2</li>
                <li>Cat 3</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>

        </div>
    );
}

export default App;
