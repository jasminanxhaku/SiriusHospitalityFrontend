import AgentCard from "@/components/agent-card";

const agents = [
    {
        id: "revenue",
        name: "Revenue Agent",
        description: "Monitors pricing, occupancy, and revenue opportunities.",
        status: "Ready",
    },
    {
        id: "guest",
        name: "Guest Experience Agent",
        description: "Handles guest communication and service recovery.",
        status: "Ready",
    },
    {
        id: "operations",
        name: "Operations Agent",
        description: "Creates and tracks operational tasks.",
        status: "Ready",
    },
];

export default function AgentsPage() {
    return (
        <div className="page">
            <h1 className="page-title">Agents</h1>

            <div className="grid">
                {agents.map((agent) => (
                    <AgentCard
                        key={agent.id}
                        name={agent.name}
                        description={agent.description}
                        status={agent.status}
                    />
                ))}
            </div>
        </div>
    );
}