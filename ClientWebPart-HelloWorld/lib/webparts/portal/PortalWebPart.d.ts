import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface ISPLists {
    value: ISPList[];
}
export interface ISPList {
    EmployeeId: string;
    EmployeeName: string;
    Experience: string;
    Location: string;
}
export interface IPortalWebPartProps {
    description: string;
}
export default class PortalWebPart extends BaseClientSideWebPart<IPortalWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    private _renderListAsync();
    private _renderList(items);
    private _getListData();
    private _getMockListData();
}
