import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration, IWebPartContext } from '@microsoft/sp-webpart-base';
import { IHqCircleNavWebPartProps } from './IHqCircleNavWebPartProps';
import 'jquery';
import 'bootstrap';
export default class HqCircleNavWebPart extends BaseClientSideWebPart<IHqCircleNavWebPartProps> {
    constructor(context: IWebPartContext);
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
