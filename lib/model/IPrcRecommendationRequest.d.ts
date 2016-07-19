import * as models from './models';
export interface IPrcRecommendationRequest {
    Text?: string;
    Count?: number;
    NeedDocumentInResult?: boolean;
    TagId?: string;
    Filter?: models.IFilter;
    Weights?: Array<models.IWeight>;
}
