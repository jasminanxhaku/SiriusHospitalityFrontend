type Activity = {
    id: string;
    actor: string;
    action: string;
    timestamp: string;
};

export default function ActivityFeed({ activities }: { activities: Activity[] }) {
    if (!activities.length) {
        return <div className="card">No recent activity.</div>;
    }

    return (
        <div className="card">
            {activities.map((activity) => (
                <div key={activity.id} style={{ marginBottom: 10 }}>
                    <strong>{activity.actor}</strong> {activity.action}
                    <div>
                        <small>{new Date(activity.timestamp).toLocaleString()}</small>
                    </div>
                </div>
            ))}
        </div>
    );
}