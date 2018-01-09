import { ISPList } from './PortalWebPart';
export default class MockHttpClient {
    private static _items;
    static get(restUrl: string, options?: any): Promise<ISPList[]>;
}
