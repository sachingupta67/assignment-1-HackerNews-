import React, { useCallback, useEffect, useState } from "react";
import TextInput from "./../../components/textInput";
import { styles } from "./styles";
import { translate as ts } from "../../core/i18n/translate";
import { constanst } from "../../constants";
import {
  getShowNews,
  getAskNews,
  getTopNews,
  getJobNews,
  seachFilterAction,
} from "../../core/redux/actions";
import { commonSelector } from "../../core/redux/selectors";
import { useDispatch, useSelector } from "react-redux";
const RADIO_DATA = constanst.stories;
const SearchHeader: React.FC = () => {
  const [search, setSearch] = useState("");
  const [radioVal, setRadioVal] = useState(RADIO_DATA[0]);
  const { result } = useSelector(commonSelector);
  const dispatch = useDispatch();
  const newsHandler = useCallback(() => {
    const { id } = radioVal;
    if (id === 1) {
      dispatch(getTopNews());
    }
    if (id === 2) {
      dispatch(getAskNews());
    }
    if (id === 3) {
      dispatch(getShowNews());
    }
    if (id === 4) {
      dispatch(getJobNews());
    }
  }, [radioVal.id]);
  useEffect(() => {
    dispatch(getTopNews());
  }, []);
  useEffect(() => {
    newsHandler();
  }, [radioVal.id]);
  const radioJSX = RADIO_DATA.map((item) => (
    <TextInput
      key={item.id}
      type={"radio"}
      onChange={(_name: string, _value: any) => setRadioVal(item)}
      checked={item.id === radioVal.id}
      name={item.label}
      label={item.label}
      style={{ width: "10%" }}
    />
  ));

  const searchHandler = (val: string) => {
    setSearch(val);
    // let data = result.filter((item: any) =>
    //   item.title.toLowerCase().match(val.toLowerCase())
    // );
    // dispatch(seachFilterAction(data));
  };

  return (
    <div style={styles.searchWrapper}>
      <div style={styles.search}>
        <TextInput
          onChange={(_name: any, value: any) => {
            searchHandler(value);
          }}
          name={"search"}
          type="text"
          value={search}
          placeholder={ts("SEARCH_PLACEHOLDER")}
        />
      </div>
      <div style={styles.radio}>{radioJSX}</div>
    </div>
  );
};
export default SearchHeader;
