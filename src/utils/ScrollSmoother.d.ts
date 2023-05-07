declare module "../utils/ScrollSmoother" {
  export const ScrollSmoother: {
    create(options: {
      wrapper: string;
      content: string;
      normalizeScroll: boolean;
    }): void;
  };
}
