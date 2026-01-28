
const tracker = new Map<string, { count: number; expires: number }>();

export function rateLimit(ip: string, limit: number = 5, windowMs: number = 60 * 1000): boolean {
    const now = Date.now();
    const record = tracker.get(ip);

    if (!record || now > record.expires) {
        tracker.set(ip, { count: 1, expires: now + windowMs });
        return true;
    }

    if (record.count >= limit) {
        return false;
    }

    record.count++;
    return true;
}
