
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGithubData, selectPortfolioList, selectLoadingState } from "../DataSlice/githubSlice";
import Projects from "./Projects";
import LoadingPage from "../../components/LoadingPage";

const MainPage = () => {

  const dispatch = useDispatch();
  const mainPage = useSelector(selectPortfolioList);

  useEffect(() => {
    dispatch(fetchGithubData());
  }, []);

  let returned = "";

  switch (mainPage.ifLoading) {
    case "loading":
      returned = (
<LoadingPage />
      );
      break;
    case "success":
      returned = (
        <>
     <Projects projects={mainPage.portfolioList}/>
     </>
      );
      break;
    default:
        console.log(mainPage.ifLoading);
        returned = <p>error! error! error! error! error! error!</p>;
      //returned = <ErrorPage />;
  }

  return returned;

};

export default MainPage;
