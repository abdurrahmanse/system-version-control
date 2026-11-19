"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { UI } from "@/shared/data/ui";
import { Button } from "@/shared/ui/button";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success(UI.copied);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error(UI.copyFailed);
    }
  };
  return (
    <Button variant="ghost" size="icon-sm" onClick={onCopy} aria-label={UI.copy}>
      {copied ? <Check /> : <Copy />}
    </Button>
  );
}
