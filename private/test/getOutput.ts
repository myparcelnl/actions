import {storage} from './storage';

export const getOutput = (name: string): string | undefined => {
  return storage.outputs.get(name);
};
