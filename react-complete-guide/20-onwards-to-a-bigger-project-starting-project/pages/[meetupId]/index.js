import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import HeadTag from "../../components/headTag/HeadTag";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetailPage = (props) => {
  return (
    <Fragment>
      <HeadTag
        title={props.meetupData.title}
        content={props.meetupData.description}
      />
      <MeetupDetail
        title={props.meetupData.title}
        image={props.meetupData.image}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://Kotaro:NRR3uEg0mLty6H3P@cluster0.mplxn.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  // fetch data for a single meetup

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://Kotaro:NRR3uEg0mLty6H3P@cluster0.mplxn.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export default MeetupDetailPage;
