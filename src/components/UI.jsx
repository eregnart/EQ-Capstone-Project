import React from "react";

export const Input = React.forwardRef(({ className="", ...props }, ref) => (
  <input ref={ref} className={`pl-input ${className}`} {...props}/>
));
Input.displayName = "Input";

export const Textarea = React.forwardRef(({ className="", ...props }, ref) => (
  <textarea ref={ref} className={`pl-textarea ${className}`} {...props}/>
));
Textarea.displayName = "Textarea";

export const PrimaryBtn   = ({ className="", ...p }) => <button className={`pl-btn-primary ${className}`} {...p}/>;
export const SecondaryBtn = ({ className="", ...p }) => <button className={`pl-btn-secondary ${className}`} {...p}/>;
export const GhostBtn     = ({ className="", ...p }) => <button className={`pl-btn-ghost ${className}`} {...p}/>;

export const FormError = ({ children }) => children ? (
  <p className="text-sm text-red-600 mt-1">{children}</p>
) : null;

export function Field({ label, htmlFor, hint, error, children, className="" }) {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">{label}</label>}
      {children}
      {hint && !error && <p className="text-xs text-gray-500">{hint}</p>}
      <FormError>{error}</FormError>
    </div>
  );
}

/* Cards (used by Manager tiles, etc.) */
export const Card        = ({ className="", ...p }) => <div className={`rounded-2xl border bg-white shadow-sm ${className}`} {...p}/>;
export const CardHeader  = ({ className="", ...p }) => <div className={`p-4 border-b ${className}`} {...p}/>;
export const CardContent = ({ className="", ...p }) => <div className={`p-4 ${className}`} {...p}/>;
export const CardFooter  = ({ className="", ...p }) => <div className={`p-4 border-t ${className}`} {...p}/>;
