import { useConverter } from '@hooks';
import { Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { CenterWrapper } from '@wrappers';
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
        <title>Converter</title>
      </Head>
      <CenterWrapper>
        <Card>
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
              <Grid item xs={12} sm={6}>
                <TextField
                  type="number"
                  label="Spend"
                  variant="outlined"
                  placeholder="0"
                  name="spend"
                  fullWidth
                  value={spend}
                  onChange={(e) => setSpendValue(parseFloat(e.target.value))}
                  inputProps={{
                    min: 0,
                    inputMode: 'numeric',
                    pattern: '[0-9.]*',
                    step: '0.01',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="number"
                  label="Receive"
                  placeholder="0"
                  variant="outlined"
                  name="receive"
                  fullWidth
                  value={receive}
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
      </CenterWrapper>
    </>
  );
};

export default Converter;
