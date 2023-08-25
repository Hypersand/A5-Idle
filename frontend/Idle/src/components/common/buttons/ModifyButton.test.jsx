import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ModifyButton from "./ModifyButton";

describe("ModifyButton 테스트", () => {
  it("onCick 이벤트 발생시 onClick 함수 호출", () => {
    const onClick = vi.fn();
    const { getByText } = render(<ModifyButton onClick={onClick} />);
    fireEvent.click(getByText("변경하기"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
