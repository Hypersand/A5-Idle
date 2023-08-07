import styled from "styled-components";
import TrimBox from "./TrimBox";
function FindTrimContentMain({ car }) {
  const dummyData = [
    { name: "Exclusive", content: "실용적이고 기본적인 기능을 갖춘 베이직 트림", price: 40440000 },
    { name: "Leblanc", content: "실용적이고 기본적인 기능을 갖춘 베이직 트림", price: 50440000 },
    { name: "Prestige", content: "실용적이고 기본적인 기능을 갖춘 베이직 트림", price: 60440000 },
    { name: "Caligraphy", content: "실용적이고 기본적인 기능을 갖춘 베이직 트림", price: 70440000 },
  ];
  return (
    <StFindTrimContentMain>
      <StTrimBoxContainer>
        {dummyData.map((item) => (
          <TrimBox
            key={item.name}
            name={item.name}
            content={item.content}
            price={item.price}
            car={car}
          />
        ))}
      </StTrimBoxContainer>
    </StFindTrimContentMain>
  );
}

export default FindTrimContentMain;

const StFindTrimContentMain = styled.div`
  width: 1024px;
  height: 384px;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const StTrimBoxContainer = styled.div`
  display: flex;
  gap: 8px;
`;
