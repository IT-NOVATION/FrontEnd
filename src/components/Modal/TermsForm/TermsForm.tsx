import { useEffect, useState } from "react";
import { CheckBoxInput, FormInputSection } from "../../../styles/InputStyle";
import { FormButton } from "../../../styles/ButtonStyle";
import { Body1, Body3 } from "../../../styles/TextStyle";
import theme from "../../../styles/theme";
import Terms from "./Terms/Terms";
import Policy from "./Policy/Policy";

function TermsForm({
  setStepNumber,
}: {
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [isEnter, setIsEnter] = useState(false);
  const [agreeAll, setAgreeAll] = useState(false);
  const toggleAgreeAll = () =>
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
  const [termsAgreed, setTermsAgreed] = useState(false);
  const toggleTermsAgreed = () => setTermsAgreed((prev) => !prev);
  const [policyAgreed, setPolicyAgreed] = useState(false);
  const togglepPlicyAgreed = () => setPolicyAgreed((prev) => !prev);
  const handleGoToNextStep = () => setStepNumber((prev) => prev + 1);

  const [isWatchingTerms, setIsWatchingTerms] = useState(false);
  const handleGoWatchTerms = () => setIsWatchingTerms(true);
  const [isWatchingPolicy, setIsWatchingPolicy] = useState(false);
  const handleGoWatchPolicy = () => setIsWatchingPolicy(true);

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
    <form>
      {isWatchingTerms ? (
        <Terms setIsWatchingTerms={setIsWatchingTerms} />
      ) : isWatchingPolicy ? (
        <Policy setIsWatchingPolicy={setIsWatchingPolicy} />
      ) : (
        <>
          <FormInputSection margin="0 0 8px 0">
            <CheckBoxInput
              id="agreeAll"
              onChange={toggleAgreeAll}
              type="checkbox"
              checked={agreeAll}
            />
            <label htmlFor="agreeAll">
              <Body3 color={`${theme.colors.darkGray}`}>전체 동의</Body3>
            </label>
          </FormInputSection>
          <hr />
          <FormInputSection margin="10px 0 0 0 ">
            <CheckBoxInput
              id="termsAgreed"
              onChange={toggleTermsAgreed}
              type="checkbox"
              checked={termsAgreed}
            />
            <label htmlFor="termsAgreed">
              <Body3 margin="0 7px 0 0 " color={`${theme.colors.darkGray}`}>
                이용약관 동의 (필수)
              </Body3>
              <Body3 pointer onClick={handleGoWatchTerms}>
                {">"}
              </Body3>
            </label>
          </FormInputSection>
          <FormInputSection margin="4px 0 31px 0 ">
            <CheckBoxInput
              id="policyAgreed"
              onChange={togglepPlicyAgreed}
              type="checkbox"
              checked={policyAgreed}
            />
            <label htmlFor="policyAgreed">
              <Body3 margin="0 7px 0 0 " color={`${theme.colors.darkGray}`}>
                개인정보 처리방침 (필수)
              </Body3>
              <Body3 pointer onClick={handleGoWatchPolicy}>
                {">"}
              </Body3>
            </label>
          </FormInputSection>
          <FormButton
            disabled={!isEnter}
            onClick={handleGoToNextStep}
            margin="42px 0 16px 0 "
          >
            <Body1>다음</Body1>
          </FormButton>
        </>
      )}
    </form>
  );
}
export default TermsForm;
