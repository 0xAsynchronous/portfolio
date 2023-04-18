import React, { PropsWithChildren, useState } from "react";
import CustomCursorContext, {
  CursorLookType,
} from "@components/CustomCursor/context/customCursorContext";

const CustomCursorManager = ({ children }: PropsWithChildren) => {
  const [type, setType] = useState<CursorLookType>("default");
  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
      {children}
    </CustomCursorContext.Provider>
  );
};

export default CustomCursorManager;
