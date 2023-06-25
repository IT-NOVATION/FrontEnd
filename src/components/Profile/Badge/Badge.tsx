import { Block, Text } from "@styles/UI";

function Badge({ grade }: { grade: string }) {
  return (
    <Block.RowBox
      width="29px"
      height="29px"
      borderRadius="50%"
      bgColor={grade === "VIP" ? "main" : "black"}
      justifyContent="center"
      alignItems="center"
    >
      <Text.Body5 color="white">{grade}</Text.Body5>
    </Block.RowBox>
  );
}
export default Badge;
