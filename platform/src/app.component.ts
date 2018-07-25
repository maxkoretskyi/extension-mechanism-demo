import { Compiler, Component, Injector, SkipSelf, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

declare const SystemJS;

@Component({
    selector: 'myapp',
    template: `
        I am App Component
        <div>
            <ng-container #vc></ng-container>
        </div>
        <a routerLink="/a" routerLinkActive="active">Go to A</a>
        <a routerLink="/b" routerLinkActive="active">Go to B</a>
        <router-outlet></router-outlet>
    `
})
export class CaAppComponent {
    @ViewChild('vc', {read: ViewContainerRef}) vc;

    constructor(private compiler: Compiler, @SkipSelf() private injector: Injector, private router: Router) {
    }

    ngOnInit() {
        SystemJS.import('a.module.js').then((module) => {

            const routes = this.router.config;
            routes.push({
                path: 'loaded',
                loadChildren: () => {
                    // returns class to be compiled and instantiated
                    return module.default;
                },
                /*loadChildren: () => {
                    return new class My implements NgModuleFactory {
                        create() {
                            const moduleFactory = this.compiler.compileModuleSync(module.default);
                            const moduleRef = moduleFactory.create(this.injector);
                            return moduleRef;
                        }
                    }
                }*/
            });
            // this.router.resetConfig(routes);

            // RouterConfigLoader.loadModuleFactory

            setTimeout(() => {
                this.router.navigateByUrl('/loaded/t');
            });

            /*const moduleFactory = this.compiler.compileModuleSync(module.default);
            const moduleRef = moduleFactory.create(this.injector);
            const widgets = moduleRef.injector.get('widgets');
            const resolver = moduleRef.componentFactoryResolver;
            const componentFactory = resolver.resolveComponentFactory(widgets[0][0].component);
            this.vc.createComponent(componentFactory);*/
        })
    }
}