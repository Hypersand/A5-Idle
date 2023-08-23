import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LocationButton from "./LocationButton";

describe("LocationButton test", () => {
  it("지역 이름 전달시 해당 지역 텍스트 렌더링", () => {
    const { getByText } = render(<LocationButton location={"서울특별시"} />);
    expect(getByText("서울특별시")).toBeInTheDocument;
  });
});
