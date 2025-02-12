import {
	INodeType,
	INodeTypeDescription,
	IExecuteFunctions,
	INodeExecutionData,
	NodeConnectionType,
	IDataObject,
	IHttpRequestMethods
} from 'n8n-workflow';
import {
	accountOperations,
	accounts,
	account,
	accountAddresses,
	accountEmails,
	accountInfos,
	accountSecondaries,
} from './AccountDescription';
import {
	workOperations,
	works,
	work,
	workInfos,
	workSamples,
	workSamplePriceItems,
	workPriceItems,
	workSummaryPrices
} from './WorkDescription';
import { myLIMSApiRequest } from './GenericFunctions';

export class myLIMS implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'myLIMS',
		name: 'myLIMS',
		icon: 'file:myLIMS.svg',
		group: ['output'],
		version: 1,
		subtitle: 'Integration with myLIMS system',
		description: 'Allows interaction with myLIMS API',
		defaults: {
			name: 'myLIMS',
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
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Account',
						value: 'account',
						description:
							'Get account infos',
					},
					{
						name: 'Work',
						value: 'work',
						description:
							'Get work infos',
					}
				],
				default: 'account',
			},
			...accountOperations,
			...accounts,
			...account,
			...accountAddresses,
			...accountEmails,
			...accountInfos,
			...accountSecondaries,
			...workOperations,
			...works,
			...work,
			...workInfos,
			...workSamples,
			...workSamplePriceItems,
			...workPriceItems,
			...workSummaryPrices
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const length = items.length;
		let responseData;
		let qs: IDataObject;

		const resource = this.getNodeParameter('resource', 0);
		const operation = this.getNodeParameter('operation', 0);

		for (let i = 0; i < length; i++) {
			let endpoint = '';
			let method: IHttpRequestMethods = 'GET';
			let body: IDataObject = {};
			qs = {};

			if (resource === 'account'){
				switch (operation) {
					case 'accounts':
						qs.top = this.getNodeParameter('top', i) as number;
						qs.filter = this.getNodeParameter('filter', i) as string;
						endpoint = `/Accounts`;
						break;
					case 'account':
						const accountId = this.getNodeParameter('accountId', i) as string;
						endpoint = `/Accounts/${accountId}`;
						break;
					case 'accountAddresses':
						const accAddrId = this.getNodeParameter('accountId', i) as number;
						endpoint = `/Accounts/${accAddrId}/addresses`;
						break;
					case 'accountEmails':
						const accEmailId = this.getNodeParameter('accountId', i) as number;
						endpoint = `/Accounts/${accEmailId}/emails`;
						break;
					case 'accountInfos':
						const accInfoId = this.getNodeParameter('accountId', i) as number;
						endpoint = `/Accounts/${accInfoId}/infos`;
						break;
					case 'accountSecondaries':
						const accSecId = this.getNodeParameter('accountId', i) as number;
						endpoint = `/Accounts/${accSecId}/GetAccountSecondary`;
						break;
					default:
						// eslint-disable-next-line n8n-nodes-base/node-execute-block-wrong-error-thrown
						throw new Error(`Unsupported resource: ${resource}`);
				}
			}else if(resource === 'work'){
				switch (operation) {
					case 'works':
						qs.top = this.getNodeParameter('top', i) as number;
						qs.filter = this.getNodeParameter('filter', i) as string;
						endpoint = `/works`;
						break;
					case 'work':
						const workId = this.getNodeParameter('workId', i) as string;
						endpoint = `/works/${workId}`;
						break;
					case 'workInfos':
						const wrkInfoId = this.getNodeParameter('workId', i) as number;
						endpoint = `/works/${wrkInfoId}/infos`;
						break;
					case 'workSamples':
						qs.top = this.getNodeParameter('top', i) as number;
						qs.filter = this.getNodeParameter('filter', i) as string;
						const wrkSamplesId = this.getNodeParameter('workId', i) as number;
						endpoint = `/works/${wrkSamplesId}/Samples`;
						break;
					case 'workSamplePriceItems':
						qs.top = this.getNodeParameter('top', i) as number;
						qs.filter = this.getNodeParameter('filter', i) as string;
						const sampleId = this.getNodeParameter('sampleId', i) as number;
						endpoint = `/samples/${sampleId}/priceitems`;
						break;
					case 'workPriceItems':
						qs.top = this.getNodeParameter('top', i) as number;
						qs.filter = this.getNodeParameter('filter', i) as string;
						const wrkPriceItemsId = this.getNodeParameter('workId', i) as number;
						endpoint = `/works/${wrkPriceItemsId}/priceitems`;
						break;
					case 'workSummaryPrices':
						const wrkSummaryPricesId = this.getNodeParameter('workId', i) as number;
						endpoint = `/works/${wrkSummaryPricesId}/Prices/Summary`;
						break;
					default:
						// eslint-disable-next-line n8n-nodes-base/node-execute-block-wrong-error-thrown
						throw new Error(`Unsupported resource: ${resource}`);
				}
			}

			try {
				responseData = await myLIMSApiRequest.call(this, endpoint, method, body, qs);

				const executionData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray(responseData as IDataObject[]),
					{ itemData: { item: i } },
				);

				returnData.push(...executionData);
			} catch (error) {
				// eslint-disable-next-line n8n-nodes-base/node-execute-block-wrong-error-thrown
				throw new Error(`API Request failed: ${error.message}`);
			}
		}

		return [returnData];
	}
}
