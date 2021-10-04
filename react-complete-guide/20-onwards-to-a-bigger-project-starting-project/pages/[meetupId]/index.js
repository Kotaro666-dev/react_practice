import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetailPage = (props) => {
  return (
    <MeetupDetail
      title={props.meetupData.title}
      src={props.meetupData.src}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "First meetup",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/1024px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
        address: "Some address",
        description: "This is a first meetup",
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export default MeetupDetailPage;
