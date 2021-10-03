import { useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/1024px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
    address: "Some address",
    descripton: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/1024px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
    address: "Some address",
    descripton: "This is a second meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
