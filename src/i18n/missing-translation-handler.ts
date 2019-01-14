import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

export class CustomMissingTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams) {
        console.warn('MISSING TRANSLATION: ' + params.key);
        return params.key.substring(params.key.lastIndexOf('.') + 1);
    }
}
