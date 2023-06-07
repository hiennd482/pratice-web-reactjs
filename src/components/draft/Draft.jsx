import React, {
  ReactElement,
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import { EditorState, convertToRaw } from "draft-js";
import Editor from "@draft-js-plugins/editor";
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from "@draft-js-plugins/mention";
// import "@draft-js-mention-plugin/lib/plugin.css";
import "@draft-js-plugins/mention/lib/plugin.css";
import editorStyles from "./SimpleMentionEditor.module.css";
import mentions from "./data.js";

// Draft-JS-Mentions plugin configuration

function TextInput() {
  const ref = useRef(<Editor></Editor>);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(mentions);
  const { MentionSuggestions, plugins } = useMemo(() => {
    const mentionPlugin = createMentionPlugin();
    // eslint-disable-next-line no-shadow
    const { MentionSuggestions } = mentionPlugin;
    // eslint-disable-next-line no-shadow
    const plugins = [mentionPlugin];
    return { plugins, MentionSuggestions };
  }, []);
  const onOpenChange = useCallback((_open) => {
    setOpen(_open);
  }, []);
  const onSearchChange = useCallback(({ value }) => {
    setSuggestions(defaultSuggestionsFilter(value, mentions));
  }, []);

  const handleClick = () => {
    ref.current.focus();
  };
  // const onExtractData = () => {
  //   const contentState = this.state.editorState.getCurrentContent();
  //   const raw = convertToRaw(contentState);
  //   console.log(raw);
  // };

  // const onExtractMentions = () => {
  //   const contentState = this.state.editorState.getCurrentContent();
  //   const raw = convertToRaw(contentState);
  //   let mentionedUsers = [];
  //   for (let key in raw.entityMap) {
  //     const ent = raw.entityMap[key];
  //     if (ent.type === "mention") {
  //       mentionedUsers.push(ent.data.mention);
  //     }
  //   }
  //   console.log(mentionedUsers);
  // };

  useEffect(() => {
    // const mentions = document.querySelector(".mnw6qvm");
    // mentions.classList.add("test-mentions");
  });
  return (
    <div>
      <div className={editorStyles.editor} onClick={handleClick}>
        <Editor
          editorKey={"editor"}
          editorState={editorState}
          onChange={setEditorState}
          plugins={plugins}
          ref={ref}
        />
        <MentionSuggestions
          open={open}
          onOpenChange={onOpenChange}
          suggestions={suggestions}
          onSearchChange={onSearchChange}
          onAddMention={() => {
            // get the mention object selected
          }}
        />
      </div>
      <div>
        {/* <button onClick={() => onExtractData()}>Extract data</button>
        <button onClick={() => onExtractMentions()}>Extract mentions</button> */}
      </div>
    </div>
  );
}

export default TextInput;
