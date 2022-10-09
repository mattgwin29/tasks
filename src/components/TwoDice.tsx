import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [left, setSideLeft] = useState<number>(2);
    const [right, setSideRight] = useState<number>(3);

    function rollLeft() {
        setSideLeft(d6());
    }
    function rollRight() {
        setSideRight(d6());
    }

    function result(): string {
        let s = "";
        if (left + right === 2) {
            s = "Lose";
        } else if (left === right) {
            s = "Win";
        } else {
            s = "";
        }
        return s;
    }

    //return <div>Two Dice</div>;
    return (
        <div>
            <div>
                <div>
                    <span data-testid="left-die">{left}</span>
                </div>
                <Button name="Roll Left" onClick={rollLeft}>
                    Roll Left
                </Button>
                <div>
                    <span data-testid="right-die">{right}</span>
                </div>
                <Button name="Roll Right" onClick={rollRight}>
                    Roll Right
                </Button>
            </div>
            {true && result()}
        </div>
    );
}
