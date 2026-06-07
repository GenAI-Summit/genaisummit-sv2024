import mediaData from "@/public/data/media.json";

const useExhibitors = () => {
  const media = mediaData.map((item) => ({
    id: item.id,
    name: item.name,
    logo: item.logo || item.image || item.avatar,
    url: item.url,
  }));

  return {
    media,
    isLoading: false,
    isError: false,
  };
};

export default useExhibitors;
