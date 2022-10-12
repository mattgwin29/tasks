import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { dhValue, setDhValue } from "./DoubleHalfState";

interface val {
    value: number;
    setValue: (n: number) => void;
}

function Doubler(props: val): JSX.Element {
    return (
        <Button onClick={() => props.setValue(2 * props.value)}>Double</Button>
    );
}

function Halver(props: val): JSX.Element {
    return (
        <Button onClick={() => props.setValue(0.5 * props.value)}>Halve</Button>
    );
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler value={dhValue} setValue={setDhValue}></Doubler>
            <Halver value={dhValue} setValue={setDhValue}></Halver>
        </div>
    );
}
