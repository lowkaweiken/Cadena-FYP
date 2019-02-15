var shipmentNo;
window.addEventListener('load', function() 
{	
  shipmentNo = $("#shipmentNo").val();

	if(shipmentNo!="" || shipmentNo!=null || shipmentNo!=undefined){
		
		getShipmentData(globMainContract,shipmentNo,function(result)
		{
			var parentSection = $("#shipmentSection");
			var activityName =  "PerformShipment";
			var built = buildShipmentBlock(result);

			populateSection(parentSection,built,activityName,shipmentNo)
		});

		getInspectorData(globMainContract,shipmentNo,function(result){
			
			var parentSection = $("#inspectorSection"); 
			var activityName = "DoneInspection";  
			var built = buildInspectorBlock(result);

			populateSection(parentSection,built,activityName,shipmentNo);
		});

		getAssemblerData(globMainContract,shipmentNo,function(result){
			
			var parentSection = $("#assemblerSection");
			var activityName = "DoneAssembly";
			var built = buildAssemblerBlock(result);

			populateSection(parentSection,built,activityName,shipmentNo);
		});

		getExporterData(globMainContract,shipmentNo,function(result){
			
			var parentSection = $("#exporterSection");
			var activityName = "DoneExporting";
			var built = buildExporterBlock(result);   

			populateSection(parentSection,built,activityName,shipmentNo);             
		});

		getImporterData(globMainContract,shipmentNo,function(result){

			 var parentSection = $("#importerSection");
			 var activityName = "DoneImporting";
			 var built = buildImporterBlock(result); 

			 populateSection(parentSection,built,activityName,shipmentNo);              
		});

		getProcessorData(globMainContract,shipmentNo,function(result){
			var parentSection = $("#processorSection");
			var activityName = "DoneProcessing";
			var built = buildProcessorBlock(result); 

			populateSection(parentSection,built,activityName,shipmentNo);   

      $('.qr-code-magnify').magnificPopup({
          type:'image',
          mainClass: 'mfp-zoom-in'
      });

		});
	}

});

function populateSection(parentSection,built,activityName,shipmentNo)
{
  if(built.isDataAvail==true)
  {
  	getActivityTimestamp(activityName,shipmentNo, function(resultData)
  	{
     
      if(resultData.dataTime)
  		{
        var phoneNoSec = '';
        if(resultData.contactNo!='-'){
          phoneNoSec = `<i class="fa fa-phone"></i> `+resultData.contactNo+`<br/>`;  
        } 

        var userAddress = resultData.user;
        if($(window).width() <= 565){
          userAddress = userAddress.substring(0,15)+'...';
        }

        var refLink = 'https://rinkeby.etherscan.io/tx/'+resultData.transactionHash;
        var html = `<span class="text-info"><i class='fa fa-user'> </i>
                        `+resultData.name+` (`+userAddress+`) <br/>
                        `+phoneNoSec+`
                    </span>
                    <i class='fa fa-clock-o'> </i> `+resultData.dataTime.toLocaleString()+`
                    <a href='`+refLink+`' target='_blank'><i class='fa fa-external-link text-danger'></i></a>
                   `;
        $(parentSection).find(".activityDateTime").html(html);
  			$(parentSection).find(".timeline-body .activityData").append('<img src="plugins/images/verified.jpg" alt="user-img" style="width:80px;height:80px" class="img-circle pull-right">');
  		}

      if(resultData.transactionHash){
        var url = 'https://rinkeby.etherscan.io/tx/'+resultData.transactionHash;
        var qrCode = 'https://chart.googleapis.com/chart?cht=qr&chld=H|1&chs=400x400&chl='+url;
        var qrCodeSec = `<a href="`+qrCode+`" title="`+resultData.transactionHash+`" class="qr-code-magnify pull-right" data-effect="mfp-zoom-in">
                          <img src="`+qrCode+`" class="img-responsive" style="width:70px; height:70px; margin-top:-75px;"/>
                        </a>`;

        $(parentSection).find(".activityQrCode").html(qrCodeSec);
      }
  	});

	  var tmpTimelineBadge = $(parentSection).prev(".timeline-badge");

	
		$(tmpTimelineBadge).removeClass("danger").addClass("success");
		$(tmpTimelineBadge).find("i").removeClass().addClass("fa fa-check");
	}


	$(parentSection).find(".activityData").html(built.html); 
}

