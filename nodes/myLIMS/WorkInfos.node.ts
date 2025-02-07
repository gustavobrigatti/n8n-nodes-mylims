import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class WorkInfos implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'WorkInfos',
		name: 'workInfos',
		icon: 'file:myLIMS.svg',
		group: ['myLIMS'],
		version: 1,
		subtitle: 'Busca as informações de um faturamento',
		description: 'Busca as informações de um faturamento',
		defaults: {
			name: 'Work Infos',
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
			baseURL: '={{$credentials.baseUrl}}/works/{{$parameter["workId"]}}/infos', // Usa o valor do baseUrl configurado nas credenciais
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
