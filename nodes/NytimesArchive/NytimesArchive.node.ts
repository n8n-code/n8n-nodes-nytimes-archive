import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { archiveDescription } from './resources/archive';

export class NytimesArchive implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Nytimes Archive',
		name: 'N8nDevNytimesArchive',
		icon: { light: 'file:./nytimes-archive.png', dark: 'file:./nytimes-archive.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Archive API provides lists of NYT articles by month going back to 1851. You can use it to build your own local database of NYT article metadata',
		defaults: { name: 'Nytimes Archive' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevNytimesArchiveApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Archive",
					"value": "Archive",
					"description": ""
				}
			],
			"default": ""
		},
		...archiveDescription
		],
	};
}
