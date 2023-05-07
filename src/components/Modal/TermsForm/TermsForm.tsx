import { useEffect, useState } from "react";
import theme from "../../../styles/theme";
import { useSetRecoilState } from "recoil";
import { modalStateAtom } from "../../../recoil/atoms";
import { Block, Button, Input, Text } from "../../../styles/UI";

function TermsForm() {
  const setModalState = useSetRecoilState(modalStateAtom);
  const [isEnter, setIsEnter] = useState(false);

  const [agreeAll, setAgreeAll] = useState(false); //전체 동의
  const toggleAgreeAll = () =>
    //전체 동의 클릭시
    setAgreeAll((prev) => {
      if (prev) {
        setTermsAgreed(false);
        setPolicyAgreed(false);
      } else {
        setTermsAgreed(true);
        setPolicyAgreed(true);
      }
      return !prev;
    });
  const [termsAgreed, setTermsAgreed] = useState(false); //이용약관
  const toggleTermsAgreed = () => setTermsAgreed((prev) => !prev);
  const [policyAgreed, setPolicyAgreed] = useState(false); //개인정보처리방침
  const togglePolicyAgreed = () => setPolicyAgreed((prev) => !prev);
  const handleGoToNextStep = () => setModalState(3); //다음 버튼 클릭

  const handleGoWatchTerms = () => setModalState(5); //이용약관 보기
  const handleGoWatchPolicy = () => setModalState(6); //개인정보처리방침 보기

  const handleGoLogin = () => setModalState(1); //'로그인'클릭

  useEffect(() => {
    if (termsAgreed && policyAgreed) {
      setAgreeAll(true);
      setIsEnter(true);
    } else {
      setAgreeAll(false);
      setIsEnter(false);
    }
  }, [termsAgreed, policyAgreed]);

  return (
    <Block.FormWrapper>
      <Block.Form>
        <Text.Body3 margin="28px 0 40px 0 ">회원가입</Text.Body3>
        <Block.FormInputSection margin="0 0 8px 0">
          <Input.CheckBoxInput
            id="agreeAll"
            onChange={toggleAgreeAll}
            type="checkbox"
            checked={agreeAll}
          />
          <label htmlFor="agreeAll">
            <Text.Body3 color={`${theme.colors.darkGray}`}>
              전체 동의
            </Text.Body3>
          </label>
        </Block.FormInputSection>
        <hr />
        <Block.FormInputSection margin="10px 0 0 0 ">
          <Input.CheckBoxInput
            id="termsAgreed"
            onChange={toggleTermsAgreed}
            type="checkbox"
            checked={termsAgreed}
          />
          <label htmlFor="termsAgreed">
            <Text.Body3 margin="0 7px 0 0 " color={`${theme.colors.darkGray}`}>
              이용약관 동의 (필수)
            </Text.Body3>
            <Text.Body3 pointer onClick={handleGoWatchTerms}>
              {">"}
            </Text.Body3>
          </label>
        </Block.FormInputSection>
        <Block.FormInputSection margin="4px 0 31px 0 ">
          <Input.CheckBoxInput
            id="policyAgreed"
            onChange={togglePolicyAgreed}
            type="checkbox"
            checked={policyAgreed}
          />
          <label htmlFor="policyAgreed">
            <Text.Body3 margin="0 7px 0 0 " color={`${theme.colors.darkGray}`}>
              개인정보 처리방침 (필수)
            </Text.Body3>
            <Text.Body3 pointer onClick={handleGoWatchPolicy}>
              {">"}
            </Text.Body3>
          </label>
        </Block.FormInputSection>
        <Button.FormButton
          disabled={!isEnter}
          onClick={handleGoToNextStep}
          margin="42px 0 16px 0 "
        >
          <Text.Body1>다음</Text.Body1>
        </Button.FormButton>
      </Block.Form>
      <Text.Body3 margin="0 9px 0 113px ">이미 가입하셨나요?</Text.Body3>
      <Text.Body3
        onClick={handleGoLogin}
        pointer
        color={`${theme.colors.main}`}
      >
        로그인
      </Text.Body3>
    </Block.FormWrapper>
  );
}
export default TermsForm;
