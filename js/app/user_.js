var globCurrentEditingBatchNo = false;
var globCurrentUser = false;

var userForm,
    inspectorForm,
    assemblerForm,
    exporterForm,
    importerForm,
    processingForm;

$(document).ready(function(){
  
  userForm =  $("#updateUserForm").parsley();
  inspectorForm =  $("#inspectorForm").parsley();
  assemblerForm =  $("#assemblerForm").parsley(); 
  exporterForm =  $("#exporterForm").parsley(); 
  importerForm =  $("#importerForm").parsley();
  processingForm =  $("#processingForm").parsley();

  $('.datepicker-autoclose').datepicker({
        autoclose: true,
        todayHighlight: true,
        format:"dd-mm-yyyy"
    });
});

$(window).on("coinbaseReady", function ()
{
    getUser(globUserContract, function(data){      

      globCurrentUser = data ;


      $("#userImage").attr('src','https://ipfs.io/ipfs/'+data.profileHash);
      $("#userName").html(data.name);
      $("#userContact").html(data.contactNo);
      $("#userRole").html(data.role);
      
    });

    getShipmentEvents(globMainContract);
});

/* --------------- User Section -----------------------*/
$("#editUser").on('click',function(){
  startLoader();
  getUser(globUserContract, function(data){
       
       $("#fullname").val(data.name);
       $("#contactNumber").val(data.contactNo);
       $("#role").val(data.role);

       var profileImageLink = 'https://ipfs.io/ipfs/'+data.profileHash;
       var btnViewImage = '<a href="'+profileImageLink+'" target="_blank" class=" text-danger"><i class="fa fa-eye"></i> View Image</a>';
       $("#imageHash").html(btnViewImage);

       changeSwitchery($("#isActive"),data.isActive);
       switchery.disable();
       stopLoader();
       $("#userFormModel").modal();
    });
});

$("#userFormBtn").on('click',function(){

    if(userForm.validate())
    {
      var fullname      = $("#fullname").val();
      var contactNumber = $("#contactNumber").val();
      var role          = globCurrentUser.role;
      var userStatus    = $("#isActive").is(":checked");
      var profileHash   = $("#userProfileHash").val();

      var userDetails = {
          fullname : fullname,
          contact : contactNumber,
          role : role,
          status : userStatus,
          profile : profileHash
      };    

      updateUser(globUserContract, userDetails); 
    }
});

function getUser(contractRef,callback)
{
   contractRef.methods.getUser(globCoinbase).call(function (error, result) {
        if(error){
            alert("Unable to get User" + error);    
        }
        newUser = result;
        if (callback)
        {
            callback(newUser);
        }        
    });
}

function updateUser(contractRef,data)
{
  contractRef.methods.updateUser(data.fullname,data.contact,data.role,data.status,data.profile)
  .send({from:globCoinbase,to:contractRef.address})
  .on('transactionHash',function(hash)
        {
          $.magnificPopup.instance.close()
          handleTransactionResponse(hash);
          $("#userFormModel").modal('hide');
        })
        .on('receipt',function(receipt)
        {
            receiptMessage = "User Profile Updated Succussfully";
            handleTransactionReceipt(receipt,receiptMessage);
            $("#userFormModel").modal('hide');
        })
        .on('error',function(error)
        {
            handleGenericError(error.message);
            return;     
        });    
}

/* --------------- Activity Section -----------------------*/

function editActivity(shipmentNo)
{
  startLoader();
  globCurrentEditingBatchNo = shipmentNo;
}

/* --------------- Inspector Section -----------------------*/


$("#updateInspector").on('click',function(){

    if(inspectorForm.validate())
    {
      var data = {
        shipmentNo : globCurrentEditingBatchNo,
        vehicleId : $("#vehicleId").val().trim(),
        vehicleType : $("#vehicleType").val().trim(),
        vehicleFinish : $("#vehicleFinish").val().trim(),
      };    

      updateInspector(globMainContract, data); 
    }
});

function updateInspector(contractRef,data)
{
  //contractRef.methods.updateUser("Swapnali","9578774787","ASSEMBLER",true,"0x74657374")
  contractRef.methods.updateInspectorData(data.shipmentNo, data.vehicleId,data.vehicleType, data.vehicleFinish)
  .send({from:globCoinbase,to:contractRef.address})
  .on('transactionHash',function(hash)
        {
          $.magnificPopup.instance.close()
          handleTransactionResponse(hash);
        })
        .on('receipt',function(receipt)
        {
            receiptMessage = "Inspection Updated Succussfully";
            handleTransactionReceipt(receipt,receiptMessage)
        })
        .on('error',function(error)
        {
            handleGenericError(error.message);
            return;     
        });    
}

