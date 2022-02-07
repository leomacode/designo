import { renderHook } from "@testing-library/react-hooks";
import { useDynamicImg } from "..";
import { bgDesktop, bgMobile } from "../../assets";

test("should display the desktop img image when the width is wider than 60rem", () => {
  window.innerWidth = 1000; // > 60rem
  const { result } = renderHook(() =>
    useDynamicImg(bgMobile, bgMobile, bgDesktop)
  );
  expect(result.current).toBe(`bg-pattern-hero-about-desktop.svg`);
});

test("should display the mobile img image when the width is wider than 40rem", () => {
  window.innerWidth = 100; // < 40rem
  const { result } = renderHook(() =>
    useDynamicImg(bgMobile, bgMobile, bgDesktop)
  );
  expect(result.current).toBe(`bg-pattern-hero-about-mobile.svg`);
});
