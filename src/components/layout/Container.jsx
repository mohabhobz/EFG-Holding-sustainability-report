/** The content column. Every band on every page sits in one. */
export default function Container({ as: El = 'div', className = '', children, ...rest }) {
  return (
    <El className={`wrap ${className}`.trim()} {...rest}>
      {children}
    </El>
  );
}
