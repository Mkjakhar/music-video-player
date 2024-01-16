import firstSong from "../../assets/audio/Softly-Karan-Aujla.mp3";
import secondSong from "../../assets/audio/Jee-Ni-Lagda-Karan-Aujla.mp3";
import thirdSong from "../../assets/audio/Bachke-Bachke-Karan-Aujla.mp3";
import fourthSong from "../../assets/audio/sample-9s.mp3";
import fiveSong from "../../assets/audio/Kinni-Kinni-Diljit-Dosanjh.mp3";
import sixSong from "../../assets/audio/Jaatta Ka Chhora.mp3";
import aujlaImg from "../../assets/images/aujla.jpg";

interface SongsDataType {
  title: string;
  url: string;
  id: string;
  img: string;
  artist?: string;
  progress?: number;
  length?: number;
}
export const songsData: SongsDataType[] = [
  {
    id: "1",
    img: aujlaImg,
    title: "Softly",
    artist: "Karan Aujla",
    url: firstSong,
  },
  {
    id: "2",
    img: aujlaImg,
    title: "Jee Ni Lagda",
    artist: "Karan Aujla",
    url: secondSong,
  },
  {
    id: "3",
    img: "https://cdn.jattpendu.com/thumbmed/4969.jpg",
    title: "Kinni Kinni",
    artist: "Diljit Dosanjh",
    url: fiveSong,
  },
  {
    id: "4",
    img: aujlaImg,
    title: "Bachke Bachke",
    artist: "Karan Aujla",
    url: thirdSong,
  },
  {
    id: "5",
    img: "https://t4.ftcdn.net/jpg/01/43/42/83/360_F_143428338_gcxw3Jcd0tJpkvvb53pfEztwtU9sxsgT.jpg",
    title: "sample",
    artist: "Unknown",
    url: fourthSong,
  },
  {
    id: "6",
    img: "https://cdn.jattpendu.com/thumbmed/4969.jpg",
    title: "Kinni Kinni",
    artist: "Diljit Dosanjh",
    url: fiveSong,
  },
  {
    id: "7",
    img: "https://c.saavncdn.com/641/Something-Something-Punjabi-2006-20230707133237-500x500.jpg",
    title: "Jaatta Ka Chhora",
    artist: "Mika Singh",
    url: sixSong,
  },
];
