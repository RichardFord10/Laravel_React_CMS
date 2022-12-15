@include('layouts.app')


<div id="items_root"></div>
<h2 class="text-center"><strong><u>Items</u></strong></h4><br>
<div class="container-fluid col-10">
  <table class="table table-dark table-striped table-bordered">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#ID</th>
        <th scope="col">Name</th>
        <th scope="col">Category</th>
        <th scope="col">Brand</th>
      </tr>
    </thead>
    <tbody>
      <?php foreach ($data as $item):?>
        <tr>
          <th scope="row"><?php echo $item->id;?></th>
          <td><?php echo $item->name;?></td>
          <td><?php echo $item->category;?></td>
          <td><?php echo $item->brand;?></td>
        </tr>
        <?php endforeach;?>
        
      </tbody>
    </table>
  </div>
  {{ vite_assets() }}
    