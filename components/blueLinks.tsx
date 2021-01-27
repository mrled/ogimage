import Link from "next/link";
import React from "react";

const linkClasses = "text-blue-600 underline";

type BlueLinkPropType = {
  href: string;
  children: any;
};
export function InternalLink({ href, children }: BlueLinkPropType) {
  return (
    <Link href={href}>
      <a className={linkClasses}>{children}</a>
    </Link>
  );
}

export function ExternalLink({ href, children }: BlueLinkPropType) {
  return (
    <a href={href} className={linkClasses}>
      {children}
    </a>
  );
}
