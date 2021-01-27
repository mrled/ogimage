import Link from "next/link";
import React from "react";

const linkClasses = "text-blue-600 underline";

type BlueLinkPropType = {
  href: string;
  children?: any;
};
export function InternalLink({ href, children }: BlueLinkPropType) {
  const anchorChildren = children ? children : href;
  return (
    <Link href={href}>
      <a className={linkClasses}>{anchorChildren}</a>
    </Link>
  );
}

export function ExternalLink({ href, children }: BlueLinkPropType) {
  const anchorChildren = children ? children : href;
  return (
    <a href={href} className={linkClasses}>
      {anchorChildren}
    </a>
  );
}
