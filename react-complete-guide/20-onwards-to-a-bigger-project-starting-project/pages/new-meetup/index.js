import { useRouter } from "next/router";
import { Fragment } from "react";
import HeadTag from "../../components/headTag/HeadTag";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (meetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meetupData),
    });

    const data = await response.json();

    console.log(data);

    router.replace("/");
  };

  return (
    <Fragment>
      <HeadTag
        title="Add a New Meetup"
        content="Add your own meetups and create amazing networking opportunities."
      />
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetupPage;
