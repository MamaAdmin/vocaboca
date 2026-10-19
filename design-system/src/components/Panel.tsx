import * as React from "react";

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional uppercase label shown at the top of the panel. */
  label?: React.ReactNode;
  children?: React.ReactNode;
}

/** White rounded card with a soft paper-coloured drop shadow. Groups settings or content. */
export function Panel({ label, className = "", children, ...rest }: PanelProps) {
  return <div className={`vk-panel ${className}`.trim()} {...rest}>{label != null && <span className="vk-label">{label}</span>}{children}</div>;
}
