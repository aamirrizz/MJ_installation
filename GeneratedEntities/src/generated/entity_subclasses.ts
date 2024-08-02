import { BaseEntity, EntitySaveOptions, CompositeKey } from "@memberjunction/core";
import { RegisterClass } from "@memberjunction/global";
import { z } from "zod";
     
        
/**
 * zod schema definition for the entity Contents
 */
export const ContentSchema = z.object({
    ID: z.number().describe(`
        * * Field Name: ID
        * * Display Name: ID
        * * SQL Data Type: int`),
    SourceID: z.number().nullish().describe(`
        * * Field Name: SourceID
        * * Display Name: Source ID
        * * SQL Data Type: int`),
    Source: z.string().nullish().describe(`
        * * Field Name: Source
        * * Display Name: Source
        * * SQL Data Type: nvarchar(100)`),
    ContentID: z.string().nullish().describe(`
        * * Field Name: ContentID
        * * Display Name: Content ID
        * * SQL Data Type: nvarchar(100)`),
    ContentType: z.string().nullish().describe(`
        * * Field Name: ContentType
        * * Display Name: Content Type
        * * SQL Data Type: nvarchar(100)`),
    Title: z.string().nullish().describe(`
        * * Field Name: Title
        * * Display Name: Title
        * * SQL Data Type: nvarchar(500)`),
    Text: z.string().nullish().describe(`
        * * Field Name: Text
        * * Display Name: Text
        * * SQL Data Type: nvarchar(MAX)`),
    DOI: z.string().nullish().describe(`
        * * Field Name: DOI
        * * Display Name: DOI
        * * SQL Data Type: nvarchar(100)`),
    URL: z.string().nullish().describe(`
        * * Field Name: URL
        * * Display Name: URL
        * * SQL Data Type: nvarchar(MAX)`),
    Date: z.date().nullish().describe(`
        * * Field Name: Date
        * * Display Name: Date
        * * SQL Data Type: date`),
    EmbeddingID: z.string().nullish().describe(`
        * * Field Name: EmbeddingID
        * * Display Name: Embedding ID
        * * SQL Data Type: nvarchar(50)`),
    UpdateVector: z.boolean().describe(`
        * * Field Name: UpdateVector
        * * Display Name: Update Vector
        * * SQL Data Type: bit
        * * Default Value: 1`),
    isError: z.boolean().describe(`
        * * Field Name: isError
        * * Display Name: is Error
        * * SQL Data Type: bit
        * * Default Value: 0`),
    __mj_CreatedAt: z.date().describe(`
        * * Field Name: __mj_CreatedAt
        * * Display Name: Created At
        * * SQL Data Type: datetimeoffset
        * * Default Value: getutcdate()`),
    __mj_UpdatedAt: z.date().describe(`
        * * Field Name: __mj_UpdatedAt
        * * Display Name: Updated At
        * * SQL Data Type: datetimeoffset
        * * Default Value: getutcdate()`),
});

export type ContentEntityType = z.infer<typeof ContentSchema>;
       
/**
 * zod schema definition for the entity Contributor Contents
 */
