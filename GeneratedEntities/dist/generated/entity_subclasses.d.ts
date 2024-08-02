import { BaseEntity } from "@memberjunction/core";
import { z } from "zod";
/**
 * zod schema definition for the entity Contents
 */
export declare const ContentSchema: z.ZodObject<{
    ID: z.ZodNumber;
    SourceID: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    Source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ContentID: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ContentType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    Title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    Text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    DOI: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    URL: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    Date: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    EmbeddingID: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    UpdateVector: z.ZodBoolean;
    isError: z.ZodBoolean;
    __mj_CreatedAt: z.ZodDate;
    __mj_UpdatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    Date?: Date;
    ID?: number;
    SourceID?: number;
    Source?: string;
    ContentID?: string;
    ContentType?: string;
    Title?: string;
    Text?: string;
    DOI?: string;
    URL?: string;
    EmbeddingID?: string;
    UpdateVector?: boolean;
    isError?: boolean;
    __mj_CreatedAt?: Date;
    __mj_UpdatedAt?: Date;
}, {
    Date?: Date;
    ID?: number;
    SourceID?: number;
    Source?: string;
    ContentID?: string;
    ContentType?: string;
    Title?: string;
    Text?: string;
    DOI?: string;
    URL?: string;
    EmbeddingID?: string;
    UpdateVector?: boolean;
    isError?: boolean;
    __mj_CreatedAt?: Date;
    __mj_UpdatedAt?: Date;
}>;
export type ContentEntityType = z.infer<typeof ContentSchema>;
/**
 * zod schema definition for the entity Contributor Contents
 */
export declare const ContributorContentSchema: z.ZodObject<{
    ID: z.ZodNumber;
    SourceID: z.ZodNumber;
    Source: z.ZodString;
    ContributorID: z.ZodNumber;
    ContentID: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    DOI: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    Role1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    Role2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    CorrespondingAuthor: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    Affiliation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    Order: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    __mj_CreatedAt: z.ZodDate;
    __mj_UpdatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    ID?: number;
    SourceID?: number;
    Source?: string;
    ContentID?: number;
    DOI?: string;
    __mj_CreatedAt?: Date;
    __mj_UpdatedAt?: Date;
    ContributorID?: number;
    Role1?: string;
    Role2?: string;
    CorrespondingAuthor?: number;
    Affiliation?: string;
    Order?: number;
}, {
    ID?: number;
    SourceID?: number;
    Source?: string;
    ContentID?: number;
    DOI?: string;
    __mj_CreatedAt?: Date;
    __mj_UpdatedAt?: Date;
    ContributorID?: number;
    Role1?: string;
    Role2?: string;
    CorrespondingAuthor?: number;
    Affiliation?: string;
    Order?: number;
}>;
export type ContributorContentEntityType = z.infer<typeof ContributorContentSchema>;
/**
 * zod schema definition for the entity Contributors
 */
export declare const ContributorSchema: z.ZodObject<{
    ID: z.ZodNumber;
    CustomerID: z.ZodString;
    Name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    Organization: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    JobTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    DOI: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    Role1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    Role2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    Affiliation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    Order: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    ContentTotal: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    EmbeddingID: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    UpdateVector: z.ZodBoolean;
    DoNotDisplay: z.ZodBoolean;
    isError: z.ZodBoolean;
    __mj_CreatedAt: z.ZodDate;
    __mj_UpdatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    ID?: number;
    DOI?: string;
    EmbeddingID?: string;
    UpdateVector?: boolean;
    isError?: boolean;
    __mj_CreatedAt?: Date;
    __mj_UpdatedAt?: Date;
    Role1?: string;
    Role2?: string;
    Affiliation?: string;
    Order?: number;
    CustomerID?: string;
    Name?: string;
    Organization?: string;
    JobTitle?: string;
    ContentTotal?: number;
    DoNotDisplay?: boolean;
}, {
    ID?: number;
    DOI?: string;
    EmbeddingID?: string;
    UpdateVector?: boolean;
    isError?: boolean;
    __mj_CreatedAt?: Date;
    __mj_UpdatedAt?: Date;
    Role1?: string;
    Role2?: string;
    Affiliation?: string;
    Order?: number;
    CustomerID?: string;
    Name?: string;
    Organization?: string;
    JobTitle?: string;
    ContentTotal?: number;
    DoNotDisplay?: boolean;
}>;
export type ContributorEntityType = z.infer<typeof ContributorSchema>;
/**
 * zod schema definition for the entity Csv Processing Logs
 */
