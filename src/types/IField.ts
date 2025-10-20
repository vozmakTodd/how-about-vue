export interface IField {
  value: unknown;
  error?: string;
  rules?: ((value: unknown) => string | true)[];
}
