import { fireEvent, getByText, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ConfusingButton from "./ConfusingButton";

describe("ConfusingButton 테스트", () => {
  it("state가 confuse일 때 취소하기 텍스트 렌더링", () => {
    const { getByText } = render(<ConfusingButton state={"confuse"} />);
    expect(getByText("취소하기")).toBeInTheDocument;
  });

  it("state가 confuse가 아닐 때 고민해보기 텍스트 렌더링", () => {
    const { getByText } = render(<ConfusingButton state={"confirm"} />);
    expect(getByText("고민해보기")).toBeInTheDocument;
  });

  it("click 이벤트 발생 시 onClick 호출", () => {
    const onClick = vi.fn();
    const { getByText } = render(<ConfusingButton state={"confuse"} onClick={onClick} />);
    fireEvent.click(getByText("취소하기"));
    expect(onClick).toBeCalledTimes(1);
  });
});
