"use client";

import { useState, useMemo } from "react";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import ResetBtn from "@/components/Button/ResetBtn";
import Exhibitors from "@/components/Exhibitors";
import useExhibitors from "@/hooks/useExhibitors";
import useExhibitorsIndex from "@/hooks/useExhibitorsIndex";
import ExhibitorsIntro from "@/components/Intro/ExhibitorsIntro";
import SectionEnter from "@/motions/SectionEnter";

const ExhibitorsPage = () => {
  const { exhibitors, isLoading, isError } = useExhibitors();
  const [text, setText] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { categories } = useExhibitorsIndex();

  const onReset = () => {
    setText("");
    setSelectedCategories([]);
  };

  const filteredExhibitors = useMemo(() => {
    return exhibitors?.filter(
      (exhibitor) =>
        exhibitor.name.toLowerCase().includes(text.toLowerCase()) &&
        (selectedCategories.length === 0 ||
          exhibitor.categories.some((c) => selectedCategories.includes(c))),
    );
  }, [exhibitors, text, selectedCategories]);

  const onSelectCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
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
        <ExhibitorsIntro />
      </SectionEnter>
      <SectionEnter>
        <div className="w-full flex flex-col lg:flex-row gap-y-10 lg:gap-x-8">
          <div className="w-full lg:w-2/5 lg:max-w-96 flex justify-center">
            <div className="w-full flex flex-col gap-y-6">
              <SearchBar text={text} setText={setText} />
              {categories && (
                <Filter
                  name="Categories"
                  options={categories}
                  selected={selectedCategories}
                  onSelect={onSelectCategory}
                />
              )}
              <ResetBtn onReset={onReset} />
            </div>
          </div>
          <div className="w-full">
            <Exhibitors exhibitors={filteredExhibitors} />
          </div>
        </div>
      </SectionEnter>
    </div>
  );
};

export default ExhibitorsPage;
