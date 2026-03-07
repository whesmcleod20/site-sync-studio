

## Plan: Add two more recipient emails

Update the `to` array in `supabase/functions/send-quote-email/index.ts` (line 39) to include all three emails:

```
to: ['We.mcleod21@gmail.com', 'whesmcleod20@gmail.com', 'mcleodhss@gmail.com'],
```

Then redeploy the edge function.

