import {
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
	IHttpRequestMethods,
	ILoadOptionsFunctions,
	IRequestOptions,
	NodeApiError
} from "n8n-workflow";

export async function myLIMSApiRequest(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
	endpoint: string,
	method: IHttpRequestMethods,
	body: any = {},
	query?: IDataObject,
	uri?: string,
	option: IDataObject = {},
): Promise<any> {
	const credentials = await this.getCredentials('myLIMSApi');
	if (!credentials) {
		throw new NodeApiError(this.getNode(), { message: 'Missing myLIMS API credentials' });
	}

	const baseUrl = credentials.baseUrl as string;
	if (!baseUrl || !baseUrl.startsWith('http')) {
		throw new NodeApiError(this.getNode(), { message: 'Invalid API base URL in credentials' });
	}

	const requestUrl = uri || `${baseUrl.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`;
	console.log('Request URL:', requestUrl); // Adicione este log

	const options: IRequestOptions = {
		method,
		body,
		qs: query,
		uri: uri || requestUrl,
		json: true,
		headers: {
			'Content-Type': 'application/json',
			'x-access-key': `${credentials.apiKey}`,
		},
		...option,
	};

	if (Object.keys(option).length !== 0) {
		Object.assign(options, option);
	}

	if (Object.keys(body as IDataObject).length === 0) {
		delete options.body;
	}

	if (Object.keys(query || {}).length === 0) {
		delete options.qs;
	}

	try {
		return await this.helpers.request!(options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error);
	}
}
