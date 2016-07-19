/**
 * Slamby API
 * Slamby API
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';
var IService;
(function (IService) {
    (function (IStatusEnum) {
        IStatusEnum[IStatusEnum["New"] = 'New'] = "New";
        IStatusEnum[IStatusEnum["Busy"] = 'Busy'] = "Busy";
        IStatusEnum[IStatusEnum["Prepared"] = 'Prepared'] = "Prepared";
        IStatusEnum[IStatusEnum["Active"] = 'Active'] = "Active";
    })(IService.IStatusEnum || (IService.IStatusEnum = {}));
    var IStatusEnum = IService.IStatusEnum;
    (function (ITypeEnum) {
        ITypeEnum[ITypeEnum["Classifier"] = 'Classifier'] = "Classifier";
        ITypeEnum[ITypeEnum["Prc"] = 'Prc'] = "Prc";
    })(IService.ITypeEnum || (IService.ITypeEnum = {}));
    var ITypeEnum = IService.ITypeEnum;
})(IService = exports.IService || (exports.IService = {}));