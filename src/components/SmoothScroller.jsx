import { ReactLenis, useLenis } from "lenis/react";

function SmoothScroll() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return <ReactLenis root>{/* content */}</ReactLenis>;
}

export default SmoothScroll;