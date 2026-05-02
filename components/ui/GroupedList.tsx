import { useMemo } from 'react';

interface GroupedListProps<T> {
  items: T[];
  groupBy: (item: T) => string;
  renderGroupHeader: (groupKey: string, items: T[]) => React.ReactNode;
  renderItem: (item: T) => React.ReactNode;
  groupSort?: (a: string, b: string) => number;
  itemSort?: (a: T, b: T) => number;
  emptyState?: React.ReactNode;
  className?: string;
}

export default function GroupedList<T>({
  items,
  groupBy,
  renderGroupHeader,
  renderItem,
  groupSort,
  itemSort,
  emptyState,
  className
}: GroupedListProps<T>) {
  const grouped = useMemo(() => {
    const map = new Map<string, T[]>();
    const working = itemSort ? [...items].sort(itemSort) : items;

    for (const item of working) {
      const key = groupBy(item);
      const bucket = map.get(key) ?? [];
      bucket.push(item);
      map.set(key, bucket);
    }

    const keys = [...map.keys()].sort(groupSort);
    return keys.map((key) => ({ key, items: map.get(key) ?? [] }));
  }, [groupBy, groupSort, itemSort, items]);

  if (!grouped.length) {
    return <>{emptyState ?? null}</>;
  }

  return (
    <div className={className}>
      {grouped.map((group) => (
        <section key={group.key} className="group-section">
          {renderGroupHeader(group.key, group.items)}
          {group.items.map((item) => renderItem(item))}
        </section>
      ))}
    </div>
  );
}
