import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

export const URL = 'assets/icons';
export const NAMESPACE = 'ds';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {}

  public icons: Set<string> = new Set([
    'toggle',
    'history',
    'project',
    'log-out',
    'settings',
    'back'
  ]);

  public registerIcons(): void {
    this.icons.forEach((key) => {
      this.matIconRegistry.addSvgIcon(
        key,
        this.sanitizer.bypassSecurityTrustResourceUrl(`${URL}/${key}.svg`)
      );
    });
  }
}
