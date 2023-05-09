import { Router } from 'express';
import { SupabaseClient } from '@supabase/supabase-js';

const testRouter = (supabase: SupabaseClient) => {
  const router = Router();

  router.get('/test', async (req, res) => {
    const { data, error } = await supabase.from('test').select('*');

    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json(data);
    }
  });

  return router;
};

export default testRouter;
