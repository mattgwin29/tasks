import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function enableOrHide(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <Button onClick={enableOrHide}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
    /*return <div>
        <Button onClick={enableOrHide}>Show / Hide</Button>{visible && <div>42</div>}
    </div>;*/
}
