import Experience from "@/components/history/Experience";
import Wrapper from "@/components/layout/Wrapper";
import { expHistory } from "@/constants/experienctHistory";

export default function EmploymentHistory() {
  return (
    <Wrapper>
      <Experience
        id="work-experience"
        aria-level={2}
        head={'Employment History'}
        history={expHistory}
        hideTitle={true}
        isAnimate={true}
      />
    </Wrapper>
  );
}