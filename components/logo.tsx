/* O.G. image logo stuff
 */

const textGold = "text-yellow-300";
const textSilver = "text-gray-400";
const dollaz = "$$$$$$$$";

export function LogoPreview() {
  return (
    <div className="mx-auto">
      <div className="p-12 bg-black w-ogimage-logo text-center leading-tight text-6xl font-chomsky">
        <p className={`${textSilver}`}>{dollaz}</p>
        <p className={`${textGold}`}>O.G. image</p>
        <p className={`${textSilver}`}>{dollaz}</p>
      </div>
    </div>
  );
}

export function FaviconPreview() {
  return (
    <div className="mx-auto">
      <div className="p-12 bg-black w-ogimage-logo text-center leading-tight text-6xl font-chomsky">
        <p className={`${textGold}`}>$</p>
      </div>
    </div>
  );
}

export function OgImage() {
  const classes = `${textSilver} font-chomsky`;
  return <span className={classes}>O.G. image</span>;
}
