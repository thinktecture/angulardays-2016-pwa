// <reference path="../../../typings/globals/serviceworker/index.d.ts"/>
import {NotificationService} from './notification';
import {Injectable} from '@angular/core';

@Injectable()
export class ServiceWorkerService {
    private _registration: any;

    constructor(private _notificationService: NotificationService) {
    }

    public register() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./serviceWorker.js')
                .then(() => navigator.serviceWorker.ready)
                .then((serviceWorkerRegistration) => {
                    this._registration = serviceWorkerRegistration;

                    console.log('[App] Successfully registered service worker');

                })
                .catch(function (err) {
                    console.warn('[App] Error while registering service worker', err);
                });
        }
    }

    public unregister() {
        if (this._registration) {
            // TODO ;-)
        }
    }
}
