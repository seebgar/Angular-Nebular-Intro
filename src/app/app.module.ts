import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

// NUEVOS 1.
import { NbSidebarModule, NbSidebarService, NbCardModule, NbListModule, NbUserModule, NbChatModule } from '@nebular/theme';
import { HomeComponent } from './components/home/home.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule, // NUEVO 2.
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbChatModule,
    NbEvaIconsModule
  ],
  providers: [
    NbSidebarService // 3.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
