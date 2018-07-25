import * as angularCore from '@angular/core';
import * as angularRouter from '@angular/router';
import * as angularCommon from '@angular/common';
import * as angularPlatformBrowser from '@angular/platform-browser';
import * as angularPlatformBrowserDynamic from '@angular/platform-browser-dynamic';

declare const SystemJS: any;

// set modules so that no HTTP request is made
SystemJS.set('@angular/core', SystemJS.newModule(angularCore));
SystemJS.set('@angular/router', SystemJS.newModule(angularRouter));
SystemJS.set('@angular/common', SystemJS.newModule(angularCommon));
SystemJS.set('@angular/platform-browser', SystemJS.newModule(angularPlatformBrowser));
SystemJS.set('@angular/platform-browser-dynamic', SystemJS.newModule(angularPlatformBrowserDynamic));