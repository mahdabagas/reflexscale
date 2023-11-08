import React from "react";

const getInitialValue = (key, initialValue) => {
    const val = window.localStorage.getItem(key);
    if (val === null) return initialValue;
    
    const value = val !== 'undefined' && val !== '' ? JSON.parse(val) : 'undefined';

    if (value) return value;
    if (typeof initialValue === 'function') return initialValue();

    return initialValue;
}

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = React.useState(() => {
        return getInitialValue(key, initialValue);
    });

    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}

export default useLocalStorage;




