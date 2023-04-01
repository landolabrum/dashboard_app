import type { NextComponentType, NextPageContext } from "next";
import Modal from "../shared/modal/modal";

interface Props {}

const Get_directions: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <Modal open>
        <h1>Get Directions</h1>
        {/* <input /> */}
    </Modal>
  )
}

export default Get_directions