import { styled } from "styled-components"

const Title = styled.div`
  display: flex;
  width: 200px;
  height: 164px;
  padding: 12px 24px;
  background-color: ${({theme}) => theme.NavyBlue_5};;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`
export default Title