import type { NextPage } from "next";
import Head from "next/head";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { StreamLanguage } from "@codemirror/stream-parser";

const Home: NextPage = () => {
  return (
    <div className=" bg-slate-900">
      <Head>
        <title>Sandbox</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-start justify-center min-h-screen py-4">
        <div className="flex flex-row items-start w-screen h-full px-6">
          <h1 className="text-xl font-medium text-slate-100">
            🏗&nbsp;&nbsp;Sandbox
          </h1>
        </div>
        <div className="grid flex-1 w-screen grid-cols-2 gap-6 px-4 py-4 h-content">
          <CodeMirror
            theme={oneDark}
            height="100%"
            value='print("Hello World!")'
            extensions={javascript[{ jsx: "true" }]}
          />
          <div className="flex flex-col items-start w-full h-full px-4 py-4 rounded bg-slate-800 text-slate-200">
            After code is compiled via WebAssembly and executed, output goes
            here
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
