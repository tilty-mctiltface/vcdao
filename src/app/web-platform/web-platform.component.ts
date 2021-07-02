import {Component, OnInit} from '@angular/core';
import Web3 from "web3";
import {WalletService} from "../services/wallet.service";

declare let window: any;

@Component({
  selector: 'app-web-platform',
  templateUrl: './web-platform.component.html',
  styleUrls: ['./web-platform.component.scss']
})
export class WebPlatformComponent implements OnInit {
  account: string = ''

  constructor(private walletService: WalletService) { }

  connect() {
    this.walletService.walletConnect().then(() => {
      window.web3.eth.getAccounts().then((r: any) => {
        this.account = r
        this.walletService.detectEthereumNetwork()
      })
    })
  }

  ngOnInit(): void {
    window.ethereum.on('networkChanged', function(networkId: any){
      console.log('networkChanged',networkId);
    });
  }

}
