import React, { useState } from "react";
import TextInput from "./../../components/textInput";
import { styles } from "./styles";
import { translate as ts } from "../../core/i18n/translate";
import { constanst } from "../../constants";
const RADIO_DATA = constanst.stories;
const SearchHeader: React.FC = () => {
  const [search, setSearch] = useState("");
  const [radioVal, setRadioVal] = useState(RADIO_DATA[0]);
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

  return (
    <div style={styles.searchWrapper}>
      <div style={styles.search}>
        <TextInput
          onChange={(x: any, y: any) => {
            // setVal(y);
          }}
          name={"text"}
          type="text"
          value={""}
          placeholder={ts("SEARCH_PLACEHOLDER")}
        />
      </div>
      <div style={styles.radio}>{radioJSX}</div>
    </div>
  );
};
export default SearchHeader;
