import styled from 'styled-components';
import { SearchContainer } from 'src/components/Search/styles';

export const TabsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  ${SearchContainer} {
    padding-bottom: 20px;
  }
`;
export const PanelSettings = styled.div`
  color: rgba(255,255,255,.4);
  cursor: pointer;
  margin-left: 20px;
  position: relative;
  z-index: 2;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    color: rgba(255,255,255,.6);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;
export const TabsContent = styled.div`
  margin-left: -57px;
  margin-right: -107px;
`;
