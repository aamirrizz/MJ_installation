"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvProcessingLogEntity = exports.ContributorEntity = exports.ContributorContentEntity = exports.ContentEntity = exports.CsvProcessingLogSchema = exports.ContributorSchema = exports.ContributorContentSchema = exports.ContentSchema = void 0;
const core_1 = require("@memberjunction/core");
const global_1 = require("@memberjunction/global");
const zod_1 = require("zod");
/**
 * zod schema definition for the entity Contents
 */
exports.ContentSchema = zod_1.z.object({
    ID: zod_1.z.number().describe(`
        * * Field Name: ID
        * * Display Name: ID
        * * SQL Data Type: int`),
    SourceID: zod_1.z.number().nullish().describe(`
        * * Field Name: SourceID
        * * Display Name: Source ID
        * * SQL Data Type: int`),
    Source: zod_1.z.string().nullish().describe(`
        * * Field Name: Source
        * * Display Name: Source
        * * SQL Data Type: nvarchar(100)`),
    ContentID: zod_1.z.string().nullish().describe(`
        * * Field Name: ContentID
        * * Display Name: Content ID
        * * SQL Data Type: nvarchar(100)`),
    ContentType: zod_1.z.string().nullish().describe(`
        * * Field Name: ContentType
        * * Display Name: Content Type
        * * SQL Data Type: nvarchar(100)`),
    Title: zod_1.z.string().nullish().describe(`
        * * Field Name: Title
        * * Display Name: Title
        * * SQL Data Type: nvarchar(500)`),
    Text: zod_1.z.string().nullish().describe(`
        * * Field Name: Text
        * * Display Name: Text
        * * SQL Data Type: nvarchar(MAX)`),
    DOI: zod_1.z.string().nullish().describe(`
        * * Field Name: DOI
        * * Display Name: DOI
        * * SQL Data Type: nvarchar(100)`),
    URL: zod_1.z.string().nullish().describe(`
        * * Field Name: URL
        * * Display Name: URL
        * * SQL Data Type: nvarchar(MAX)`),
    Date: zod_1.z.date().nullish().describe(`
        * * Field Name: Date
        * * Display Name: Date
        * * SQL Data Type: date`),
    EmbeddingID: zod_1.z.string().nullish().describe(`
        * * Field Name: EmbeddingID
        * * Display Name: Embedding ID
        * * SQL Data Type: nvarchar(50)`),
    UpdateVector: zod_1.z.boolean().describe(`
        * * Field Name: UpdateVector
        * * Display Name: Update Vector
        * * SQL Data Type: bit
        * * Default Value: 1`),
    isError: zod_1.z.boolean().describe(`
        * * Field Name: isError
        * * Display Name: is Error
        * * SQL Data Type: bit
        * * Default Value: 0`),
    __mj_CreatedAt: zod_1.z.date().describe(`
        * * Field Name: __mj_CreatedAt
        * * Display Name: Created At
        * * SQL Data Type: datetimeoffset
        * * Default Value: getutcdate()`),
    __mj_UpdatedAt: zod_1.z.date().describe(`
        * * Field Name: __mj_UpdatedAt
        * * Display Name: Updated At
        * * SQL Data Type: datetimeoffset
        * * Default Value: getutcdate()`),
});
/**
 * zod schema definition for the entity Contributor Contents
 */
