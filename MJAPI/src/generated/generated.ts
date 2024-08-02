/********************************************************************************
* ALL ENTITIES - TypeGraphQL Type Class Definition - AUTO GENERATED FILE
* Generated Entities and Resolvers for Server
*
* GENERATED: 2/8/2024, 3:43:37 pm
*
*   >>> DO NOT MODIFY THIS FILE!!!!!!!!!!!!
*   >>> YOUR CHANGES WILL BE OVERWRITTEN
*   >>> THE NEXT TIME THIS FILE IS GENERATED
*
**********************************************************************************/
import { Arg, Ctx, Int, Query, Resolver, Field, Float, ObjectType, FieldResolver, Root, InputType, Mutation,
            PubSub, PubSubEngine, ResolverBase, RunViewByIDInput, RunViewByNameInput, RunDynamicViewInput,
            AppContext, KeyValuePairInput, DeleteOptionsInput } from '@memberjunction/server';
import { Metadata, EntityPermissionType, CompositeKey } from '@memberjunction/core'

import { MaxLength } from 'class-validator';
import { DataSource } from 'typeorm';
import * as mj_core_schema_server_object_types from '@memberjunction/server'


import { ContentEntity, ContributorEntity, ContributorContentEntity, CsvProcessingLogEntity } from 'mj_generatedentities';
    

//****************************************************************************
// ENTITY CLASS for Contents
//****************************************************************************
@ObjectType()
export class Content_ {
    @Field(() => Int) 
    ID: number;
        
    @Field(() => Int, {nullable: true}) 
    SourceID?: number;
        
    @Field({nullable: true}) 
    @MaxLength(200)
    Source?: string;
        
    @Field({nullable: true}) 
    @MaxLength(200)
    ContentID?: string;
        
    @Field({nullable: true}) 
    @MaxLength(200)
    ContentType?: string;
        
    @Field({nullable: true}) 
    @MaxLength(1000)
    Title?: string;
        
    @Field({nullable: true}) 
    Text?: string;
        
    @Field({nullable: true}) 
    @MaxLength(200)
    DOI?: string;
        
    @Field({nullable: true}) 
    URL?: string;
        
    @Field({nullable: true}) 
    @MaxLength(3)
    Date?: Date;
        
    @Field({nullable: true}) 
    @MaxLength(100)
    EmbeddingID?: string;
        
    @Field(() => Boolean) 
    UpdateVector: boolean;
        
    @Field(() => Boolean) 
    isError: boolean;
        
    @Field() 
    @MaxLength(10)
    _mj__CreatedAt: Date;
        
    @Field() 
    @MaxLength(10)
    _mj__UpdatedAt: Date;
        
}

//****************************************************************************
// INPUT TYPE for Contents
//****************************************************************************
@InputType()
export class CreateContentInput {
    @Field(() => Int, { nullable: true })
    SourceID?: number;

    @Field({ nullable: true })
    Source?: string;

    @Field({ nullable: true })
    ContentID?: string;

    @Field({ nullable: true })
    ContentType?: string;

    @Field({ nullable: true })
    Title?: string;

    @Field({ nullable: true })
    Text?: string;

    @Field({ nullable: true })
    DOI?: string;

    @Field({ nullable: true })
    URL?: string;

    @Field({ nullable: true })
    Date?: Date;

    @Field({ nullable: true })
    EmbeddingID?: string;

    @Field(() => Boolean)
    UpdateVector: boolean;

    @Field(() => Boolean)
    isError: boolean;
}
    

//****************************************************************************
// INPUT TYPE for Contents
//****************************************************************************
@InputType()
export class UpdateContentInput {
    @Field(() => Int)
    ID: number;

    @Field(() => Int, { nullable: true })
    SourceID?: number;

    @Field({ nullable: true })
    Source?: string;

    @Field({ nullable: true })
    ContentID?: string;

    @Field({ nullable: true })
    ContentType?: string;

    @Field({ nullable: true })
    Title?: string;

    @Field({ nullable: true })
    Text?: string;

    @Field({ nullable: true })
    DOI?: string;

    @Field({ nullable: true })
    URL?: string;

