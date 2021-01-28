import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CdkPortal } from '@angular/cdk/portal';
import { PortalService } from '../portal.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, OnDestroy {

  constructor(
    private portalService: PortalService) { }

    @ViewChild(CdkPortal, { static: true }) public portal!: CdkPortal;

  public ngOnInit(): void {
    this.portalService.set(this.portal);
  }

  public ngOnDestroy(): void {
    this.portal.detach();
  }

}
