var AutoSupplyChainAbi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_shipmentNo",
				"type": "address"
			},
			{
				"name": "_quantity",
				"type": "uint256"
			},
			{
				"name": "_shipName",
				"type": "string"
			},
			{
				"name": "_shipNo",
				"type": "string"
			},
			{
				"name": "_transportInfo",
				"type": "string"
			},
			{
				"name": "_warehouseName",
				"type": "string"
			},
			{
				"name": "_warehouseAddress",
				"type": "string"
			},
			{
				"name": "_importerId",
				"type": "uint256"
			}
		],
		"name": "updateImporterData",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_shipmentNo",
				"type": "address"
			}
		],
		"name": "getExporterData",
		"outputs": [
			{
				"name": "quantity",
				"type": "uint256"
			},
			{
				"name": "destinationAddress",
				"type": "string"
			},
			{
				"name": "shipName",
				"type": "string"
			},
			{
				"name": "shipNo",
				"type": "string"
			},
			{
				"name": "departureDateTime",
				"type": "uint256"
			},
			{
				"name": "estimateDateTime",
				"type": "uint256"
			},
			{
				"name": "exporterId",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_shipmentNo",
				"type": "address"
			}
		],
		"name": "getAssemblerData",
		"outputs": [
			{
				"name": "vehicleColor",
				"type": "string"
			},
			{
				"name": "temperatureUsed",
				"type": "string"
			},
			{
				"name": "humidity",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_shipmentNo",
				"type": "address"
			},
			{
				"name": "_vehicleColor",
				"type": "string"
			},
			{
				"name": "_temperatureUsed",
				"type": "string"
			},
			{
				"name": "_humidity",
				"type": "string"
			}
		],
		"name": "updateAssemblerData",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_shipmentNo",
				"type": "address"
			},
			{
				"name": "_quantity",
				"type": "uint256"
			},
			{
				"name": "_destinationAddress",
				"type": "string"
			},
			{
				"name": "_shipName",
				"type": "string"
			},
			{
				"name": "_shipNo",
				"type": "string"
			},
			{
				"name": "_estimateDateTime",
				"type": "uint256"
			},
			{
				"name": "_exporterId",
				"type": "uint256"
			}
		],
		"name": "updateExporterData",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_registrationNo",
				"type": "string"
			},
			{
				"name": "_producerName",
				"type": "string"
			},
			{
				"name": "_producerAddress",
				"type": "string"
			},
			{
				"name": "_exporterName",
				"type": "string"
			},
			{
				"name": "_importerName",
				"type": "string"
			}
		],
		"name": "addBasicDetails",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_shipmentNo",
				"type": "address"
			}
		],
		"name": "getNextAction",
		"outputs": [
			{
				"name": "action",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_shipmentNo",
				"type": "address"
			},
			{
				"name": "_vehicleId",
				"type": "string"
			},
			{
				"name": "_vehicleType",
				"type": "string"
			},
			{
				"name": "_vehicleFinish",
				"type": "string"
			}
		],
		"name": "updateInspectorData",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_shipmentNo",
				"type": "address"
			}
		],
		"name": "getInspectorData",
		"outputs": [
			{
				"name": "vehicleId",
				"type": "string"
			},
			{
				"name": "vehicleType",
				"type": "string"
			},
			{
				"name": "vehicleFinish",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_shipmentNo",
				"type": "address"
			},
			{
				"name": "_quantity",
				"type": "uint256"
			},
			{
				"name": "_temperature",
				"type": "string"
			},
			{
				"name": "_processingDuration",
				"type": "uint256"
			},
			{
				"name": "_internalShipmentNo",
				"type": "string"
			},
			{
				"name": "_packageDateTime",
				"type": "uint256"
			},
			{
				"name": "_processorName",
				"type": "string"
			},
			{
				"name": "_processorAddress",
				"type": "string"
			}
		],
		"name": "updateProcessorData",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_shipmentNo",
				"type": "address"
			}
		],
		"name": "getProcessorData",
		"outputs": [
			{
				"name": "quantity",
				"type": "uint256"
			},
			{
				"name": "temperature",
				"type": "string"
			},
			{
				"name": "processingDuration",
				"type": "uint256"
			},
			{
				"name": "internalShipmentNo",
				"type": "string"
			},
			{
				"name": "packageDateTime",
				"type": "uint256"
			},
			{
				"name": "processorName",
				"type": "string"
			},
			{
				"name": "processorAddress",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_shipmentNo",
				"type": "address"
			}
		],
		"name": "getBasicDetails",
		"outputs": [
			{
				"name": "registrationNo",
				"type": "string"
			},
			{
				"name": "producerName",
				"type": "string"
			},
			{
				"name": "producerAddress",
				"type": "string"
			},
			{
				"name": "exporterName",
				"type": "string"
			},
			{
				"name": "importerName",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_shipmentNo",
				"type": "address"
			}
		],
		"name": "getImporterData",
		"outputs": [
			{
				"name": "quantity",
				"type": "uint256"
			},
			{
				"name": "shipName",
				"type": "string"
			},
			{
				"name": "shipNo",
				"type": "string"
			},
			{
				"name": "arrivalDateTime",
				"type": "uint256"
			},
			{
				"name": "transportInfo",
				"type": "string"
			},
			{
				"name": "warehouseName",
				"type": "string"
			},
			{
				"name": "warehouseAddress",
				"type": "string"
			},
			{
				"name": "importerId",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_supplyChainAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "shipmentNo",
				"type": "address"
			}
		],
		"name": "PerformShipment",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "shipmentNo",
				"type": "address"
			}
		],
		"name": "DoneInspection",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "shipmentNo",
				"type": "address"
			}
		],
		"name": "DoneAssembly",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "shipmentNo",
				"type": "address"
			}
		],
		"name": "DoneExporting",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "shipmentNo",
				"type": "address"
			}
		],
		"name": "DoneImporting",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "shipmentNo",
				"type": "address"
			}
		],
		"name": "DoneProcessing",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			}
		],
		"name": "OwnershipRenounced",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	}
]