export const ContributorContentSchema = z.object({
    ID: z.number().describe(`
        * * Field Name: ID
        * * Display Name: ID
        * * SQL Data Type: int`),
    SourceID: z.number().describe(`
        * * Field Name: SourceID
        * * Display Name: Source ID
        * * SQL Data Type: int`),
    Source: z.string().describe(`
        * * Field Name: Source
        * * Display Name: Source
        * * SQL Data Type: varchar(15)`),
    ContributorID: z.number().describe(`
        * * Field Name: ContributorID
        * * Display Name: Contributor ID
        * * SQL Data Type: int`),
    ContentID: z.number().nullish().describe(`
        * * Field Name: ContentID
        * * Display Name: Content ID
        * * SQL Data Type: int`),
    DOI: z.string().nullish().describe(`
        * * Field Name: DOI
        * * Display Name: DOI
        * * SQL Data Type: nvarchar(100)`),
    Role1: z.string().nullish().describe(`
        * * Field Name: Role1
        * * Display Name: Role 1
        * * SQL Data Type: nvarchar(100)`),
    Role2: z.string().nullish().describe(`
        * * Field Name: Role2
        * * Display Name: Role 2
        * * SQL Data Type: nvarchar(100)`),
    CorrespondingAuthor: z.number().nullish().describe(`
        * * Field Name: CorrespondingAuthor
        * * Display Name: Corresponding Author
        * * SQL Data Type: int`),
    Affiliation: z.string().nullish().describe(`
        * * Field Name: Affiliation
        * * Display Name: Affiliation
        * * SQL Data Type: nvarchar(500)`),
    Order: z.number().nullish().describe(`
        * * Field Name: Order
        * * Display Name: Order
        * * SQL Data Type: int`),
    __mj_CreatedAt: z.date().describe(`
        * * Field Name: __mj_CreatedAt
        * * Display Name: Created At
        * * SQL Data Type: datetimeoffset
        * * Default Value: getutcdate()`),
    __mj_UpdatedAt: z.date().describe(`
        * * Field Name: __mj_UpdatedAt
        * * Display Name: Updated At
        * * SQL Data Type: datetimeoffset
        * * Default Value: getutcdate()`),
});

export type ContributorContentEntityType = z.infer<typeof ContributorContentSchema>;
       
/**
 * zod schema definition for the entity Contributors
 */
export const ContributorSchema = z.object({
    ID: z.number().describe(`
        * * Field Name: ID
        * * Display Name: ID
        * * SQL Data Type: int`),
    CustomerID: z.string().describe(`
        * * Field Name: CustomerID
        * * Display Name: Customer ID
        * * SQL Data Type: nvarchar(100)`),
    Name: z.string().nullish().describe(`
        * * Field Name: Name
        * * Display Name: Name
        * * SQL Data Type: nvarchar(100)`),
    Organization: z.string().nullish().describe(`
        * * Field Name: Organization
        * * Display Name: Organization
        * * SQL Data Type: nvarchar(500)`),
    JobTitle: z.string().nullish().describe(`
        * * Field Name: JobTitle
        * * Display Name: Job Title
        * * SQL Data Type: nvarchar(50)`),
    DOI: z.string().nullish().describe(`
        * * Field Name: DOI
        * * Display Name: DOI
        * * SQL Data Type: nvarchar(100)`),
    Role1: z.string().nullish().describe(`
        * * Field Name: Role1
        * * Display Name: Role 1
        * * SQL Data Type: nvarchar(100)`),
    Role2: z.string().nullish().describe(`
        * * Field Name: Role2
        * * Display Name: Role 2
        * * SQL Data Type: nvarchar(100)`),
    Affiliation: z.string().nullish().describe(`
        * * Field Name: Affiliation
        * * Display Name: Affiliation
        * * SQL Data Type: nvarchar(200)`),
    Order: z.number().nullish().describe(`
        * * Field Name: Order
        * * Display Name: Order
        * * SQL Data Type: tinyint`),
    ContentTotal: z.number().nullish().describe(`
        * * Field Name: ContentTotal
        * * Display Name: Content Total
        * * SQL Data Type: int`),
    EmbeddingID: z.string().nullish().describe(`
        * * Field Name: EmbeddingID
        * * Display Name: Embedding ID
        * * SQL Data Type: nvarchar(50)`),
    UpdateVector: z.boolean().describe(`
        * * Field Name: UpdateVector
        * * Display Name: Update Vector
        * * SQL Data Type: bit
        * * Default Value: 1`),
    DoNotDisplay: z.boolean().describe(`
        * * Field Name: DoNotDisplay
        * * Display Name: Do Not Display
        * * SQL Data Type: bit
        * * Default Value: 0`),
    isError: z.boolean().describe(`
        * * Field Name: isError
        * * Display Name: is Error
        * * SQL Data Type: bit
        * * Default Value: 0`),
    __mj_CreatedAt: z.date().describe(`
        * * Field Name: __mj_CreatedAt
        * * Display Name: Created At
        * * SQL Data Type: datetimeoffset
        * * Default Value: getutcdate()`),
    __mj_UpdatedAt: z.date().describe(`
        * * Field Name: __mj_UpdatedAt
        * * Display Name: Updated At
        * * SQL Data Type: datetimeoffset
        * * Default Value: getutcdate()`),
});

