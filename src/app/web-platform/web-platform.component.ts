import {Component, OnInit} from '@angular/core';
import Web3 from "web3";

declare let window: any;

@Component({
  selector: 'app-web-platform',
  templateUrl: './web-platform.component.html',
  styleUrls: ['./web-platform.component.scss']
})
export class WebPlatformComponent implements OnInit {
  account = 'Connect metamask'
  web3: any

  constructor() { }

  ngOnInit(): void {
    this.walletConnect().then(() => {
      window.web3.eth.getAccounts().then((r: any) => {
        this.account = r
      })
    })
  }

  async walletConnect() {
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts')
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
    } else if (window.web3) {
      console.log('In 2')
      await window.ethereum.send('eth_requestAccounts')
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert('Non-Ethereum browser detected. You Should consider using MetaMask!');
    }
  }
}
