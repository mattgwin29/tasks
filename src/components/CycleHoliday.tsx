import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type emojis = "🎄" | "🎃" | "🗡" | "🍀" | "🐔";
    //["🗡", "🎃", "🐔", "🎄", "🍀"]
    const ALPHA_TRANSITIONS: Record<emojis, emojis> = {
        "🎄": "🎃",
        "🎃": "🗡",
        "🗡": "🍀",
        "🍀": "🐔",
        "🐔": "🎄"
    };
    const YEAR_TRANSITIONS: Record<emojis, emojis> = {
        "🗡": "🎃",
        "🎃": "🐔",
        "🐔": "🎄",
        "🎄": "🍀",
        "🍀": "🗡"
    };

    //const [emojiDay, setNextByYear] = useState<emojis>("🎄");
    //const [emojiYear, setNextByAlpha] = useState<emojis>("🎄");
    const [currentEmoji, setNextEmoji] = useState<emojis>("🎄");

    /*function changeDayAlpha(): void {
        const newEmoji = ALPHA_TRANSITIONS[emojiDay];
        setNextByYear(newEmoji);
    }
    function changeDayYear(): void {
        const newEmoji = YEAR_TRANSITIONS[emojiDay];
        setNextByYear(newEmoji);
    }*/

    return (
        <div>
            <Button
                onClick={() => setNextEmoji(YEAR_TRANSITIONS[currentEmoji])}
            >
                Advance by Year
            </Button>
            <Button
                onClick={() => setNextEmoji(ALPHA_TRANSITIONS[currentEmoji])}
            >
                Advance by alphabet
            </Button>
            <div>Holiday: {currentEmoji}</div>
        </div>
    );
}
