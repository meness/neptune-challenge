import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export const injected = new InjectedConnector({
  supportedChainIds: [1, 97],
});

const fetcher =
  (library: Web3Provider | undefined) =>
  (...args: any[]) => {
    const [method, ...params] = args;
    return library && library[method](...params);
  };

const useWallet = () => {
  const { active, account, activate, deactivate, chainId, library, error } = useWeb3React<Web3Provider>();
  const { data } = useSWR(['getBalance', account, 'latest'], { fetcher: fetcher(library) });
  const [isConnecting, setIsConnecting] = useState(false);
  const [balance, setBalance] = useState(-1);

  useEffect(() => {
    setBalance(data);
  }, [data]);

  useEffect(() => {
    setIsConnecting(!active);
  }, [active]);

  async function connect() {
    try {
      setIsConnecting(true);
      await activate(injected);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  return { connect, disconnect, isConnected: active, account, chainId, balance, isConnecting };
};

export default useWallet;
