import {useEffect,useState} from "react";

const useSemiPersistenceState=() => {
    const [semipersistenceValue,setSemiPersistenceValue]=useState(
        localStorage.getItem("semipersistenceValue") || " "
    );

    useEffect(() => {
        localStorage.setItem("semipersistenceValue",semipersistenceValue);
    },[semipersistenceValue]);

    return([semipersistenceValue,setSemiPersistenceValue]);
}

export default useSemiPersistenceState;