import React, {useEffect, useRef} from "react";
import {useCounterStore} from "./store";
import {useShallow} from "zustand/react/shallow";
import MyForm from "./MyForm";
import {useTranslation} from "react-i18next";
import MyBar from "./MyBar";

export default function App() {
    const {incrementAsync} = useCounterStore(useShallow(state => ({
        incrementAsync: state.incrementAsync
    })));

    const countRef = useRef(useCounterStore.getState().count)

    const {t} = useTranslation();

    useCounterStore.subscribe(console.log);

    useEffect(() => {
        useCounterStore.subscribe(state => countRef.current = state.count);
    }, [])

    return (
        <div>
            <h1>{t('title', {name: "Ion"})}</h1>
            <p>{t('description.part1')}</p>
            <p>{t('description.part2')}</p>
            <div>My count: {countRef.current}</div>

            <button onClick={incrementAsync}>Increment</button>

            <MyForm/>

            <div>
                <MyBar/>
            </div>
        </div>
    );
}
