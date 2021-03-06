import { useConverter } from '@hooks';
import { AutorenewOutlined } from '@mui/icons-material';
import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import Head from 'next/head';

const dummyPairs = [
  { id: 'nep/busd', spend: 'NEP', receive: 'BUSD' },
  { id: 'btc/usdt', spend: 'BTC', receive: 'USDT' },
];
const selectedDummyPair = 'nep/busd';

type ConverterProps = {};

const Converter = ({}: ConverterProps) => {
  const { spend, receive, pair, setPair, setReceiveValue, setSpendValue } = useConverter();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Grid
        container
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: (theme) => `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
        }}>
        <Grid item xs={12} sm={8} md={7} lg={6}>
          <Card>
            <CardHeader
              title={
                <span>
                  Crypto Converter <Chip label="Super easy" variant="outlined" color="secondary" size="small" />
                </span>
              }
              subheader="Inputs will be updated instantly."
            />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="pair">Pair</InputLabel>
                    <Select labelId="pair" label="Pair" value={pair} onChange={(e) => setPair(e.target.value)}>
                      {dummyPairs.map((dummyPair) => (
                        <MenuItem value={dummyPair.id} selected={dummyPair.id === selectedDummyPair} key={dummyPair.id}>
                          {dummyPair.spend}/{dummyPair.receive}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    type="number"
                    label="Spend"
                    variant="outlined"
                    placeholder="0"
                    name="spend"
                    fullWidth
                    value={parseFloat(spend.toFixed(2))}
                    onChange={(e) => setSpendValue(parseFloat(e.target.value))}
                    inputProps={{
                      min: 0,
                      inputMode: 'numeric',
                      pattern: '[0-9.]*',
                      step: '0.01',
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} sx={{ textAlign: 'center' }}>
                  <AutorenewOutlined />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    type="number"
                    label="Receive"
                    placeholder="0"
                    variant="outlined"
                    name="receive"
                    fullWidth
                    value={parseFloat(receive.toFixed(2))}
                    onChange={(e) => setReceiveValue(parseFloat(e.target.value))}
                    inputProps={{
                      min: 0,
                      inputMode: 'numeric',
                      pattern: '[0-9.]*',
                      step: '0.01',
                    }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Converter;
