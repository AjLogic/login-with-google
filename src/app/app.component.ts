import { Component , OnInit} from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { AuthServiceConfig, GoogleLoginProvider, AuthService, SocialUser } from 'angularx-social-login';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    loginForm: FormGroup;
    user: SocialUser;
    constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService
    ){}

    ngOnInit() {
    this.intiForm();
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
    });
    }
  
  intiForm() {
    this.loginForm = this.formBuilder.group({
      firstName: [],
      lastName: []
    });
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => this.loginForm.patchValue(x)
    );
    
  }
  
}
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("")
  }
]);