/* --------------- Assembler Section -----------------------*/


$("#updateAssembly").on('click',function(){

    if(assemblerForm.validate())
    {
      var data = {
        shipmentNo : globCurrentEditingBatchNo,
        vehicleColor : $("#vehicleColor").val().trim(),
        temperatureUsed : $("#temperatureUsed").val().trim(),
        humidity : $("#humidity").val().trim(),
      };    

      updateAssembly(globMainContract, data); 
    }
});

function updateAssembly(contractRef,data)
{
  //contractRef.methods.updateUser("Swapnali","9578774787","ASSEMBLER",true,"0x74657374")
  contractRef.methods.updateAssemblerData(data.shipmentNo, data.vehicleColor,data.temperatureUsed, data.humidity)
  .send({from:globCoinbase,to:contractRef.address})
  .on('transactionHash',function(hash)
        {
          $.magnificPopup.instance.close()
          handleTransactionResponse(hash);
        })
        .on('receipt',function(receipt)
        {
            receiptMessage = "Assembly Updated Succussfully";
            handleTransactionReceipt(receipt,receiptMessage)
        })
        .on('error',function(error)
        {
            handleGenericError(error.message);
            return;     
        });    
}


/* --------------- Export Section -----------------------*/


$("#updateExport").on('click',function(){

    if(exporterForm.validate())
    {
      var tmpDate = $("#estimateDateTime").val().trim().split("-");
      tmpDate = tmpDate[1]+"/"+tmpDate[0]+"/"+tmpDate[2];     

      var data = {
        shipmentNo : globCurrentEditingBatchNo,
        quantity : parseInt($("#quantity").val().trim()),
        destinationAddress : $("#destinationAddress").val().trim(),
        shipName : $("#shipName").val().trim(),
        shipNo : $("#shipNo").val().trim(),
        estimateDateTime : new Date(tmpDate).getTime() / 1000,
        plantNo : 0,
        exporterId : parseInt($("#exporterId").val().trim()),
      };    

      updateExport(globMainContract, data); 
    }
});

function updateExport(contractRef,data)
{
  //contractRef.methods.updateUser("Swapnali","9578774787","ASSEMBLER",true,"0x74657374")
  contractRef.methods.updateExporterData(data.shipmentNo, data.quantity,data.destinationAddress, data.shipName, data.shipNo, data.estimateDateTime, data.exporterId)
  .send({from:globCoinbase,to:contractRef.address})
  .on('transactionHash',function(hash)
        {
          $.magnificPopup.instance.close()
          handleTransactionResponse(hash);
        })
        .on('receipt',function(receipt)
        {
            receiptMessage = "Export Updated Succussfully";
            handleTransactionReceipt(receipt,receiptMessage)
        })
        .on('error',function(error)
        {
            handleGenericError(error.message);
            return;     
        });    
}

/* --------------- Import Section -----------------------*/


$("#updateImport").on('click',function(){

    if(importerForm.validate())
    {
      var data = {
        shipmentNo : globCurrentEditingBatchNo,
        quantity : parseInt($("#quantity").val().trim()),
        shipName : $("#shipName").val().trim(),
        shipNo : $("#shipNo").val().trim(),
        transportInfo : ($("#transportInfo").val().trim()),
        warehouseName : ($("#warehouseName").val().trim()),
        warehouseAddress : ($("#warehouseAddress").val().trim()),
        importerId : parseInt($("#importerId").val().trim()),
      };    

      updateImport(globMainContract, data); 
    }
});

function updateImport(contractRef,data)
{
  //contractRef.methods.updateUser("Swapnali","9578774787","ASSEMBLER",true,"0x74657374")
  contractRef.methods.updateImporterData(data.shipmentNo, data.quantity, data.shipName, data.shipNo, data.transportInfo, data.warehouseName, data.warehouseAddress,data.importerId)
  .send({from:globCoinbase,to:contractRef.address})
  .on('transactionHash',function(hash)
        {
          $.magnificPopup.instance.close()
          handleTransactionResponse(hash);
        })
        .on('receipt',function(receipt)
        {
            receiptMessage = "Import Updated Succussfully";
            handleTransactionReceipt(receipt,receiptMessage)
        })
        .on('error',function(error)
        {
            handleGenericError(error.message);
            return;     
        });    
}

/* --------------- Processor Section -----------------------*/

