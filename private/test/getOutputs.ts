import {storage} from './storage';

export const getOutputs = (): Map<string, string> => {
  return storage.outputs;
};
