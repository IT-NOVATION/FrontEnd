import { Block, Text } from "@styles/UI";
import { RiFilmLine, RiCameraLine, RiMusicLine } from "react-icons/ri";
import { BiFace } from "react-icons/bi";
import theme from "@styles/theme";
type Props = {
  text: string;
  width: string;
  index: number;
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<any[]>>;
};
function KeywordBox({ text, width, index, selected, setSelected }: Props) {
  const toggleSelected = () => {
    setSelected((prev) => {
      const temp = [...prev];
      temp[index] = !prev[index];
      return temp;
    });
  };
  return (
    <Block.RowBox
      pointer
      border={`0.5px solid ${selected ? `${theme.colors.main}` : "#B3B3B3"}`}
      width={width}
      height="29px"
      borderRadius="3px"
      margin="7px 0 0 0"
      padding="0 0 0 10px"
      alignItems="center"
      onClick={toggleSelected}
    >
      {index === 0 || index === 1 || index === 2 ? (
        <RiFilmLine color={selected ? `${theme.colors.main}` : "black"} />
      ) : index === 3 || index === 5 ? (
        <RiCameraLine color={selected ? `${theme.colors.main}` : "black"} />
      ) : index === 4 ? (
        <RiMusicLine color={selected ? `${theme.colors.main}` : "black"} />
      ) : (
        <BiFace color={selected ? `${theme.colors.main}` : "black"} />
      )}
      <Text.Body6 margin="0 0 0 7px" color={selected ? "main" : "black"}>
        {text}
      </Text.Body6>
    </Block.RowBox>
  );
}
export default KeywordBox;
