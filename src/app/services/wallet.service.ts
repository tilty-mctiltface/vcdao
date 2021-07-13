import { Injectable } from '@angular/core';
import Web3 from "web3";
import { vcs } from './abis/VCSToken'

declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  web3: any
  vcsToken: any

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
    // Load VCSToken
      const VCSToken = new window.web3.eth.Contract(vcs, '0xE8D63599bE079022ac4d5CdE3A48aED0F5AD491E')
      this.vcsToken = VCSToken 
      let vcsTokenBalance = await this.vcsToken.methods.balanceOf('0xE8D63599bE079022ac4d5CdE3A48aED0F5AD491E').call()
      this.vcsToken({ vcsTokenBalance: vcsTokenBalance.toString() })
      console.log( this.vcsToken.vcsTokenBalance )
    
    
  }

  detectEthereumNetwork() {
    window.web3.eth.net.getNetworkType().then((netID: any) => {
      console.log(netID)
    })
  }

  constructor() { }
}
