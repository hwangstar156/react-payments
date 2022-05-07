import styled from "styled-components";

export const RowFlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ gap }) => `${gap}px`};
`;

export const ColumnFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ gap }) => `${gap}px`};
`;
