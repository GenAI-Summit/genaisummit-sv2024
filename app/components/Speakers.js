import SectionLayout from "../layouts/SectionLayout";
import SpeakerCard from "../components/SpeakerCard";

const Speakers = async () => {
  const speakers = await getSpeakersData();
  return (
    <SectionLayout title="Speakers" description="LISTEN TO THE EVENT SPEAKERS">
      <div className="flex flex-wrap flex-center mt-2 gap-x-8 gap-y-4">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </SectionLayout>
  );
};

const getSpeakersData = async () => {
  const speakers = [
    {
      id: 0,
      name: "Dr. Michael Stewart",
      company: "M12",
      title: "Managing Partner",
      linkedin: "https://www.linkedin.com/in/mpstewart/",
      twitter: "https://twitter.com/mps_vc",
      website: "",
      image:
        "https://media.licdn.com/dms/image/C5603AQF2cSbpBB-G6A/profile-displayphoto-shrink_800_800/0/1632855976629?e=1724889600&v=beta&t=s6RR97d8L1lgThuIGfUtWriMMSbbhS4GK9KUqX-vbl8",
      bio: "Michael Stewart is the Managing Partner at M12, where he spearheads investment theses in generative AI, gaming, web3, and other deep technology domains. Holding both a PhD and an MBA, Michael brings over two decades of expertise in semiconductor and hard technology products, as well as in investment. His career is distinguished by his roles in founding two startups and securing over 40 patents, marking him as a leading figure in the field of technology innovation and venture capital.",
    },
    {
      id: 1,
      name: "Dr. Michael Stewart",
      company: "M12",
      title: "Managing Partner",
      linkedin: "https://www.linkedin.com/in/mpstewart/",
      twitter: "https://twitter.com/mps_vc",
      website: "",
      image:
        "https://media.licdn.com/dms/image/C5603AQF2cSbpBB-G6A/profile-displayphoto-shrink_800_800/0/1632855976629?e=1724889600&v=beta&t=s6RR97d8L1lgThuIGfUtWriMMSbbhS4GK9KUqX-vbl8",
      bio: "Michael Stewart is the Managing Partner at M12, where he spearheads investment theses in generative AI, gaming, web3, and other deep technology domains. Holding both a PhD and an MBA, Michael brings over two decades of expertise in semiconductor and hard technology products, as well as in investment. His career is distinguished by his roles in founding two startups and securing over 40 patents, marking him as a leading figure in the field of technology innovation and venture capital.",
    },
    {
      id: 2,
      name: "Dr. Michael Stewart",
      company: "M12",
      title: "Managing Partner",
      linkedin: "https://www.linkedin.com/in/mpstewart/",
      twitter: "https://twitter.com/mps_vc",
      website: "",
      image:
        "https://media.licdn.com/dms/image/C5603AQF2cSbpBB-G6A/profile-displayphoto-shrink_800_800/0/1632855976629?e=1724889600&v=beta&t=s6RR97d8L1lgThuIGfUtWriMMSbbhS4GK9KUqX-vbl8",
      bio: "Michael Stewart is the Managing Partner at M12, where he spearheads investment theses in generative AI, gaming, web3, and other deep technology domains. Holding both a PhD and an MBA, Michael brings over two decades of expertise in semiconductor and hard technology products, as well as in investment. His career is distinguished by his roles in founding two startups and securing over 40 patents, marking him as a leading figure in the field of technology innovation and venture capital.",
    },
    {
      id: 3,
      name: "Dr. Michael Stewart",
      company: "M12",
      title: "Managing Partner",
      linkedin: "https://www.linkedin.com/in/mpstewart/",
      twitter: "https://twitter.com/mps_vc",
      website: "",
      image:
        "https://media.licdn.com/dms/image/C5603AQF2cSbpBB-G6A/profile-displayphoto-shrink_800_800/0/1632855976629?e=1724889600&v=beta&t=s6RR97d8L1lgThuIGfUtWriMMSbbhS4GK9KUqX-vbl8",
      bio: "Michael Stewart is the Managing Partner at M12, where he spearheads investment theses in generative AI, gaming, web3, and other deep technology domains. Holding both a PhD and an MBA, Michael brings over two decades of expertise in semiconductor and hard technology products, as well as in investment. His career is distinguished by his roles in founding two startups and securing over 40 patents, marking him as a leading figure in the field of technology innovation and venture capital.",
    },
    {
      id: 4,
      name: "Dr. Michael Stewart",
      company: "M12",
      title: "Managing Partner",
      linkedin: "https://www.linkedin.com/in/mpstewart/",
      twitter: "https://twitter.com/mps_vc",
      website: "",
      image:
        "https://media.licdn.com/dms/image/C5603AQF2cSbpBB-G6A/profile-displayphoto-shrink_800_800/0/1632855976629?e=1724889600&v=beta&t=s6RR97d8L1lgThuIGfUtWriMMSbbhS4GK9KUqX-vbl8",
      bio: "Michael Stewart is the Managing Partner at M12, where he spearheads investment theses in generative AI, gaming, web3, and other deep technology domains. Holding both a PhD and an MBA, Michael brings over two decades of expertise in semiconductor and hard technology products, as well as in investment. His career is distinguished by his roles in founding two startups and securing over 40 patents, marking him as a leading figure in the field of technology innovation and venture capital.",
    },
    {
      id: 5,
      name: "Dr. Michael Stewart",
      company: "M12",
      title: "Managing Partner",
      linkedin: "https://www.linkedin.com/in/mpstewart/",
      twitter: "https://twitter.com/mps_vc",
      website: "",
      image:
        "https://media.licdn.com/dms/image/C5603AQF2cSbpBB-G6A/profile-displayphoto-shrink_800_800/0/1632855976629?e=1724889600&v=beta&t=s6RR97d8L1lgThuIGfUtWriMMSbbhS4GK9KUqX-vbl8",
      bio: "Michael Stewart is the Managing Partner at M12, where he spearheads investment theses in generative AI, gaming, web3, and other deep technology domains. Holding both a PhD and an MBA, Michael brings over two decades of expertise in semiconductor and hard technology products, as well as in investment. His career is distinguished by his roles in founding two startups and securing over 40 patents, marking him as a leading figure in the field of technology innovation and venture capital.",
    },
    {
      id: 6,
      name: "Dr. Michael Stewart",
      company: "M12",
      title: "Managing Partner",
      linkedin: "https://www.linkedin.com/in/mpstewart/",
      twitter: "https://twitter.com/mps_vc",
      website: "",
      image:
        "https://media.licdn.com/dms/image/C5603AQF2cSbpBB-G6A/profile-displayphoto-shrink_800_800/0/1632855976629?e=1724889600&v=beta&t=s6RR97d8L1lgThuIGfUtWriMMSbbhS4GK9KUqX-vbl8",
      bio: "Michael Stewart is the Managing Partner at M12, where he spearheads investment theses in generative AI, gaming, web3, and other deep technology domains. Holding both a PhD and an MBA, Michael brings over two decades of expertise in semiconductor and hard technology products, as well as in investment. His career is distinguished by his roles in founding two startups and securing over 40 patents, marking him as a leading figure in the field of technology innovation and venture capital.",
    },
    {
      id: 7,
      name: "Dr. Michael Stewart",
      company: "M12",
      title: "Managing Partner",
      linkedin: "https://www.linkedin.com/in/mpstewart/",
      twitter: "https://twitter.com/mps_vc",
      website: "",
      image:
        "https://media.licdn.com/dms/image/C5603AQF2cSbpBB-G6A/profile-displayphoto-shrink_800_800/0/1632855976629?e=1724889600&v=beta&t=s6RR97d8L1lgThuIGfUtWriMMSbbhS4GK9KUqX-vbl8",
      bio: "Michael Stewart is the Managing Partner at M12, where he spearheads investment theses in generative AI, gaming, web3, and other deep technology domains. Holding both a PhD and an MBA, Michael brings over two decades of expertise in semiconductor and hard technology products, as well as in investment. His career is distinguished by his roles in founding two startups and securing over 40 patents, marking him as a leading figure in the field of technology innovation and venture capital.",
    },
  ];
  return speakers;
};

export default Speakers;