exports.ContributorContentSchema = zod_1.z.object({
    ID: zod_1.z.number().describe(`
        * * Field Name: ID
        * * Display Name: ID
        * * SQL Data Type: int`),
    SourceID: zod_1.z.number().describe(`
        * * Field Name: SourceID
        * * Display Name: Source ID
        * * SQL Data Type: int`),
    Source: zod_1.z.string().describe(`
        * * Field Name: Source
        * * Display Name: Source
        * * SQL Data Type: varchar(15)`),
    ContributorID: zod_1.z.number().describe(`
        * * Field Name: ContributorID
        * * Display Name: Contributor ID
        * * SQL Data Type: int`),
    ContentID: zod_1.z.number().nullish().describe(`
        * * Field Name: ContentID
        * * Display Name: Content ID
        * * SQL Data Type: int`),
    DOI: zod_1.z.string().nullish().describe(`
        * * Field Name: DOI
        * * Display Name: DOI
        * * SQL Data Type: nvarchar(100)`),
    Role1: zod_1.z.string().nullish().describe(`
        * * Field Name: Role1
        * * Display Name: Role 1
        * * SQL Data Type: nvarchar(100)`),
    Role2: zod_1.z.string().nullish().describe(`
        * * Field Name: Role2
        * * Display Name: Role 2
        * * SQL Data Type: nvarchar(100)`),
    CorrespondingAuthor: zod_1.z.number().nullish().describe(`
        * * Field Name: CorrespondingAuthor
        * * Display Name: Corresponding Author
        * * SQL Data Type: int`),
    Affiliation: zod_1.z.string().nullish().describe(`
        * * Field Name: Affiliation
        * * Display Name: Affiliation
        * * SQL Data Type: nvarchar(500)`),
    Order: zod_1.z.number().nullish().describe(`
        * * Field Name: Order
        * * Display Name: Order
        * * SQL Data Type: int`),
    __mj_CreatedAt: zod_1.z.date().describe(`
        * * Field Name: __mj_CreatedAt
        * * Display Name: Created At
        * * SQL Data Type: datetimeoffset
        * * Default Value: getutcdate()`),
    __mj_UpdatedAt: zod_1.z.date().describe(`
        * * Field Name: __mj_UpdatedAt
        * * Display Name: Updated At
        * * SQL Data Type: datetimeoffset
        * * Default Value: getutcdate()`),
});
/**
 * zod schema definition for the entity Contributors
 */
exports.ContributorSchema = zod_1.z.object({
    ID: zod_1.z.number().describe(`
        * * Field Name: ID
        * * Display Name: ID
        * * SQL Data Type: int`),
    CustomerID: zod_1.z.string().describe(`
        * * Field Name: CustomerID
        * * Display Name: Customer ID
        * * SQL Data Type: nvarchar(100)`),
    Name: zod_1.z.string().nullish().describe(`
        * * Field Name: Name
        * * Display Name: Name
        * * SQL Data Type: nvarchar(100)`),
    Organization: zod_1.z.string().nullish().describe(`
        * * Field Name: Organization
        * * Display Name: Organization
        * * SQL Data Type: nvarchar(500)`),
    JobTitle: zod_1.z.string().nullish().describe(`
        * * Field Name: JobTitle
        * * Display Name: Job Title
        * * SQL Data Type: nvarchar(50)`),
    DOI: zod_1.z.string().nullish().describe(`
        * * Field Name: DOI
        * * Display Name: DOI
        * * SQL Data Type: nvarchar(100)`),
    Role1: zod_1.z.string().nullish().describe(`
        * * Field Name: Role1
        * * Display Name: Role 1
        * * SQL Data Type: nvarchar(100)`),
    Role2: zod_1.z.string().nullish().describe(`
        * * Field Name: Role2
        * * Display Name: Role 2
        * * SQL Data Type: nvarchar(100)`),
    Affiliation: zod_1.z.string().nullish().describe(`
        * * Field Name: Affiliation
        * * Display Name: Affiliation
        * * SQL Data Type: nvarchar(200)`),
    Order: zod_1.z.number().nullish().describe(`
        * * Field Name: Order
        * * Display Name: Order
        * * SQL Data Type: tinyint`),
    ContentTotal: zod_1.z.number().nullish().describe(`
        * * Field Name: ContentTotal
        * * Display Name: Content Total
        * * SQL Data Type: int`),
    EmbeddingID: zod_1.z.string().nullish().describe(`
        * * Field Name: EmbeddingID
        * * Display Name: Embedding ID
        * * SQL Data Type: nvarchar(50)`),
    UpdateVector: zod_1.z.boolean().describe(`
        * * Field Name: UpdateVector
        * * Display Name: Update Vector
        * * SQL Data Type: bit
        * * Default Value: 1`),
    DoNotDisplay: zod_1.z.boolean().describe(`
        * * Field Name: DoNotDisplay
        * * Display Name: Do Not Display
        * * SQL Data Type: bit
        * * Default Value: 0`),
    isError: zod_1.z.boolean().describe(`
        * * Field Name: isError
        * * Display Name: is Error
        * * SQL Data Type: bit
        * * Default Value: 0`),
    __mj_CreatedAt: zod_1.z.date().describe(`
        * * Field Name: __mj_CreatedAt
        * * Display Name: Created At
        * * SQL Data Type: datetimeoffset
        * * Default Value: getutcdate()`),
    __mj_UpdatedAt: zod_1.z.date().describe(`
        * * Field Name: __mj_UpdatedAt
        * * Display Name: Updated At
        * * SQL Data Type: datetimeoffset
        * * Default Value: getutcdate()`),
});
/**
 * zod schema definition for the entity Csv Processing Logs
 */