export type ContributorEntityType = z.infer<typeof ContributorSchema>;
       
/**
 * zod schema definition for the entity Csv Processing Logs
 */
export const CsvProcessingLogSchema = z.object({
    ID: z.number().describe(`
        * * Field Name: ID
        * * Display Name: ID
        * * SQL Data Type: int`),
    TotalRecords: z.number().nullish().describe(`
        * * Field Name: TotalRecords
        * * Display Name: Total Records
        * * SQL Data Type: int`),
    ProcessedRecords: z.number().nullish().describe(`
        * * Field Name: ProcessedRecords
        * * Display Name: Processed Records
        * * SQL Data Type: int`),
    FileName: z.string().nullish().describe(`
        * * Field Name: FileName
        * * Display Name: File Name
        * * SQL Data Type: nvarchar(255)`),
    CreatedAt: z.date().nullish().describe(`
        * * Field Name: CreatedAt
        * * Display Name: Created At
        * * SQL Data Type: datetime
        * * Default Value: getdate()`),
    UpdatedAt: z.date().nullish().describe(`
        * * Field Name: UpdatedAt
        * * Display Name: Updated At
        * * SQL Data Type: datetime`),
    __mj_CreatedAt: z.date().describe(`
        * * Field Name: __mj_CreatedAt
        * * Display Name: Created At
        * * SQL Data Type: datetimeoffset
        * * Default Value: getutcdate()`),
    __mj_UpdatedAt: z.date().describe(`
        * * Field Name: __mj_UpdatedAt
        * * Display Name: Updated At
        * * SQL Data Type: datetimeoffset
        * * Default Value: getutcdate()`),
});

export type CsvProcessingLogEntityType = z.infer<typeof CsvProcessingLogSchema>;
 
 
            
/**
 * Contents - strongly typed entity sub-class
 * * Schema: dbo
 * * Base Table: Content
 * * Base View: vwContents
 * * Primary Key: ID
 * @extends {BaseEntity}
 * @class
 * @public
 */
@RegisterClass(BaseEntity, 'Contents')
export class ContentEntity extends BaseEntity<ContentEntityType> {
    /**
    * Loads the Contents record from the database
    * @param ID: number - primary key value to load the Contents record.
    * @param EntityRelationshipsToLoad - (optional) the relationships to load
    * @returns {Promise<boolean>} - true if successful, false otherwise
    * @public
    * @async
    * @memberof ContentEntity
    * @method
    * @override
    */      
    public async Load(ID: number, EntityRelationshipsToLoad: string[] = null) : Promise<boolean> {
        const compositeKey: CompositeKey = new CompositeKey();
        compositeKey.KeyValuePairs.push({ FieldName: 'ID', Value: ID });
        return await super.InnerLoad(compositeKey, EntityRelationshipsToLoad);
    }

    /**
    * * Field Name: ID
    * * Display Name: ID
    * * SQL Data Type: int
    */
    get ID(): number {  
        return this.Get('ID');
    }

    /**
    * * Field Name: SourceID
    * * Display Name: Source ID
    * * SQL Data Type: int
    */
    get SourceID(): number | null {  
        return this.Get('SourceID');
    }
    set SourceID(value: number | null) {
        this.Set('SourceID', value);
    }

    /**
    * * Field Name: Source
    * * Display Name: Source
    * * SQL Data Type: nvarchar(100)
    */
    get Source(): string | null {  
        return this.Get('Source');
    }
    set Source(value: string | null) {
        this.Set('Source', value);
    }

    /**
    * * Field Name: ContentID
    * * Display Name: Content ID
    * * SQL Data Type: nvarchar(100)
    */
    get ContentID(): string | null {  
        return this.Get('ContentID');
    }
    set ContentID(value: string | null) {
        this.Set('ContentID', value);
    }

