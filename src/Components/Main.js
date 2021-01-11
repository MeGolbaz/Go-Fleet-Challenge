import React from 'react';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Card1 from "./Card1.png";
import Card2 from "./Card2.png";
import Card3 from "./Card3.png";
import 'bootstrap/dist/css/bootstrap.min.css';




function Main() {
    return (
        <span>
            <Card border="secondary" style={{ width: '29rem' }}>
                <Card.Body>
                    <Card.Title>Product Line-Up</Card.Title>
                    <img src={Card1} class="card-img-top" alt="Card1"></img>
                    <Card.Text>
                        go! Fleet – the easy way to move from analogue to digital: for optimised business processes and more and easier booking options.
      </Card.Text>
                    <Form.Check type="checkbox" />
                </Card.Body>
            </Card>
            <br />
            <Card border="success" style={{ width: '29rem' }}>
                <Card.Body>
                    <Card.Title>Product Line-Up</Card.Title>
                    <img src={Card2} class="card-img-top" alt="Card1"></img>
                    <Card.Text>
                        Thanks to regular feedback surveys and new, convenient booking options for your existing and completely new target groups.
      </Card.Text>
                    <Form.Check type="checkbox" />
                </Card.Body>
            </Card>
            <br />

            <Card border="danger" style={{ width: '29rem' }}>
                <Card.Body>
                    <Card.Title>Product Line-Up</Card.Title>
                    <img src={Card3} class="card-img-top" alt="Card1"></img>
                    <Card.Text>
                        Be where customers need you. Use our digital options for a modern taxi business – Made in Switzerland!
      </Card.Text>
                    <Form.Check type="checkbox" />
                </Card.Body>
            </Card>
            <Card.Body>
                <Button variant="primary" size="lg" block >
                    I Would Like A Personal Packaging.
                </Button>
            </Card.Body>
            <br />
        </span>
    );
}

export default Main;
