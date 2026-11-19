import { Search } from "lucide-react";

import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/ui/input-group";

type Props = { value: string; onChange: (value: string) => void; label: string; placeholder: string };

// Search box used by every filter bar. The value is controlled by the caller (often synced to the URL).
export function FilterSearch({ value, onChange, label, placeholder }: Props) {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={label}
      />
    </InputGroup>
  );
}