$("#updateProcessor").on('click',function(){

    if(processingForm.validate())
    {
      var tmpDate = $("#packageDateTime").val().trim().split("-");
      tmpDate = tmpDate[1]+"/"+tmpDate[0]+"/"+tmpDate[2];

      var data = {
        shipmentNo : globCurrentEditingBatchNo,
        quantity : parseInt($("#quantity").val().trim()),
        temperature : $("#processingTemperature").val().trim(),
        processingDuration : parseInt($("#processingDuration").val().trim()),
        internalShipmentNo : ($("#internalShipmentNo").val().trim()),
        packageDateTime : new Date(tmpDate).getTime() / 1000 ,
        processorName : ($("#processorName").val().trim()),
        processorAddress : ($("#processorAddress").val().trim()),
      };    

      updateProcessor(globMainContract, data); 
    }
});

function updateProcessor(contractRef,data)
{
  //contractRef.methods.updateUser("Swapnali","9578774787","ASSEMBLER",true,"0x74657374")
  contractRef.methods.updateProcessorData(data.shipmentNo, data.quantity, data.temperature, data.processingDuration, data.internalShipmentNo, data.packageDateTime, data.processorName,data.processorAddress)
  .send({from:globCoinbase,to:contractRef.address})
  .on('transactionHash',function(hash)
        {
          $.magnificPopup.instance.close()
          handleTransactionResponse(hash);
        })
        .on('receipt',function(receipt)
        {
            receiptMessage = "Processing Updated Succussfully";
            handleTransactionReceipt(receipt,receiptMessage)
        })
        .on('error',function(error)
        {
            handleGenericError(error.message);
            return;     
        });    
}

function getShipmentEvents(contractRef) {
    contractRef.getPastEvents('PerformShipment', {
        fromBlock: 0
    }).then(function (events) 
    {
      $("#totalShipment").html(events.length);
      counterInit();

        var finalEvents = [];
        $.each(events,function(index,elem)
        {
            var tmpData = {};
            tmpData.shipmentNo = elem.returnValues.shipmentNo;
            tmpData.transactionHash = elem.transactionHash;
            getShipmentStatus(contractRef, tmpData.shipmentNo).then(result => {
                tmpData.status = result;

                finalEvents.push(tmpData);
            });
        });
        
        setTimeout(function()
        {
          if(finalEvents.length > 0){
              var table = buildShipmentTable(finalEvents);
              $("#userShipmentTable").find("tbody").html(table);

              reInitPopupForm();
          }    
        },1000); 

        

        // $("#transactions tbody").html(buildTransactionData(events));
    }).catch(error => {
        console.log(error)
    });
}

