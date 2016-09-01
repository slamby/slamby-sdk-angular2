/**
 * Slamby API
 * Slamby API
 *
 * OpenAPI spec version: 1.0.0-rc
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
var IProcess;
(function (IProcess) {
    (function (IStatusEnum) {
        IStatusEnum[IStatusEnum["InProgress"] = 'InProgress'] = "InProgress";
        IStatusEnum[IStatusEnum["Cancelled"] = 'Cancelled'] = "Cancelled";
        IStatusEnum[IStatusEnum["Finished"] = 'Finished'] = "Finished";
        IStatusEnum[IStatusEnum["Error"] = 'Error'] = "Error";
        IStatusEnum[IStatusEnum["Interrupted"] = 'Interrupted'] = "Interrupted";
        IStatusEnum[IStatusEnum["Paused"] = 'Paused'] = "Paused";
        IStatusEnum[IStatusEnum["Cancelling"] = 'Cancelling'] = "Cancelling";
    })(IProcess.IStatusEnum || (IProcess.IStatusEnum = {}));
    var IStatusEnum = IProcess.IStatusEnum;
    (function (ITypeEnum) {
        ITypeEnum[ITypeEnum["ClassifierPrepare"] = 'ClassifierPrepare'] = "ClassifierPrepare";
        ITypeEnum[ITypeEnum["PrcPrepare"] = 'PrcPrepare'] = "PrcPrepare";
        ITypeEnum[ITypeEnum["ClassifierExportDictionaries"] = 'ClassifierExportDictionaries'] = "ClassifierExportDictionaries";
        ITypeEnum[ITypeEnum["PrcExportDictionaries"] = 'PrcExportDictionaries'] = "PrcExportDictionaries";
        ITypeEnum[ITypeEnum["TagsExportWords"] = 'TagsExportWords'] = "TagsExportWords";
        ITypeEnum[ITypeEnum["ClassifierActivate"] = 'ClassifierActivate'] = "ClassifierActivate";
        ITypeEnum[ITypeEnum["PrcActivate"] = 'PrcActivate'] = "PrcActivate";
        ITypeEnum[ITypeEnum["PrcIndex"] = 'PrcIndex'] = "PrcIndex";
        ITypeEnum[ITypeEnum["PrcIndexPartial"] = 'PrcIndexPartial'] = "PrcIndexPartial";
    })(IProcess.ITypeEnum || (IProcess.ITypeEnum = {}));
    var ITypeEnum = IProcess.ITypeEnum;
})(IProcess = exports.IProcess || (exports.IProcess = {}));
