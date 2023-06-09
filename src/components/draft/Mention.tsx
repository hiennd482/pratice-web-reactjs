import React, {
  MouseEvent,
  ReactElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { EditorState, convertToRaw } from "draft-js";
import Editor from "@draft-js-plugins/editor";
import createMentionPlugin, {
  defaultSuggestionsFilter,
  MentionData,
  MentionPluginTheme,
} from "@draft-js-plugins/mention";
import editorStyles from "./CustomMentionEditor.module.css";
import mentionsStyles from "./MentionsStyles.module.css";
import mentions from "./mention.ts";
import "./draft.scss";

export interface EntryComponentProps {
  className?: string;
  onMouseDown(event: MouseEvent): void;
  onMouseUp(event: MouseEvent): void;
  onMouseEnter(event: MouseEvent): void;
  role: string;
  id: string;
  "aria-selected"?: boolean | "false" | "true";
  theme?: MentionPluginTheme;
  mention: MentionData;
  isFocused: boolean;
  searchValue?: string;
}

function Entry(props: EntryComponentProps): ReactElement {
  const {
    mention,
    theme,
    searchValue, // eslint-disable-line @typescript-eslint/no-unused-vars
    isFocused,
    // eslint-disable-line @typescript-eslint/no-unused-vars
    ...parentProps
  } = props;

  return (
    <div {...parentProps}>
      <div className={theme?.mentionSuggestionsEntryContainer}>
        <div className={theme?.mentionSuggestionsEntryContainerLeft}>
          <img
            src={mention.avatar}
            className={theme?.mentionSuggestionsEntryAvatar}
          />
        </div>

        <div className={theme?.mentionSuggestionsEntryContainerRight}>
          <div className={theme?.mentionSuggestionsEntryText}>
            {mention.name}
          </div>

          {/* <div className={theme?.mentionSuggestionsEntryTitle}>
            {mention.title}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default function CustomMentionEditor(): ReactElement {
  const ref = useRef<Editor>(null);
  const [getdata, setGetdata] = useState("");
  // console.log("day la get data", getdata);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  // console.log(editorState);
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(mentions);

  const { MentionSuggestions, plugins } = useMemo(() => {
    const mentionPlugin = createMentionPlugin({
      entityMutability: "IMMUTABLE",
      theme: mentionsStyles,
      mentionPrefix: "@",
      supportWhitespace: true,

      mentionComponent(mentionProps) {
        return (
          <span
            className={`${mentionProps.className} cursor-pointer`}
            // eslint-disable-next-line no-alert
            onClick={() => console.log("test:", mentionProps.mention)}
          >
            {mentionProps.children}
          </span>
        );
      },
    });
    // eslint-disable-next-line no-shadow
    const { MentionSuggestions } = mentionPlugin;
    // eslint-disable-next-line no-shadow
    const plugins = [mentionPlugin];
    return { plugins, MentionSuggestions };
  }, []);

  const onChange = useCallback((_editorState: EditorState) => {
    setEditorState(_editorState);
    setGetdata(_editorState);
    // console.log(_editorState);
  }, []);
  const onOpenChange = useCallback((_open: boolean) => {
    setOpen(_open);
    setSuggestions(suggestions);
  }, []);
  const onSearchChange = useCallback(
    ({ trigger, value }: { value: string; trigger: string }) => {
      setSuggestions(defaultSuggestionsFilter(value, mentions, trigger));
    },
    []
  );
  const onExtractData = () => {
    const contentState = editorState.getCurrentContent();
    const raw = convertToRaw(contentState);
    console.log(raw);
  };
  const onExtractMentions = () => {
    const contentState = editorState.getCurrentContent();
    const raw = convertToRaw(contentState);
    let mentionedUsers = [];
    for (let key in raw.entityMap) {
      const ent = raw.entityMap[key];
      if (ent.type === "mention") {
        mentionedUsers.push(ent.data.mention);
      }
    }
    console.log(mentionedUsers);
  };
  return (
    <div className="p-3">
      <div
        className={editorStyles.editor}
        onClick={() => {
          ref.current!.focus();
        }}
      >
        {/* <div className=""> */}
        <Editor
          editorKey={"editor"}
          editorState={editorState}
          onChange={onChange}
          plugins={plugins}
          ref={ref}
        />

        <div className="fixed ">
          <MentionSuggestions
            open={open}
            onOpenChange={onOpenChange}
            suggestions={suggestions}
            onSearchChange={onSearchChange}
            onAddMention={() => {
              // get the mention object selected
            }}
            entryComponent={Entry}
            popoverContainer={({ children }) => (
              <div className=" ">
                <div className="py-3 max-h-[180px] overflow-y-scroll bg-white drop-shadow-xl ">
                  {children}
                </div>
              </div>
            )}
          />
        </div>
        {/* </div> */}
      </div>
      {/* {editorState !== "" ? <div>{editorState}</div>}
       */}

      {/* <div>{getdata}</div> */}
      <button onClick={onExtractData}>extract data</button>
      <button className="px-4" onClick={onExtractMentions}>
        extract mention
      </button>
    </div>
  );
}
