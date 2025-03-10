/**********************************************************************************
* GENERATED FILE - This file is automatically managed by the MJ CodeGen tool, 
* 
* DO NOT MODIFY THIS FILE - any changes you make will be wiped out the next time the file is
* generated
* 
**********************************************************************************/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// MemberJunction Imports
import { BaseFormsModule } from '@memberjunction/ng-base-forms';
import { FormToolbarModule } from '@memberjunction/ng-form-toolbar';
import { UserViewGridModule } from '@memberjunction/ng-user-view-grid';
import { LinkDirectivesModule } from '@memberjunction/ng-link-directives';
import { MJTabStripModule } from "@memberjunction/ng-tabstrip";
import { ContainerDirectivesModule } from "@memberjunction/ng-container-directives";

// Kendo Imports
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ComboBoxModule } from '@progress/kendo-angular-dropdowns';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';

// Import Generated Components
import { ContentFormComponent, LoadContentFormComponent } from "./Entities/Content/content.form.component";
import { ContributorContentFormComponent, LoadContributorContentFormComponent } from "./Entities/ContributorContent/contributorcontent.form.component";
import { ContributorFormComponent, LoadContributorFormComponent } from "./Entities/Contributor/contributor.form.component";
import { CsvProcessingLogFormComponent, LoadCsvProcessingLogFormComponent } from "./Entities/CsvProcessingLog/csvprocessinglog.form.component";
import { ContentDetailsComponent, LoadContentDetailsComponent } from "./Entities/Content/sections/details.component"
import { ContributorContentDetailsComponent, LoadContributorContentDetailsComponent } from "./Entities/ContributorContent/sections/details.component"
import { ContributorDetailsComponent, LoadContributorDetailsComponent } from "./Entities/Contributor/sections/details.component"
import { CsvProcessingLogDetailsComponent, LoadCsvProcessingLogDetailsComponent } from "./Entities/CsvProcessingLog/sections/details.component"
   

@NgModule({
declarations: [
    ContentFormComponent,
    ContributorContentFormComponent,
    ContributorFormComponent,
    CsvProcessingLogFormComponent,
    ContentDetailsComponent,
    ContributorContentDetailsComponent,
    ContributorDetailsComponent,
    CsvProcessingLogDetailsComponent],
imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    InputsModule,
    ButtonsModule,
    DateInputsModule,
    UserViewGridModule,
    LinkDirectivesModule,
    BaseFormsModule,
    FormToolbarModule,
    MJTabStripModule,
    ContainerDirectivesModule,
    DropDownListModule,
    ComboBoxModule
],
exports: [
]
})
export class GeneratedForms_SubModule_0 { }
    


@NgModule({
declarations: [
],
imports: [
    GeneratedForms_SubModule_0
]
})
export class GeneratedFormsModule { }
    
export function LoadGeneratedForms() {
    // This function doesn't do much, but it calls each generated form's loader function
    // which in turn calls the sections for that generated form. Ultimately, those bits of 
    // code do NOTHING - the point is to prevent the code from being eliminated during tree shaking
    // since it is dynamically instantiated on demand, and the Angular compiler has no way to know that,
    // in production builds tree shaking will eliminate the code unless we do this
    LoadContentFormComponent();
    LoadContributorContentFormComponent();
    LoadContributorFormComponent();
    LoadCsvProcessingLogFormComponent();
    LoadContentDetailsComponent();
    LoadContributorContentDetailsComponent();
    LoadContributorDetailsComponent();
    LoadCsvProcessingLogDetailsComponent();
}
    