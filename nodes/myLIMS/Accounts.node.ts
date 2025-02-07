import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class Accounts implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Accounts',
		name: 'accounts',
		icon: 'file:myLIMS.svg',
		group: ['myLIMS'],
		version: 1,
		subtitle: 'Busca todas as contas',
		description: 'Busca todas as contas',
		defaults: {
			name: 'Accounts',
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
			baseURL: '={{$credentials.baseUrl}}/Accounts{{$parameter["top"] ? "?$top=" + $parameter["top"] : ""}}{{$parameter["filter"] ? ($parameter["top"] ? "&" : "?") + "$filter=" + encodeURIComponent($parameter["filter"]) : ""}}',
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Top',
				name: 'top',
				type: 'number',
				default: 50,
				placeholder: 'Ex: 10',
				description: 'Número máximo de registros a retornar'
			},
			{
				displayName: 'Filter',
				name: 'filter',
				type: 'string',
				default: '',
				placeholder: "Ex: (AccountType/Identification eq 'Empresa')",
				description: 'Filtro para aplicar na consulta, seguindo a sintaxe da API',
			},
		],
	};
}
