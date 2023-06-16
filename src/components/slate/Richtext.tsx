import React, { useMemo } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";
import { Edit } from "@mui/icons-material";
const Richtext = () => {
  const editor1 = useMemo(() => withHistory(withReact(createEditor())), []);
  const editor2 = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <div>
      <Slate
        editor={editor1}
        initialValue={[
          {
            type: "paragraph",
            childen: [{ text: "This editor is styled using the style prop." }],
          },
        ]}
      >
        <Editable></Editable>
      </Slate>
    </div>
  );
};

export default Richtext;
