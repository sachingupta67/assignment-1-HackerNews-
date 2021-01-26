import React, { useState } from "react";
import SearchHeader from "./searchHeader";
import ResultList from "./resultList";
import { useSelector } from "react-redux";
import { styles } from "./styles";
import { translate as ts } from "../../core/i18n/translate";
import { commonSelector } from "../../core/redux/selectors";
import Profile from "./profile";
const Dashboard: React.FC = () => {
  const { result } = useSelector(commonSelector);
  const [showResult, setShowResult] = useState(true);
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{ts("HEADER_TITLE")}</h1>
      {showResult ? (
        <SearchHeader />
      ) : (
        <Profile toggleHandler={setShowResult} />
      )}
      {showResult ? (
        <ResultList data={result} toggleHandler={setShowResult} />
      ) : null}
    </div>
  );
};
export default Dashboard;
