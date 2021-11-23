import { ChangeEvent, useCallback, useEffect, useState } from 'react';

const useConverter = () => {
  const [spend, setSpend] = useState(0.0);
  const [receive, setReceive] = useState(0.0);
  const [pair, setPair] = useState('nep/busd');
  const [dummyFactor, setDummyFactor] = useState(1);

  useEffect(() => {
    if (pair === 'nep/busd') return setDummyFactor(3);
    setDummyFactor(1);
  }, [pair]);

  useEffect(() => {
    // Reset inputs when dummy factor changes
    setSpend(0.0);
    setReceive(0.0);
  }, [dummyFactor]);

  useEffect(() => {
    setReceive(spend * dummyFactor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spend]);

  useEffect(() => {
    setSpend(receive / dummyFactor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [receive]);

  const setSpendValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSpend(parseFloat(e.target.value));
  }, []);

  const setReceiveValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setReceive(parseFloat(e.target.value));
  }, []);

  return { spend, setSpendValue, receive, setReceiveValue, pair, setPair };
};

export default useConverter;
