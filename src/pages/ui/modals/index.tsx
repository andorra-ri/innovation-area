import { FunctionComponent, ReactElement, ReactNode } from "react"
import { ModalCompanyInformation } from "./modalCompanyInformation";
import { ModalCurrentSituation } from "./modalCurrentSituation";

type Props = {
  children?: ReactNode;
};

export const GlobalModals: FunctionComponent<Props> = ({
  children,
}): ReactElement => {
  return (
    <>
      <ModalCompanyInformation />
      <ModalCurrentSituation />
    </>
  );
};
