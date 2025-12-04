import {create} from "zustand";

type CounterStore = {
    count: number;
    increment: () => void;
    incrementAsync: () => Promise<void>;
};

export const useCounterStore = create<CounterStore>((setState) => ({
    count: 0,
    increment: () => setState((state) => ({ count: state.count + 1})),
    incrementAsync: async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));

        setState((state) => ({ count: state.count + 1}))
    }
}));