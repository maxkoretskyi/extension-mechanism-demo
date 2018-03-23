import { NgModule } from '@angular/core';
import { ComponentA1 } from './a1.component';

@NgModule({
    declarations: [ComponentA1],
    entryComponents: [ComponentA1],
    providers: [
        {
            provide: 'widgets',
            useValue: {name: 'component-a1', component: ComponentA1},
            multi: true
        }
    ]
})
export default class ModuleA {

}