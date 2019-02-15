<?php include('templates/_header.php'); ?>


<div class="container-fluid">
    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title"></h4>
        </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
        </div>
        <!-- /.col-lg-12 -->
    </div>

    <div class="row">
        <div class="col-md-12">
            <div class="alert alert-info" id="divOngoingTransaction" style="display: none">Ongoing Transaction: <span id="linkOngoingTransaction">None</span> </div>
        </div>    
    </div>

    <!-- /.row -->
<!--     <div class="row">
        <div class="col-lg-6 col-sm-6 ">
            <div class="white-box">
                <h3 class="box-title">Users</h3>
                <ul class="list-inline two-part">
                    <li><i class="icon-user text-info"></i></li>
                    <li class="text-right"><span class="counter text-info" id="totalUsers">0</span></li>
                </ul>
            </div>
        </div>
        <div class="col-lg-6 col-sm-6 ">
            <div class="white-box">
                <h3 class="box-title">Total Batches</h3>
                <ul class="list-inline two-part">
                    <li><i class="icon-doc text-success"></i></li>
                    <li class="text-right"><span class="counter text-success" id="totalShipment">0</span></li>
                </ul>
            </div>
        </div>
    </div> -->
    <!--row -->
    <!-- /.row -->


    <!-- row -->
    <div class="row">
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
            <div class="white-box">
               <a href="javascript:void(0);" class="btn btn-info pull-right m-l-20 btn-rounded btn-outline hidden-xs hidden-sm waves-effect waves-light" onclick="javascript:$('#shipmentFormModel').modal();">Create Shipment</a>
               <h3 class="box-title">Shipment Overview</h3> 
               <div class="table-responsive">
                <table class="table product-overview" id="adminShipmentTable">
                    <thead>
                        <tr>
                            <th>Shipment ID</th>
                            <th>QR-Code</th>
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
           </div>
       </div>
   </div>
</div>

<!-- <div class="col-md-12 col-lg-12 col-sm-12">
    <div class="white-box">
       <a href="javascript:void(0);" id="userFormClick" class="btn btn-info pull-right m-l-20 btn-rounded btn-outline hidden-xs hidden-sm waves-effect waves-light">Create User</a>
       <h3 class="box-title">Users</h3> 
       <div class="table-responsive">
        <table class="table product-overview table-responsive" id="tblUser">
            <thead>
                <tr>
                    <th>User Address</th>
                    <th>Name</th>
                    <th>Contact No.</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
</div>
</div> -->
</div>
<!-- /.row -->

</div>
<!-- /.container-fluid -->

<div id="shipmentFormModel" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none; padding-top: 170px;">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h2 class="modal-title">Add Shipment</h2>
            </div>
            <div class="modal-body">
                <form id="shipmentForm" onsubmit="return false;">
                    <fieldset style="border:0;">
                        <div class="form-group">
                            <label class="control-label" for="producerRegistrationNo">Producer Registration No <i class="red">*</i></label>
                            <input type="text" class="form-control" id="producerRegistrationNo" name="producerRegistrationNo" placeholder="Producer Registration No" data-parsley-required="true">
                        </div> 
                        <div class="form-group">
                            <label class="control-label" for="producerName">Producer Name <i class="red">*</i></label>
                            <input type="text" class="form-control" id="producerName" name="producerName" placeholder="Producer Name" data-parsley-required="true">
                        </div>                              
                        <div class="form-group">
                            <label class="control-label" for="producerAddress">Producer Address <i class="red">*</i></label>
                            <textarea class="form-control" id="producerAddress" name="producerAddress" placeholder="Producer Address" data-parsley-required="true"></textarea>
                        </div>
                        <div class="form-group">
                            <label class="control-label" for="exporterName">Exporter Name <i class="red">*</i></label>
                            <input type="text" class="form-control" id="exporterName" name="exporterName" placeholder="Exporter Name" data-parsley-required="true">
                        </div> 
                        <div class="form-group">
                            <label class="control-label" for="importerName">Importer Name <i class="red">*</i></label>
                            <input type="text" class="form-control" id="importerName" name="importerName" placeholder="Importer Name" data-parsley-required="true">
                        </div> 
                    </fieldset>

                </div>
                <div class="modal-footer">
                   <button type="submit" onclick="addShipmentBatch();" class="fcbtn btn btn-primary btn-outline btn-1f">Send</button>
               </form>
           </div>
       </div>
   </div>
</div>

<div id="userFormModel" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none; padding-top: 170px;">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h2 class="modal-title" id="userModelTitle">Add User</h2>
            </div>
            <div class="modal-body">
                <form id="userForm" onsubmit="return false;">
                    <fieldset style="border:0;">
                        <div class="form-group">
                            <label class="control-label" for="userWalletAddress">User Wallet Address <i class="red">*</i></label>
                            <input type="text" class="form-control" id="userWalletAddress" name="userWalletAddress" placeholder="Wallet Address" data-parsley-required="true" minlength="42" maxlength="42">
                        </div> 
                        <div class="form-group">
                            <label class="control-label" for="userName">User Name <i class="red">*</i></label>
                            <input type="text" class="form-control" id="userName" name="userName" placeholder="Name" data-parsley-required="true">
                        </div>                              
                        <div class="form-group">
                            <label class="control-label" for="userContactNo">User Contact <i class="red">*</i></label>
                            <input type="text" class="form-control" id="userContactNo" name="userContactNo" placeholder="Contact No." data-parsley-required="true" data-parsley-type="digits" data-parsley-length="[10, 15]" maxlength="15">
                        </div>
                        <div class="form-group">
                            <label class="control-label" for="userRoles">User Role <i class="red">*</i></label>
                            <select class="form-control" id="userRoles" name="userRoles" data-parsley-required="true">
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
                    <button type="submit" onclick="userFormSubmit();" class="fcbtn btn btn-primary btn-outline btn-1f" id="userFormBtn">Send</button>
                </form>
            </div>
        </div>
    </div>
</div>




<script type="text/javascript">
    var shipmentFormInstance, userFormInstance;
    $(document).ready(function(){
        userFormInstance = $("#userForm").parsley();
        shipmentFormInstance = $("#shipmentForm").parsley();

        initSwitch();
    });

    function initSwitch(){
        /*For User Form Pop Up*/
        new Switchery($("#isActive")[0], $("#isActive").data());     
    }
</script>

<?php include('templates/_footer.php');?>            