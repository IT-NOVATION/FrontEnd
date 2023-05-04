function Terms({
  setIsWatchingTerms,
}: {
  setIsWatchingTerms: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div>
      <h1>이용약관....</h1>
      <button onClick={() => setIsWatchingTerms(false)}>x</button>
    </div>
  );
}
export default Terms;
