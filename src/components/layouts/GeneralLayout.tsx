import { GeneralHeader } from '@elements';
import { Container } from '@mui/material';
import { memo } from 'react';

type GeneralLayoutProps = {
  children: JSX.Element;
};

const GeneralLayout = ({ children }: GeneralLayoutProps) => (
  <>
    <GeneralHeader />
    <Container component="main">{children}</Container>
  </>
);

export default memo(GeneralLayout);
