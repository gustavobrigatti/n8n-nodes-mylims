import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class WorkPriceItems implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'WorkPriceItems',
		name: 'workPriceItems',
		icon: 'file:myLIMS.svg',
		group: ['myLIMS'],
		version: 1,
		subtitle: 'Busca o preço das atividades de um faturamento',
		description: 'Busca o preço das atividades de um faturamento',
		defaults: {
			name: 'Work Price Items',
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
			baseURL: '={{$credentials.baseUrl}}/works/{{$parameter["workId"]}}/priceitems{{$parameter["top"] ? "?$top=" + $parameter["top"] : ""}}{{$parameter["filter"] ? ($parameter["top"] ? "&" : "?") + "$filter=" + encodeURIComponent($parameter["filter"]) : ""}}', // Usa o valor do baseUrl configurado nas credenciais
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
