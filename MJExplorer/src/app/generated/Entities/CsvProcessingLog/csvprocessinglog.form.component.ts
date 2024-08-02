import { Component } from '@angular/core';
import { CsvProcessingLogEntity } from 'mj_generatedentities';
import { RegisterClass } from '@memberjunction/global';
import { BaseFormComponent } from '@memberjunction/ng-base-forms';
import { LoadCsvProcessingLogDetailsComponent } from "./sections/details.component"

@RegisterClass(BaseFormComponent, 'Csv Processing Logs') // Tell MemberJunction about this class
@Component({
    selector: 'gen-csvprocessinglog-form',
    templateUrl: './csvprocessinglog.form.component.html',
    styleUrls: ['../../../../shared/form-styles.css']
})
export class CsvProcessingLogFormComponent extends BaseFormComponent {
    public record!: CsvProcessingLogEntity;
} 

export function LoadCsvProcessingLogFormComponent() {
    LoadCsvProcessingLogDetailsComponent();
}
