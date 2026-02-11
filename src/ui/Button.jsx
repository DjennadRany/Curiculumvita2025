import React from 'react';

const Button = ({ href, children, variant = 'primary', target }) => {
  const className = `btn btn-${variant}`;
  if (href) {
    return (
      <a className={className} href={href} target={target} rel={target ? 'noreferrer' : undefined}>
        {children}
      </a>
    );
  }
  return <button className={className}>{children}</button>;
};

export default Button;
