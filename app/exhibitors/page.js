"use client";

import { useState, useMemo } from "react";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import SearchBar from "../Components/SearchBar";
import Exhibitors from "../Components/Exhibitors";
import useExhibitors from "../Hooks/useExhibitors";

const ExhibitorsPage = () => {
  const { exhibitors, isLoading, isError } = useExhibitors();
  const [text, setText] = useState("");

  const filteredExhibitors = useMemo(() => {
    return exhibitors?.filter((exhibitor) => {
      return exhibitor.name.toLowerCase().includes(text);
    });
  }, [exhibitors, text]);

  const onChange = (e) => {
    setText(e.target.value.toLowerCase());
  };

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
        <Exhibitors exhibitors={filteredExhibitors} />
      </div>
    </div>
  );
};

export default ExhibitorsPage;
