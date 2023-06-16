import React, {
  MouseEvent,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import Editor from "@draft-js-plugins/editor";
import createMentionPlugin, {
  defaultSuggestionsFilter,
  MentionData,
  MentionPluginTheme,
} from "@draft-js-plugins/mention";
import editorStyles from "./CustomMentionEditor.module.css";
import mentionsStyles from "./MentionsStyles.module.css";
import mentions from "./mention.ts";

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

export default function CustomMentionEditor(props: any): ReactElement {
  const ref = useRef<Editor>(null);
  const [getdata, setGetdata] = useState(false);
  const [task, setTask] = useState([]);
  const [newtask, setNewtask] = useState("");

  // console.log("day la get data", getdata);
  const [editorState2, setEditorState] = useState(() =>
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

  const onChange2 = useCallback((_editorState: EditorState) => {
    // setEditorState(EditorState.createWithContent(props.valuetest));
    setEditorState(_editorState);
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
  // const contentState = editorState.getCurrentContent();
  // const raw = convertToRaw(contentState);
  // const current = convertFromRaw(raw);

  // const ToJson = () => {
  //   localStorage.setItem("items", JSON.stringify(raw));
  // };
  // const ToState = () => {
  //   const localraw = JSON.parse(localStorage.getItem("items"));
  //   if (localraw) {
  //     setEditorState(EditorState.createWithContent(convertFromRaw(localraw)));
  //   } else {
  //     EditorState.createEmty();
  //   }
  // };
  // const onSubmit = () => {
  //   let find = [];

  //   localStorage.setItem("items", JSON.stringify(raw));

  //   console.log("test editor state:", editorState);

  //   console.log("test raw", raw);
  //   console.log("test current", current);
  //   console.log("test content state", contentState);
  // };
  const onGetdata2 = () => {
    const localraw = JSON.parse(localStorage.getItem("items"));
    if (localraw) {
      setEditorState(EditorState.createWithContent(convertFromRaw(localraw)));
    } else {
      EditorState.createEmty();
    }
  };
  const onClear = () => {
    setEditorState(() => EditorState.createEmpty());
  };

  return (
    <div className="p-3">
      {/* <div>{props.valuetest}</div> */}
      <div
        className={editorStyles.editor}
        onClick={() => {
          ref.current!.focus();
        }}
      >
        <Editor
          editorKey={"editor2"}
          // editorState={EditorState.createWithContent(props.valuetest)}
          editorState={editorState2}
          onChange={onChange2}
          plugins={plugins}
          readOnly={true}
          ref={ref}
          // value={props.valuetest}
        />
        <div className="fixed">
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
      </div>
      <button onClick={() => onGetdata2()}>get 2</button>
      <button
        className="px-5 border border-black/20 ml-3"
        onClick={() => onClear()}
      >
        clear
      </button>
    </div>
  );
}
