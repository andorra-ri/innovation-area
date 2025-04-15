import { Spin } from "antd";
import { useAppSelector } from "config/store/hooks";
import { selectLoading } from "modules/app/selector";
import { FunctionComponent, ReactElement, ReactNode } from "react";
import { LoadingOutlined } from '@ant-design/icons';

type Props = {
	children?: ReactNode;
};

export const Loading: FunctionComponent<Props> = ({children}): ReactElement => {  
  const loadingStoreData = useAppSelector((state) => selectLoading(state))
  return (
    <>
      {loadingStoreData && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(192, 192, 192, 0.8)',
          zIndex: 1000, 
        }}>
          <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        </div>
      )}
    </>
  )
}