import { createClient } from "@supabase/supabase-js";
import{SUPABASE_ANNON_KEY, SUPABASE_URL} from "$env/static/private"
const supabase = createClient(SUPABASE_URL, SUPABASE_ANNON_KEY);

const handleupdate = (payload) => {
    console.log('Changed received', payload);
};

supabase
    .channel('test')
    .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'order' }, handleupdate)
    .subscribe();
