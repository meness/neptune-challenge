import { formatEther } from '@ethersproject/units';
import { useWallet } from '@hooks';
import { ContentCopy, LoginOutlined, LogoutOutlined } from '@mui/icons-material';
import {
  Button,
  TextField,
  Stack,
  InputAdornment,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useMediaQuery,
} from '@mui/material';
import { Box, useTheme } from '@mui/system';
import { memo, useState } from 'react';

type ConnectWalletProps = {};

const ConnectWallet = ({}: ConnectWalletProps) => {
  const { connect, disconnect, isConnected, account, chainId, balance } = useWallet();
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ alignItems: 'center', display: 'flex' }}>
      <Button
        color={isConnected ? 'success' : 'warning'}
        variant="contained"
        startIcon={isConnected ? <LogoutOutlined /> : <LoginOutlined />}
        size="small"
        onClick={() => (isConnected ? setIsPopupOpened(true) : connect())}>
        {isConnected ? 'Connected' : 'Connect Wallet'}
      </Button>
      <Dialog fullScreen={fullScreen} open={isPopupOpened} onClose={() => setIsPopupOpened(false)}>
        <DialogTitle>Your Wallet</DialogTitle>
        <DialogContent>
          <Box sx={{ marginBlockStart: 2 }}>
            <Stack spacing={2}>
              <TextField
                label="Account"
                variant="filled"
                defaultValue={account}
                fullWidth
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Copy your account address"
                        onClick={() => account && navigator.clipboard.writeText(account)}
                        edge="end">
                        <ContentCopy />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Chain ID"
                variant="filled"
                defaultValue={chainId}
                fullWidth
                inputProps={{ readOnly: true }}
              />
              <TextField
                label="Balance"
                variant="filled"
                defaultValue={balance && parseFloat(formatEther(balance)).toPrecision(4)}
                fullWidth
                inputProps={{ readOnly: true }}
              />
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            color="inherit"
            onClick={() => {
              setIsPopupOpened(false);
            }}>
            Never Mind
          </Button>
          <Button
            color="error"
            onClick={() => {
              disconnect();
              setIsPopupOpened(false);
            }}>
            Disconnect
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default memo(ConnectWallet);
