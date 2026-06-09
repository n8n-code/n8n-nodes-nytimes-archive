import type { INodeProperties } from 'n8n-workflow';

export const archiveDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Archive"
					]
				}
			},
			"options": [
				{
					"name": "GET",
					"value": "GET",
					"action": "Archive API",
					"description": "The Archive API provides lists of NYT articles by month going back to 1851.  Simply pass in the year and month you want and it returns a JSON object with all articles for that month.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"year\"]}}/{{$parameter[\"month\"]}}.json"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /{year}/{month}.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Archive"
					],
					"operation": [
						"GET"
					]
				}
			}
		},
		{
			"displayName": "Year",
			"name": "year",
			"required": true,
			"description": "The year (e.g. 2016).",
			"default": "2016",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Archive"
					],
					"operation": [
						"GET"
					]
				}
			}
		},
		{
			"displayName": "Month",
			"name": "month",
			"required": true,
			"description": "The month number (e.g. 1 for January).",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Archive"
					],
					"operation": [
						"GET"
					]
				}
			}
		},
		{
			"displayName": "Api Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apikey (query: api-key)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api-key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Archive"
					],
					"operation": [
						"GET"
					]
				}
			}
		},
];
