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
      className={`border-2 border-yellow-600 p-2 font-mono ${codeFontColor} whitespace-pre overflow-scroll`}
    >
      <code className="">{children}</code>
    </pre>
  );
}
