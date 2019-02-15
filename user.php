<?php include('templates/_header.php'); ?>


<div class="container-fluid">
    <!-- /.row -->
    <div class="row">
        <div class="col-md-12 col-xs-12">
            <div class="white-box">
                <div class="user-btm-box">
                    <div class="">
                        <p class="text-purple"><i class="fa fa-mobile"></i> Contact No</p>
                        <p id="userContact">--</p>
                    </div>

                    <div class="">
                        <h3 class="text-blue"><i class="fa fa-user"></i> Role</h3>
                        <h3 id="userRole">--</h3>
                    </div>
<!--                                 <div class="col-md-4 col-sm-4 text-center">
                                    <p class="text-danger"><i class="fa fa-gears"></i> Settings</p>
                                    <a class="btn btn-info m-l-20 btn-rounded btn-outline hidden-xs hidden-sm waves-effect waves-light" id="editUser" href="javascript:void(0);" >Edit</a>
                                </div> -->

                            </div>
                        </div>
                    </div>
                </div>
                <!--row -->
                <!-- /.row -->
                

                <!-- row -->
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div class="white-box">
                            <h3 class="box-title">Shipment Overview</h3> 
                            <div class="table-responsive">
                                <table class="table product-overview" id="userShipmentTable">
                                    <thead>
                                        <tr>
                                            <th>Shipment ID</th>
                                            <th>Inspector</th>
                                            <th>Assembler</th>
                                            <th>Exporter</th>
                                            <th>Importer</th>
                                            <th>Processor</th>
                                            <th>View</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                     <tr>
                                         <td colspan="7" align="center">No Data Available</td>
                                     </tr>                                         
                                 </tbody>
                             </table>

                             <!-- Update User Form -->
                             <div id="userFormModel" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none; padding-top: 170px;">
                                <div class="modal-dialog">
                                    <div class="modal-content">

                                        <div class="modal-body">
                                            <form id="updateUserForm" onsubmit="return false;">
                                                <fieldset style="border:0;">
                                                    <div class="form-group">
                                                        <label class="control-label" for="fullname">Full Name <i class="red">*</i></label>
                                                        <input type="text" class="form-control" id="fullname" name="fullname" placeholder="Name" data-parsley-required="true">
                                                    </div>                              
                                                    <div class="form-group">
                                                        <label class="control-label" for="contactNumber">Contact No<i class="red">*</i></label>
                                                        <input type="text" class="form-control" id="contactNumber" name="contactNumber" placeholder="Contact No." data-parsley-required="true" data-parsley-type="digits" data-parsley-length="[10, 15]" maxlength="15">
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label" for="role">Role </label>
                                                        <select class="form-control" id="role" disabled="true" name="role">
                                                            <option value="">Select Role</option>
                                                            <option value="INSPECTOR">Inspector</option>
                                                            <option value="ASSEMBLER">Assembler</option>
                                                            <option value="EXPORTER">Exporter</option>
                                                            <option value="IMPORTER">Importer</option>
                                                            <option value="PROCESSOR">Processor</option>
                                                        </select>    
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label" for="isActive">User Status</label>
                                                        <input type="checkbox" class="js-switch" data-color="#99d683" data-secondary-color="#f96262" id="isActive" name="isActive" data-size="small"/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label" for="userProfileHash">Profile Image <i class="red">*</i></label>
                                                        <input type="file" class="form-control" onchange="handleFileUpload(event);" />
                                                        <input type="hidden" class="form-control" id="userProfileHash" name="userProfileHash" placeholder="User Profile Hash" data-parsley-required="true" >
                                                        <span id="imageHash"></span>
                                                    </div>
                                                </fieldset>

                                            </div>
                                            <div class="modal-footer">
                                                <i style="display: none;" class="fa fa-spinner fa-spin"></i>
                                                <button type="button" class="btn btn-primary" id="userFormBtn">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            

                            <!-- Inspector Form -->
                            <form id="inspectorForm" class="mfp-hide white-popup-block">
                                <h1>Inspector</h1><br>
                                <fieldset style="border:0;">
                                    <!-- <div class="form-group">
                                        <label class="control-label" for="InspectorId">Inspector ID Number</label>
                                        <input type="text" class="form-control" id="InspectorId" name="inspectorId" placeholder="inspector id number" data-parsley-required="true">
                                    </div>   -->                            
                                    <div class="form-group">
                                        <label class="control-label" for="vehicleType">Vehicle Type</label>
                                        <!--  <input type="text" class="form-control" id="vehicleType" name="vehicleType" placeholder="Type of Vehicle" data-parsley-required="true"> -->
                                        <select class="form-control" id="vehicleType" name="vehicleType" data-parsley-required="true">
                                            <option value="Sedan">Sedan</option>
                                            <option value="Hatchback">Hatchback</option>
                                            <option value="MPV">MPV</option>
                                            <option value="SUV">SUV</option>
                                            <option value="4WD">4WD</option>
                                        </select>   


                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="vehicleId">Vehicle ID</label>
                                        <input type="text" class="form-control" id="vehicleId" name="vehicleId" placeholder="Vehicle ID" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="vehicleFinish">Vehicle Finish</label>
                                        <!-- <input type="text" class="form-control" id="vehicleFinish" name="vehicleFinish" placeholder="Vehicle Finish Used" data-parsley-required="true"> -->
                                        <select class="form-control" id="vehicleFinish" name="vehicleFinish" data-parsley-required="true">
                                            <option value="Metallic">Metallic</option>
                                            <option value="Matte">Matte</option>
                                            <option value="Chrome">Chrome</option>
                                            <option value="Standard">Standard</option>
                                        </select>   
                                    </div>
                                    <div class="form-group float-right">
                                        <button type="button" id="updateInspector" class="btn btn-primary">Send</button>
                                    </div>
                                </fieldset>
                            </form>

                            <!-- Assembler Form -->
                            <form id="assemblerForm" class="mfp-hide white-popup-block ">
                                <h1>Assembler</h1><br>
                                <fieldset style="border:0;">

                                    <div class="form-group">
                                        <label class="control-label" for="vehicleColor">Vehicle Color</label>
                                        <input type="text" class="form-control" id="vehicleColor" name="vehicleColor" placeholder="Vehicle Color" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="temperatureUsed">Temperature (in Celcius)</label>
                                        <input type="number" step="any" class="form-control" id="temperatureUsed" name="temperatureUsed" placeholder="temperature" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="humidity">Humidity (g/m3)</label>
                                        <input type="number" step="any" min="1" class="form-control" id="humidity" name="humidity" placeholder="humidity" data-parsley-required="true">
                                    </div>                                
                                    <div class="form-group float-right">
                                        <button type="button" id="updateAssembly" class="btn btn-primary">Send</button>
                                    </div>
                                </fieldset>
                            </form>

                            <!-- Exporter Form -->
                            <form id="exporterForm" class="mfp-hide white-popup-block">
                                <h1>Exporting</h1><br>
                                <fieldset style="border:0;">

                                    <div class="form-group">
                                        <label class="control-label" for="quantity">Quantity (in Kg)</label>
                                        <input type="number" step="any" min="1" class="form-control" id="quantity" name="quantity" placeholder="Quantity" data-parsley-required="true">
                                    </div> 

                                    <div class="form-group">
                                        <label class="control-label" for="destinationAddress">Destination Address</label>
                                        <input type="text" class="form-control" id="destinationAddress" name="destinationAddress" placeholder="Destination Address" data-parsley-required="true">
                                    </div> 


                                    <div class="form-group">
                                        <label class="control-label" for="shipName">Ship Name</label>
                                        <input type="text" class="form-control" id="shipName" name="shipName" placeholder="Ship Name" data-parsley-required="true">
                                    </div> 

                                    <div class="form-group">
                                        <label class="control-label" for="shipNo">Ship No</label>
                                        <input type="text" class="form-control" id="shipNo" name="shipNo" placeholder="Ship No" data-parsley-required="true">
                                    </div> 

                                    <div class="form-group">
                                        <label class="control-label" for="estimateDateTime">Estimate Datetime</label>
                                        <input type="text" class="form-control datepicker-master" id="estimateDateTime" name="estimateDateTime" placeholder="Estimate Datetime" data-parsley-required="true">
                                    </div>

                                    

                                    <div class="form-group">
                                        <label class="control-label" for="exporterId">Exporter ID</label>
                                        <input type="number" class="form-control" id="exporterId" name="exporterId" placeholder="Exporter ID" data-parsley-required="true">
                                    </div>


                                    <div class="form-group float-right">
                                        <button type="button" id="updateExport" class="btn btn-primary">Send</button>
                                    </div>
                                </fieldset>
                            </form>

                            <!-- Importer Form -->
                            <form id="importerForm" class="mfp-hide white-popup-block">
                                <h1>Importing</h1><br>
                                <fieldset style="border:0;">

                                    <div class="form-group">
                                        <label class="control-label" for="quantity">Quantity</label>
                                        <input type="number" min="1" class="form-control" id="quantity" name="quantity" placeholder="Quantity" data-parsley-required="true">
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label" for="shipName">Ship Name</label>
                                        <input type="text" class="form-control" id="shipName" name="shipName" placeholder="Ship Name" data-parsley-required="true">
                                    </div> 

                                    <div class="form-group">
                                        <label class="control-label" for="shipNo">Ship No</label>
                                        <input type="text" class="form-control" id="shipNo" name="shipNo" placeholder="Ship No" data-parsley-required="true">
                                    </div> 

                                    <div class="form-group">
                                        <label class="control-label" for="transportInfo">Transport Info</label>
                                        <input type="text" class="form-control" id="transportInfo" name="transportInfo" placeholder="Transport Info" data-parsley-required="true">
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="warehouseName">Warehouse Name</label>
                                        <input type="text" class="form-control" id="warehouseName" name="warehouseName" placeholder="Warehouse Name" data-parsley-required="true">
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="warehouseAddress">Warehouse Address</label>
                                        <input type="text" class="form-control" id="warehouseAddress" name="warehouseAddress" placeholder="Warehouse Address" data-parsley-required="true" >
                                    </div>                              
                                    <div class="form-group">
                                        <label class="control-label" for="importerId">Importer Id</label>
                                        <input type="number" min="1" class="form-control" id="importerId" name="importerId" placeholder="Importer Id" data-parsley-required="true" >
                                    </div>                              
                                    
                                    <div class="form-group float-right">
                                        <button type="button" id="updateImport" class="btn btn-primary">Send</button>
                                    </div>
                                </fieldset>
                            </form>

                            <!-- Processor Form -->
                            <form id="processingForm" class="mfp-hide white-popup-block">
                                <h1>Processing</h1><br>
                                <fieldset style="border:0;">
                                    <div class="form-group">
                                        <label class="control-label" for="quantity">Quantity</label>
                                        <input type="number" min="1" class="form-control" id="quantity" name="quantity" placeholder="Quantity" data-parsley-required="true">
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="processingTemperature">Temperature (in Celcius)</label>
                                        <input type="number" step="any" class="form-control" id="processingTemperature" name="temperature" placeholder="Temperature" data-parsley-required="true">
                                    </div>                              
                                    <div class="form-group">
                                        <label class="control-label" for="processingDuration">Time for Processing (in Minutes)</label>
                                        <input type="number" min="1" class="form-control" id="processingDuration" name="processingDuration" placeholder="Time for roasting" data-parsley-required="true" >
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label" for="internalShipmentNo">Internal Shipment No</label>
                                        <input type="text" class="form-control" id="internalShipmentNo" name="internalShipmentNo" placeholder="Internal Shipment No" data-parsley-required="true">
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label" for="packageDateTime">Packaging Date & Time</label>
                                        <input type="text" class="form-control datepicker-master" id="packageDateTime" name="packageDateTime" placeholder="Packaging Date" data-parsley-required="true">
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="processorName">Processor Name</label>
                                        <input type="text" class="form-control" id="processorName" name="processorName" placeholder="Processor Name" data-parsley-required="true">
                                    </div>                              
                                    <div class="form-group">
                                        <label class="control-label" for="processorAddress">Processor Address</label>
                                        <input type="text" class="form-control" id="processorAddress" name="processorAddress" placeholder="Processor Address" data-parsley-required="true">
                                    </div>
                                    <div class="form-group float-right">
                                        <button type="button" id="updateProcessor" class="btn btn-primary">Send</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>                
        </div>
        <!-- /.container-fluid -->

        <script type="text/javascript">
            var switchery;
            $(document).ready(function(){
                initSwitch();
                initDateTimePicker();
            });

            function initSwitch(){
                /*For User Form Pop Up*/
                switchery = new Switchery($("#isActive")[0], $("#isActive").data());    
            }

            function initDateTimePicker(){
                $('.datepicker-master').datetimepicker({
                    format: 'dd-mm-yyyy hh:ii:ss',
                    weekStart: 1,
                    todayBtn:  1,
                    autoclose: 1,
                    todayHighlight: 1,
                    startView: 2,
                    forceParse: 0,
                    showMeridian: 1,
                    minuteStep: 1
                });
            }
        </script>
        
        <?php include('templates/_footer.php');?>   