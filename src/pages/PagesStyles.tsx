import styled from 'styled-components';
export const PageWrapper = styled.div`
  height: 100%;
  max-width: 100%;
  margin: 0 auto;
  background-color: #eaeaea;
`;
export const MainWrapper = styled.div`
  height: 100%;
  max-width: 1110px;
  margin: 0 auto;
  background-color: #eaeaea;
`;
export const ContentWrapper = styled.div`
  height: 100%;
  min-height: 30vh;
  display: flex;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;
export const MainContentWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  max-width: 1110px;
  gap: 15px;
  margin: 5px auto;
  align-items: center;
`;
