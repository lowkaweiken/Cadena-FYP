<?php include('templates/_header.php');?>
<?php 
     if(!isset($_GET['shipmentNo']) || (isset($_GET['shipmentNo']) && $_GET['shipmentNo']=='') &&
        !isset($_GET['txn']) || (isset($_GET['txn']) && $_GET['txn']=='')){
        echo "<script>window.location = 'index.php';</script>";
     }   
?>
<style type="text/css">
    .verified_info{
        color: green;
    }
</style>
<div class="container-fluid">
        <div class="row bg-title">
            <div class="col-lg-6 col-md-4 col-sm-4 col-xs-12">
                <h3 class="page-title">Shipment Progress</h3> 
                <h4><b>Shipment No: </b><?php echo $_GET['shipmentNo'];?></h4>
            </div>
            <div class="col-lg-6 col-sm-8 col-md-8 col-xs-12">

            </div>
            <!-- /.col-lg-12 -->
        </div>
        <!-- .row -->
        <div class="row">
            <div class="col-md-12">
                <div class="white-box">
                    <ul class="timeline">
                        <li>
                            <div class="timeline-badge danger">
                                <i class="fa fa-check"></i>
                            </div>
                            <div class="timeline-panel" id="shipmentSection">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">Shipment</h4>
                                    <p><small class="text-muted text-success activityDateTime"></small> </p>
                                    <!-- <span class="activityQrCode"></span> -->
                                </div>
                                <div class="timeline-body">
                                    <table class="table activityData table-responsive" >
                                        <tr>
                                            <td colspan="2"><p>Information Not Available</p></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </li>
                        <li class="">
                            <div class="timeline-badge danger">
                                <i class="fa fa-times"></i>
                            </div>
                            <div class="timeline-panel" id="inspectorSection">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">Inspector</h4>
                                    <p><small class="text-muted text-success activityDateTime"></small> </p>
                                    <!-- <span class="activityQrCode"></span> -->
                                </div>
                                <div class="timeline-body">
                                    <table class="table activityData table-responsive">
                                        <tr>
                                            <td colspan="2"><p>Information Not Available</p></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </li>
                        <li>
                           <div class="timeline-badge danger">
                                <i class="fa fa-times"></i>
                            </div>
                            <div class="timeline-panel" id="assemblerSection">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">Assembler</h4>
                                    <p><small class="text-muted text-success activityDateTime"></small> </p>
                                    <!-- <span class="activityQrCode"></span> -->
                                </div>
                                <div class="timeline-body">
                                    <table class="table activityData table-responsive" >
                                        <tr>
                                            <td colspan="2"><p>Information Not Available</p></td>
                                        </tr>
                                    </table>        
                                </div>
                            </div>
                        </li>
                        <li class="">
                            <div class="timeline-badge danger">
                                <i class="fa fa-times"></i>
                            </div>
                            <div class="timeline-panel" id="exporterSection"> 
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">Exporter</h4>
                                    <p><small class="text-muted text-success activityDateTime"></small> </p>
                                    <!-- <span class="activityQrCode"></span> -->
                                </div>
                                <div class="timeline-body">
                                    <table class="table activityData table-responsive">
                                        <tr>
                                            <td colspan="2"><p>Information Not Available</p></td>
                                        </tr>
                                    </table>  
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-badge danger">
                                <i class="fa fa-times"></i>
                            </div>
                            <div class="timeline-panel" id="importerSection">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">Importer</h4>
                                    <p><small class="text-muted text-success activityDateTime"></small> </p>
                                    <!-- <span class="activityQrCode"></span> -->
                                </div>
                                <div class="timeline-body">
                                   <table class="table activityData table-responsive" >
                                        <tr>
                                            <td colspan="2"><p>Information Not Available</p></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </li>
                        <li class="">
                            <div class="timeline-badge danger">
                                <i class="fa fa-times"></i>
                            </div>
                            <div class="timeline-panel" id="processorSection">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">Processor</h4>
                                    <p><small class="text-muted text-success activityDateTime"></small> </p>
                                    <!-- <span class="activityQrCode"></span> -->
                                </div>
                                <div class="timeline-body">
                                    <table class="table activityData table-responsive" >
                                        <tr>
                                            <td colspan="2"><p>Information Not Available</p></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- /.row -->
       
</div>
<input type="hidden" id="shipmentNo" value="<?php $shipmentNo = isset($_GET['shipmentNo'])?$_GET['shipmentNo']:''; echo $shipmentNo;?>">

<?php include('templates/_footer.php');?>            