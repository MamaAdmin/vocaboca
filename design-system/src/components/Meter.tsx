import * as React from "react";

export interface MeterProps {
  /** Fill amount from 0 to 1. */
  value: number;
  /** Accessible label, e.g. "37 von 347 gesammelt". */
  label?: string;
}

/** Thick teal-to-grape progress bar, e.g. how much of the suitcase is collected. */
export function Meter({ value, label }: MeterProps) {
  const v = Math.max(0, Math.min(1, value));
  return <div className="vk-meter" role="meter" aria-valuemin={0} aria-valuemax={1} aria-valuenow={v} aria-label={label}><i style={{ width: `${(v * 100).toFixed(1)}%` }} /></div>;
}
