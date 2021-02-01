import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'ds-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @ViewChild('nav') navigation!: ElementRef;

  constructor(public headerService: HeaderService) {}

  public ngOnInit(): void {}

  public handleSidebarToggle(state: boolean): void {
    this.headerService.toggle(
      state,
      this.navigation &&
        this.navigation.nativeElement &&
        this.navigation.nativeElement.offsetHeight
    );
  }
}
