import { styled } from "styled-components";
import { TRANSLATE } from "../../../constant/constants";
import CategoryTabs from "../../common/tabs/CategoryTabs";
import { useNavigate } from "react-router-dom";

function DetailModelTabContainer({ tabs, currentTab }) {
    const navigate = useNavigate();
    return (
        <StTabContainer>
            {tabs.map((item, idx) => (
                <CategoryTabs
                    key={idx}
                    text={TRANSLATE[item]}
                    isClicked={item === currentTab}
                    onClick={() => {
                        navigate(`/detail/${item}`);
                    }}
                />
            ))}
        </StTabContainer>
    )
}

export default DetailModelTabContainer

const StTabContainer = styled.div`
  position: absolute;
  top: 68px;
  left: 128px;
  display: inline-flex;
  align-items: flex-start;
  gap: 24px;
`;