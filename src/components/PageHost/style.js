import styled from 'styled-components/macro';

const Root = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 375px;
  height: 700px;
`;

const NavigationBar = styled.nav`
  display: ${({ title }) => (title ? 'flex' : 'none')}};
  align-itmes: center;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 22px 24px;
  font-size: 16px;
`;

const NavigationTitle = styled.span`
  margin-left: 17px;
`;

const BackButton = styled.img``;

export { Root, NavigationBar, NavigationTitle, BackButton };
