import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";
import HeadTag from "../components/headTag/HeadTag";
import { Fragment } from "react";

const HomePage = (props) => {
  return (
    <Fragment>
      <HeadTag
        ttile="React Meetups"
        content="Browse a mega list of our meetups"
      />
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

// export async function getServerSideProps(context) {
//   const request = context.req;
//   const response = context.res;

//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps(context) {
  const client = await MongoClient.connect(
    "mongodb+srv://Kotaro:NRR3uEg0mLty6H3P@cluster0.mplxn.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        descripton: meetup.description,
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
