import type { NextComponentType, NextPageContext } from "next";

interface Props {
    open?: boolean;
    setOpen?: (e:any)=>void;
    dismissable?: boolean;
    children?: any;
}

const Modal: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  if(props.open)return (
    <div className="modal">
        <div className="modal-content">
            {props.dismissable && <div className="dismiss"/>}
        {props.children}
        </div>
    </div>
  )
  return <></>;
}

export default Modal