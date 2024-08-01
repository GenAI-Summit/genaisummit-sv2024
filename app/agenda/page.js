"use client";

import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import Agenda from "../Components/Agenda";
import { getSessions } from "/lib/api";

const AgendaPage = () => {
  const [sessionGroups, setSessionGroups] = useState([]);
  const [filteredSessionGroups, setFilteredSessionGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSessionsData = async () => {
      const data = await getSessions();
      const groupedSessions = data.reduce((acc, session) => {
        if (!acc[session.date]) {
          acc[session.date] = [];
        }
        acc[session.date].push(session);
        return acc;
      }, {});
      const groups = Object.values(groupedSessions);
      setSessionGroups(groups);
      setFilteredSessionGroups(groups);
      setLoading(false);
    };
    getSessionsData();
  }, []);

  const onChange = (e) => {
    const text = e.target.value.toLowerCase();
    const sessions = sessionGroups.map((group) => {
      return group.filter((session) => {
        return (
          session.topic.toLowerCase().includes(text) ||
          session.speakers.some((speaker) =>
            speaker.name.toLowerCase().includes(text),
          )
        );
      });
    });
    setFilteredSessionGroups(sessions);
  };

  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-2/5">
        <SearchBar onChange={onChange} />
      </div>
      <div className="w-full">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Agenda sessionGroups={filteredSessionGroups} />
        )}
      </div>
    </div>
  );
};

export default AgendaPage;
