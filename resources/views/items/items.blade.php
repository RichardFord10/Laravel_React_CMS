@include('layouts.app')
<script>let items = '{{$data}}';</script>
<div id="root"></div>
<div id="items_root"></div>
<h2 class="text-center"><strong><u>Items</u></strong></h4><br>
<div class="container-fluid col-10">
  <table class="table table-dark table-striped table-bordered" id="items_table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#ID</th>
        <th scope="col">Name</th>
        <th scope="col">Category</th>
        <th scope="col">Brand</th>
      </tr>
    </thead>
    <tbody>
      </tbody>
    </table>
  </div>
    