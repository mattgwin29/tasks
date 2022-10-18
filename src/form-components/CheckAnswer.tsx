import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [input, setInput] = useState<string>("");

    // This is the Control
    function updateInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }

    return (
        <div>
            {" "}
            <Form.Group controlId="">
                <Form.Control value={input} onChange={updateInput} />
            </Form.Group>
            {expectedAnswer === input ? <div>✔️</div> : <div>❌</div>}
        </div>
    );

    /*return (
        <div>
            <h3>Check Answer</h3>
        </div>
    );*/
}
