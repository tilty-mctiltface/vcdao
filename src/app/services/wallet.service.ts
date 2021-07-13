import {Injectable} from '@angular/core';
import Web3 from "web3";
import {vcsAbi, vcsAddress} from './abis/VCSToken'

declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  web3: any
  vcsTokenContract: any
  contractBalance: number = 0


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

  async connectToContract() {
    this.vcsTokenContract = new window.web3.eth.Contract(vcsAbi, vcsAddress)
    let vcsTokenBalance = await this.vcsTokenContract.methods.balanceOf('0x4f03319991c2624E3afe160d72d288ddC6cF84eF').call()
    this.contractBalance = vcsTokenBalance
    console.log(vcsTokenBalance)
  }

  detectEthereumNetwork() {
    window.web3.eth.net.getNetworkType().then((netID: any) => {
      console.log(netID)
    })
  }

  constructor() { }
}
