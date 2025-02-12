import type { INodeProperties } from 'n8n-workflow';

export const workOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['work'],
			},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Works',
				value: 'works',
				description: 'Retrieve a list of works with optional filters',
				action: 'Get all works',
			},
			{
				name: 'Work',
				value: 'work',
				description: 'Retrieve details of a specific work by its ID',
				action: 'Get a work',
			},
			{
				name: 'Work Infos',
				value: 'workInfos',
				description: 'Retrieve additional information associated with a specific work',
				action: 'Get work information',
			},
			{
				name: 'Work Samples',
				value: 'workSamples',
				description: 'Retrieve sample data related to a specific work',
				action: 'Get work samples',
			},
			{
				name: 'Work Sample Price Items',
				value: 'workSamplePriceItems',
				description: 'Retrieve price details for a specific work sample',
				action: 'Get work sample price items',
			},
			{
				name: 'Work Price Items',
				value: 'workPriceItems',
				description: 'Retrieve pricing details associated with a specific work',
				action: 'Get work price items',
			},
			{
				name: 'Work Summary Prices',
				value: 'workSummaryPrices',
				description: 'Retrieve summarized pricing details for a specific work',
				action: 'Get work summary prices',
			},
		],
		default: 'works',
	},
];

export const works: INodeProperties[] = [
	{
		displayName: 'Top',
		name: 'top',
		type: 'number',
		default: 50,
		placeholder: 'Ex: 10',
		description: 'Número máximo de registros a retornar',
		displayOptions: {
			show: {
				resource: ['work'],
				operation: ['works'],
			},
		},
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		default: '',
		placeholder: 'Ex: (Identification eq \'PROPOSTA COMERCIAL ESPORÁDICA\')',
		description: 'Filtro para aplicar na consulta, seguindo a sintaxe da API',
		displayOptions: {
			show: {
				resource: ['work'],
				operation: ['works'],
			},
		},
	},
];

export const work: INodeProperties[] = [
	{
		displayName: 'Work ID',
		name: 'workId',
		type: 'number',
		default: '',
		placeholder: 'Ex: 10',
		description: 'ID do faturamento',
		required: true,
		displayOptions: {
			show: {
				resource: ['work'],
				operation: ['work'],
			},
		},
	},
];

export const workInfos: INodeProperties[] = [
	{
		displayName: 'Work ID',
		name: 'workId',
		type: 'number',
		default: '',
		placeholder: 'Ex: 10',
		description: 'ID do faturamento',
		required: true,
		displayOptions: {
			show: {
				resource: ['work'],
				operation: ['workInfos'],
			},
		},
	},
];

export const workSamples: INodeProperties[] = [
	{
		displayName: 'Work ID',
		name: 'workId',
		type: 'number',
		default: '',
		placeholder: 'Ex: 10',
		description: 'ID do faturamento',
		required: true,
		displayOptions: {
			show: {
				resource: ['work'],
				operation: ['workSamples'],
			},
		},
	},
	{
		displayName: 'Top',
		name: 'top',
		type: 'number',
		default: 50,
		placeholder: 'Ex: 10',
		description: 'Número máximo de registros a retornar',
		displayOptions: {
			show: {
				resource: ['work'],
				operation: ['workSamples'],
			},
		},
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		default: '',
		placeholder: 'Ex: (ID eq 1)',
		description: 'Filtro para aplicar na consulta, seguindo a sintaxe da API',
		displayOptions: {
			show: {
				resource: ['work'],
				operation: ['workSamples'],
			},
		},
	},
];

export const workSamplePriceItems: INodeProperties[] = [
	{
		displayName: 'Sample ID',
		name: 'sampleId',
		type: 'number',
		default: '',
		placeholder: 'Ex: 10',
		description: 'ID da amostra',
		required: true,
		displayOptions: {
			show: {
				resource: ['work'],
				operation: ['workSamplePriceItems'],
			},
		},
	},
	{
		displayName: 'Top',
		name: 'top',
		type: 'number',
		default: 50,
		placeholder: 'Ex: 10',
		description: 'Número máximo de registros a retornar',
		displayOptions: {
			show: {
				resource: ['work'],
				operation: ['workSamplePriceItems'],
			},
		},
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		default: '',
		placeholder: 'Ex: (ID eq 1)',
		description: 'Filtro para aplicar na consulta, seguindo a sintaxe da API',
		displayOptions: {
			show: {
				resource: ['work'],
				operation: ['workSamplePriceItems'],
			},
		},
	},
];

export const workPriceItems: INodeProperties[] = [
	{
		displayName: 'Work ID',
		name: 'workId',
		type: 'number',
		default: '',
		placeholder: 'Ex: 10',
		description: 'ID do faturamento',
		required: true,
		displayOptions: {
			show: {
				resource: ['work'],
				operation: ['workPriceItems'],
			},
		},
	},
	{
		displayName: 'Top',
		name: 'top',
		type: 'number',
		default: 50,
		placeholder: 'Ex: 10',
		description: 'Número máximo de registros a retornar',
		displayOptions: {
			show: {
				resource: ['work'],
				operation: ['workPriceItems'],
			},
		},
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		default: '',
		placeholder: 'Ex: (ID eq 1)',
		description: 'Filtro para aplicar na consulta, seguindo a sintaxe da API',
		displayOptions: {
			show: {
				resource: ['work'],
				operation: ['workPriceItems'],
			},
		},
	},
];

export const workSummaryPrices: INodeProperties[] = [
	{
		displayName: 'Work ID',
		name: 'workId',
		type: 'number',
		default: '',
		placeholder: 'Ex: 10',
		description: 'ID do faturamento',
		required: true,
		displayOptions: {
			show: {
				resource: ['work'],
				operation: ['workSummaryPrices'],
			},
		},
	},
];
