import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [SignInComponent],
})
export class AuthModule {}
