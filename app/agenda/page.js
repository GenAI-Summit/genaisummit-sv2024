"use client";

import { useState } from "react";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import SearchBar from "../Components/SearchBar";
import Agenda from "../Components/Agenda";
import useSessions from "../Hooks/useSessions";

const AgendaPage = () => {
  const [text, setText] = useState("");
  const { sessions, isLoading, isError } = useSessions();

  const onChange = (e) => {
    setText(e.target.value.toLowerCase());
  };

  const filteredSessions = sessions?.filter((session) => {
    return (
      session.name.toLowerCase().includes(text) ||
      session.speakers.some(
        (speaker) =>
          speaker.name.toLowerCase().includes(text) ||
          speaker.organization.toLowerCase().includes(text),
      ) ||
      session.moderators.some(
        (moderator) =>
          moderator.name.toLowerCase().includes(text) ||
          moderator.organization.toLowerCase().includes(text),
      )
    );
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="w-full flex flex-col md:flex-row gap-y-4 md:gap-x-4">
      <div className="w-full md:w-2/5 md:max-w-96 flex justify-center">
        <div className="w-full md:w-[80%]">
          <SearchBar onChange={onChange} />
        </div>
      </div>
      <div className="w-full">
        <Agenda sessions={filteredSessions} />
      </div>
    </div>
  );
};

export default AgendaPage;
