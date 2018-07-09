import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { FormsModule } from '@angular/forms';
import { SampletextPipe } from './sampletext.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    SampletextPipe,
    FavouriteComponent,
    LikeComponent,
    ZippyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
