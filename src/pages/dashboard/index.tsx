import React from "react";
import { styles } from "./styles";
import { translate as ts } from "../../core/i18n/translate";
import SearchHeader from "./searchHeader";
const Dashboard: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{ts("HEADER_TITLE")}</h1>
      <SearchHeader />
    </div>
  );
};
export default Dashboard;
