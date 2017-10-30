import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneLink,
  IWebPartContext
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import { SPComponentLoader } from '@microsoft/sp-loader';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

import styles from './HqCircleNav.module.scss';
import * as strings from 'hqCircleNavStrings';
import { IHqCircleNavWebPartProps } from './IHqCircleNavWebPartProps';

import 'jquery';
import 'bootstrap';
const dir: any = require('./assets/multiple-users-silhouette_64.png');
const citations: any = require('./assets/citations.png');
const cabin: any = require('./assets/cabin.png');
const esop: any = require('./assets/esop.png');
const post: any = require('./assets/post-it.png');

export default class HqCircleNavWebPart extends BaseClientSideWebPart<IHqCircleNavWebPartProps> {

  public constructor(context: IWebPartContext) {
    super();
    //SPComponentLoader.loadCss("./HqBubbles.module.scss");
    SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
    SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css");
  }

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.hqCircleNav}">
        <div class="${styles.container}">
        <!-- HOME -->
        
          <div class="${styles.circle2}">
          <a href="${escape(this.properties.homeURL)}"> 
             <div class="${styles.txt}">hq</div></a>
          </div>
        
        <!-- employee Directory -->
        <div class="${styles.circle}">
          <a href="${escape(this.properties.circle1Url)}">
             <img src="${escape(this.properties.iconLocation)}" class="${styles.icon}" alt="directory" />
               <div class="${styles.overlay}">
                  <div class="${styles.text}">${escape(this.properties.hoverText)}</div>
               </div>
            </a>
        </div>



        <!-- Citations -->
        <div class="${styles.circle}">
          <a href="${escape(this.properties.circle2Url)}">
           <img src="${escape(this.properties.icon2Location)}" class="${styles.icon}" alt="citations" />
            <div class="${styles.overlay}">
               <div class="${styles.text}">${escape(this.properties.hover2Text)}</div>
            </div>
          </a>
        </div>

        <!-- Cabins -->
        <div class="${styles.circle}">
          <a href="${escape(this.properties.circle3Url)}">
          <img src="${escape(this.properties.icon3Location)}"  class="${styles.icon}" alt="cabins" />
            <div class="${styles.overlay}">
              <div class="${styles.text}">${escape(this.properties.hover3Text)}</div>
            </div>
          </a>
        </div>

        <!-- ESOP -->
        <div class="${styles.circle}">
        <a href="${escape(this.properties.circle4Url)}">
           <img src="${escape(this.properties.icon4Location)}" class="${styles.icon}" alt="ESOP" />
            <div class="${styles.overlay}">
              <div class="${styles.text}">${escape(this.properties.hover4Text)}</div>
            </div>
           </a>
        </div>

        <!-- Post-It -->
        <div class="${styles.circle}">
        <a href="${escape(this.properties.circle1Url)}">
           <img src="${escape(this.properties.icon5Location)}" class="${styles.icon}" alt="post it" />
            <div class="${styles.overlay}">
              <div class="${styles.text}">${escape(this.properties.hover5Text)}</div>
            </div>
           </a>
        </div>

      </div>  
          
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('homeURL', {
                  label: 'HQ HOME URL'
                }),
                PropertyPaneTextField('circle1Url', {
                  label: 'Hyperlink for Circle 1'
                }),
                PropertyPaneTextField('iconLocation', {
                  label: 'Icon Image URL'
                }),
                PropertyPaneTextField('hoverText', {
                  label: 'Hover Text for Icon'
                }),
                PropertyPaneTextField('circle2Url', {
                  label: 'Hyperlink for Circle #2'
                }),
                PropertyPaneTextField('icon2Location', {
                  label: 'Icon Image URL #2'
                }),
                PropertyPaneTextField('hover2Text', {
                  label: 'Hover Text for Icon #2'
                }),
                PropertyPaneTextField('circle3Url', {
                  label: 'Hyperlink for Circle 3'
                }),
                PropertyPaneTextField('icon3Location', {
                  label: 'Icon Image URL 3'
                }),
                PropertyPaneTextField('hover3Text', {
                  label: 'Hover Text for Icon #3'
                }),
                PropertyPaneTextField('circle4Url', {
                  label: 'Hyperlink for Circle 4'
                }),
                PropertyPaneTextField('icon4Location', {
                  label: 'Icon Image URL 4'
                }),
                PropertyPaneTextField('hover4Text', {
                  label: 'Hover Text for Icon #4'
                }),
                PropertyPaneTextField('circle5Url', {
                  label: 'Hyperlink for Circle 5'
                }),
                PropertyPaneTextField('icon5Location', {
                  label: 'Icon Image URL 5'
                }),
                PropertyPaneTextField('hover5Text', {
                  label: 'Hover Text for Icon #5'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
