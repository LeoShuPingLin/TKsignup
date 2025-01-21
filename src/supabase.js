import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xlkzcqziwpnsxshqjnwh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhsa3pjcXppd3Buc3hzaHFqbndoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczMzMxNTEsImV4cCI6MjA1MjkwOTE1MX0.h5UYWCmmMmXHF9hC739YO2dNgpTJC84HMXXV-x2U7l8";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);