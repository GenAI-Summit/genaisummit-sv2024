"use client";

import { useEffect, useState } from "react";
import Sponsors from "../Components/Sponsors";
import Media from "../Components/Media";
import SearchBar from "../Components/SearchBar";
import { getSponsors, getMedia } from "/lib/api";

const PartnersPage = () => {
  const [sponsors, setSponsors] = useState([]);
  const [media, setMedia] = useState([]);
  const [filteredSponsors, setFilteredSponsors] = useState([]);
  const [filteredMedia, setFilteredMedia] = useState([]);
  const [sponsorLoading, setSponsorLoading] = useState(true);
  const [mediaLoading, setMediaLoading] = useState(true);

  const sponsorTiers = ["Platinum", "Gold", "Silver", "Special"];

  useEffect(() => {
    const getSponsorsData = async () => {
      const data = await getSponsors();
      setSponsors(data);
      setFilteredSponsors(data);
      setSponsorLoading(false);
    };
    const getMediaData = async () => {
      const data = await getMedia();
      setMedia(data);
      setFilteredMedia(data);
      setMediaLoading(false);
    };
    getSponsorsData();
    getMediaData();
  }, []);

  const onChange = (e) => {
    const text = e.target.value.toLowerCase();
    const filteredSponsors = sponsors.filter((sponsor) =>
      sponsor.name.toLowerCase().includes(text),
    );
    setFilteredSponsors(filteredSponsors);
    const filteredMedia = media.filter((media) =>
      media.name.toLowerCase().includes(text),
    );
    setFilteredMedia(filteredMedia);
  };

  return (
    <>
      <div className="w-full flex flex-col md:flex-row gap-y-4 md:gap-x-4">
        <div className="w-full md:w-2/5 md:max-w-96 flex justify-center">
          <div className="w-full md:w-[80%]">
            <SearchBar onChange={onChange} />
          </div>
        </div>
        <div className="w-full">
          {sponsorLoading || mediaLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <Sponsors
                sponsors={filteredSponsors}
                sponsorTiers={sponsorTiers}
              />
              <Media media={filteredMedia} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PartnersPage;
