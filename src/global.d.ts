// global.d.ts
import { App, InjectionKey } from 'vue';
import { EventBus } from './utils/EventBus'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $eventBus: EventBus;
        $paths: any;
        msg: typeof string;
    }
}
declare module 'vue-cropperjs';
declare module 'vue-quill-editor';
