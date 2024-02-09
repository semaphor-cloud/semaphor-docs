import React from 'react';

export default function Logo() {
  return (
    <h2 className={`text-xl  font-medium tracking-wider cursor-pointer `}>
      <span
        style={{
          fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
          letterSpacing: '-0.05em',
          fontWeight: 600,
          color: '#b91c1c',
        }}
        className={' tracking-tighter font-mono text-red-700 font-semibold'}
      >
        /\
      </span>
      &nbsp;&nbsp;
      <span
        style={{
          fontSize: '17px' /* 20px */,
          lineHeight: '1.75rem' /* 28px */,
        }}
        className=" text-foreground/90 tracking-wider "
      >
        <b>semaphor</b>
      </span>
    </h2>
  );
}
