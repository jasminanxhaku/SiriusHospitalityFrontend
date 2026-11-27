type Column<T> = {
    key: keyof T;
    label: string;
    render?: (row: T) => React.ReactNode;
};

type Props<T> = {
    columns: Column<T>[];
    rows: T[];
    loading?: boolean;
};

export default function DataTable<T extends { id: string | number }>({
                                                                         columns,
                                                                         rows,
                                                                         loading,
                                                                     }: Props<T>) {
    if (loading) return <div className="card">Loading…</div>;

    return (
        <table className="table">
            <thead>
            <tr>
                {columns.map((column) => (
                    <th key={String(column.key)}>{column.label}</th>
                ))}
            </tr>
            </thead>

            <tbody>
            {rows.map((row) => (
                <tr key={row.id}>
                    {columns.map((column) => (
                        <td key={String(column.key)}>
                            {column.render
                                ? column.render(row)
                                : String(row[column.key] ?? "—")}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}