    /**
    * * Field Name: ContentType
    * * Display Name: Content Type
    * * SQL Data Type: nvarchar(100)
    */
    get ContentType(): string | null {  
        return this.Get('ContentType');
    }
    set ContentType(value: string | null) {
        this.Set('ContentType', value);
    }

    /**
    * * Field Name: Title
    * * Display Name: Title
    * * SQL Data Type: nvarchar(500)
    */
    get Title(): string | null {  
        return this.Get('Title');
    }
    set Title(value: string | null) {
        this.Set('Title', value);
    }

    /**
    * * Field Name: Text
    * * Display Name: Text
    * * SQL Data Type: nvarchar(MAX)
    */
    get Text(): string | null {  
        return this.Get('Text');
    }
    set Text(value: string | null) {
        this.Set('Text', value);
    }

    /**
    * * Field Name: DOI
    * * Display Name: DOI
    * * SQL Data Type: nvarchar(100)
    */
    get DOI(): string | null {  
        return this.Get('DOI');
    }
    set DOI(value: string | null) {
        this.Set('DOI', value);
    }

    /**
    * * Field Name: URL
    * * Display Name: URL
    * * SQL Data Type: nvarchar(MAX)
    */
    get URL(): string | null {  
        return this.Get('URL');
    }
    set URL(value: string | null) {
        this.Set('URL', value);
    }

    /**
    * * Field Name: Date
    * * Display Name: Date
    * * SQL Data Type: date
    */
    get Date(): Date | null {  
        return this.Get('Date');
    }
    set Date(value: Date | null) {
        this.Set('Date', value);
    }

    /**
    * * Field Name: EmbeddingID
    * * Display Name: Embedding ID
    * * SQL Data Type: nvarchar(50)
    */
    get EmbeddingID(): string | null {  
        return this.Get('EmbeddingID');
    }
    set EmbeddingID(value: string | null) {
        this.Set('EmbeddingID', value);
    }

    /**
    * * Field Name: UpdateVector
    * * Display Name: Update Vector
    * * SQL Data Type: bit
    * * Default Value: 1
    */
    get UpdateVector(): boolean {  
        return this.Get('UpdateVector');
    }
    set UpdateVector(value: boolean) {
        this.Set('UpdateVector', value);
    }

    /**
    * * Field Name: isError
    * * Display Name: is Error
    * * SQL Data Type: bit
    * * Default Value: 0
    */
    get isError(): boolean {  
        return this.Get('isError');
    }
    set isError(value: boolean) {
        this.Set('isError', value);
    }

    /**
    * * Field Name: __mj_CreatedAt
    * * Display Name: Created At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_CreatedAt(): Date {  
        return this.Get('__mj_CreatedAt');
    }

    /**
    * * Field Name: __mj_UpdatedAt
    * * Display Name: Updated At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_UpdatedAt(): Date {  
        return this.Get('__mj_UpdatedAt');
    }
}

            
/**
 * Contributor Contents - strongly typed entity sub-class
 * * Schema: dbo
 * * Base Table: ContributorContent
 * * Base View: vwContributorContents
 * * Primary Key: ID
 * @extends {BaseEntity}
 * @class
 * @public
 */
@RegisterClass(BaseEntity, 'Contributor Contents')
export class ContributorContentEntity extends BaseEntity<ContributorContentEntityType> {
    /**
    * Loads the Contributor Contents record from the database
    * @param ID: number - primary key value to load the Contributor Contents record.
    * @param EntityRelationshipsToLoad - (optional) the relationships to load
    * @returns {Promise<boolean>} - true if successful, false otherwise
    * @public
    * @async
    * @memberof ContributorContentEntity
    * @method
    * @override
    */      
    public async Load(ID: number, EntityRelationshipsToLoad: string[] = null) : Promise<boolean> {
        const compositeKey: CompositeKey = new CompositeKey();
        compositeKey.KeyValuePairs.push({ FieldName: 'ID', Value: ID });
        return await super.InnerLoad(compositeKey, EntityRelationshipsToLoad);
    }

    /**
    * * Field Name: ID
    * * Display Name: ID
    * * SQL Data Type: int
    */
    get ID(): number {  
        return this.Get('ID');
    }

