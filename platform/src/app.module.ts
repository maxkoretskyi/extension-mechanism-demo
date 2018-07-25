import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AComponent } from './a.component';
import { CaAppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BComponent } from './b.component';

const routes = [
    {
        path: 'a',
        component: AComponent
    },
    {
        path: 'b',
        component: BComponent
    }
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    declarations: [CaAppComponent, AComponent, BComponent],
    bootstrap: [CaAppComponent]
})
export class AppModule {
}