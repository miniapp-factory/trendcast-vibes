"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface Trend {
  id: string;
  title: string;
  channel: string;
  castCount: number;
}

export default function TrendList({ className }: { className?: string }) {
  const [trends, setTrends] = useState<Trend[]>([]);

  useEffect(() => {
    async function fetchTrends() {
      try {
        const res = await fetch(
          "https://api.hub.farcaster.xyz/v1/channels?sort=casts_today&limit=3"
        );
        const data = await res.json();
        setTrends(
          data.channels.map((c: any) => ({
            id: c.id,
            title: c.title,
            channel: c.name,
            castCount: c.casts_today,
          }))
        );
      } catch (e) {
        console.error("Failed to load trends", e);
      }
    }
    fetchTrends();
  }, []);

  return (
    <div className={cn("grid gap-4 w-full max-w-2xl", className)}>
      {trends.map((trend) => (
        <Card key={trend.id} className="bg-black/20 backdrop-blur-sm border-none">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">{trend.title}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Channel: {trend.channel} • {trend.castCount} casts today
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
