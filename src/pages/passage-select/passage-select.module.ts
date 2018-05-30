import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassageSelectPage } from './passage-select';

@NgModule({
  declarations: [
    PassageSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(PassageSelectPage),
  ],
})
export class PassageSelectPageModule {}
