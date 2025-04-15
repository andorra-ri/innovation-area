import {Drawer, Modal}  from "antd";
import { useAppDispatch, useAppSelector } from "config/store/hooks";
import { ModalAction } from "modules/ui/actions";
import { selectOpenModal } from "modules/ui/selector";
import { FunctionComponent, ReactElement, ReactNode } from "react";


type Props = {
  name: string
	children?: ReactNode;
  size?: string,
  title?: string
  drawer?: {
    slide?: string
  }
};

export const ARIModals: FunctionComponent<Props> = ({children, name, size, drawer, title}): ReactElement => {  
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector((state) => selectOpenModal(state, name))
  return (
    <>
    { drawer ? 
      (
        <Drawer
          open={isOpen}
          onClose={() => dispatch(ModalAction.closeModal({name: name}))}
          closable={false}
          key={drawer.slide ? drawer.slide : 'right'}
          width={size && size}
        >
          {children}
        </Drawer>
      ) : (
        <Modal
          open={isOpen}
          onCancel={() => dispatch(ModalAction.closeModal({name: name}))}
          onOk={() => dispatch(ModalAction.closeModal({name: name}))}
          footer={null}
          width={size && size}
          title={title && title}
        >
          {children}
        </Modal>
      )
    }
    </>
  )
  
}