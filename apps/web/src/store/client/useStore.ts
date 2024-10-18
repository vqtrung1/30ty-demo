import { create } from "zustand";
import createCounterSlice, { CounterSlice } from "./createCounterSlice";

// export type MyState = CounterSlice & FishSlice;
export type MyState = CounterSlice;

const useStore = create<MyState>((set: any, get: any) => ({
  ...createCounterSlice(set, get),
}));

export default useStore;
