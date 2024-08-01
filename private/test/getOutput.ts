import {storage} from './outputs';

export const getOutput = (name: string): string | undefined => {
  return storage.outputs.get(name);
};
