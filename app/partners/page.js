"use client";

import { useState, useMemo } from "react";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import Sponsors from "../Components/Sponsors";
import Media from "../Components/Media";
import SearchBar from "../Components/SearchBar";
import useExhibitors from "../Hooks/useExhibitors";

const PartnersPage = () => {
  const { sponsors, media, sponsorTiers, isLoading, isError } = useExhibitors();
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value.toLowerCase());
  };

  const filteredSponsors = useMemo(() => {
    return sponsors?.filter((sponsor) =>
      sponsor.name.toLowerCase().includes(text),
    );
  }, [sponsors, text]);

  const filteredMedia = useMemo(() => {
    return media?.filter((media) => media.name.toLowerCase().includes(text));
  }, [media, text]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <div className="w-full flex flex-col md:flex-row gap-y-4 md:gap-x-4">
        <div className="w-full md:w-2/5 md:max-w-96 flex justify-center">
          <div className="w-full md:w-[80%]">
            <SearchBar onChange={onChange} />
          </div>
        </div>
        <div className="w-full">
          <Sponsors sponsors={filteredSponsors} sponsorTiers={sponsorTiers} />
          <Media media={filteredMedia} />
        </div>
      </div>
    </>
  );
};

export default PartnersPage;
