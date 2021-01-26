import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showTimeLikeAgo } from "../../utility";
import { getProfile } from "../../core/redux/actions";
import { commonSelector } from "../../core/redux/selectors";
import { translate as ts } from "../../core/i18n/translate";
import { styles } from "./styles";
interface Props {
  data: Array<object>;
  toggleHandler: any;
}
const ResultList: React.FC<Props> = ({ data, toggleHandler }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(commonSelector);
  const listJSX = data.map((item: any, i: number) => (
    <div
      style={styles.listContainer}
      key={item.id}
      onClick={() => {
        dispatch(getProfile(item.by));
        toggleHandler(false);
      }}
    >
      <h4 style={styles.listTitle}>{`${i + 1}. ${item.title}`}</h4>
      <h6 style={styles.listSubTitle}>
        {item.score} points by {item.by} {showTimeLikeAgo(item.time)} | 25
        comments
      </h6>
    </div>
  ));
  return (
    <> {isLoading ? ts("LOADING") : data.length ? listJSX : ts("NO_DATA")}</>
  );
};
export default ResultList;
