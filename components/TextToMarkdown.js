"use client";

import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "@/styles/markdownTable.css";

const TextToMarkdown = ({ text }) => {
  return (
    <div className="markdown-container">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ ...props }) => (
            <div className="table-container">
              <table className="markdown-table" {...props} />
            </div>
          ),
        }}
      >
        {text}
      </Markdown>
    </div>
  );
};

export default TextToMarkdown;