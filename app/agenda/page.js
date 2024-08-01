"use client";

import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import Agenda from "../Components/Agenda";
import { getSessions } from "/lib/api";

const AgendaPage = () => {
  const [sessions, setSessions] = useState([]);
  const [filteredSessions, setFilteredSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSessionsData = async () => {
      const data = await getSessions();
      setSessions(data);
      setFilteredSessions(data);
      setLoading(false);
    };
    getSessionsData();
  }, []);

  const onChange = (e) => {
    const text = e.target.value.toLowerCase();
    const filteredSessions = sessions.filter((session) => {
      return (
        session.title.toLowerCase().includes(text) ||
        session.speakers.some((speaker) =>
          speaker.name.toLowerCase().includes(text),
        ) ||
        session.moderators.some((moderator) =>
          moderator.name.toLowerCase().includes(text),
        )
      );
    });
    setFilteredSessions(filteredSessions);
  };

  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-2/5">
        <SearchBar onChange={onChange} />
      </div>
      <div className="w-full">
        {loading ? <p>Loading...</p> : <Agenda sessions={filteredSessions} />}
      </div>
    </div>
  );
};

export default AgendaPage;
