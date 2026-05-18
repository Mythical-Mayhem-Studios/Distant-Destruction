import { SupabaseClient } from "@rbxts/roblox-supabase";
import { ConfigService, HttpService } from "@rbxts/services";
import { Database } from "shared/types/supabase";

const supabaseUrl = (ConfigService.GetConfigAsync().GetValue("supabase_project_id") as string) + ".supabase.co";
const supabaseSecretKey = HttpService.GetSecret("SUPABASE_SECRET_KEY");

export const Supabase = new SupabaseClient<Database>(supabaseUrl, supabaseSecretKey);
