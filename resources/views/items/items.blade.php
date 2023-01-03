@include('layouts.app')
<script>
  let items = '{{$data}}';
</script>

<h2 class="text-center"><strong><u>Items</u></strong></h4>
  <div class="container-fluid col-10">
    <div cass="row">
      <div class="form-control" id="root"></div>
    </div>
    <div cass="row">
      <div class="form-control" id="chart"></div>
    </div>
  </div>