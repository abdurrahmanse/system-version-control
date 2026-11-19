import { format, formatDistanceToNow, parseISO } from "date-fns";

export const formatDate = (iso: string) => format(parseISO(iso), "PPP");
export const formatShort = (iso: string) => format(parseISO(iso), "d MMM yyyy");
export const formatRelative = (timestamp: number) => formatDistanceToNow(timestamp, { addSuffix: true });
export const toIsoDate = (d: Date) => format(d, "yyyy-MM-dd");
