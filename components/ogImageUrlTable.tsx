import React from "react";
import { InlineCode } from "./code";
import { OgImage } from "./logo";

type OgImageUrlTablePropsType = {
  ogImageUri: string;
  siteName: string;
  environment: string;
  urlSubPath: string;
};

export function OgImageUrlTable({
  ogImageUri,
  siteName,
  environment,
  urlSubPath,
}: OgImageUrlTablePropsType) {
  const rowClasses = "";
  const cellClasses = "border m-2 p-2";
  return (
    <div className="overflow-scroll lg:overflow-visible ">
      <table className="p-4 border-2 border-yellow-600">
        <tr className={rowClasses}>
          <th className={cellClasses}>
            <OgImage /> URI
          </th>
          <th className={cellClasses}>API subpath</th>
          <th className={cellClasses}>Site name</th>
          <th className={cellClasses}>Environment</th>
          <th className={cellClasses}>urlSubPath</th>
        </tr>
        <tr className={rowClasses}>
          <td className={cellClasses}>
            <InlineCode>{ogImageUri}</InlineCode>
          </td>
          <td className={cellClasses}>
            <InlineCode>/api/ogImage</InlineCode>
          </td>
          <td className={cellClasses}>
            <InlineCode>/{siteName}</InlineCode>
          </td>
          <td className={cellClasses}>
            <InlineCode>/{environment}</InlineCode>
          </td>
          <td className={cellClasses}>
            <InlineCode>/{urlSubPath}</InlineCode>
          </td>
        </tr>
      </table>
    </div>
  );
}