function buildShipmentTable(finalEvents)
{
    $.magnificPopup.instance.popupsCache = {};

    var table = "";
    
    for (var tmpDataIndex in finalEvents)
    {   
        var elem = finalEvents[tmpDataIndex];
        var shipmentNo = elem.shipmentNo;
        var transactionHash = elem.transactionHash;
        var tr = "";
        
        if (elem.status == "INSPECTOR") {
            tr = `<tr>
                    <td>`+shipmentNo+`</td>
                  `;
                  
              if(globCurrentUser.role == "INSPECTOR")
              {
                tr+=`<td>
                          <span class="label label-red font-weight-100">
                          <a class="popup-with-form" href="#inspectorForm" onclick="editActivity('`+shipmentNo+`')">
                            <span class="label label-red font-weight-100">Update</span>
                          </a>
                      </td>`;
              }
              else
              {
                 tr+=`<td><span class="label label-warning font-weight-100">Processing</span> </td>`;
              }

                
          tr+=`<td><span class="label label-default font-weight-100">Not Available</span> </td>
              <td><span class="label label-default font-weight-100">Not Available</span> </td>
              <td><span class="label label-default font-weight-100">Not Available</span> </td>
              <td><span class="label label-default font-weight-100">Not Available</span> </td>
              <td><a href="view-batch.php?shipmentNo=`+shipmentNo+`&txn=`+transactionHash+`" target="_blank" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-arrow-right"></i></a> </td>
          </tr>`;

        } else if (elem.status == "ASSEMBLER") {
          tr = `<tr>
                    <td>`+shipmentNo+`</td>
                    <td><span class="label label-success font-weight-100">Completed</span></td>
                    `;
                  if(globCurrentUser.role == "ASSEMBLER")
                  {
                    tr+=`<td>
                              <span class="label label-red font-weight-100">
                              <a class="popup-with-form" href="#assemblerForm" onclick="editActivity('`+shipmentNo+`')">
                                <span class="label label-red font-weight-100">Update</span>
                              </a>
                          </td>`;
                  }
                  else
                  {
                     tr+=`<td><span class="label label-warning font-weight-100">Processing</span> </td>`;
                  }        

            tr+=`
                <td><span class="label label-default font-weight-100">Not Available</span> </td>
                <td><span class="label label-default font-weight-100">Not Available</span> </td>
                <td><span class="label label-default font-weight-100">Not Available</span> </td>
                <td><a href="view-batch.php?shipmentNo=`+shipmentNo+`&txn=`+transactionHash+`" target="_blank" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-arrow-right"></i></a> </td>
            </tr>`;

        } else if (elem.status == "EXPORTER") {
            tr = `<tr>
                    <td>`+shipmentNo+`</td>
                    <td><span class="label label-success font-weight-100">Completed</span></td>
                    <td><span class="label label-success font-weight-100">Completed</span> </td>
                  `;
                  
                  if(globCurrentUser.role == "EXPORTER")
                  {
                    tr+=`<td>
                              <span class="label label-red font-weight-100">
                              <a class="popup-with-form" href="#exporterForm" onclick="editActivity('`+shipmentNo+`')">
                                <span class="label label-red font-weight-100">Update</span>
                              </a>
                          </td>`;
                  }
                  else
                  {
                     tr+=`<td><span class="label label-warning font-weight-100">Processing</span> </td>`;
                  } 

              tr+=`  
                    <td><span class="label label-default font-weight-100">Not Available</span> </td>
                    <td><span class="label label-default font-weight-100">Not Available</span> </td>
                    <td><a href="view-batch.php?shipmentNo=`+shipmentNo+`&txn=`+transactionHash+`" target="_blank" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-arrow-right"></i></a> </td>
                </tr>`;
        } else if (elem.status == "IMPORTER") {
            tr = `<tr>
                    <td>`+shipmentNo+`</td>
                    <td><span class="label label-success font-weight-100">Completed</span></td>
                    <td><span class="label label-success font-weight-100">Completed</span> </td>
                    <td><span class="label label-success font-weight-100">Completed</span> </td>
                  `;  

                  if(globCurrentUser.role == "IMPORTER")
                  {
                    tr+=`<td>
                              <span class="label label-red font-weight-100">
                              <a class="popup-with-form" href="#importerForm" onclick="editActivity('`+shipmentNo+`')">
                                <span class="label label-red font-weight-100">Update</span>
                              </a>
                          </td>`;
                  }
                  else
                  {
                     tr+=`<td><span class="label label-warning font-weight-100">Processing</span> </td>`;
                  } 

              tr+=` <td><span class="label label-default font-weight-100">Not Available</span> </td>
                    <td><a href="view-batch.php?shipmentNo=`+shipmentNo+`&txn=`+transactionHash+`" target="_blank" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-arrow-right"></i></a> </td>
                </tr>`;
        } else if (elem.status == "PROCESSOR") {
            tr = `<tr>
                    <td>`+shipmentNo+`</td>
                    <td><span class="label label-success font-weight-100">Completed</span></td>
                    <td><span class="label label-success font-weight-100">Completed</span> </td>
                    <td><span class="label label-success font-weight-100">Completed</span> </td>
                    <td><span class="label label-success font-weight-100">Completed</span> </td>
                  `;
                  
                  if(globCurrentUser.role == "PROCESSOR")
                  {
                    tr+=`<td>
                              <span class="label label-red font-weight-100">
                              <a class="popup-with-form" href="#processingForm" onclick="editActivity('`+shipmentNo+`')">
                                <span class="label label-red font-weight-150">Update</span>
                              </a>
                          </td>`;
                  }
                  else
                  {
                     tr+=`<td><span class="label label-warning font-weight-100">Processing</span> </td>`;
                  }  
                tr+=`    
                    <td><a href="view-batch.php?shipmentNo=`+shipmentNo+`&txn=`+transactionHash+`" target="_blank" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-arrow-right"></i></a> </td>
                </tr>`;
        } else if (elem.status == "DONE") {
            tr = `<tr>
                    <td>`+shipmentNo+`</td>
                    <td><span class="label label-success font-weight-100">Completed</span></td>
                    <td><span class="label label-success font-weight-100">Completed</span> </td>
                    <td><span class="label label-success font-weight-100">Completed</span> </td>
                    <td><span class="label label-success font-weight-100">Completed</span> </td>
                    <td><span class="label label-success font-weight-100">Completed</span> </td>
                  `;  
                tr+=`    
                    <td><a href="view-batch.php?shipmentNo=`+shipmentNo+`&txn=`+transactionHash+`" target="_blank" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-arrow-right"></i></a> </td>
                </tr>`;
        }
            
        table+=tr;
    }


    return table;
    
}

function getShipmentStatus(contractRef, shipmentNo)
{
    return contractRef.methods.getNextAction(shipmentNo)
        .call();
}

function reInitPopupForm()
{
  $('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: true,
    key: 'popup-with-form',
    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      open: function() {
        stopLoader();
      }
    }
  });
}