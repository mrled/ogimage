const codeFontColor = "text-yellow-600";
type CodePropsType = {
  children: any;
};

export function InlineCode({ children }: CodePropsType) {
  return <code className={`font-mono ${codeFontColor}`}>{children}</code>;
}

export function CodeBlock({ children }: CodePropsType) {
  return (
    <pre
      className={`font-mono ${codeFontColor} whitespace-pre overflow-visible `}
    >
      <code className="">{children}</code>
    </pre>
  );
}
