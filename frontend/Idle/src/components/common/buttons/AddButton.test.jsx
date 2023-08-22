import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AddButton from "./AddButton";

describe("AddBtn컴포넌트", () => {
  it("state가 추가하기일경우 버튼에 추가하기로 렌더링", () => {
    const { getByText } = render(<AddButton state={"add"} />);
    expect(getByText("추가하기")).toBeInTheDocument;
  });

  it("state가 취소하기일경우 버튼에 취소하기로 렌더링", () => {
    const { getByText } = render(<AddButton state={"cancel"} />);
    expect(getByText("추가하기")).toBeInTheDocument;
  });

  it("click이벤트가 발생했을 때 onClick 함수 호출", () => {
    const { getByText } = render(<AddButton state="ADD" onClick={onClick} />);
  });
});
