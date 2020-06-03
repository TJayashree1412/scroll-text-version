import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { UIShellModule, SideNav, SideNavMenu, GridModule, ListModule, TabsModule, TilesModule, InputModule, ButtonModule, TextInput,ContentSwitcherModule, SideNavModule, RadioModule, CheckboxModule, ToggleModule, DropdownModule, FileUploaderModule, LoadingModule, DatePickerModule, ModalModule, TableModule, PaginationModule, AccordionModule } from 'carbon-components-angular';

import {NotificationModule, AppSwitcherModule, UserAvatarModule, AddModule, WarningModule, FadeModule, LogoutModule} from '@carbon/icons-angular/'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PrivacyNoticeComponent } from './privacy-notice/privacy-notice.component';
import { HomeComponent } from './home/home.component';
import {LoginModule} from '@carbon/icons-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    PrivacyNoticeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	HttpClientModule,
    FormsModule,
	ReactiveFormsModule,
	UIShellModule,
	NotificationModule,
	UserAvatarModule,
	AppSwitcherModule,
	CommonModule,
	GridModule,
	ListModule,
	TabsModule,
	TilesModule,
	InputModule,
	ButtonModule,
	ContentSwitcherModule,
	SideNavModule,
	RadioModule,
	CheckboxModule,
	ToggleModule,
	DropdownModule,
	FileUploaderModule,
	LoadingModule,
	DatePickerModule,
	ModalModule,
	TableModule,
	PaginationModule,
	AccordionModule,
	AddModule,
	WarningModule,
	LoginModule,
	LogoutModule,
	FadeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