    @Field({ nullable: true })
    Date?: Date;

    @Field({ nullable: true })
    EmbeddingID?: string;

    @Field(() => Boolean)
    UpdateVector: boolean;

    @Field(() => Boolean)
    isError: boolean;

    @Field(() => [KeyValuePairInput], { nullable: true })
    OldValues___?: KeyValuePairInput[];
}
    
//****************************************************************************
// RESOLVER for Contents
//****************************************************************************
@ObjectType()
export class RunContentViewResult {
    @Field(() => [Content_])
    Results: Content_[];

    @Field(() => String, {nullable: true})
    UserViewRunID?: string;

    @Field(() => Int, {nullable: true})
    RowCount: number;

    @Field(() => Int, {nullable: true})
    TotalRowCount: number;

    @Field(() => Int, {nullable: true})
    ExecutionTime: number;

    @Field({nullable: true})
    ErrorMessage?: string;

    @Field(() => Boolean, {nullable: false})
    Success: boolean;
}

@Resolver(Content_)
export class ContentResolver extends ResolverBase {
    @Query(() => RunContentViewResult)
    async RunContentViewByID(@Arg('input', () => RunViewByIDInput) input: RunViewByIDInput, @Ctx() { dataSource, userPayload }: AppContext, @PubSub() pubSub: PubSubEngine) {
        return super.RunViewByIDGeneric(input, dataSource, userPayload, pubSub);
    }

    @Query(() => RunContentViewResult)
    async RunContentViewByName(@Arg('input', () => RunViewByNameInput) input: RunViewByNameInput, @Ctx() { dataSource, userPayload }: AppContext, @PubSub() pubSub: PubSubEngine) {
        return super.RunViewByNameGeneric(input, dataSource, userPayload, pubSub);
    }

    @Query(() => RunContentViewResult)
    async RunContentDynamicView(@Arg('input', () => RunDynamicViewInput) input: RunDynamicViewInput, @Ctx() { dataSource, userPayload }: AppContext, @PubSub() pubSub: PubSubEngine) {
        input.EntityName = 'Contents';
        return super.RunDynamicViewGeneric(input, dataSource, userPayload, pubSub);
    }
    @Query(() => Content_, { nullable: true })
    async Content(@Arg('ID', () => Int) ID: number, @Ctx() { dataSource, userPayload }: AppContext, @PubSub() pubSub: PubSubEngine): Promise<Content_ | null> {
        this.CheckUserReadPermissions('Contents', userPayload);
        const sSQL = `SELECT * FROM [dbo].[vwContents] WHERE [ID]=${ID} ` + this.getRowLevelSecurityWhereClause('Contents', userPayload, EntityPermissionType.Read, 'AND');
        const result = this.MapFieldNamesToCodeNames('Contents', await dataSource.query(sSQL).then((r) => r && r.length > 0 ? r[0] : {}))
        return result;
    }
    
    @Mutation(() => Content_)
    async CreateContent(
        @Arg('input', () => CreateContentInput) input: CreateContentInput,
        @Ctx() { dataSource, userPayload }: AppContext,
        @PubSub() pubSub: PubSubEngine
    ) {
        return this.CreateRecord('Contents', input, dataSource, userPayload, pubSub)
    }
        
    @Mutation(() => Content_)
    async UpdateContent(
        @Arg('input', () => UpdateContentInput) input: UpdateContentInput,
        @Ctx() { dataSource, userPayload }: AppContext,
        @PubSub() pubSub: PubSubEngine
    ) {
        return this.UpdateRecord('Contents', input, dataSource, userPayload, pubSub);
    }
    
    @Mutation(() => Content_)
    async DeleteContent(@Arg('ID', () => Int) ID: number, @Arg('options___', () => DeleteOptionsInput) options: DeleteOptionsInput, @Ctx() { dataSource, userPayload }: AppContext, @PubSub() pubSub: PubSubEngine) {
        const key = new CompositeKey([{FieldName: 'ID', Value: ID}]);
        return this.DeleteRecord('Contents', key, options, dataSource, userPayload, pubSub);
    }
    
}

