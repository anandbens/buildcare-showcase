
-- Set search_path on trigger helper
create or replace function public.tg_set_updated_at()
returns trigger language plpgsql security definer set search_path = public
as $$ begin new.updated_at = now(); return new; end; $$;

revoke execute on function public.tg_set_updated_at() from public, anon, authenticated;

-- has_role: only used inside RLS / server code; revoke direct execute
revoke execute on function public.has_role(uuid, public.app_role) from public, anon, authenticated;
grant execute on function public.has_role(uuid, public.app_role) to service_role;

-- claim_admin: only signed-in users
revoke execute on function public.claim_admin() from public, anon;
grant execute on function public.claim_admin() to authenticated;