    /**
    * * Field Name: SourceID
    * * Display Name: Source ID
    * * SQL Data Type: int
    */
    get SourceID(): number {  
        return this.Get('SourceID');
    }
    set SourceID(value: number) {
        this.Set('SourceID', value);
    }

    /**
    * * Field Name: Source
    * * Display Name: Source
    * * SQL Data Type: varchar(15)
    */
    get Source(): string {  
        return this.Get('Source');
    }
    set Source(value: string) {
        this.Set('Source', value);
    }

    /**
    * * Field Name: ContributorID
    * * Display Name: Contributor ID
    * * SQL Data Type: int
    */
    get ContributorID(): number {  
        return this.Get('ContributorID');
    }
    set ContributorID(value: number) {
        this.Set('ContributorID', value);
    }

    /**
    * * Field Name: ContentID
    * * Display Name: Content ID
    * * SQL Data Type: int
    */
    get ContentID(): number | null {  
        return this.Get('ContentID');
    }
    set ContentID(value: number | null) {
        this.Set('ContentID', value);
    }

    /**
    * * Field Name: DOI
    * * Display Name: DOI
    * * SQL Data Type: nvarchar(100)
    */
    get DOI(): string | null {  
        return this.Get('DOI');
    }
    set DOI(value: string | null) {
        this.Set('DOI', value);
    }

    /**
    * * Field Name: Role1
    * * Display Name: Role 1
    * * SQL Data Type: nvarchar(100)
    */
    get Role1(): string | null {  
        return this.Get('Role1');
    }
    set Role1(value: string | null) {
        this.Set('Role1', value);
    }

    /**
    * * Field Name: Role2
    * * Display Name: Role 2
    * * SQL Data Type: nvarchar(100)
    */
    get Role2(): string | null {  
        return this.Get('Role2');
    }
    set Role2(value: string | null) {
        this.Set('Role2', value);
    }

    /**
    * * Field Name: CorrespondingAuthor
    * * Display Name: Corresponding Author
    * * SQL Data Type: int
    */
    get CorrespondingAuthor(): number | null {  
        return this.Get('CorrespondingAuthor');
    }
    set CorrespondingAuthor(value: number | null) {
        this.Set('CorrespondingAuthor', value);
    }

    /**
    * * Field Name: Affiliation
    * * Display Name: Affiliation
    * * SQL Data Type: nvarchar(500)
    */
    get Affiliation(): string | null {  
        return this.Get('Affiliation');
    }
    set Affiliation(value: string | null) {
        this.Set('Affiliation', value);
    }

    /**
    * * Field Name: Order
    * * Display Name: Order
    * * SQL Data Type: int
    */
    get Order(): number | null {  
        return this.Get('Order');
    }
    set Order(value: number | null) {
        this.Set('Order', value);
    }

    /**
    * * Field Name: __mj_CreatedAt
    * * Display Name: Created At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_CreatedAt(): Date {  
        return this.Get('__mj_CreatedAt');
    }

    /**
    * * Field Name: __mj_UpdatedAt
    * * Display Name: Updated At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_UpdatedAt(): Date {  
        return this.Get('__mj_UpdatedAt');
    }
}

            
/**
 * Contributors - strongly typed entity sub-class
 * * Schema: dbo
 * * Base Table: Contributor
 * * Base View: vwContributors
 * * Primary Key: ID
 * @extends {BaseEntity}
 * @class
 * @public
 */
@RegisterClass(BaseEntity, 'Contributors')
export class ContributorEntity extends BaseEntity<ContributorEntityType> {
    /**
    * Loads the Contributors record from the database
    * @param ID: number - primary key value to load the Contributors record.
    * @param EntityRelationshipsToLoad - (optional) the relationships to load
    * @returns {Promise<boolean>} - true if successful, false otherwise
    * @public
    * @async
    * @memberof ContributorEntity
    * @method
    * @override
    */      
    public async Load(ID: number, EntityRelationshipsToLoad: string[] = null) : Promise<boolean> {
        const compositeKey: CompositeKey = new CompositeKey();
        compositeKey.KeyValuePairs.push({ FieldName: 'ID', Value: ID });
        return await super.InnerLoad(compositeKey, EntityRelationshipsToLoad);
    }

