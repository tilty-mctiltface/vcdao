import { Injectable } from '@angular/core';
import Web3 from "web3";

declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  web3: any

  async walletConnect() {
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts')
      window.web3 = new Web3(window.ethereum);
    } else if (window.web3) {
      await window.ethereum.send('eth_requestAccounts')
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert('Non-Ethereum browser detected. You Should consider using MetaMask!');
    }
  }

  detectEthereumNetwork() {
    window.web3.eth.net.getNetworkType().then((netID: any) => {
      console.log(netID)
    })
  }

  constructor() { }
}
