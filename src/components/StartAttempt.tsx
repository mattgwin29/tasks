import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, setProgress] = useState<boolean>(false);
    const [numAttempts, setAttempt] = useState<number>(4);

    function start() {
        setProgress(true);
        if (numAttempts - 1 >= 0) setAttempt(numAttempts - 1);
    }
    function stop() {
        setProgress(false);
    }

    function addAttempt() {
        setAttempt(numAttempts + 1);
    }

    return (
        <div>
            <Button onClick={start} disabled={inProgress || numAttempts === 0}>
                Start Quiz
            </Button>
            {inProgress && <div>In Progress: </div>}
            <Button onClick={stop} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempt} disabled={inProgress}>
                Mulligan
            </Button>
            {<div>Attempts remaning: {numAttempts}</div>}
        </div>
    );
}
