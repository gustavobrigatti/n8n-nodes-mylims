import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class WorkSamples implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'WorkSamples',
		name: 'workSamples',
		icon: 'file:myLIMS.svg',
		group: ['myLIMS'],
		version: 1,
		subtitle: 'Busca as amostras de um faturamento',
		description: 'Busca as amostras de um faturamento',
		defaults: {
			name: 'Work Samples',
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
			baseURL: '={{$credentials.baseUrl}}/works/{{$parameter["workId"]}}/Samples{{$parameter["top"] ? "?$top=" + $parameter["top"] : ""}}{{$parameter["filter"] ? ($parameter["top"] ? "&" : "?") + "$filter=" + encodeURIComponent($parameter["filter"]) : ""}}', // Usa o valor do baseUrl configurado nas credenciais
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
				placeholder: 'Ex: (Id eq 1)',
				description: 'Filtro para aplicar na consulta, seguindo a sintaxe da API',
			},
		],
	};
}
