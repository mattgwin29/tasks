/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return [];
    } else if (numbers.length == 1) {
        return [...numbers, numbers[0]];
    }
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((multval: number): number => multval * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    //console.log();
    //return numbers.map((strToNum: string): number => (isNaN(Number(strToNum) ? 0) : Number(strToNum)));
    return numbers.map((strToNum: string): number =>
        isNaN(parseInt(strToNum)) ? 0 : parseInt(strToNum)
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((strToNum: string): number =>
        isNaN(parseInt(strToNum.replace("$", "")))
            ? 0
            : parseInt(strToNum.replace("$", ""))
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .map((data: string): string =>
            data.endsWith("!") ? data.toUpperCase() : data
        )
        .filter((data: string): boolean => !data.endsWith("?"));
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const sum: number = words.filter(
        (data: string): boolean => data.length < 4
    ).length;
    return sum;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0) return true;
    const allowed: string[] = ["red", "blue", "green"];
    const mod: string[] = colors.filter(
        (color: string): boolean => !allowed.includes(color)
    );
    return mod.length == 0;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) return "0=0";
    const sum = addends.reduce(
        (total: number, current: number) => total + current,
        0
    );

    const test3: string = sum + "=" + addends.join("+");

    return test3;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const newValues = [...values];

    const sum = values.reduce(
        (total: number, current: number) => total + current,
        0
    );
    //get first index of num < 0
    const first: number = values.findIndex(
        (negative: number): boolean => negative < 0
    );
    //console.log(values);
    //console.log(first);
    //console.log(sum);
    if (first == -1) {
        newValues.splice(values.length, 0, sum);
        //console.log(newValues);
    } else {
        //console.log("---------------------------------");
        const spliceNum: number = values
            .slice(0, first)
            .reduce((total: number, current: number) => total + current, 0);
        //console.log(spliceNum);
        newValues.splice(first + 1, 0, spliceNum);
    }
    return newValues;
}