//****************************************************************************
// ENTITY CLASS for Contributors
//****************************************************************************
@ObjectType()
export class Contributor_ {
    @Field(() => Int) 
    ID: number;
        
    @Field() 
    @MaxLength(200)
    CustomerID: string;
        
    @Field({nullable: true}) 
    @MaxLength(200)
    Name?: string;
        
    @Field({nullable: true}) 
    @MaxLength(1000)
    Organization?: string;
        
    @Field({nullable: true}) 
    @MaxLength(100)
    JobTitle?: string;
        
    @Field({nullable: true}) 
    @MaxLength(200)
    DOI?: string;
        
    @Field({nullable: true}) 
    @MaxLength(200)
    Role1?: string;
        
    @Field({nullable: true}) 
    @MaxLength(200)
    Role2?: string;
        
    @Field({nullable: true}) 
    @MaxLength(400)
    Affiliation?: string;
        
    @Field(() => Int, {nullable: true}) 
    Order?: number;
        
    @Field(() => Int, {nullable: true}) 
    ContentTotal?: number;
        
    @Field({nullable: true}) 
    @MaxLength(100)
    EmbeddingID?: string;
        
    @Field(() => Boolean) 
    UpdateVector: boolean;
        
    @Field(() => Boolean) 
    DoNotDisplay: boolean;
        
    @Field(() => Boolean) 
    isError: boolean;
        
    @Field() 
    @MaxLength(10)
    _mj__CreatedAt: Date;
        
    @Field() 
    @MaxLength(10)
    _mj__UpdatedAt: Date;
        
}

//****************************************************************************
// INPUT TYPE for Contributors
//****************************************************************************
@InputType()
export class CreateContributorInput {
    @Field()
    CustomerID: string;

    @Field({ nullable: true })
    Name?: string;

    @Field({ nullable: true })
    Organization?: string;

    @Field({ nullable: true })
    JobTitle?: string;

    @Field({ nullable: true })
    DOI?: string;

    @Field({ nullable: true })
    Role1?: string;

    @Field({ nullable: true })
    Role2?: string;

    @Field({ nullable: true })
    Affiliation?: string;

    @Field(() => Int, { nullable: true })
    Order?: number;

    @Field(() => Int, { nullable: true })
    ContentTotal?: number;

    @Field({ nullable: true })
    EmbeddingID?: string;

    @Field(() => Boolean)
    UpdateVector: boolean;

    @Field(() => Boolean)
    DoNotDisplay: boolean;

    @Field(() => Boolean)
    isError: boolean;
}
    

//****************************************************************************
// INPUT TYPE for Contributors
//****************************************************************************
@InputType()
export class UpdateContributorInput {
    @Field(() => Int)
    ID: number;

    @Field()
    CustomerID: string;

    @Field({ nullable: true })
    Name?: string;

    @Field({ nullable: true })
    Organization?: string;

    @Field({ nullable: true })
    JobTitle?: string;

    @Field({ nullable: true })
    DOI?: string;

    @Field({ nullable: true })
    Role1?: string;

    @Field({ nullable: true })
    Role2?: string;

    @Field({ nullable: true })
    Affiliation?: string;

    @Field(() => Int, { nullable: true })
    Order?: number;

    @Field(() => Int, { nullable: true })
    ContentTotal?: number;

    @Field({ nullable: true })
    EmbeddingID?: string;

    @Field(() => Boolean)
    UpdateVector: boolean;

    @Field(() => Boolean)
    DoNotDisplay: boolean;

    @Field(() => Boolean)
    isError: boolean;

    @Field(() => [KeyValuePairInput], { nullable: true })
    OldValues___?: KeyValuePairInput[];
}
    
//****************************************************************************
// RESOLVER for Contributors
//****************************************************************************
@ObjectType()
export class RunContributorViewResult {
    @Field(() => [Contributor_])
    Results: Contributor_[];

    @Field(() => String, {nullable: true})
    UserViewRunID?: string;

    @Field(() => Int, {nullable: true})
    RowCount: number;

    @Field(() => Int, {nullable: true})
    TotalRowCount: number;

    @Field(() => Int, {nullable: true})
    ExecutionTime: number;

