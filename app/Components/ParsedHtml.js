"use client";
import parse from "html-react-parser";

const ParsedHtml = ({ html }) => {
  console.log(html);
  return <>{parse(html)}</>;
};

export default ParsedHtml;
