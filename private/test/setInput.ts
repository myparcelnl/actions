import {storage} from './storage';

export const setInput = (name: string, value: string): void => {
  storage.inputs.set(name, value);
};
