import {storage} from './outputs';

export const getOutputs = (): Map<string, string> => {
  return storage.outputs;
};
