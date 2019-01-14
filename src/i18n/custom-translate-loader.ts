import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { en } from './en';
import { Translation } from './i18n.interface';
import { it } from './it';

export class CustomTranslateLoader implements TranslateLoader {
    getTranslation(lang: string): Observable<Translation> {
        return Observable.create(observer => {
            if (lang === 'it') {
                observer.next(it);
            } else {
                observer.next(en);
            }
            observer.complete();
        });
    }
}
