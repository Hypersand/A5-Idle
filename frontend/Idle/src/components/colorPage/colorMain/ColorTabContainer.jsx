import { styled } from "styled-components";
import CategoryTabs from "../../common/tabs/CategoryTabs";
import { TRANSLATE } from "../../../constant/constants";
import { useNavigate } from "react-router-dom";

function ColorTabContainer({ tabs, currentTab }) {
    const navigate = useNavigate();

    return (
        <StTabContainer>
            {tabs.map((item, idx) => (
                <CategoryTabs
                    key={idx}
                    text={TRANSLATE[item]}
                    isClicked={item === currentTab}
                    onClick={() => {
                        navigate(`/color/${item}`);
                    }}
                />
            ))}
        </StTabContainer>
    )
}

export default ColorTabContainer

const StTabContainer = styled.div`
  position: absolute;
  top: 68px;
  left: 128px;
  display: inline-flex;
  align-items: flex-start;
  gap: 24px;
`;