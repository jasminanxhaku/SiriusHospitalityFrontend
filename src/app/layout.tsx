
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DemoBanner from "@/components/demo-banner";

const queryClient = new QueryClient();

export const metadata = {
  title: "Sirius Hospitality",
  description: "AI-powered hospitality operations platform",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body>
      <QueryClientProvider client={queryClient}>
        <div className="app-shell">
          <aside className="sidebar">
            <div className="brand">Sirius</div>
            <nav>
              <a href="/dashboard">Dashboard</a>
              <a href="/command-center">Command Center</a>
              <a href="/agents">Agents</a>
              <a href="/approvals">Approvals</a>
              <a href="/bookings">Bookings</a>
              <a href="/customers">Customers</a>
              <a href="/properties">Properties</a>
              <a href="/tasks">Tasks</a>
              <a href="/travel">Travel</a>
              <a href="/analytics">Analytics</a>
              <a href="/integrations">Integrations</a>
              <a href="/settings">Settings</a>
            </nav>
          </aside>

          <main className="main">
            <DemoBanner />
            {children}
          </main>
        </div>
      </QueryClientProvider>
      </body>
      </html>
  );
}