import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentA1 } from './a1.component';
import { RouteTestComponent } from './route-test.component';

const routes = [
    {
        path: 't',
        component: RouteTestComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [ComponentA1, RouteTestComponent],
    entryComponents: [ComponentA1],
    providers: [
        {
            provide: 'widgets',
            useValue: [
                {
                    name: 'component-a1',
                    component: ComponentA1
                }
            ],
            multi: true
        }
    ]
})
export default class ModuleA {

}