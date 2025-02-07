import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class Works implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Works',
		name: 'works',
		icon: 'file:myLIMS.svg',
		group: ['myLIMS'],
		version: 1,
		subtitle: 'Busca todos os faturamentos',
		description: 'Busca todos os faturamentos',
		defaults: {
			name: 'Works',
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
			baseURL: '={{$credentials.baseUrl}}/works{{$parameter["top"] ? "?$top=" + $parameter["top"] : ""}}{{$parameter["filter"] ? ($parameter["top"] ? "&" : "?") + "$filter=" + encodeURIComponent($parameter["filter"]) : ""}}', // Usa o valor do baseUrl configurado nas credenciais
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
				placeholder: 'Ex: (Identification eq \'PROPOSTA COMERCIAL ESPORÁDICA\')',
				description: 'Filtro para aplicar na consulta, seguindo a sintaxe da API',
			},
		],
	};
}