    @Field({nullable: true})
    ErrorMessage?: string;

    @Field(() => Boolean, {nullable: false})
    Success: boolean;
}

@Resolver(Contributor_)
export class ContributorResolver extends ResolverBase {
    @Query(() => RunContributorViewResult)
    async RunContributorViewByID(@Arg('input', () => RunViewByIDInput) input: RunViewByIDInput, @Ctx() { dataSource, userPayload }: AppContext, @PubSub() pubSub: PubSubEngine) {
        return super.RunViewByIDGeneric(input, dataSource, userPayload, pubSub);
    }

    @Query(() => RunContributorViewResult)
    async RunContributorViewByName(@Arg('input', () => RunViewByNameInput) input: RunViewByNameInput, @Ctx() { dataSource, userPayload }: AppContext, @PubSub() pubSub: PubSubEngine) {
        return super.RunViewByNameGeneric(input, dataSource, userPayload, pubSub);
    }

    @Query(() => RunContributorViewResult)
    async RunContributorDynamicView(@Arg('input', () => RunDynamicViewInput) input: RunDynamicViewInput, @Ctx() { dataSource, userPayload }: AppContext, @PubSub() pubSub: PubSubEngine) {
        input.EntityName = 'Contributors';
        return super.RunDynamicViewGeneric(input, dataSource, userPayload, pubSub);
    }
    @Query(() => Contributor_, { nullable: true })
    async Contributor(@Arg('ID', () => Int) ID: number, @Ctx() { dataSource, userPayload }: AppContext, @PubSub() pubSub: PubSubEngine): Promise<Contributor_ | null> {
        this.CheckUserReadPermissions('Contributors', userPayload);
        const sSQL = `SELECT * FROM [dbo].[vwContributors] WHERE [ID]=${ID} ` + this.getRowLevelSecurityWhereClause('Contributors', userPayload, EntityPermissionType.Read, 'AND');
        const result = this.MapFieldNamesToCodeNames('Contributors', await dataSource.query(sSQL).then((r) => r && r.length > 0 ? r[0] : {}))
        return result;
    }
    
    @Mutation(() => Contributor_)
    async CreateContributor(
        @Arg('input', () => CreateContributorInput) input: CreateContributorInput,
        @Ctx() { dataSource, userPayload }: AppContext,
        @PubSub() pubSub: PubSubEngine
    ) {
        return this.CreateRecord('Contributors', input, dataSource, userPayload, pubSub)
    }
        
    @Mutation(() => Contributor_)
    async UpdateContributor(
        @Arg('input', () => UpdateContributorInput) input: UpdateContributorInput,
        @Ctx() { dataSource, userPayload }: AppContext,
        @PubSub() pubSub: PubSubEngine
    ) {
        return this.UpdateRecord('Contributors', input, dataSource, userPayload, pubSub);
    }
    
    @Mutation(() => Contributor_)
    async DeleteContributor(@Arg('ID', () => Int) ID: number, @Arg('options___', () => DeleteOptionsInput) options: DeleteOptionsInput, @Ctx() { dataSource, userPayload }: AppContext, @PubSub() pubSub: PubSubEngine) {
        const key = new CompositeKey([{FieldName: 'ID', Value: ID}]);
        return this.DeleteRecord('Contributors', key, options, dataSource, userPayload, pubSub);
    }
    
}

//****************************************************************************
// ENTITY CLASS for Contributor Contents
//****************************************************************************
@ObjectType()
export class ContributorContent_ {
    @Field(() => Int) 
    ID: number;
        
    @Field(() => Int) 
    SourceID: number;
        
    @Field() 
    @MaxLength(15)
    Source: string;
        
    @Field(() => Int) 
    ContributorID: number;
        
    @Field(() => Int, {nullable: true}) 
    ContentID?: number;
        
    @Field({nullable: true}) 
    @MaxLength(200)
    DOI?: string;
        
    @Field({nullable: true}) 
    @MaxLength(200)
    Role1?: string;
        
    @Field({nullable: true}) 
    @MaxLength(200)
    Role2?: string;
        
    @Field(() => Int, {nullable: true}) 
    CorrespondingAuthor?: number;
        
