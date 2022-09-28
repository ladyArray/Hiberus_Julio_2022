import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private SocialAuthService: SocialAuthService) { }

  login(): Promise<SocialUser>{
    return this.SocialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logout(): Promise<void>{
    return this.SocialAuthService.signOut();
  }
}
