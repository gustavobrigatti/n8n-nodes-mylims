import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class WorkSummaryPrices implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'WorkSummaryPrices',
		name: 'workSummaryPrices',
		icon: 'file:myLIMS.svg',
		group: ['myLIMS'],
		version: 1,
		subtitle: 'Busca o sumário de preços de um faturamento',
		description: 'Busca o sumário de preços de um faturamento',
		defaults: {
			name: 'Work Summary Prices',
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
			baseURL: '={{$credentials.baseUrl}}/works/{{$parameter["workId"]}}/Prices/Summary', // Usa o valor do baseUrl configurado nas credenciais
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Work ID',
				name: 'workId',
				type: 'number',
				default: '',
				placeholder: 'Ex: 10',
				description: 'ID do faturamento',
				required: true,
			},
		],
	};
}
