const codeFontColor = "text-yellow-600";
type CodePropsType = {
  children: any;
};

export function InlineCode({ children }: CodePropsType) {
  return <code className={`font-mono ${codeFontColor}`}>{children}</code>;
}

export function CodeBlock({ children }: CodePropsType) {
  return (
    <div className="overflow-scroll">
      <div className="border-2 border-yellow-600 w-max">
        <pre className={`p-2 font-mono ${codeFontColor} whitespace-pre`}>
          <code className="">{children}</code>
        </pre>
      </div>
    </div>
  );
}