function getActivityTimestamp(activityName, shipmentNo, callback)
{
	globMainContract.getPastEvents(activityName,{
		fromBlock:0,
		filter:{shipmentNo: shipmentNo}
	},function(error,eventData)
	{
		try
		{
      web3.eth.getBlock(eventData[0].blockNumber,function(error,blockData)
			{
        var resultData = {};
				var date = blockData.timestamp;
				/* Convert Seconds to Miliseconds */
			 	date = new Date(date * 1000);
			 	// $("#cultivationDateTime").html("<i class='fa fa-clock-o'> </i> " + date.toLocaleString());

        resultData.dataTime = date;
        resultData.transactionHash = eventData[0].transactionHash;

        var userAddress = eventData[0].returnValues.user;
        getUserDetails(globUserContract,userAddress,function(result){
            if(userAddress == globAdminAddress){
                resultData.name      = 'Admin';
                resultData.contactNo = '-';
            }else{
                resultData.name      = result.name;
                resultData.contactNo = result.contactNo;
            }  
            
            resultData.user      = userAddress;

            callback(resultData);
        });
			})	
		}
		catch(e)
		{
			callback(false);
		}
	});
}

function buildShipmentBlock(result)
{
	var shipmentData = {};
	var registrationNo = result.registrationNo;
	var producerName     = result.producerName;
	var producerAddress    = result.producerAddress;
	var exporterName   = result.exporterName;
	var importerName   = result.importerName;

	if(registrationNo!='' && producerName!='' && producerAddress!='' && exporterName!='' && importerName!=''){
		shipmentData.html =  `<tr>
                                <td><b>Registration No:</b></td>
                                <td>`+registrationNo+` <i class="fa fa-check-circle verified_info"></i></td>
                            </tr>
                            <tr>
                                <td><b>Producer Name:</b></td>
                                <td>`+producerName+` <i class="fa fa-check-circle verified_info"></i></td>
                            </tr>
                            <tr>
                                <td><b>Producer Address:</b></td>
                                <td>`+producerAddress+` <i class="fa fa-check-circle verified_info"></i></td>
                            </tr>
                            <tr>
                                <td><b>Exporter Name:</b></td>
                                <td>`+exporterName+` <i class="fa fa-check-circle verified_info"></i></td>
                            </tr>
                            <tr>
                                <td><b>Importer Name:</b></td>
                                <td>`+importerName+` <i class="fa fa-check-circle verified_info"></i></td>
                            </tr>`;

        shipmentData.isDataAvail = true;                    
    }else{
    	shipmentData.html = ` <tr>
                                    <td colspan="2"><p>Information Not Avilable</p></td>
                            </tr>`;

        shipmentData.isDataAvail = false;                                        
    }

    return shipmentData;
}

function buildInspectorBlock(result){
	var inspectorData = {};
	var vehicleId      = result.vehicleId;
	var vehicleType        = result.vehicleType;
	var vehicleFinish    = result.vehicleFinish;	

	if(vehicleId!='' && vehicleType!='' && vehicleFinish!=''){
		inspectorData.html =  `<tr>
                                    <td><b>Vehicle ID:</b></td>
                                    <td>`+vehicleId+` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Vehicle Type:</b></td>
                                    <td>`+vehicleType+` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>
                                  <tr>
                                    <td><b>Vehicle Finish:</b></td>
                                    <td>`+vehicleFinish+` <i class="fa fa-check-circle verified_info"></i></td>
                                  </tr>`;
        inspectorData.isDataAvail = true;                          
    }else{
    	inspectorData.html = `<tr>
	                                    <td colspan="2"><p>Information Not Avilable</p></td>
	                            </tr>`;
	    inspectorData.isDataAvail = false;                        
    } 

    return inspectorData;  
}

function buildAssemblerBlock(result){
	var assemblerData = {};
	var vehicleColor   = result.vehicleColor;
	var temperatureUsed = result.temperatureUsed;
	var humidity      = result.humidity;

	if(vehicleColor!='' && temperatureUsed!='' && humidity!=''){
		assemblerData.html =  `<tr>
                                <td><b>Vehicle Color:</b></td>
                                <td>`+vehicleColor+` <i class="fa fa-check-circle verified_info"></i></td>
                              </tr>
                              <tr>
                                <td><b>Temperature Recorded:</b></td>
                                <td>`+temperatureUsed+`&#x2109; <i class="fa fa-check-circle verified_info"></i></td>
                              </tr>
                              <tr>
                                <td><b>Humidity:</b></td>
                                <td>`+humidity+`% <i class="fa fa-check-circle verified_info"></i></td>
                              </tr>`;
        assemblerData.isDataAvail = true;                      
    }else{
    	assemblerData.html = `<tr>
                                    <td colspan="2"><p>Information Not Avilable</p></td>
                        </tr>`;
        assemblerData.isDataAvail = false;                
    }    

    return assemblerData;
}	

