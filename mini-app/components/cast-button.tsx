"use client";

import { useMiniAppSDK } from "@/components/context/miniapp-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CastButton({ className }: { className?: string }) {
  const { sdk, isInMiniApp } = useMiniAppSDK();

  const handleCast = async () => {
    if (!isInMiniApp) return;
    try {
      await sdk.actions.composeCast({
        text: "Check out the top Farcaster trends on TrendCast Vibes! 🔥",
      });
    } catch (e) {
      console.error("Failed to cast", e);
    }
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className={cn("border-2 border-pink-500 hover:border-pink-400", className)}
      onClick={handleCast}
    >
      Cast a Recommendation
    </Button>
  );
}
