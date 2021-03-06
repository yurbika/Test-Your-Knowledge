import styled from "styled-components";
import theme from "../../utils/theme";

export const MenuContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.grey};
  z-index: 1;
  border-radius: 15px;
  padding: 20px 0;
  transition: all 0.5s ease-in;

  h4 {
    margin-bottom: 10px;
  }

  ul {
    display: inline-block;
    list-style: none;
    text-align: center;

    li {
      cursor: pointer;
      width: 100%;
      padding: 10px 15px;
      border: 1px solid transparent;

      &:hover {
        border: 1px solid ${theme.colors.blue};
        border-radius: 25px;
      }
    }
  }
`;
