import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class Impetus implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Impetus',
		name: 'impetus',
		icon: 'file:impetus.svg',
		group: ['transform'],
		version: 1,
		subtitle: 'Envio de artigo',
		description: 'Envia artigo para ser criado no blog',
		defaults: {
			name: 'Impetus default',
		},
		// eslint-disable-next-line n8n-nodes-base/node-class-description-inputs-wrong-regular-node
		inputs: [NodeConnectionType.Main],
		// eslint-disable-next-line n8n-nodes-base/node-class-description-outputs-wrong
		outputs: [NodeConnectionType.Main],
		requestDefaults: {
			baseURL: '={{$parameter["api_url"]}}', // Usa o valor do campo preenchido pelo usuário
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'API URL',
				name: 'api_url',
				type: 'string',
				default: '',
				placeholder: 'https://example.com/api',
				required: true,
				description: 'Informe a URL da API onde os artigos serão enviados',
			},
			{
				displayName: 'Título',
				name: 'article_title',
				type: 'string',
				default: '',
				placeholder: 'Título',
				required: true,
				description: 'Título do artigo',
				routing: {
					request: {
						qs:{
							article_title: '={{$value}}'
						}
					}
				},
			},
			{
				displayName: 'Slug',
				name: 'article_slug',
				type: 'string',
				default: '',
				placeholder: 'slug-do-artigo',
				required: true,
				description: 'Slug do artigo',
				routing: {
					request: {
						qs:{
							article_slug: '={{$value}}'
						}
					}
				},
			},
			{
				displayName: 'Conteúdo',
				name: 'article_content_html',
				type: 'string',
				default: '',
				placeholder: 'Conteúdo',
				required: true,
				description: 'Conteúdo do artigo',
				routing: {
					request: {
						qs:{
							article_content_html: '={{$value}}'
						}
					}
				},
			},
			{
				displayName: 'SEO Description',
				name: 'article_description',
				type: 'string',
				default: '',
				placeholder: 'SEO Description',
				required: true,
				description: 'SEO Description do artigo',
				routing: {
					request: {
						qs:{
							article_description: '={{$value}}'
						}
					}
				},
			},
			{
				displayName: 'Keywords',
				name: 'article_keyword',
				type: 'string',
				default: '',
				placeholder: 'keyword_1,keyword_2',
				required: true,
				description: 'Keywords do artigo',
				routing: {
					request: {
						qs:{
							article_keyword: '={{$value}}'
						}
					}
				},
			},
		]
	};
}
