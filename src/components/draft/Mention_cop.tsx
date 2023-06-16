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
import Textchat from "../textchat/index.tsx";
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

export default function CustomMentionEditor(): ReactElement {
  const ref = useRef<Editor>(null);
  const [getdata, setGetdata] = useState(false);
  const [task, setTask] = useState([]);
  const [newtask, setNewtask] = useState("");

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
        // const arr=[];
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
    let contentText = [];
    for (let key in raw.entityMap) {
      const ent = raw.entityMap[key];
      if (ent.type === "mention") {
        mentionedUsers.push(ent.data.mention);
      }
    }
    console.log(mentionedUsers);
    console.log("noi dung:", raw.blocks[0].text);
  };
  const contentState = editorState.getCurrentContent();
  const raw = convertToRaw(contentState);
  const current = convertFromRaw(raw);

  const ToJson = () => {
    localStorage.setItem("items", JSON.stringify(raw));
  };
  const ToState = () => {
    const localraw = JSON.parse(localStorage.getItem("items"));
    if (localraw) {
      setEditorState(EditorState.createWithContent(convertFromRaw(localraw)));
    } else {
      EditorState.createEmty();
    }
  };
  const onSubmit = () => {
    // e.preventDefault();
    // setGetdata(true);

    let find = [];

    localStorage.setItem("items", JSON.stringify(raw));
    setEditorState(() => EditorState.createEmpty());

    // console.log("test editor state:", editorState);

    // console.log(EditorState.createWithContent(contentState));
    // console.log(EditorState.createWithContent(current));
    // console.log("test raw", raw);
    // console.log("test current", current);
    // console.log("test content state", contentState);
  };
  const localraw = JSON.parse(localStorage.getItem("items"));
  const onGetdata = () => {
    // setEditorState(JSON.parse(localStorage.getItem("items")));
    if (localraw) {
      setEditorState(EditorState.createWithContent(convertFromRaw(localraw)));
    } else {
      EditorState.createEmty();
    }
  };
  const onSend = (e: any) => {
    if (!newtask) {
      alert("chuea nhao gif ca");
      return;
    }
    const item = {
      value: raw,
    };
    setEditorState((old) => [...old, item]);
    console.log(editorState);
    // setEditorState(EditorState.createWithContent((old) => [...old, item]));
    setNewtask("");
  };

  return (
    <div className="p-2">
      {/* <div> {getdata ? <div>{renderContent}</div> : ""}</div> */}
      {/* <div>
        <input
          type="text"
          value={newtask}
          onChange={(e) => setNewtask(e.target.value)}
        />
      </div> */}
      <div className="flex justify-end">
        {/* {localraw?.map((i, index) => ( */}
        <Textchat classname="p-3 text-[white] " valuetest={localraw}></Textchat>
        {/* ))} */}
      </div>

      <div
        className={editorStyles.editor}
        onClick={() => {
          ref.current!.focus();
        }}
      >
        {/* <div className=""> */}
        <Editor
          editorKey={"editor2"}
          editorState={editorState}
          onChange={onChange}
          plugins={plugins}
          ref={ref}
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
        {/* </div> */}
      </div>
      {/* {editorState !== "" ? <div>{editorState}</div>}
       */}

      {/* <div>{getdata}</div> */}
      <button onClick={onExtractData}>extract data</button>
      <button className="px-4" onClick={onExtractMentions}>
        extract mention
      </button>

      <button className="px-2 border border-black/20" onClick={onSubmit}>
        send
      </button>
      <button className="ml-2 px-2 border border-black/20" onClick={onGetdata}>
        get{" "}
      </button>
      <button
        className="px-2  ml-3 border border-slate-700"
        onClick={() => onSend()}
      >
        gui
      </button>
    </div>
  );
}
