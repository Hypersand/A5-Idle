import { styled } from "styled-components";
import OptionBox from "./OptionBox";

function OptionBoxContainer() {
  const dummyData = [
    {
      name: "2열 통풍 시트",
      description1:
        "2열 통풍 시트 의자와 함께라면 운전자뿐만 아니라, 2열에 앉은 탑승자도 시원한 이동 경험을 즐길 수 있습니다.",
      description2:
        "시동이 걸린 상태에서 해당 좌석의 통풍 스위치를 누르면 표시등이 켜지면서 해당 좌석에 바람이 나오는 편의장치입니다.",
      note: "* 홈페이지의 사진과 설명은 참고용이며 실제 차량에 탑재되는 기능과 설명은 상이할 수 있으니, 차량 구입 전 카마스터를 통해 확인 바랍니다.",
    },
    {
      name: "3열 통풍 시트",
      description1:
        "3열 통풍 시트 의자와 함께라면 운전자뿐만 아니라, 2열에 앉은 탑승자도 시원한 이동 경험을 즐길 수 있습니다.",
      description2:
        "시동이 걸린 상태에서 해당 좌석의 통풍 스위치를 누르면 표시등이 켜지면서 해당 좌석에 바람이 나오는 편의장치입니다.",
      note: "* 홈페이지의 사진과 설명은 참고용이며 실제 차량에 탑재되는 기능과 설명은 상이할 수 있으니, 차량 구입 전 카마스터를 통해 확인 바랍니다.",
    },
    {
      name: "4열 통풍 시트",
      description1:
        "4열 통풍 시트 의자와 함께라면 운전자뿐만 아니라, 2열에 앉은 탑승자도 시원한 이동 경험을 즐길 수 있습니다.",
      description2:
        "시동이 걸린 상태에서 해당 좌석의 통풍 스위치를 누르면 표시등이 켜지면서 해당 좌석에 바람이 나오는 편의장치입니다.",
      note: "* 홈페이지의 사진과 설명은 참고용이며 실제 차량에 탑재되는 기능과 설명은 상이할 수 있으니, 차량 구입 전 카마스터를 통해 확인 바랍니다.",
    },
    {
      name: "5열 통풍 시트",
      description1:
        "5열 통풍 시트 의자와 함께라면 운전자뿐만 아니라, 2열에 앉은 탑승자도 시원한 이동 경험을 즐길 수 있습니다.",
      description2:
        "시동이 걸린 상태에서 해당 좌석의 통풍 스위치를 누르면 표시등이 켜지면서 해당 좌석에 바람이 나오는 편의장치입니다.",
      note: "* 홈페이지의 사진과 설명은 참고용이며 실제 차량에 탑재되는 기능과 설명은 상이할 수 있으니, 차량 구입 전 카마스터를 통해 확인 바랍니다.",
    },
    {
      name: "6열 통풍 시트",
      description1:
        "6열 통풍 시트 의자와 함께라면 운전자뿐만 아니라, 2열에 앉은 탑승자도 시원한 이동 경험을 즐길 수 있습니다.",
      description2:
        "시동이 걸린 상태에서 해당 좌석의 통풍 스위치를 누르면 표시등이 켜지면서 해당 좌석에 바람이 나오는 편의장치입니다.",
      note: "* 홈페이지의 사진과 설명은 참고용이며 실제 차량에 탑재되는 기능과 설명은 상이할 수 있으니, 차량 구입 전 카마스터를 통해 확인 바랍니다.",
    },
    {
      name: "7열 통풍 시트",
      description1:
        "7열 통풍 시트 의자와 함께라면 운전자뿐만 아니라, 2열에 앉은 탑승자도 시원한 이동 경험을 즐길 수 있습니다.",
      description2:
        "시동이 걸린 상태에서 해당 좌석의 통풍 스위치를 누르면 표시등이 켜지면서 해당 좌석에 바람이 나오는 편의장치입니다.",
      note: "* 홈페이지의 사진과 설명은 참고용이며 실제 차량에 탑재되는 기능과 설명은 상이할 수 있으니, 차량 구입 전 카마스터를 통해 확인 바랍니다.",
    },
    {
      name: "8열 통풍 시트",
      description1:
        "8열 통풍 시트 의자와 함께라면 운전자뿐만 아니라, 2열에 앉은 탑승자도 시원한 이동 경험을 즐길 수 있습니다.",
      description2:
        "시동이 걸린 상태에서 해당 좌석의 통풍 스위치를 누르면 표시등이 켜지면서 해당 좌석에 바람이 나오는 편의장치입니다.",
      note: "* 홈페이지의 사진과 설명은 참고용이며 실제 차량에 탑재되는 기능과 설명은 상이할 수 있으니, 차량 구입 전 카마스터를 통해 확인 바랍니다.",
    },
    {
      name: "9열 통풍 시트",
      description1:
        "9열 통풍 시트 의자와 함께라면 운전자뿐만 아니라, 2열에 앉은 탑승자도 시원한 이동 경험을 즐길 수 있습니다.",
      description2:
        "시동이 걸린 상태에서 해당 좌석의 통풍 스위치를 누르면 표시등이 켜지면서 해당 좌석에 바람이 나오는 편의장치입니다.",
      note: "* 홈페이지의 사진과 설명은 참고용이며 실제 차량에 탑재되는 기능과 설명은 상이할 수 있으니, 차량 구입 전 카마스터를 통해 확인 바랍니다.",
    },
    {
      name: "10열 통풍 시트",
      description1:
        "10열 통풍 시트 의자와 함께라면 운전자뿐만 아니라, 2열에 앉은 탑승자도 시원한 이동 경험을 즐길 수 있습니다.",
      description2:
        "시동이 걸린 상태에서 해당 좌석의 통풍 스위치를 누르면 표시등이 켜지면서 해당 좌석에 바람이 나오는 편의장치입니다.",
      note: "* 홈페이지의 사진과 설명은 참고용이며 실제 차량에 탑재되는 기능과 설명은 상이할 수 있으니, 차량 구입 전 카마스터를 통해 확인 바랍니다.",
    },
  ];

  function renderBox() {
    return dummyData.map((item, index) => {
      return <OptionBox data={item} key={index}></OptionBox>;
    });
  }
  return <OptionContainer>{renderBox()}</OptionContainer>;
}

export default OptionBoxContainer;

const OptionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px 11.13px;
  flex-wrap: wrap;
  width: 1035px;
  height: 210px;
`;
