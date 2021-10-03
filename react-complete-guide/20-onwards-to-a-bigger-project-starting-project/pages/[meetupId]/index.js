import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetailPage = () => {
  return (
    <MeetupDetail
      title="First meetup"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/1024px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG"
      address="Some address"
      description="This is a first meetup"
    />
  );
};

export default MeetupDetailPage;
