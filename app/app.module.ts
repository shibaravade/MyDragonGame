import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GamewindowComponent } from './gamewindow/gamewindow.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: 'gamewindow', component: GamewindowComponent },
  { path: 'start', component: HomeComponent },
  { path: '', component: HomeComponent }];
@NgModule({
  declarations: [
    AppComponent,
    GamewindowComponent,HomeComponent
  ],
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
