import { GitHub } from '@mui/icons-material';
import { AppBar, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { memo } from 'react';

const GeneralHeader = () => {
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          <span role="img" aria-label="Logo">
            ⚡
          </span>{' '}
          Challenges
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" spacing={2}>
          <IconButton
            size="large"
            edge="end"
            onClick={() => {
              window.open('https://github.com/meness/neptune-challenge', '_blank');
            }}
            color="inherit">
            <GitHub />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default memo(GeneralHeader);
