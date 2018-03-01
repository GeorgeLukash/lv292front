import * as angular from 'angular';

import { CodePreview } from './code-preview.component';


export const codePreviewModule = angular
    .module('app.components.code-preview', [])
    .component('codePreview', CodePreview)
    .name;
