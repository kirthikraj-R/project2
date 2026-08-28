import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/client";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { logout } from "@/features/auth/authSlice";

export default function SettingsPage() {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const currentUser = useAppSelector((s) => s.auth.user);
  const [emailNotifs, setEmailNotifs] = useState(true);

  const { data } = useQuery({
    queryKey: ["profile", currentUser?.id],
    queryFn: async () => (await api.get(`/users/${currentUser!.id}`)).data,
    enabled: Boolean(currentUser),
  });

  useEffect(() => {
    if (data?.user?.preferences) setEmailNotifs(data.user.preferences.emailNotifications ?? true);
  }, [data]);

  const updatePreferences = useMutation({
    mutationFn: (emailNotifications: boolean) =>
      api.patch("/users/me", { preferences: { emailNotifications } }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["profile"] }),
  });

  const logoutAll = useMutation({
    mutationFn: () => api.post("/auth/logout-all"),
    onSuccess: () => dispatch(logout()),
  });

  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-2xl font-bold font-display">Settings</h1>

      <SettingsSection title="Appearance">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium text-sm">Dark mode</div>
            <p className="text-xs text-ink-500 mt-0.5">
              SyncDoc is dark-mode only in this build. A real light theme needs a full parallel
              color palette across every screen, not just a toggle — it's planned but not built yet,
              so there's no switch here pretending otherwise.
            </p>
          </div>
        </div>
      </SettingsSection>

      <SettingsSection title="Notifications">
        <ToggleRow
          label="Email notifications"
          description="Get emailed about comments, mentions, and shares."
          checked={emailNotifs}
          onChange={(v) => {
            setEmailNotifs(v);
            updatePreferences.mutate(v);
          }}
        />
      </SettingsSection>

      <SettingsSection title="Security">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium text-sm">Log out of all devices</div>
            <p className="text-xs text-ink-500 mt-0.5">Revokes every active session, including this one.</p>
          </div>
          <button
            onClick={() => logoutAll.mutate()}
            disabled={logoutAll.isPending}
            className="btn-ghost text-sm px-4 py-2 text-accent-danger"
          >
            {logoutAll.isPending ? "Logging out…" : "Log out everywhere"}
          </button>
        </div>
      </SettingsSection>
    </div>
  );
}

function SettingsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass-card p-6 space-y-4">
      <h2 className="font-display font-semibold">{title}</h2>
      {children}
    </div>
  );
}

function ToggleRow({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="font-medium text-sm">{label}</div>
        <p className="text-xs text-ink-500 mt-0.5">{description}</p>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`w-11 h-6 rounded-full transition-colors relative shrink-0 ${
          checked ? "bg-brand-gradient" : "bg-black/[0.08]"
        }`}
      >
        <span
          className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  );
}
