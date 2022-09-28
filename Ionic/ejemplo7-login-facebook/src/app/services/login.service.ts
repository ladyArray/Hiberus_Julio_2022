import { Injectable } from '@angular/core';
import { FacebookLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private socialAuthService: SocialAuthService) { }

  login(): Promise<SocialUser>{
    return this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  logout(): Promise<void>{
    return this.socialAuthService.signOut();
  }
}
