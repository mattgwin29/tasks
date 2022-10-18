import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);

    // This is the Control
    function updateSelected(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Select value={selected} onChange={updateSelected}>
                {options.map((choice: string) => (
                    <option key={choice} value={choice}>
                        {choice}
                    </option>
                ))}
            </Form.Select>
            {selected === expectedAnswer ? <div>✔️</div> : <div>❌</div>}
        </div>
    );
}
