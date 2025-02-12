import type { INodeProperties } from 'n8n-workflow';

export const accountOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['account'],
			},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Accounts',
				value: 'accounts',
				description: 'Retrieve a list of accounts with optional filters',
				action: 'Get all accounts',
			},
			{
				name: 'Account',
				value: 'account',
				description: 'Retrieve a specific account by its ID',
				action: 'Get an account',
			},
			{
				name: 'Account Addresses',
				value: 'accountAddresses',
				description: 'Retrieve the addresses associated with a specific account',
				action: 'Get account addresses',
			},
			{
				name: 'Account Emails',
				value: 'accountEmails',
				description: 'Retrieve the emails associated with a specific account',
				action: 'Get account emails',
			},
			{
				name: 'Account Infos',
				value: 'accountInfos',
				description: 'Retrieve additional information related to a specific account',
				action: 'Get account infos',
			},
			{
				name: 'Account Secondaries',
				value: 'accountSecondaries',
				description: 'Retrieve secondary accounts linked to a specific account',
				action: 'Get account secondaries',
			},
		],
		default: 'accounts',
	},
];

export const accounts: INodeProperties[] = [
	{
		displayName: 'Top',
		name: 'top',
		type: 'number',
		default: 50,
		placeholder: 'Ex: 10',
		description: 'Número máximo de registros a retornar',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['accounts'],
			},
		},
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		default: '',
		placeholder: "Ex: (AccountType/Identification eq 'Empresa')",
		description: 'Filtro para aplicar na consulta, seguindo a sintaxe da API',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['accounts'],
			},
		},
	},
];

export const account: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'accountId',
			type: 'string',
			required: true,
			default: '',
			description: 'ID of the account to retrieve',
			displayOptions: {
				show: {
					resource: ['account'],
					operation: ['account'],
				},
			},
		}
	];

export const accountAddresses: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'accountId',
			type: 'number',
			default: '',
			placeholder: 'Ex: 10',
			description: 'ID da conta',
			required: true,
			displayOptions: {
				show: {
					resource: ['account'],
					operation: ['accountAddresses'],
				},
			},
		},
	];

export const accountEmails: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'accountId',
			type: 'number',
			default: '',
			placeholder: 'Ex: 10',
			description: 'ID da conta',
			required: true,
			displayOptions: {
				show: {
					resource: ['account'],
					operation: ['accountEmails'],
				},
			},
		},
	];

export const accountInfos: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'accountId',
			type: 'number',
			default: '',
			placeholder: 'Ex: 10',
			description: 'ID da conta',
			required: true,
			displayOptions: {
				show: {
					resource: ['account'],
					operation: ['accountInfos'],
				},
			},
		},
	];

export const accountSecondaries: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'accountId',
			type: 'number',
			default: '',
			placeholder: 'Ex: 10',
			description: 'ID da conta',
			required: true,
			displayOptions: {
				show: {
					resource: ['account'],
					operation: ['accountSecondaries'],
				},
			},
		},
	];
