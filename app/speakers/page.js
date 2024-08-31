"use client";

import { useState, useMemo } from "react";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import SearchBar from "@/components/SearchBar";
import Speakers from "@/components/Speakers";
import ResetBtn from "@/components/Button/ResetBtn";
import useSpeakers from "@/hooks/useSpeakers";
import SpeakersIntro from "@/components/Intro/SpeakersIntro";
import SectionEnter from "@/motions/SectionEnter";

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
    <div className="w-full flex flex-col gap-y-14 mt-10">
      <SectionEnter>
        <SpeakersIntro />
      </SectionEnter>
      <SectionEnter>
        <div className="w-full flex flex-col lg:flex-row gap-y-10 lg:gap-x-8">
          <div className="w-full lg:w-2/5 flex justify-center lg:max-w-96">
            <div className="w-full flex flex-col gap-y-6">
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
