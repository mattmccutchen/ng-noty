<p align="center">
  <a href="#">
    <img src="ng-noty-logo.png">
  </a>
</p>

# ng-noty

> **`ng-noty`** is a service for displaying notifications.

## Prerequisites
**`ng-noty`** is based on [Noty](http://ned.im/noty/) 3.1.x

## Usage

```typescript
import {Component} from '@angular/core';
import {UINoty} from 'ng-noty';

@Component({
  selector: 'ng-noty-component-example',
  template: `
    <button (click)="openNgNoty()" aria-label="Show an example ng-noty">
      Show ng-noty
    </button>
  `,
})
export class NgNotyComponentExample {
  constructor(public ngNoty: UINoty) {}

  openNgNoty() {
    this.ngNoty.open({
        text: 'Some notification text'
    });
  }
}
```
