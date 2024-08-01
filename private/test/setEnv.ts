interface SetEnv {
  (key: string, value: string): void;

  (env: Record<string, string>, value?: never): void;
}

export const setEnv: SetEnv = (arg1, arg2): void => {
  if (typeof arg1 === 'string') {
    process.env[arg1] = arg2;
  } else {
    for (const [key, value] of Object.entries(arg1)) {
      process.env[key] = value;
    }
  }
};
