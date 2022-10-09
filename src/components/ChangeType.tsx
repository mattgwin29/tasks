import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    //let displayText = "Short Answer";
    function change(): void {
        if (type === "short_answer_question") {
            setType("multiple_choice_question");
        } else {
            setType("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={change}>Change Type</Button>
            {(type === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )) ||
                (type === "short_answer_question" && <div>Short Answer</div>)}
        </div>
    );
}
