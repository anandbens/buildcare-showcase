
-- ============ ENUMS ============
create type public.app_role as enum ('admin', 'editor');
create type public.project_status as enum ('completed', 'ongoing');
create type public.lead_status as enum ('new', 'contacted', 'closed');

-- ============ USER ROLES ============
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);
alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql stable security definer set search_path = public
as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role = _role)
$$;

create policy "Users can read own roles" on public.user_roles
  for select to authenticated using (user_id = auth.uid());
create policy "Admins read all roles" on public.user_roles
  for select to authenticated using (public.has_role(auth.uid(), 'admin'));
create policy "Admins manage roles" on public.user_roles
  for all to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

-- Bootstrap: first authenticated user to call this gets admin if there are none.
create or replace function public.claim_admin()
returns boolean
language plpgsql security definer set search_path = public
as $$
declare existing int;
begin
  select count(*) into existing from public.user_roles where role = 'admin';
  if existing = 0 and auth.uid() is not null then
    insert into public.user_roles (user_id, role) values (auth.uid(), 'admin');
    return true;
  end if;
  return false;
end;
$$;
grant execute on function public.claim_admin() to authenticated;

-- ============ TIMESTAMPS HELPER ============
create or replace function public.tg_set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;

-- ============ CATEGORIES ============
create table public.categories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.categories enable row level security;
create trigger trg_categories_updated before update on public.categories
  for each row execute function public.tg_set_updated_at();

create policy "Public read categories" on public.categories
  for select to anon, authenticated using (true);
create policy "Admins manage categories" on public.categories
  for all to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

-- ============ PROJECTS ============
create table public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  summary text,
  description text,
  category_id uuid references public.categories(id) on delete set null,
  status public.project_status not null default 'completed',
  client text,
  location text,
  area text,
  cover_image text,
  featured boolean not null default false,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.projects enable row level security;
create trigger trg_projects_updated before update on public.projects
  for each row execute function public.tg_set_updated_at();
create index projects_status_idx on public.projects(status);
create index projects_category_idx on public.projects(category_id);

create policy "Public read projects" on public.projects
  for select to anon, authenticated using (true);
create policy "Admins manage projects" on public.projects
  for all to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

-- ============ PROJECT IMAGES ============
create table public.project_images (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  url text not null,
  alt text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);
alter table public.project_images enable row level security;
create index project_images_project_idx on public.project_images(project_id);

create policy "Public read project images" on public.project_images
  for select to anon, authenticated using (true);
create policy "Admins manage project images" on public.project_images
  for all to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

-- ============ CLIENTS ============
create table public.clients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  industry text,
  logo_url text,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.clients enable row level security;
create trigger trg_clients_updated before update on public.clients
  for each row execute function public.tg_set_updated_at();

create policy "Public read clients" on public.clients
  for select to anon, authenticated using (true);
create policy "Admins manage clients" on public.clients
  for all to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

-- ============ LEADS ============
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  company text,
  service text,
  message text,
  source text,
  status public.lead_status not null default 'new',
  ip_address text,
  user_agent text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.leads enable row level security;
create trigger trg_leads_updated before update on public.leads
  for each row execute function public.tg_set_updated_at();
create index leads_created_idx on public.leads(created_at desc);
create index leads_status_idx on public.leads(status);

-- Public can submit; only admins can read / modify.
create policy "Anyone can submit a lead" on public.leads
  for insert to anon, authenticated with check (true);
create policy "Admins read leads" on public.leads
  for select to authenticated using (public.has_role(auth.uid(), 'admin'));
create policy "Admins update leads" on public.leads
  for update to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));
create policy "Admins delete leads" on public.leads
  for delete to authenticated using (public.has_role(auth.uid(), 'admin'));

-- ============ SETTINGS (single row) ============
create table public.settings (
  id int primary key default 1,
  lead_notify_email text,
  lead_webhook_url text,
  company_phone text default '+91 00000 00000',
  company_email text default 'info@chennaibuildcare.com',
  updated_at timestamptz not null default now(),
  constraint settings_singleton check (id = 1)
);
alter table public.settings enable row level security;
create trigger trg_settings_updated before update on public.settings
  for each row execute function public.tg_set_updated_at();
insert into public.settings (id) values (1) on conflict do nothing;

create policy "Public read settings" on public.settings
  for select to anon, authenticated using (true);
create policy "Admins manage settings" on public.settings
  for all to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

-- ============ SEED CATEGORIES ============
insert into public.categories (slug, name, sort_order) values
  ('concrete-polishing', 'Concrete Polishing', 1),
  ('concrete-grinding-polishing', 'Concrete Grinding & Polishing', 2),
  ('epoxy-flooring', 'Epoxy Flooring', 3),
  ('pu-flooring', 'PU Flooring', 4),
  ('waterproofing', 'Waterproofing', 5),
  ('grouting', 'Grouting', 6),
  ('repair-retrofitting', 'Repair & Retrofitting', 7),
  ('thermal-insulation', 'Thermal Insulation', 8)
on conflict (slug) do nothing;
