import { HiCheck } from "react-icons/hi2";
import { Link } from "react-router-dom";

const PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "/forever",
    desc: "For individuals trying SyncDoc out",
    features: ["Up to 3 workspaces", "Unlimited personal docs", "1-day version history", "Community support"],
    cta: "Start for free",
    highlighted: false,
  },
  {
    name: "Team",
    price: "$12",
    period: "/user/mo",
    desc: "For teams who collaborate daily",
    features: [
      "Unlimited workspaces",
      "Real-time collaboration",
      "Unlimited version history",
      "Admin panel & analytics",
      "Priority support",
    ],
    cta: "Start 14-day trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For organizations with advanced needs",
    features: ["SSO / SAML", "Audit logs", "Dedicated support", "Custom SLAs", "On-prem deployment"],
    cta: "Contact sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
        <p className="text-ink-500">Start free. Upgrade when your team grows.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`glass-card p-8 flex flex-col ${
              plan.highlighted ? "border-brand-violet/50 shadow-glow-violet scale-[1.02]" : ""
            }`}
          >
            {plan.highlighted && (
              <span className="self-start text-xs font-semibold bg-brand-gradient px-3 py-1 rounded-full mb-4">
                Most popular
              </span>
            )}
            <h3 className="font-display font-bold text-xl mb-1">{plan.name}</h3>
            <p className="text-ink-500 text-sm mb-6">{plan.desc}</p>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-4xl font-extrabold">{plan.price}</span>
              <span className="text-ink-500 mb-1">{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-ink-300">
                  <HiCheck className="text-accent-success mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to="/register"
              className={plan.highlighted ? "btn-gradient text-center" : "btn-ghost text-center"}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
