import BillOptionBox from "./BillOptionBox";
import hyundai from "../../assets/images/hyundai.svg";
import { styled } from "styled-components";
import palette from "../../styles/palette";
import { useNavigate } from "react-router-dom";

// const additional = [
//   {
//     functionId: 1234,
//     functionOptionName: "주차보조시스템II",
//     functionCategory: "안전",
//     functionImgUrl: hyundai,
//     functionDescription:
//       "안전한 차량 경험을 위한 여섯 가지 기능 모음 '컴포트 2'를 통해 편리한 드라이빙을 즐겨보세요",
//     functionPrice: 100000000,
//   },
//   {
//     functionId: 5678,
//     functionCategory: "내장",
//     functionOptionName: "현대 스마트 센스",
//     functionImgUrl: hyundai,
//     functionDescription:
//       "안전한 차량 경험을 위한 여섯 가지 기능 모음 '컴포트 2'를 통해 편리한 드라이빙을 즐겨보세요",
//     functionPrice: 100000000,
//   },
//   {
//     functionId: 9123,
//     functionCategory: "외장",
//     functionOptionName: "컴포트 Ⅱ",
//     functionImgUrl: hyundai,
//     functionDescription:
//       "안전한 차량 경험을 위한 여섯 가지 기능 모음 '컴포트 2'를 통해 편리한 드라이빙을 즐겨보세요",
//     functionPrice: 100000000,
//   },
// ];

// const confusing = [
//   {
//     functionId: 1234,
//     functionOptionName: "[N퍼포먼스파츠] 20인치 다크 스퍼터링 휠",
//     functionCategory: "안전",
//     functionImgUrl: hyundai,
//     functionDescription:
//       "안전한 차량 경험을 위한 여섯 가지 기능 모음 '컴포트 2'를 통해 편리한 드라이빙을 즐겨보세요",
//     functionPrice: 100000000,
//   },
//   {
//     functionId: 5678,
//     functionCategory: "내장",
//     functionOptionName: "[N퍼포먼스파츠] 20인치 다크 스퍼터링 휠",
//     functionImgUrl: hyundai,
//     functionDescription:
//       "안전한 차량 경험을 위한 여섯 가지 기능 모음 '컴포트 2'를 통해 편리한 드라이빙을 즐겨보세요",
//     functionPrice: 100000000,
//   },
//   {
//     functionId: 9123,
//     functionCategory: "외장",
//     functionOptionName: "[N퍼포먼스파츠] 20인치 다크 스퍼터링 휠",
//     functionImgUrl: hyundai,
//     functionDescription:
//       "안전한 차량 경험을 위한 여섯 가지 기능 모음 '컴포트 2'를 통해 편리한 드라이빙을 즐겨보세요",
//     functionPrice: 100000000,
//   },
// ];

function BIllOptionContainer({ added, confused }) {
  const navigate = useNavigate();
  function renderAddOptions() {
    return added.map((item, index) => <BillOptionBox isAdded={true} key={index} data={item} />);
  }
  function renderConfusingOptions() {
    return confused.map((item, index) => <BillOptionBox isAdded={false} key={index} data={item} />);
  }

  function changeOptionBtnClicked() {
    navigate("/option");
  }
  return (
    <StContainer>
      <StTop>
        <StTitle>옵션</StTitle>
        <StSub>기본 포함 옵션 {">"}</StSub>
      </StTop>

      <StMain>
        <StChangeBtn onClick={changeOptionBtnClicked}>변경하기 {">"}</StChangeBtn>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <StOptionType>추가 옵션</StOptionType>
          <StBlock>{renderAddOptions()}</StBlock>

          <StOptionType>고민 옵션</StOptionType>
          <StBlock>{renderConfusingOptions()}</StBlock>
        </div>
      </StMain>
    </StContainer>
  );
}

export default BIllOptionContainer;

const StContainer = styled.div`
  width: 831px;
`;

const StTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StTitle = styled.div`
  color: ${palette.Black};
  font-family: Hyundai Sans Head KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.72px;
`;
const StSub = styled.div`
  color: ${palette.CoolGrey_3};
  font-family: Hyundai Sans Text KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.6px;
  text-align: right;
`;

const StMain = styled.div`
  display: flex;
  gap: 67px;
  margin-top: 16px;
`;

const StChangeBtn = styled.div`
  color: ${palette.CoolGrey_2};
  font-family: Hyundai Sans Text KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.48px;
  text-align: center;
  cursor: pointer;
  width: 87px;
  display: flex;
`;

const StOptionType = styled.p`
  width: 78px;
  height: 33px;
  color: ${palette.Black};
  font-family: Hyundai Sans Text KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.66px;
  margin-bottom: 24px;
`;

const StBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 64px;
`;
