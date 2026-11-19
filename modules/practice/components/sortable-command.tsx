"use client";

import { useSortable } from "@dnd-kit/sortable";
import { GripVertical } from "lucide-react";

import { cn } from "@/shared/lib/utils";

type Props = { id: string; label: string; position: number; dragLabel: string };

// One draggable row. Keyboard users can pick it up with Space and move it with the arrow keys.
export function SortableCommand({ id, label, position, dragLabel }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  const style = { transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined, transition };
  return (
    <li
      ref={setNodeRef}
      style={style}
      className={cn(
        "flex items-center gap-3 border-2 border-edge bg-card px-3 py-2 shadow-[3px_3px_0_0_var(--shadow-hard)]",
        isDragging && "z-10 opacity-80",
      )}
    >
      <button
        type="button"
        aria-label={`${dragLabel}: ${label}`}
        className="cursor-grab touch-none text-muted-foreground active:cursor-grabbing"
        {...attributes}
        {...listeners}
      >
        <GripVertical className="size-4" />
      </button>
      <span className="font-code text-xs text-muted-foreground">{position}</span>
      <code className="min-w-0 flex-1 font-code text-sm break-all whitespace-pre-wrap">{label}</code>
    </li>
  );
}
