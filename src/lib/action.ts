export type Action<
  T = Record<string, unknown>,
  R extends Record<string, unknown> = Record<string, unknown>
> = (options?: RecursivePartial<T>) => void | R | Promise<R>;

export type ActionHook = {
  type: string;
  action: Action;
};
