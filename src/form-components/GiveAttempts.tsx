import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsReq, setAttemptsReq] = useState<number>(0);
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);

    function useCalled() {
        setAttemptsLeft(attemptsLeft - 1);
    }
    function gainCalled() {
        if (isNaN(attemptsReq)) return;
        setAttemptsLeft(attemptsLeft + attemptsReq);
    }

    return (
        <div>
            <Form.Group controlId="GiveAttempts">
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsReq}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptsReq(parseInt(event.target.value))
                    }
                />
            </Form.Group>
            <Button onClick={gainCalled}>Gain</Button>
            <Button disabled={attemptsLeft == 0} onClick={useCalled}>
                Use
            </Button>
            <div>Attempts Left: {attemptsLeft}</div>
        </div>
    );
}
