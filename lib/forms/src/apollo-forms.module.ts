import { NgModule } from '@angular/core';
import { FormsInputComponent } from './components/forms-input/forms-input.component';
import { FormsCheckboxComponent } from './components/forms-checkbox/forms-checkbox.component';

@NgModule({
  declarations: [FormsInputComponent, FormsCheckboxComponent],
  imports: [],
  exports: [FormsInputComponent, FormsCheckboxComponent]
})
export class ApolloFormsModule { }
