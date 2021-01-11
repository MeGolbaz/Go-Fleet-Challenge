import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Info() {
    return (
        <Form >
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Family Nam</Form.Label>
                <Form.Control type="name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="select" rows={3} />
            </Form.Group>
            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="I accept" />
            </Form.Group>
            <Button variant="primary" type="submit" size="lg">
                <a href="https://go-fleet.ch/en/">Submit</a>
            </Button>
        </Form>

    );
}

export default Info;
