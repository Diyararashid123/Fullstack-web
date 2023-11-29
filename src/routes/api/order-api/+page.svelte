<script>
  export let data;
  import { createClient } from "@supabase/supabase-js";

  const supabase = createClient('https://wolrwotpqfgrxtgpjljx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvbHJ3b3RwcWZncnh0Z3BqbGp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2NDQzNDMsImV4cCI6MjAxNTIyMDM0M30.gRkJ0nzQFEKciaVLRCD9aMWc-2Ufb6GYKP5RvM_1bW8');

  const handleUpdate = (payload) => {
    if (payload.new.processed) {
      
      const orderIndex = data.findIndex(order => order.id === payload.new.id);
      if (orderIndex !== -1) {
        data[orderIndex] = payload.new;
      }
    }
  };

  supabase
      .from('order')
      .on('UPDATE', handleUpdate)
      .subscribe();
</script>

<div>
  <h1>Your Orders</h1>
  {#each data as order}
    <div class="order">
      <p>Order Date: {order.orderDate}</p>
      <p>Status: {order.processed ? 'Processed' : 'Pending'}</p>
    </div>
  {/each}
</div>
