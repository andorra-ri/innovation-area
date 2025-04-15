import Layout from "antd/es/layout/layout";
import { Loading } from "components/loading";
import { GlobalModals } from "pages/ui/modals";
import { FunctionComponent, ReactElement, ReactNode } from "react";

type Props = {
	title?: string;
	children?: ReactNode;
};

export const Page: FunctionComponent<Props> = (props): ReactElement => (
  <Layout>
    <GlobalModals />
    <Loading />  
    <div>
      {props.children}
    </div>
  </Layout>
)
