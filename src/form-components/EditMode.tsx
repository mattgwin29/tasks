import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEditing, setEditing] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    // This is the Control
    function updateEditing(event: React.ChangeEvent<HTMLInputElement>) {
        setEditing(event.target.checked);
    }

    function changeName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="is-editing-check"
                label="Editing?"
                checked={isEditing}
                onChange={updateEditing}
            />
            <div>The user is {isEditing ? "editing" : "not editing"}.</div>
            {isEditing && (
                <Form.Group controlId="username">
                    <Form.Check
                        type="switch"
                        id="is-student-check"
                        label="Student"
                        checked={isStudent}
                        onChange={updateIsStudent}
                    />
                    <Form.Control value={name} onChange={changeName} />
                </Form.Group>
            )}
            <div>
                {isStudent
                    ? name + " is a student"
                    : name + " is not a student"}
            </div>

            {/*<div>
                {" "}
                <Form.Group controlId="">
                    <Form.Control value={input} onChange={updateInput} />
                </Form.Group>
                {expectedAnswer === input ? <div>✔️</div> : <div>❌</div>}
            </div> */}
        </div>
    );
}
