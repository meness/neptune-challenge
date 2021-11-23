import { Box } from '@mui/material';
import { styled } from '@mui/system';

const CenterWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
}));

export default CenterWrapper;
