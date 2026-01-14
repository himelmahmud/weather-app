import { useEffect, useState } from "react";
const useLocalStorage = (storageKey, defaultvalue) => {
    const [value, setValue] = useState(
        JSON.parse(localStorage.getItem(storageKey)) ?? defaultvalue
    );

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
};
export default useLocalStorage;
