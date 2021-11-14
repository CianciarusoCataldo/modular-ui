import { useDispatch } from "react-redux";
import { openModal } from "api/state-slices/modal/actions";
import { Page } from "modular-ui-preview";

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <Page>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <button
          className="px-5 text-lg mx-5 mt-3 lg:my-auto xl:my-auto 2xl:my-auto 3xl:my-auto 4xl:my-auto py-3 rounded-md focus:outline-none hover:text-blue-400 bg-gradient-to-r from-white to-gray-200"
          onClick={() => dispatch(openModal("EMPTY"))}
        >
          {"Open modal"}
        </button>
      </div>
    </Page>
  );
};

export default HomePage;