    @Field({nullable: true}) 
    @MaxLength(1000)
    Affiliation?: string;
        
    @Field(() => Int, {nullable: true}) 
    Order?: number;
        
    @Field() 
    @MaxLength(10)
    _mj__CreatedAt: Date;
        
    @Field() 
    @MaxLength(10)
    _mj__UpdatedAt: Date;
        
}

//****************************************************************************
// INPUT TYPE for Contributor Contents
//****************************************************************************
@InputType()
export class CreateContributorContentInput {
    @Field(() => Int)
    SourceID: number;

    @Field()
    Source: string;

    @Field(() => Int)
    ContributorID: number;

    @Field(() => Int, { nullable: true })
    ContentID?: number;

    @Field({ nullable: true })
    DOI?: string;

    @Field({ nullable: true })
    Role1?: string;

    @Field({ nullable: true })
    Role2?: string;

    @Field(() => Int, { nullable: true })
    CorrespondingAuthor?: number;

    @Field({ nullable: true })
    Affiliation?: string;

    @Field(() => Int, { nullable: true })
    Order?: number;
}
    

//****************************************************************************
// INPUT TYPE for Contributor Contents
//****************************************************************************
@InputType()
export class UpdateContributorContentInput {
    @Field(() => Int)
    ID: number;

    @Field(() => Int)
    SourceID: number;

    @Field()
    Source: string;

    @Field(() => Int)
    ContributorID: number;

    @Field(() => Int, { nullable: true })
    ContentID?: number;

    @Field({ nullable: true })
    DOI?: string;

    @Field({ nullable: true })
    Role1?: string;

    @Field({ nullable: true })
    Role2?: string;

    @Field(() => Int, { nullable: true })
    CorrespondingAuthor?: number;

    @Field({ nullable: true })
    Affiliation?: string;

    @Field(() => Int, { nullable: true })
    Order?: number;

    @Field(() => [KeyValuePairInput], { nullable: true })
    OldValues___?: KeyValuePairInput[];
}
    
//****************************************************************************
// RESOLVER for Contributor Contents
//****************************************************************************
@ObjectType()
export class RunContributorContentViewResult {
    @Field(() => [ContributorContent_])
    Results: ContributorContent_[];

    @Field(() => String, {nullable: true})
    UserViewRunID?: string;

    @Field(() => Int, {nullable: true})
    RowCount: number;

    @Field(() => Int, {nullable: true})
    TotalRowCount: number;

    @Field(() => Int, {nullable: true})
    ExecutionTime: number;

    @Field({nullable: true})
    ErrorMessage?: string;

    @Field(() => Boolean, {nullable: false})
    Success: boolean;
}

@Resolver(ContributorContent_)
export class ContributorContentResolver extends ResolverBase {
    @Query(() => RunContributorContentViewResult)
    async RunContributorContentViewByID(@Arg('input', () => RunViewByIDInput) input: RunViewByIDInput, @Ctx() { dataSource, userPayload }: AppContext, @PubSub() pubSub: PubSubEngine) {
        return super.RunViewByIDGeneric(input, dataSource, userPayload, pubSub);
    }

    @Query(() => RunContributorContentViewResult)
    async RunContributorContentViewByName(@Arg('input', () => RunViewByNameInput) input: RunViewByNameInput, @Ctx() { dataSource, userPayload }: AppContext, @PubSub() pubSub: PubSubEngine) {
        return super.RunViewByNameGeneric(input, dataSource, userPayload, pubSub);
    }

    @Query(() => RunContributorContentViewResult)
    async RunContributorContentDynamicView(@Arg('input', () => RunDynamicViewInput) input: RunDynamicViewInput, @Ctx() { dataSource, userPayload }: AppContext, @PubSub() pubSub: PubSubEngine) {
        input.EntityName = 'Contributor Contents';
        return super.RunDynamicViewGeneric(input, dataSource, userPayload, pubSub);
    }
    @Query(() => ContributorContent_, { nullable: true })
    async ContributorContent(@Arg('ID', () => Int) ID: number, @Ctx() { dataSource, userPayload }: AppContext, @PubSub() pubSub: PubSubEngine): Promise<ContributorContent_ | null> {
        this.CheckUserReadPermissions('Contributor Contents', userPayload);
        const sSQL = `SELECT * FROM [dbo].[vwContributorContents] WHERE [ID]=${ID} ` + this.getRowLevelSecurityWhereClause('Contributor Contents', userPayload, EntityPermissionType.Read, 'AND');
        const result = this.MapFieldNamesToCodeNames('Contributor Contents', await dataSource.query(sSQL).then((r) => r && r.length > 0 ? r[0] : {}))
        return result;
    }
    
