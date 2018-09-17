import styled from 'styled-components';
import { ErrorTextMain } from 'src/components/ErrorText/styles';
import { MainLoader } from 'src/components/Loader/styles';

export const ErrorTextContainer = styled.div`
  ${ErrorTextMain} {
    margin-left: 27px;
    margin-top: 20px;
  }
`;
export const LoaderContainer = styled.div`
  ${MainLoader} {
    margin-left: 27px;
    margin-top: 20px;
  }
`;
