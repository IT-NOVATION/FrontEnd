function Policy({
  setIsWatchingPolicy,
}: {
  setIsWatchingPolicy: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div>
      <h1>개인정보 처리방침...</h1>
      <button onClick={() => setIsWatchingPolicy(false)}>x</button>
    </div>
  );
}
export default Policy;
