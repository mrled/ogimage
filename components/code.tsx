const codeFontColor = "text-yellow-600";
type CodePropsType = {
  children: any;
};
export function InlineCode({ children }: CodePropsType) {
  return <code className={`font-mono ${codeFontColor}`}>{children}</code>;
}
