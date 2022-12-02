import React from "react";

export default function Icon({ name, className = "", ...rest }: any) {
  return <i className={`uil uil-${name} ${className}`} {...rest}></i>;
}
