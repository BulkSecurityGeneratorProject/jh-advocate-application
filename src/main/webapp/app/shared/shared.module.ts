import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AdvocateSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [AdvocateSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [AdvocateSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdvocateSharedModule {
  static forRoot() {
    return {
      ngModule: AdvocateSharedModule
    };
  }
}
