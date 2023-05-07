/// <reference types="vite/client" />

declare module "@hooks/useOnScreen" {
  export default function useOnScreen(
    ref: React.RefObject<Element>,
    number?
  ): boolean;
}

declare module "@hooks/useLocoScroll" {
  export default function useLocoScroll(
    boolean,
    ref: React.RefObject<Element>
  ): void;
}