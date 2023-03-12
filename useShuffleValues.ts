import { useState } from "react";

type ValueType<K> = Array<K>;

// TODO: Enforce min 2 items

export const useShuffleValues = <K,>(values: ValueType<K>) => {
    const getRandomValue = (arr?: ValueType<K>) => {
        if (arr) {
            return arr[Math.floor(Math.random() * values.length)];
        }
        return values[Math.floor(Math.random() * values.length)];
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
