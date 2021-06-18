import styled from "vue-styled-components";

export const Ch2 = styled.h2`
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 250px;
  max-width: 50%;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
