
-- Trigger helper: should never be called via API
REVOKE EXECUTE ON FUNCTION public.tg_set_updated_at() FROM PUBLIC, anon, authenticated;

-- has_role is used inside RLS policies (runs as definer regardless); no need to expose via API
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;

-- claim_admin: only signed-in users should be able to claim (bootstrap first admin)
REVOKE EXECUTE ON FUNCTION public.claim_admin() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.claim_admin() TO authenticated;

-- get_public_contact: intentionally public (used on website footer/contact)
-- Keep default execute for anon/authenticated; ensure it only returns safe columns (it does).