    /**
    * * Field Name: ID
    * * Display Name: ID
    * * SQL Data Type: int
    */
    get ID(): number {  
        return this.Get('ID');
    }

    /**
    * * Field Name: CustomerID
    * * Display Name: Customer ID
    * * SQL Data Type: nvarchar(100)
    */
    get CustomerID(): string {  
        return this.Get('CustomerID');
    }
    set CustomerID(value: string) {
        this.Set('CustomerID', value);
    }

    /**
    * * Field Name: Name
    * * Display Name: Name
    * * SQL Data Type: nvarchar(100)
    */
    get Name(): string | null {  
        return this.Get('Name');
    }
    set Name(value: string | null) {
        this.Set('Name', value);
    }

    /**
    * * Field Name: Organization
    * * Display Name: Organization
    * * SQL Data Type: nvarchar(500)
    */
    get Organization(): string | null {  
        return this.Get('Organization');
    }
    set Organization(value: string | null) {
        this.Set('Organization', value);
    }

    /**
    * * Field Name: JobTitle
    * * Display Name: Job Title
    * * SQL Data Type: nvarchar(50)
    */
    get JobTitle(): string | null {  
        return this.Get('JobTitle');
    }
    set JobTitle(value: string | null) {
        this.Set('JobTitle', value);
    }

    /**
    * * Field Name: DOI
    * * Display Name: DOI
    * * SQL Data Type: nvarchar(100)
    */
    get DOI(): string | null {  
        return this.Get('DOI');
    }
    set DOI(value: string | null) {
        this.Set('DOI', value);
    }

    /**
    * * Field Name: Role1
    * * Display Name: Role 1
    * * SQL Data Type: nvarchar(100)
    */
    get Role1(): string | null {  
        return this.Get('Role1');
    }
    set Role1(value: string | null) {
        this.Set('Role1', value);
    }

    /**
    * * Field Name: Role2
    * * Display Name: Role 2
    * * SQL Data Type: nvarchar(100)
    */
    get Role2(): string | null {  
        return this.Get('Role2');
    }
    set Role2(value: string | null) {
        this.Set('Role2', value);
    }

    /**
    * * Field Name: Affiliation
    * * Display Name: Affiliation
    * * SQL Data Type: nvarchar(200)
    */
    get Affiliation(): string | null {  
        return this.Get('Affiliation');
    }
    set Affiliation(value: string | null) {
        this.Set('Affiliation', value);
    }

    /**
    * * Field Name: Order
    * * Display Name: Order
    * * SQL Data Type: tinyint
    */
    get Order(): number | null {  
        return this.Get('Order');
    }
    set Order(value: number | null) {
        this.Set('Order', value);
    }

    /**
    * * Field Name: ContentTotal
    * * Display Name: Content Total
    * * SQL Data Type: int
    */
    get ContentTotal(): number | null {  
        return this.Get('ContentTotal');
    }
    set ContentTotal(value: number | null) {
        this.Set('ContentTotal', value);
    }

    /**
    * * Field Name: EmbeddingID
    * * Display Name: Embedding ID
    * * SQL Data Type: nvarchar(50)
    */
    get EmbeddingID(): string | null {  
        return this.Get('EmbeddingID');
    }
    set EmbeddingID(value: string | null) {
        this.Set('EmbeddingID', value);
    }

    /**
    * * Field Name: UpdateVector
    * * Display Name: Update Vector
    * * SQL Data Type: bit
    * * Default Value: 1
    */
    get UpdateVector(): boolean {  
        return this.Get('UpdateVector');
    }
    set UpdateVector(value: boolean) {
        this.Set('UpdateVector', value);
    }

    /**
    * * Field Name: DoNotDisplay
    * * Display Name: Do Not Display
    * * SQL Data Type: bit
    * * Default Value: 0
    */
    get DoNotDisplay(): boolean {  
        return this.Get('DoNotDisplay');
    }
    set DoNotDisplay(value: boolean) {
        this.Set('DoNotDisplay', value);
    }

