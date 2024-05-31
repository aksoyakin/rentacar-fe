/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { TransmissionTypeRequest } from '../model/models';
import { TransmissionTypeResponse } from '../model/models';


import { Configuration }                                     from '../configuration';


export interface CreateTransmissionTypeRequestParams {
    transmissionTypeRequest: TransmissionTypeRequest;
}

export interface DeleteTransmissionTypeByIdRequestParams {
    id: number;
}

export interface FindTransmissionTypeByNameRequestParams {
    type: string;
}

export interface GetTransmissionTypeByIdRequestParams {
    id: number;
}

export interface UpdateTransmissionTypeByIdRequestParams {
    request: TransmissionTypeRequest;
    id: number;
}


export interface TransmissionTypeControllerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
* @param requestParameters
     */
    createTransmissionType(requestParameters: CreateTransmissionTypeRequestParams, extraHttpRequestParams?: any): Observable<TransmissionTypeResponse>;

    /**
     * 
     * 
* @param requestParameters
     */
    deleteTransmissionTypeById(requestParameters: DeleteTransmissionTypeByIdRequestParams, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
* @param requestParameters
     */
    findTransmissionTypeByName(requestParameters: FindTransmissionTypeByNameRequestParams, extraHttpRequestParams?: any): Observable<Array<TransmissionTypeResponse>>;

    /**
     * 
     * 
*/
    getAllTransmissionTypes(extraHttpRequestParams?: any): Observable<Array<TransmissionTypeResponse>>;

    /**
     * 
     * 
* @param requestParameters
     */
    getTransmissionTypeById(requestParameters: GetTransmissionTypeByIdRequestParams, extraHttpRequestParams?: any): Observable<TransmissionTypeResponse>;

    /**
     * 
     * 
* @param requestParameters
     */
    updateTransmissionTypeById(requestParameters: UpdateTransmissionTypeByIdRequestParams, extraHttpRequestParams?: any): Observable<TransmissionTypeResponse>;

}