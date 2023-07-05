import * as S from "./style";
import { Text, Block } from "@styles/UI";
import Notification from "./Notification";

export default function NotificationModal() {
    return (
        <>
            <S.Notification>
                <Block.RowBox justifyContent="space-between" padding="0 26px">
                    <Text.Body1>알림</Text.Body1>
                    <img src="/icons/close.svg" alt="close" />
                </Block.RowBox>

                <S.NotificationContents>
                    <Notification />
                </S.NotificationContents>
            </S.Notification>
        </>
    );
}