    /**
    * * Field Name: isError
    * * Display Name: is Error
    * * SQL Data Type: bit
    * * Default Value: 0
    */
    get isError(): boolean {  
        return this.Get('isError');
    }
    set isError(value: boolean) {
        this.Set('isError', value);
    }

    /**
    * * Field Name: __mj_CreatedAt
    * * Display Name: Created At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_CreatedAt(): Date {  
        return this.Get('__mj_CreatedAt');
    }

    /**
    * * Field Name: __mj_UpdatedAt
    * * Display Name: Updated At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_UpdatedAt(): Date {  
        return this.Get('__mj_UpdatedAt');
    }
}

            
/**
 * Csv Processing Logs - strongly typed entity sub-class
 * * Schema: dbo
 * * Base Table: CsvProcessingLog
 * * Base View: vwCsvProcessingLogs
 * * Primary Key: ID
 * @extends {BaseEntity}
 * @class
 * @public
 */
@RegisterClass(BaseEntity, 'Csv Processing Logs')
export class CsvProcessingLogEntity extends BaseEntity<CsvProcessingLogEntityType> {
    /**
    * Loads the Csv Processing Logs record from the database
    * @param ID: number - primary key value to load the Csv Processing Logs record.
    * @param EntityRelationshipsToLoad - (optional) the relationships to load
    * @returns {Promise<boolean>} - true if successful, false otherwise
    * @public
    * @async
    * @memberof CsvProcessingLogEntity
    * @method
    * @override
    */      
    public async Load(ID: number, EntityRelationshipsToLoad: string[] = null) : Promise<boolean> {
        const compositeKey: CompositeKey = new CompositeKey();
        compositeKey.KeyValuePairs.push({ FieldName: 'ID', Value: ID });
        return await super.InnerLoad(compositeKey, EntityRelationshipsToLoad);
    }

    /**
    * * Field Name: ID
    * * Display Name: ID
    * * SQL Data Type: int
    */
    get ID(): number {  
        return this.Get('ID');
    }

    /**
    * * Field Name: TotalRecords
    * * Display Name: Total Records
    * * SQL Data Type: int
    */
    get TotalRecords(): number | null {  
        return this.Get('TotalRecords');
    }
    set TotalRecords(value: number | null) {
        this.Set('TotalRecords', value);
    }

    /**
    * * Field Name: ProcessedRecords
    * * Display Name: Processed Records
    * * SQL Data Type: int
    */
    get ProcessedRecords(): number | null {  
        return this.Get('ProcessedRecords');
    }
    set ProcessedRecords(value: number | null) {
        this.Set('ProcessedRecords', value);
    }

    /**
    * * Field Name: FileName
    * * Display Name: File Name
    * * SQL Data Type: nvarchar(255)
    */
    get FileName(): string | null {  
        return this.Get('FileName');
    }
    set FileName(value: string | null) {
        this.Set('FileName', value);
    }

    /**
    * * Field Name: CreatedAt
    * * Display Name: Created At
    * * SQL Data Type: datetime
    * * Default Value: getdate()
    */
    get CreatedAt(): Date | null {  
        return this.Get('CreatedAt');
    }
    set CreatedAt(value: Date | null) {
        this.Set('CreatedAt', value);
    }

    /**
    * * Field Name: UpdatedAt
    * * Display Name: Updated At
    * * SQL Data Type: datetime
    */
    get UpdatedAt(): Date | null {  
        return this.Get('UpdatedAt');
    }
    set UpdatedAt(value: Date | null) {
        this.Set('UpdatedAt', value);
    }

    /**
    * * Field Name: __mj_CreatedAt
    * * Display Name: Created At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_CreatedAt(): Date {  
        return this.Get('__mj_CreatedAt');
    }

    /**
    * * Field Name: __mj_UpdatedAt
    * * Display Name: Updated At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_UpdatedAt(): Date {  
        return this.Get('__mj_UpdatedAt');
    }
}
