"use client";

import { useState, useMemo } from "react";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import SearchBar from "../Components/SearchBar";
import Speakers from "../Components/Speakers";
import ResetBtn from "../Components/ResetBtn";
import useSpeakers from "../Hooks/useSpeakers";
import SpeakersIntro from "../Components/Intro/SpeakersIntro";
import SectionEnter from "../Motions/SectionEnter";

const SpeakersPage = () => {
  const { speakers, isLoading, isError } = useSpeakers();
  const [text, setText] = useState("");

  const filteredSpeakers = useMemo(() => {
    return speakers?.filter((speaker) => {
      return (
        speaker.name.toLowerCase().includes(text) ||
        speaker.organization.toLowerCase().includes(text) ||
        speaker.title.toLowerCase().includes(text)
      );
    });
  }, [speakers, text]);

  const onReset = () => {
    setText("");
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="w-full flex flex-col gap-y-8">
      <SectionEnter>
        <SpeakersIntro />
      </SectionEnter>
      <SectionEnter>
        <div className="w-full flex flex-col md:flex-row gap-y-4 md:gap-x-8">
          <div className="w-full md:w-2/5 flex justify-center md:max-w-96">
            <div className="w-full flex flex-col gap-y-4">
              <SearchBar text={text} setText={setText} />
              <ResetBtn onReset={onReset} />
            </div>
          </div>
          <div className="w-full">
            <Speakers speakers={filteredSpeakers} />
          </div>
        </div>
      </SectionEnter>
    </div>
  );
};

export default SpeakersPage;