exports.CsvProcessingLogSchema = zod_1.z.object({
    ID: zod_1.z.number().describe(`
        * * Field Name: ID
        * * Display Name: ID
        * * SQL Data Type: int`),
    TotalRecords: zod_1.z.number().nullish().describe(`
        * * Field Name: TotalRecords
        * * Display Name: Total Records
        * * SQL Data Type: int`),
    ProcessedRecords: zod_1.z.number().nullish().describe(`
        * * Field Name: ProcessedRecords
        * * Display Name: Processed Records
        * * SQL Data Type: int`),
    FileName: zod_1.z.string().nullish().describe(`
        * * Field Name: FileName
        * * Display Name: File Name
        * * SQL Data Type: nvarchar(255)`),
    CreatedAt: zod_1.z.date().nullish().describe(`
        * * Field Name: CreatedAt
        * * Display Name: Created At
        * * SQL Data Type: datetime
        * * Default Value: getdate()`),
    UpdatedAt: zod_1.z.date().nullish().describe(`
        * * Field Name: UpdatedAt
        * * Display Name: Updated At
        * * SQL Data Type: datetime`),
    __mj_CreatedAt: zod_1.z.date().describe(`
        * * Field Name: __mj_CreatedAt
        * * Display Name: Created At
        * * SQL Data Type: datetimeoffset
        * * Default Value: getutcdate()`),
    __mj_UpdatedAt: zod_1.z.date().describe(`
        * * Field Name: __mj_UpdatedAt
        * * Display Name: Updated At
        * * SQL Data Type: datetimeoffset
        * * Default Value: getutcdate()`),
});
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
let ContentEntity = class ContentEntity extends core_1.BaseEntity {
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
    async Load(ID, EntityRelationshipsToLoad = null) {
        const compositeKey = new core_1.CompositeKey();
        compositeKey.KeyValuePairs.push({ FieldName: 'ID', Value: ID });
        return await super.InnerLoad(compositeKey, EntityRelationshipsToLoad);
    }
    /**
    * * Field Name: ID
    * * Display Name: ID
    * * SQL Data Type: int
    */
    get ID() {
        return this.Get('ID');
    }
    /**
    * * Field Name: SourceID
    * * Display Name: Source ID
    * * SQL Data Type: int
    */
    get SourceID() {
        return this.Get('SourceID');
    }
    set SourceID(value) {
        this.Set('SourceID', value);
    }
    /**
    * * Field Name: Source
    * * Display Name: Source
    * * SQL Data Type: nvarchar(100)
    */
    get Source() {
        return this.Get('Source');
    }
    set Source(value) {
        this.Set('Source', value);
    }
    /**
    * * Field Name: ContentID
    * * Display Name: Content ID
    * * SQL Data Type: nvarchar(100)
    */
    get ContentID() {
        return this.Get('ContentID');
    }
    set ContentID(value) {
        this.Set('ContentID', value);
    }
    /**
    * * Field Name: ContentType
    * * Display Name: Content Type
    * * SQL Data Type: nvarchar(100)
    */
    get ContentType() {
        return this.Get('ContentType');
    }
    set ContentType(value) {
        this.Set('ContentType', value);
    }
    /**
    * * Field Name: Title
    * * Display Name: Title
    * * SQL Data Type: nvarchar(500)
    */
    get Title() {
        return this.Get('Title');
    }
    set Title(value) {
        this.Set('Title', value);
    }
    /**
    * * Field Name: Text
    * * Display Name: Text
    * * SQL Data Type: nvarchar(MAX)
    */
    get Text() {
        return this.Get('Text');
    }
    set Text(value) {
        this.Set('Text', value);
    }
    /**
    * * Field Name: DOI
    * * Display Name: DOI
    * * SQL Data Type: nvarchar(100)
    */
    get DOI() {
        return this.Get('DOI');
    }
    set DOI(value) {
        this.Set('DOI', value);
    }
    /**
    * * Field Name: URL
    * * Display Name: URL
    * * SQL Data Type: nvarchar(MAX)
    */
    get URL() {
        return this.Get('URL');
    }
    set URL(value) {
        this.Set('URL', value);
    }
    /**
    * * Field Name: Date
    * * Display Name: Date
    * * SQL Data Type: date
    */
    get Date() {
        return this.Get('Date');
    }
    set Date(value) {
        this.Set('Date', value);
    }
    /**
    * * Field Name: EmbeddingID
    * * Display Name: Embedding ID
    * * SQL Data Type: nvarchar(50)
    */
    get EmbeddingID() {
        return this.Get('EmbeddingID');
    }
    set EmbeddingID(value) {
        this.Set('EmbeddingID', value);
    }
    /**
    * * Field Name: UpdateVector
    * * Display Name: Update Vector
    * * SQL Data Type: bit
    * * Default Value: 1
    */
    get UpdateVector() {
        return this.Get('UpdateVector');
    }
    set UpdateVector(value) {
        this.Set('UpdateVector', value);
    }
    /**
    * * Field Name: isError
    * * Display Name: is Error
    * * SQL Data Type: bit
    * * Default Value: 0
    */
    get isError() {
        return this.Get('isError');
    }
    set isError(value) {
        this.Set('isError', value);
    }
    /**
    * * Field Name: __mj_CreatedAt
    * * Display Name: Created At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_CreatedAt() {
        return this.Get('__mj_CreatedAt');
    }
    /**
    * * Field Name: __mj_UpdatedAt
    * * Display Name: Updated At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_UpdatedAt() {
        return this.Get('__mj_UpdatedAt');
    }
};
exports.ContentEntity = ContentEntity;
exports.ContentEntity = ContentEntity = __decorate([
    (0, global_1.RegisterClass)(core_1.BaseEntity, 'Contents')
], ContentEntity);
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
let ContributorContentEntity = class ContributorContentEntity extends core_1.BaseEntity {
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
    async Load(ID, EntityRelationshipsToLoad = null) {
        const compositeKey = new core_1.CompositeKey();
        compositeKey.KeyValuePairs.push({ FieldName: 'ID', Value: ID });
        return await super.InnerLoad(compositeKey, EntityRelationshipsToLoad);
    }
    /**
    * * Field Name: ID
    * * Display Name: ID
    * * SQL Data Type: int
    */
    get ID() {
        return this.Get('ID');
    }
    /**
    * * Field Name: SourceID
    * * Display Name: Source ID
    * * SQL Data Type: int
    */
    get SourceID() {
        return this.Get('SourceID');
    }
    set SourceID(value) {
        this.Set('SourceID', value);
    }
    /**
    * * Field Name: Source
    * * Display Name: Source
    * * SQL Data Type: varchar(15)
    */
    get Source() {
        return this.Get('Source');
    }
    set Source(value) {
        this.Set('Source', value);
    }
    /**
    * * Field Name: ContributorID
    * * Display Name: Contributor ID
    * * SQL Data Type: int
    */
    get ContributorID() {
        return this.Get('ContributorID');
    }
    set ContributorID(value) {
        this.Set('ContributorID', value);
    }
    /**
    * * Field Name: ContentID
    * * Display Name: Content ID
    * * SQL Data Type: int
    */
    get ContentID() {
        return this.Get('ContentID');
    }
    set ContentID(value) {
        this.Set('ContentID', value);
    }
    /**
    * * Field Name: DOI
    * * Display Name: DOI
    * * SQL Data Type: nvarchar(100)
    */
    get DOI() {
        return this.Get('DOI');
    }
    set DOI(value) {
        this.Set('DOI', value);
    }
    /**
    * * Field Name: Role1
    * * Display Name: Role 1
    * * SQL Data Type: nvarchar(100)
    */
    get Role1() {
        return this.Get('Role1');
    }
    set Role1(value) {
        this.Set('Role1', value);
    }
    /**
    * * Field Name: Role2
    * * Display Name: Role 2
    * * SQL Data Type: nvarchar(100)
    */
    get Role2() {
        return this.Get('Role2');
    }
    set Role2(value) {
        this.Set('Role2', value);
    }
    /**
    * * Field Name: CorrespondingAuthor
    * * Display Name: Corresponding Author
    * * SQL Data Type: int
    */
    get CorrespondingAuthor() {
        return this.Get('CorrespondingAuthor');
    }
    set CorrespondingAuthor(value) {
        this.Set('CorrespondingAuthor', value);
    }
    /**
    * * Field Name: Affiliation
    * * Display Name: Affiliation
    * * SQL Data Type: nvarchar(500)
    */
    get Affiliation() {
        return this.Get('Affiliation');
    }
    set Affiliation(value) {
        this.Set('Affiliation', value);
    }
    /**
    * * Field Name: Order
    * * Display Name: Order
    * * SQL Data Type: int
    */
    get Order() {
        return this.Get('Order');
    }
    set Order(value) {
        this.Set('Order', value);
    }
    /**
    * * Field Name: __mj_CreatedAt
    * * Display Name: Created At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_CreatedAt() {
        return this.Get('__mj_CreatedAt');
    }
    /**
    * * Field Name: __mj_UpdatedAt
    * * Display Name: Updated At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_UpdatedAt() {
        return this.Get('__mj_UpdatedAt');
    }
};
exports.ContributorContentEntity = ContributorContentEntity;
exports.ContributorContentEntity = ContributorContentEntity = __decorate([
    (0, global_1.RegisterClass)(core_1.BaseEntity, 'Contributor Contents')
], ContributorContentEntity);
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
let ContributorEntity = class ContributorEntity extends core_1.BaseEntity {
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
    async Load(ID, EntityRelationshipsToLoad = null) {
        const compositeKey = new core_1.CompositeKey();
        compositeKey.KeyValuePairs.push({ FieldName: 'ID', Value: ID });
        return await super.InnerLoad(compositeKey, EntityRelationshipsToLoad);
    }
    /**
    * * Field Name: ID
    * * Display Name: ID
    * * SQL Data Type: int
    */
    get ID() {
        return this.Get('ID');
    }
    /**
    * * Field Name: CustomerID
    * * Display Name: Customer ID
    * * SQL Data Type: nvarchar(100)
    */
    get CustomerID() {
        return this.Get('CustomerID');
    }
    set CustomerID(value) {
        this.Set('CustomerID', value);
    }
    /**
    * * Field Name: Name
    * * Display Name: Name
    * * SQL Data Type: nvarchar(100)
    */
    get Name() {
        return this.Get('Name');
    }
    set Name(value) {
        this.Set('Name', value);
    }
    /**
    * * Field Name: Organization
    * * Display Name: Organization
    * * SQL Data Type: nvarchar(500)
    */
    get Organization() {
        return this.Get('Organization');
    }
    set Organization(value) {
        this.Set('Organization', value);
    }
    /**
    * * Field Name: JobTitle
    * * Display Name: Job Title
    * * SQL Data Type: nvarchar(50)
    */
    get JobTitle() {
        return this.Get('JobTitle');
    }
    set JobTitle(value) {
        this.Set('JobTitle', value);
    }
    /**
    * * Field Name: DOI
    * * Display Name: DOI
    * * SQL Data Type: nvarchar(100)
    */
    get DOI() {
        return this.Get('DOI');
    }
    set DOI(value) {
        this.Set('DOI', value);
    }
    /**
    * * Field Name: Role1
    * * Display Name: Role 1
    * * SQL Data Type: nvarchar(100)
    */
    get Role1() {
        return this.Get('Role1');
    }
    set Role1(value) {
        this.Set('Role1', value);
    }
    /**
    * * Field Name: Role2
    * * Display Name: Role 2
    * * SQL Data Type: nvarchar(100)
    */
    get Role2() {
        return this.Get('Role2');
    }
    set Role2(value) {
        this.Set('Role2', value);
    }
    /**
    * * Field Name: Affiliation
    * * Display Name: Affiliation
    * * SQL Data Type: nvarchar(200)
    */
    get Affiliation() {
        return this.Get('Affiliation');
    }
    set Affiliation(value) {
        this.Set('Affiliation', value);
    }
    /**
    * * Field Name: Order
    * * Display Name: Order
    * * SQL Data Type: tinyint
    */
    get Order() {
        return this.Get('Order');
    }
    set Order(value) {
        this.Set('Order', value);
    }
    /**
    * * Field Name: ContentTotal
    * * Display Name: Content Total
    * * SQL Data Type: int
    */
    get ContentTotal() {
        return this.Get('ContentTotal');
    }
    set ContentTotal(value) {
        this.Set('ContentTotal', value);
    }
    /**
    * * Field Name: EmbeddingID
    * * Display Name: Embedding ID
    * * SQL Data Type: nvarchar(50)
    */
    get EmbeddingID() {
        return this.Get('EmbeddingID');
    }
    set EmbeddingID(value) {
        this.Set('EmbeddingID', value);
    }
    /**
    * * Field Name: UpdateVector
    * * Display Name: Update Vector
    * * SQL Data Type: bit
    * * Default Value: 1
    */
    get UpdateVector() {
        return this.Get('UpdateVector');
    }
    set UpdateVector(value) {
        this.Set('UpdateVector', value);
    }
    /**
    * * Field Name: DoNotDisplay
    * * Display Name: Do Not Display
    * * SQL Data Type: bit
    * * Default Value: 0
    */
    get DoNotDisplay() {
        return this.Get('DoNotDisplay');
    }
    set DoNotDisplay(value) {
        this.Set('DoNotDisplay', value);
    }
    /**
    * * Field Name: isError
    * * Display Name: is Error
    * * SQL Data Type: bit
    * * Default Value: 0
    */
    get isError() {
        return this.Get('isError');
    }
    set isError(value) {
        this.Set('isError', value);
    }
    /**
    * * Field Name: __mj_CreatedAt
    * * Display Name: Created At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_CreatedAt() {
        return this.Get('__mj_CreatedAt');
    }
    /**
    * * Field Name: __mj_UpdatedAt
    * * Display Name: Updated At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_UpdatedAt() {
        return this.Get('__mj_UpdatedAt');
    }
};
exports.ContributorEntity = ContributorEntity;
exports.ContributorEntity = ContributorEntity = __decorate([
    (0, global_1.RegisterClass)(core_1.BaseEntity, 'Contributors')
], ContributorEntity);
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
let CsvProcessingLogEntity = class CsvProcessingLogEntity extends core_1.BaseEntity {
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
    async Load(ID, EntityRelationshipsToLoad = null) {
        const compositeKey = new core_1.CompositeKey();
        compositeKey.KeyValuePairs.push({ FieldName: 'ID', Value: ID });
        return await super.InnerLoad(compositeKey, EntityRelationshipsToLoad);
    }
    /**
    * * Field Name: ID
    * * Display Name: ID
    * * SQL Data Type: int
    */
    get ID() {
        return this.Get('ID');
    }
    /**
    * * Field Name: TotalRecords
    * * Display Name: Total Records
    * * SQL Data Type: int
    */
    get TotalRecords() {
        return this.Get('TotalRecords');
    }
    set TotalRecords(value) {
        this.Set('TotalRecords', value);
    }
    /**
    * * Field Name: ProcessedRecords
    * * Display Name: Processed Records
    * * SQL Data Type: int
    */
    get ProcessedRecords() {
        return this.Get('ProcessedRecords');
    }
    set ProcessedRecords(value) {
        this.Set('ProcessedRecords', value);
    }
    /**
    * * Field Name: FileName
    * * Display Name: File Name
    * * SQL Data Type: nvarchar(255)
    */
    get FileName() {
        return this.Get('FileName');
    }
    set FileName(value) {
        this.Set('FileName', value);
    }
    /**
    * * Field Name: CreatedAt
    * * Display Name: Created At
    * * SQL Data Type: datetime
    * * Default Value: getdate()
    */
    get CreatedAt() {
        return this.Get('CreatedAt');
    }
    set CreatedAt(value) {
        this.Set('CreatedAt', value);
    }
    /**
    * * Field Name: UpdatedAt
    * * Display Name: Updated At
    * * SQL Data Type: datetime
    */
    get UpdatedAt() {
        return this.Get('UpdatedAt');
    }
    set UpdatedAt(value) {
        this.Set('UpdatedAt', value);
    }
    /**
    * * Field Name: __mj_CreatedAt
    * * Display Name: Created At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_CreatedAt() {
        return this.Get('__mj_CreatedAt');
    }
    /**
    * * Field Name: __mj_UpdatedAt
    * * Display Name: Updated At
    * * SQL Data Type: datetimeoffset
    * * Default Value: getutcdate()
    */
    get __mj_UpdatedAt() {
        return this.Get('__mj_UpdatedAt');
    }
};
exports.CsvProcessingLogEntity = CsvProcessingLogEntity;
exports.CsvProcessingLogEntity = CsvProcessingLogEntity = __decorate([
    (0, global_1.RegisterClass)(core_1.BaseEntity, 'Csv Processing Logs')
], CsvProcessingLogEntity);
//# sourceMappingURL=entity_subclasses.js.map