function buildExporterBlock(result){
	var exporterData = {};
	var quantity           = result.quantity;
	var destinationAddress = result.destinationAddress;
	var shipName           = result.shipName;
	var shipNo             = result.shipNo;
	var departureDateTime  = result.departureDateTime;
	var estimateDateTime   = result.estimateDateTime;
	var exporterId         = result.exporterId;

	if(quantity!='' && destinationAddress!='' && shipName!='' && shipNo!='' && departureDateTime!='' && estimateDateTime!='' && exporterId!=''){
		
    var departureDateTime = new Date(result.departureDateTime * 1000).toLocaleString();
    var estimateDateTime = new Date(result.estimateDateTime * 1000).toLocaleString();
    exporterData.html =  `<tr>
                            <td><b>Quantity:</b></td>
                            <td>`+quantity+` (in Kg) <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Destination Address:</b></td>
                            <td>`+destinationAddress+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Ship Name:</b></td>
                            <td>`+shipName+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Ship No:</b></td>
                            <td>`+shipNo+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Departure Date Time:</b></td>
                            <td>`+departureDateTime+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Estimate Date Time:</b></td>
                            <td>`+estimateDateTime+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Exporter Id:</b></td>
                            <td>`+exporterId+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>`;
        exporterData.isDataAvail = true;                  
	}else{
    	exporterData.html = ` <tr>
                                    <td colspan="2"><p>Information Not Avilable</p></td>
                        </tr>`;
        exporterData.isDataAvail = false;                
    }   

    return exporterData;
}

function buildImporterBlock(result){
	var importerData = {};
	var quantity         = result.quantity;
	var shipName         = result.shipName;
	var shipNo           = result.shipNo;
	var arrivalDateTime  = result.arrivalDateTime;
	var transportInfo    = result.transportInfo;
	var warehouseName    = result.warehouseName;
	var warehouseAddress = result.warehouseAddress;
	var importerId       = result.importerId;

	if(quantity!='' && shipName!='' && shipNo!='' && arrivalDateTime!='' && transportInfo!='' && warehouseName!='' && warehouseAddress!='' && importerId!=''){
		
    var arrivalDateTime = new Date(result.arrivalDateTime * 1000).toLocaleString();
    importerData.html =  `<tr>
                            <td><b>Quantity:</b></td>
                            <td>`+quantity+` (in Kg) <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Ship Name:</b></td>
                            <td>`+shipName+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Ship No:</b></td>
                            <td>`+shipNo+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Arrival Date Time:</b></td>
                            <td>`+arrivalDateTime+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Transport Info:</b></td>
                            <td>`+transportInfo+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Warehouse Name:</b></td>
                            <td>`+warehouseName+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Warehouse Address:</b></td>
                            <td>`+warehouseAddress+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Importer Id:</b></td>
                            <td>`+importerId+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>`;
        importerData.isDataAvail = true;                  
    }else{
    	importerData.html = ` <tr>
                                    <td colspan="2"><p>Information Not Avilable</p></td>
                        </tr>`;
        importerData.isDataAvail = false;                
    }

    return importerData;    
}

function buildProcessorBlock(result){
	var processorData = {};
	var quantity         = result.quantity;
	var temperature        = result.temperature;
	var processingDuration  = result.processingDuration;
	var internalShipmentNo  = result.internalShipmentNo;
	var packageDateTime  = result.packageDateTime;
	var processorName    = result.processorName;
	var processorAddress = result.processorAddress;

	if(quantity!='' && temperature!='' && processingDuration!='' && internalShipmentNo!='' && packageDateTime!='' && processorName!='' && processorAddress!=''){
		
    var packageDateTime = new Date(result.packageDateTime * 1000).toLocaleString();

    processorData.html =  `<tr>
                            <td><b>Quantity:</b></td>
                            <td>`+result.quantity+` (in Kg) <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Temperature:</b></td>
                            <td>`+result.temperature+`&#x2109; <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Rosting Duration:</b></td>
                            <td>`+result.processingDuration+` in seconds <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Processed Batch No:</b></td>
                            <td>`+result.internalShipmentNo+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Package Date Time:</b></td>
                            <td>`+new Date(result.packageDateTime * 1000).toLocaleString() +` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Processor Name:</b></td>
                            <td>`+result.processorName+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Warehouse Address:</b></td>
                            <td>`+result.processorAddress+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>`;
        processorData.isDataAvail = true;                  
    }else{
    	processorData.html = ` <tr>
                                    <td colspan="2"><p>Information Not Avilable</p></td>
                        </tr>`;
        processorData.isDataAvail = false;                
    }    
    
    return processorData; 
}