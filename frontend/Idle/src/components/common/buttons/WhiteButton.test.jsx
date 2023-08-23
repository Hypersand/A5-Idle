import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import WhiteButton from "./WhiteButton";

describe("WhiteButton test", () => {
  it("text를 입력받으면 해당 텍스트 렌더링", () => {
    const { getByText } = render(<WhiteButton text={"버튼"} />);
    expect(getByText("버튼")).toBeInTheDocument;
  });

  it("click이벤트 발생 시 onClick 호출", () => {
    const onClick = vi.fn();
    const { getByText } = render(<WhiteButton text={"버튼"} onClick={onClick} />);
    fireEvent.click(getByText("버튼"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("mouseEnter 발생 시 onMouseEnter 호출", () => {
    const onMouseEnter = vi.fn();
    const { getByText } = render(<WhiteButton text={"버튼"} onMouseEnter={onMouseEnter} />);
    fireEvent.mouseEnter(getByText("버튼"));
    expect(onMouseEnter).toHaveBeenCalledTimes(1);
  });
});
