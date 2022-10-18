import React, { useState } from "react";
import { Form } from "react-bootstrap";
const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "grey",
    "magenta"
];
const DEFAULT_COLOR = COLORS[0];

export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>(DEFAULT_COLOR);

    // This is the Control
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setChosenColor(event.target.value);
    }
    return (
        <div>
            {COLORS.map((color: string) => {
                return (
                    // <span style={{ backgroundColor: color }}>{color}</span>
                    <Form.Check
                        key={color}
                        inline
                        style={{ backgroundColor: color }}
                        type="radio"
                        name="color"
                        onChange={updateColor}
                        id={"color-" + color}
                        label={color}
                        value={color}
                        checked={color === chosenColor}
                    />
                );
            })}
            <div>You have chosen:</div>
            <span
                data-testid="colored-box"
                style={{ backgroundColor: chosenColor }}
            >
                {chosenColor}
            </span>
        </div>
    );
}
