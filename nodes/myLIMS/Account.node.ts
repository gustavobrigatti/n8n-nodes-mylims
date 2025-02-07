import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class Account implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Account',
		name: 'account',
		icon: 'file:myLIMS.svg',
		group: ['myLIMS'],
		version: 1,
		subtitle: 'Busca os detalhes de uma conta',
		description: 'Busca os detalhes de uma conta',
		defaults: {
			name: 'Account',
		},
		// eslint-disable-next-line n8n-nodes-base/node-class-description-inputs-wrong-regular-node
		inputs: [NodeConnectionType.Main],
		// eslint-disable-next-line n8n-nodes-base/node-class-description-outputs-wrong
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'myLIMSApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials.baseUrl}}/Accounts/{{$parameter["accountId"]}}', // Usa o valor do baseUrl configurado nas credenciais
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Account ID',
				name: 'accountId',
				type: 'number',
				default: '',
				placeholder: 'Ex: 10',
				description: 'ID da conta',
				required: true,
			},
		],
	};
}
