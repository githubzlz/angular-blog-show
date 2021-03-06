import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    NzMenuModule,
    NzInputModule,
    NzIconModule,
    NzAvatarModule,
    NzBadgeModule,
    NzBackTopModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
