import { GeneralHeader } from '@elements';
import { Container } from '@mui/material';
import { memo } from 'react';

type GeneralLayoutProps = {
  children: JSX.Element;
};

const GeneralLayout = ({ children }: GeneralLayoutProps) => (
  <>
    <GeneralHeader />
    <Container component="main" sx={{ marginBlock: { xs: 2 } }}>
      {children}
    </Container>
  </>
);

export default memo(GeneralLayout);
