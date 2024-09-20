"use client";

import htmlToMarkdown from "@wcj/html-to-markdown";
import Markdown from "react-markdown";
import { useState, useEffect } from "react";

const HtmlToMarkdown = (html) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const convertHtmlToMarkdown = async () => {
      const md = await htmlToMarkdown(html);
      setMarkdown(md);
    };
    convertHtmlToMarkdown();
  }, [html]);

  return <Markdown>{markdown}</Markdown>;
};

export default HtmlToMarkdown;