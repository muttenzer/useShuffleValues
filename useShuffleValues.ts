import { useState } from "react";

export type GenericArrayWithMinimumTwoItems<T> = [T, T, ...T[]];

export const useShuffleValues = <T,>(
    values: GenericArrayWithMinimumTwoItems<T>
) => {
    const getRandomValue = (arr: GenericArrayWithMinimumTwoItems<T> = values) => {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    const [currentValue, setCurrentValue] = useState(getRandomValue());

    const shuffleValues = () => {
        setCurrentValue((prevValue) => {
            let newValue;
            do {
                newValue = getRandomValue();
            } while (newValue === prevValue);

            return newValue;
        });
    };

    return { currentValue, shuffleValues };
};
