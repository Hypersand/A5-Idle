import styled from "styled-components";
import TrimBox from "./TrimBox";
import OptionBoxContainer from "./OptionBoxContainer";
function FindTrimContentMain({ car }) {
  const dummy = [
    {
      name: "Exclusive",
      content: "실용적이고 기본적인 기능을 갖춘 베이직 트림",
      price: 40440000,
      isActive: false,
    },
    {
      name: "Le blanc",
      content: "르블랑 트림",
      price: 44440000,
      isActive: false,
    },
    {
      name: "Prestige",
      content: "프레스티지 트림",
      price: 50000000,
      isActive: false,
    },
    {
      name: "Caligraphy",
      content: "캘리그라피 트림",
      price: 54000000,
      isActive: true,
    },
  ];

  function renderTrimBox() {
    return (
      <div style={{ display: "flex" }}>
        {dummy.map((item, index) => {
          return (
            <TrimBox
              key={index}
              name={item.name}
              content={item.content}
              price={item.price}
              isActive={item.isActive}
            />
          );
        })}
      </div>
    );
  }
  return (
    <StFindTrimContentMain>
      {renderTrimBox()}
      <OptionBoxContainer />
    </StFindTrimContentMain>
  );
}

export default FindTrimContentMain;

const StFindTrimContentMain = styled.div`
  width: 1024px;
  height: 384px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
