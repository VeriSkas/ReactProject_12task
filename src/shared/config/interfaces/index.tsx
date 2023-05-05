export interface IInputsSettings {
  label: string;
  type?: string;
  register: {
    name: string,
    rules: {
      [key: string]:
        | {
            value: string | number | boolean | RegExp,
            message: string,
          }
        | ((val: string) => string | undefined),
    },
  };
}
