import { useEffect, useRef, useState } from "react";
import {
  SelectBox,
  SelectValue,
  SelectMenu,
  SelectOption,
  Arrow
} from "./Select.styles";

export type OptionType = {
  label: string;
  value: string;
  icon?: string;
};

type Props = {
  options: OptionType[];
  value: OptionType;
  onChange: (opt: OptionType) => void;
};

export default function Select({ options, value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <SelectBox ref={ref}>
      <SelectValue onClick={() => setOpen(v => !v)}>
        {value.icon && <img src={value.icon} />}
        {value.label}
        <Arrow open={open} />
      </SelectValue>

      {open && (
        <SelectMenu>
          {options.map(opt => (
            <SelectOption
              key={opt.value}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt.icon && <img src={opt.icon} />}
              {opt.label}
            </SelectOption>
          ))}
        </SelectMenu>
      )}
    </SelectBox>
  );
}