    @Mutation(() => ContributorContent_)
    async CreateContributorContent(
        @Arg('input', () => CreateContributorContentInput) input: CreateContributorContentInput,
        @Ctx() { dataSource, userPayload }: AppContext,
        @PubSub() pubSub: PubSubEngine
    ) {
        return this.CreateRecord('Contributor Contents', input, dataSource, userPayload, pubSub)
    }
        
    @Mutation(() => ContributorContent_)
    async UpdateContributorContent(
        @Arg('input', () => UpdateContributorContentInput) input: UpdateContributorContentInput,
        @Ctx() { dataSource, userPayload }: AppContext,
        @PubSub() pubSub: PubSubEngine
    ) {
        return this.UpdateRecord('Contributor Contents', input, dataSource, userPayload, pubSub);
    }
    
    @Mutation(() => ContributorContent_)
    async DeleteContributorContent(@Arg('ID', () => Int) ID: number, @Arg('options___', () => DeleteOptionsInput) options: DeleteOptionsInput, @Ctx() { dataSource, userPayload }: AppContext, @PubSub() pubSub: PubSubEngine) {
        const key = new CompositeKey([{FieldName: 'ID', Value: ID}]);
        return this.DeleteRecord('Contributor Contents', key, options, dataSource, userPayload, pubSub);
    }
    
}

//****************************************************************************
// ENTITY CLASS for Csv Processing Logs
//****************************************************************************
@ObjectType()
export class CsvProcessingLog_ {
    @Field(() => Int) 
    ID: number;
        
    @Field(() => Int, {nullable: true}) 
    TotalRecords?: number;
        
    @Field(() => Int, {nullable: true}) 
    ProcessedRecords?: number;
        
    @Field({nullable: true}) 
    @MaxLength(510)
    FileName?: string;
        
    @Field({nullable: true}) 
    @MaxLength(8)
    CreatedAt?: Date;
        
    @Field({nullable: true}) 
    @MaxLength(8)
    UpdatedAt?: Date;
        
    @Field() 
    @MaxLength(10)
    _mj__CreatedAt: Date;
        
    @Field() 
    @MaxLength(10)
    _mj__UpdatedAt: Date;
        
}

//****************************************************************************
// INPUT TYPE for Csv Processing Logs
//****************************************************************************
@InputType()
export class CreateCsvProcessingLogInput {
    @Field(() => Int, { nullable: true })
    TotalRecords?: number;

    @Field(() => Int, { nullable: true })
    ProcessedRecords?: number;

    @Field({ nullable: true })
    FileName?: string;

    @Field({ nullable: true })
    CreatedAt?: Date;

    @Field({ nullable: true })
    UpdatedAt?: Date;
}
    

//****************************************************************************
// INPUT TYPE for Csv Processing Logs
//****************************************************************************
@InputType()
export class UpdateCsvProcessingLogInput {
    @Field(() => Int)
    ID: number;

    @Field(() => Int, { nullable: true })
    TotalRecords?: number;

    @Field(() => Int, { nullable: true })
    ProcessedRecords?: number;

    @Field({ nullable: true })
    FileName?: string;

    @Field({ nullable: true })
    CreatedAt?: Date;

    @Field({ nullable: true })
    UpdatedAt?: Date;

    @Field(() => [KeyValuePairInput], { nullable: true })
    OldValues___?: KeyValuePairInput[];
}
    
//****************************************************************************
// RESOLVER for Csv Processing Logs
//****************************************************************************
@ObjectType()
export class RunCsvProcessingLogViewResult {
    @Field(() => [CsvProcessingLog_])
    Results: CsvProcessingLog_[];