export declare const CsvProcessingLogSchema: z.ZodObject<{
    ID: z.ZodNumber;
    TotalRecords: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    ProcessedRecords: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    FileName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    CreatedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    UpdatedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    __mj_CreatedAt: z.ZodDate;
    __mj_UpdatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    ID?: number;
    __mj_CreatedAt?: Date;
    __mj_UpdatedAt?: Date;
    TotalRecords?: number;
    ProcessedRecords?: number;
    FileName?: string;
    CreatedAt?: Date;
    UpdatedAt?: Date;
}, {
    ID?: number;
    __mj_CreatedAt?: Date;
    __mj_UpdatedAt?: Date;
    TotalRecords?: number;
    ProcessedRecords?: number;
    FileName?: string;
    CreatedAt?: Date;
    UpdatedAt?: Date;
}>;
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
export declare class ContentEntity extends BaseEntity<ContentEntityType> {
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
    Load(ID: number, EntityRelationshipsToLoad?: string[]): Promise<boolean>;
    /**
    * * Field Name: ID
    * * Display Name: ID
    * * SQL Data Type: int
    */
    get ID(): number;
    /**
    * * Field Name: SourceID
    * * Display Name: Source ID
    * * SQL Data Type: int
    */
    get SourceID(): number | null;
    set SourceID(value: number | null);
    /**
    * * Field Name: Source
    * * Display Name: Source
    * * SQL Data Type: nvarchar(100)
    */
    get Source(): string | null;
    set Source(value: string | null);
    /**
    * * Field Name: ContentID
    * * Display Name: Content ID
    * * SQL Data Type: nvarchar(100)
    */
    get ContentID(): string | null;
    set ContentID(value: string | null);
    /**
    * * Field Name: ContentType
    * * Display Name: Content Type
    * * SQL Data Type: nvarchar(100)
    */
    get ContentType(): string | null;
    set ContentType(value: string | null);
    /**
    * * Field Name: Title
    * * Display Name: Title
    * * SQL Data Type: nvarchar(500)
    */
    get Title(): string | null;
    set Title(value: string | null);
    /**
    * * Field Name: Text
    * * Display Name: Text
    * * SQL Data Type: nvarchar(MAX)
    */
    get Text(): string | null;
    set Text(value: string | null);
    /**
    * * Field Name: DOI
    * * Display Name: DOI
    * * SQL Data Type: nvarchar(100)
    */
    get DOI(): string | null;
    set DOI(value: string | null);
    /**
    * * Field Name: URL
    * * Display Name: URL
    * * SQL Data Type: nvarchar(MAX)
    */
    get URL(): string | null;
    set URL(value: string | null);
    /**
    * * Field Name: Date
    * * Display Name: Date
    * * SQL Data Type: date
    */
    get Date(): Date | null;
    set Date(value: Date | null);
    /**
    * * Field Name: EmbeddingID
    * * Display Name: Embedding ID
    * * SQL Data Type: nvarchar(50)
    */
    get EmbeddingID(): string | null;
    set EmbeddingID(value: string | null);
    /**
    * * Field Name: UpdateVector
    * * Display Name: Update Vector
    * * SQL Data Type: bit
    * * Default Value: 1
    */
    get UpdateVector(): boolean;
    set UpdateVector(value: boolean);
    /**
    * * Field Name: isError
    * * Display Name: is Error
    * * SQL Data Type: bit
    * * Default Value: 0
    */
    get isError(): boolean;
    set isError(value: boolean);
    /**
    * * Field Name: __mj_CreatedAt
    * * Display Name: Created At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_CreatedAt(): Date;
    /**
    * * Field Name: __mj_UpdatedAt
    * * Display Name: Updated At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_UpdatedAt(): Date;
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
export declare class ContributorContentEntity extends BaseEntity<ContributorContentEntityType> {
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
    Load(ID: number, EntityRelationshipsToLoad?: string[]): Promise<boolean>;
    /**
    * * Field Name: ID
    * * Display Name: ID
    * * SQL Data Type: int
    */
    get ID(): number;
    /**
    * * Field Name: SourceID
    * * Display Name: Source ID
    * * SQL Data Type: int
    */
    get SourceID(): number;
    set SourceID(value: number);
    /**
    * * Field Name: Source
    * * Display Name: Source
    * * SQL Data Type: varchar(15)
    */
    get Source(): string;
    set Source(value: string);
    /**
    * * Field Name: ContributorID
    * * Display Name: Contributor ID
    * * SQL Data Type: int
    */
    get ContributorID(): number;
    set ContributorID(value: number);
    /**
    * * Field Name: ContentID
    * * Display Name: Content ID
    * * SQL Data Type: int
    */
    get ContentID(): number | null;
    set ContentID(value: number | null);
    /**
    * * Field Name: DOI
    * * Display Name: DOI
    * * SQL Data Type: nvarchar(100)
    */
    get DOI(): string | null;
    set DOI(value: string | null);
    /**
    * * Field Name: Role1
    * * Display Name: Role 1
    * * SQL Data Type: nvarchar(100)
    */
    get Role1(): string | null;
    set Role1(value: string | null);
    /**
    * * Field Name: Role2
    * * Display Name: Role 2
    * * SQL Data Type: nvarchar(100)
    */
    get Role2(): string | null;
    set Role2(value: string | null);
    /**
    * * Field Name: CorrespondingAuthor
    * * Display Name: Corresponding Author
    * * SQL Data Type: int
    */
    get CorrespondingAuthor(): number | null;
    set CorrespondingAuthor(value: number | null);
    /**
    * * Field Name: Affiliation
    * * Display Name: Affiliation
    * * SQL Data Type: nvarchar(500)
    */
    get Affiliation(): string | null;
    set Affiliation(value: string | null);
    /**
    * * Field Name: Order
    * * Display Name: Order
    * * SQL Data Type: int
    */
    get Order(): number | null;
    set Order(value: number | null);
    /**
    * * Field Name: __mj_CreatedAt
    * * Display Name: Created At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_CreatedAt(): Date;
    /**
    * * Field Name: __mj_UpdatedAt
    * * Display Name: Updated At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_UpdatedAt(): Date;
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
export declare class ContributorEntity extends BaseEntity<ContributorEntityType> {
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
    Load(ID: number, EntityRelationshipsToLoad?: string[]): Promise<boolean>;
    /**
    * * Field Name: ID
    * * Display Name: ID
    * * SQL Data Type: int
    */
    get ID(): number;
    /**
    * * Field Name: CustomerID
    * * Display Name: Customer ID
    * * SQL Data Type: nvarchar(100)
    */
    get CustomerID(): string;
    set CustomerID(value: string);
    /**
    * * Field Name: Name
    * * Display Name: Name
    * * SQL Data Type: nvarchar(100)
    */
    get Name(): string | null;
    set Name(value: string | null);
    /**
    * * Field Name: Organization
    * * Display Name: Organization
    * * SQL Data Type: nvarchar(500)
    */
    get Organization(): string | null;
    set Organization(value: string | null);
    /**
    * * Field Name: JobTitle
    * * Display Name: Job Title
    * * SQL Data Type: nvarchar(50)
    */
    get JobTitle(): string | null;
    set JobTitle(value: string | null);
    /**
    * * Field Name: DOI
    * * Display Name: DOI
    * * SQL Data Type: nvarchar(100)
    */
    get DOI(): string | null;
    set DOI(value: string | null);
    /**
    * * Field Name: Role1
    * * Display Name: Role 1
    * * SQL Data Type: nvarchar(100)
    */
    get Role1(): string | null;
    set Role1(value: string | null);
    /**
    * * Field Name: Role2
    * * Display Name: Role 2
    * * SQL Data Type: nvarchar(100)
    */
    get Role2(): string | null;
    set Role2(value: string | null);
    /**
    * * Field Name: Affiliation
    * * Display Name: Affiliation
    * * SQL Data Type: nvarchar(200)
    */
    get Affiliation(): string | null;
    set Affiliation(value: string | null);
    /**
    * * Field Name: Order
    * * Display Name: Order
    * * SQL Data Type: tinyint
    */
    get Order(): number | null;
    set Order(value: number | null);
    /**
    * * Field Name: ContentTotal
    * * Display Name: Content Total
    * * SQL Data Type: int
    */
    get ContentTotal(): number | null;
    set ContentTotal(value: number | null);
    /**
    * * Field Name: EmbeddingID
    * * Display Name: Embedding ID
    * * SQL Data Type: nvarchar(50)
    */
    get EmbeddingID(): string | null;
    set EmbeddingID(value: string | null);
    /**
    * * Field Name: UpdateVector
    * * Display Name: Update Vector
    * * SQL Data Type: bit
    * * Default Value: 1
    */
    get UpdateVector(): boolean;
    set UpdateVector(value: boolean);
    /**
    * * Field Name: DoNotDisplay
    * * Display Name: Do Not Display
    * * SQL Data Type: bit
    * * Default Value: 0
    */
    get DoNotDisplay(): boolean;
    set DoNotDisplay(value: boolean);
    /**
    * * Field Name: isError
    * * Display Name: is Error
    * * SQL Data Type: bit
    * * Default Value: 0
    */
    get isError(): boolean;
    set isError(value: boolean);
    /**
    * * Field Name: __mj_CreatedAt
    * * Display Name: Created At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_CreatedAt(): Date;
    /**
    * * Field Name: __mj_UpdatedAt
    * * Display Name: Updated At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_UpdatedAt(): Date;
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
export declare class CsvProcessingLogEntity extends BaseEntity<CsvProcessingLogEntityType> {
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
    Load(ID: number, EntityRelationshipsToLoad?: string[]): Promise<boolean>;
    /**
    * * Field Name: ID
    * * Display Name: ID
    * * SQL Data Type: int
    */
    get ID(): number;
    /**
    * * Field Name: TotalRecords
    * * Display Name: Total Records
    * * SQL Data Type: int
    */
    get TotalRecords(): number | null;
    set TotalRecords(value: number | null);
    /**
    * * Field Name: ProcessedRecords
    * * Display Name: Processed Records
    * * SQL Data Type: int
    */
    get ProcessedRecords(): number | null;
    set ProcessedRecords(value: number | null);
    /**
    * * Field Name: FileName
    * * Display Name: File Name
    * * SQL Data Type: nvarchar(255)
    */
    get FileName(): string | null;
    set FileName(value: string | null);
    /**
    * * Field Name: CreatedAt
    * * Display Name: Created At
    * * SQL Data Type: datetime
    * * Default Value: getdate()
    */
    get CreatedAt(): Date | null;
    set CreatedAt(value: Date | null);
    /**
    * * Field Name: UpdatedAt
    * * Display Name: Updated At
    * * SQL Data Type: datetime
    */
    get UpdatedAt(): Date | null;
    set UpdatedAt(value: Date | null);
    /**
    * * Field Name: __mj_CreatedAt
    * * Display Name: Created At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_CreatedAt(): Date;
    /**
    * * Field Name: __mj_UpdatedAt
    * * Display Name: Updated At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_UpdatedAt(): Date;
}
//# sourceMappingURL=entity_subclasses.d.ts.map