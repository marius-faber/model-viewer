/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */


import {css, CSSResult} from 'lit-element';
export const styles: CSSResult = css`:host {
  font-family: Roboto;
  color: #dadce0;
  --me-theme-focused-color: #4285f4;
  --me-theme-tab-background-color: #3c4043;
  --me-theme-tab-default-color: #dadce0;
  --me-theme-tab-selected-color: #4285f4;
  --me-theme-container-background-color: #202124;
  --mdc-theme-primary: var(--me-theme-tab-selected-color);
  --mdc-text-transform: none;
  --mdc-tab-color-default: var(--me-theme-tab-default-color);
  --mdc-tab-text-label-color-default: var(--me-theme-tab-default-color);
  --mdc-tab-stacked-height: 100px;
  background: var(--expandable-section-background-color);
  display: flex;
  flex-direction: column;
}

:host .exportTab.isFocused {
  background-color: white;
  outline: var(--me-theme-focused-color) solid 1px;
  outline-offset: -1px;
}

.TabHeader {
  background-color: var(--expandable-section-background-color);
  font-family: 'Google Sans';
  font-size: 14px;
  letter-spacing: .25px;
  line-height: 40px;
  border-bottom: 1px solid #5F5F5F;
}

.TabPanel {
  display: none;
}

.TabPanel[selected] {
  display: block;
}

::slotted(span) {
  display: contents;
}
`;
