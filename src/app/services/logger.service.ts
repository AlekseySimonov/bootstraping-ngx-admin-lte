import { Injectable, Input } from '@angular/core';
import { UserService } from './user.service';
import { AdminLTETranslateService } from './translate.service';
import { TranslateService } from 'ng2-translate';
import { environment } from '../../environments/environment';

@Injectable()
export class LoggerService {

<<<<<<< HEAD
    constructor( private translate: TranslateService ) {
=======
    constructor( @Input() private translate: TranslateService ) {
>>>>>>> 9752d7ef1bd1db77f4c229463e0018e7e63db030
        // TODO
    }

    public log( component: string, msg?: string, i18nRef?: string, data?: string[] ) {
        if ( !environment.silent ) {
            if ( i18nRef ) {
                let params: {} = {};
                if ( data ) {
                    params = ( data[0] ) ? { 0: data[0] } : params;
                    params = ( data[1] ) ? { 0: data[0], 1: data[1] } : params;
                    params = ( data[2] ) ? { 0: data[0], 1: data[1], 2: data[2] } : params;
                }
                this.translate.get( i18nRef, params ).subscribe(( res: string ) => {
                    console.log( component + ': ' + res );
                });
            } else {
                console.log( component + ': ' + msg );
            }
        }
    }
}