    @Field(() => String, {nullable: true})
    UserViewRunID?: string;

    @Field(() => Int, {nullable: true})
    RowCount: number;

    @Field(() => Int, {nullable: true})
    TotalRowCount: number;

    @Field(() => Int, {nullable: true})
    ExecutionTime: number;

    @Field({nullable: true})
    ErrorMessage?: string;

    @Field(() => Boolean, {nullable: false})
    Success: boolean;
}

@Resolver(CsvProcessingLog_)
export class CsvProcessingLogResolver extends ResolverBase {
    @Query(() => RunCsvProcessingLogViewResult)
    async RunCsvProcessingLogViewByID(@Arg('input', () => RunViewByIDInput) input: RunViewByIDInput, @Ctx() { dataSource, userPayload }: AppContext, @PubSub() pubSub: PubSubEngine) {
        return super.RunViewByIDGeneric(input, dataSource, userPayload, pubSub);
    }

    @Query(() => RunCsvProcessingLogViewResult)
    async RunCsvProcessingLogViewByName(@Arg('input', () => RunViewByNameInput) input: RunViewByNameInput, @Ctx() { dataSource, userPayload }: AppContext, @PubSub() pubSub: PubSubEngine) {
        return super.RunViewByNameGeneric(input, dataSource, userPayload, pubSub);
    }

    @Query(() => RunCsvProcessingLogViewResult)
    async RunCsvProcessingLogDynamicView(@Arg('input', () => RunDynamicViewInput) input: RunDynamicViewInput, @Ctx() { dataSource, userPayload }: AppContext, @PubSub() pubSub: PubSubEngine) {
        input.EntityName = 'Csv Processing Logs';
        return super.RunDynamicViewGeneric(input, dataSource, userPayload, pubSub);
    }
    @Query(() => CsvProcessingLog_, { nullable: true })
    async CsvProcessingLog(@Arg('ID', () => Int) ID: number, @Ctx() { dataSource, userPayload }: AppContext, @PubSub() pubSub: PubSubEngine): Promise<CsvProcessingLog_ | null> {
        this.CheckUserReadPermissions('Csv Processing Logs', userPayload);
        const sSQL = `SELECT * FROM [dbo].[vwCsvProcessingLogs] WHERE [ID]=${ID} ` + this.getRowLevelSecurityWhereClause('Csv Processing Logs', userPayload, EntityPermissionType.Read, 'AND');
        const result = this.MapFieldNamesToCodeNames('Csv Processing Logs', await dataSource.query(sSQL).then((r) => r && r.length > 0 ? r[0] : {}))
        return result;
    }
    
    @Mutation(() => CsvProcessingLog_)
    async CreateCsvProcessingLog(
        @Arg('input', () => CreateCsvProcessingLogInput) input: CreateCsvProcessingLogInput,
        @Ctx() { dataSource, userPayload }: AppContext,
        @PubSub() pubSub: PubSubEngine
    ) {
        return this.CreateRecord('Csv Processing Logs', input, dataSource, userPayload, pubSub)
    }
        
    @Mutation(() => CsvProcessingLog_)
    async UpdateCsvProcessingLog(
        @Arg('input', () => UpdateCsvProcessingLogInput) input: UpdateCsvProcessingLogInput,
        @Ctx() { dataSource, userPayload }: AppContext,
        @PubSub() pubSub: PubSubEngine
    ) {
        return this.UpdateRecord('Csv Processing Logs', input, dataSource, userPayload, pubSub);
    }
    
    @Mutation(() => CsvProcessingLog_)
    async DeleteCsvProcessingLog(@Arg('ID', () => Int) ID: number, @Arg('options___', () => DeleteOptionsInput) options: DeleteOptionsInput, @Ctx() { dataSource, userPayload }: AppContext, @PubSub() pubSub: PubSubEngine) {
        const key = new CompositeKey([{FieldName: 'ID', Value: ID}]);
        return this.DeleteRecord('Csv Processing Logs', key, options, dataSource, userPayload, pubSub);
    }
    
}