import { FunctionComponent, ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InnovationMap from "pages/innovationMap";

type Props = {}

export const RoutesAdmin: FunctionComponent<Props> = (): ReactElement => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route path="/" element={<InnovationMap />} />
          </Route>
        </Routes>
      </BrowserRouter>  
    </div>
  )
}