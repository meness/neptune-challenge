import { useConverter } from '@hooks';
import { Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
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
            <Box sx={{ marginBlockEnd: 2 }}>
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
            </Box>
            <Box>
              <TextField
                type="number"
                label="Spend"
                variant="outlined"
                placeholder="0"
                name="spend"
                value={spend}
                onChange={setSpendValue}
                inputProps={{
                  min: 0,
                  inputMode: 'numeric',
                  pattern: '[0-9.]*',
                  step: '0.1',
                }}
              />
              <TextField
                type="number"
                label="Receive"
                placeholder="0"
                variant="outlined"
                name="receive"
                value={receive}
                onChange={setReceiveValue}
                inputProps={{
                  min: 0,
                  inputMode: 'numeric',
                  pattern: '[0-9.]*',
                  step: '0.1',
                }}
                sx={{ marginInlineStart: 1 }}
              />
            </Box>
          </CardContent>
        </Card>
      </CenterWrapper>
    </>
  );
};

export default Converter;
