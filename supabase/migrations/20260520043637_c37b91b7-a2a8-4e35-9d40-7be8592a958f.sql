
drop policy if exists "Public read settings" on public.settings;

create or replace function public.get_public_contact()
returns table(company_phone text, company_email text)
language sql stable security definer set search_path = public as $$
  select company_phone, company_email from public.settings where id = 1;
$$;
revoke execute on function public.get_public_contact() from public;
grant execute on function public.get_public_contact() to anon, authenticated;
