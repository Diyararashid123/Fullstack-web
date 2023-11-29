<script>
  export let data;
  import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANNON_KEY = import.meta.env.VITE_SUPABASE_ANNON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANNON_KEY);

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
