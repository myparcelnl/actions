import {setInput} from './setInput';

export const setInputs = <Inputs extends Record<string, string | undefined> = Record<string, string | undefined>>(
  inputs: Inputs,
): void => {
  Object.entries(inputs).forEach(([name, value]) => {
    if (value === undefined) {
      return;
    }

    setInput(name, value);
  });
};
