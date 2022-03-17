import { basicSetup, EditorState, EditorView } from "@codemirror/basic-setup";
import { python } from "@codemirror/lang-python";
import React from "react";
import { ReactDOM } from "react";
import { useEffect } from "react";

export default function CodeMirror() {

  let editor = new EditorView({
    state: EditorState.create({
      extensions: [basicSetup, python()],
    }),
    parent: document.getElementById("root"),
  });

  return <div id="editor" />;
}
