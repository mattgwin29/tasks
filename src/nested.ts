import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((q: Question): boolean => q.published);
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (q: Question): boolean =>
            q.body.length > 0 || q.options.length > 0 || q.expected.length > 0
    );
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const test: Question[] = questions.filter((q: Question) => q.id === id);
    if (test.length == 0) return null;
    else return test[0];
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((q: Question): boolean => !(q.id === id));
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((q: Question): string => q.name);
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sum = questions.reduce(
        (total: number, q: Question) => total + q.points,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const test = questions.filter((q: Question): boolean => q.published);
    const sum = test.reduce(
        (total: number, q: Question) => total + q.points,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const str = questions.reduce(
        (data: string, q: Question) =>
            data +
            "\n" +
            q.id +
            "," +
            q.name +
            "," +
            q.options.length +
            "," +
            q.points +
            "," +
            q.published,
        "id,name,options,points,published"
    );
    return str;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    /*questions.reduce((data: Answer[], q: Question) => data., [])

    return questions.filter((q: Question): Answer => {
    questionId: q.id,
    text: "",, 
    submitted: false,
    correct: false, 
});*/
    const ret = questions.map(
        (q: Question): Answer => ({
            questionId: q.id,
            text: "",
            submitted: false,
            correct: false
        })
    );

    return ret;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map(
        (q: Question): Question => ({ ...q, published: true })
    );
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    //use every
    /*if (questions.length == 0) return true;
    const mcq = questions.reduce(
        (all_same: boolean, q: Question) =>
            (all_same = q.type === "multiple_choice_question"),
        false
    );

    const saq = questions.reduce(
        (all_same: boolean, q: Question) =>
            (all_same = q.type === "short_answer_question"),
        false
    );

    return mcq || saq;*/
    return (
        questions.every(
            (q: Question): boolean => q.type === "multiple_choice_question"
        ) ||
        questions.every(
            (q: Question): boolean => q.type === "short_answer_question"
        )
    );
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    return [...questions, makeBlankQuestion(id, name, type)];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    /*const target = questions.filter(
        (q: Question): boolean => q.id === targetId
    );
    target[0].name = newName;*/
    return questions.map(
        (q: Question): Question =>
            q.id === targetId ? { ...q, name: newName } : q
    );
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const lol = questions.filter((q: Question): boolean => q.id === targetId);
    const newq: Question = { ...lol[0] };
    newq.type = newQuestionType;
    if (newQuestionType === "short_answer_question") newq.options = [];

    return questions.map(
        (q: Question): Question => (q.id === targetId ? newq : q)
    );
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const filtered = questions.filter(
        (q: Question): boolean => q.id === targetId
    );
    //if (filtered.length === 0) return questions;
    const newQ: Question = {
        ...filtered[0],
        options: [...filtered[0].options]
        //unpack array or object
    };
    if (targetOptionIndex === -1) newQ.options = [...newQ.options, newOption];
    else newQ.options[targetOptionIndex] = newOption;

    return questions.map(
        (q: Question): Question => (q.id === targetId ? newQ : q)
    );
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const index: number = questions.findIndex(
        (q: Question) => q.id == targetId
    );
    const q: Question = questions[index];
    const copy = duplicateQuestion(newId, q);
    //const copy: Question = { ...q, id: newId, options: [...q.options] };
    const firstHalf = questions.slice(0, index + 1);
    const secondHalf = questions.slice(index + 1, questions.length);
    return [...firstHalf, copy, ...secondHalf];
}
