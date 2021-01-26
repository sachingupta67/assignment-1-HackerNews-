import { colors } from "../../theme";
const { BLACK, GRAY } = colors;
export const styles = {
  container: {
    width: "100%",
    borderTop: `1px solid ${BLACK}`,
  },
  title: {
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: "1%",
    borderBottom: `1px solid ${BLACK}`,
  },
  searchWrapper: {
    justifyContent: "space-around",
    display: "flex",
  },
  search: {
    width: "60%",
  },
  radio: {
    width: "30%",
  },
  profileContainer: {
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  profileDetails: {
    color: GRAY,
  },
  listContainer: {
    paddingRight: "3%",
    paddingLeft: "3%",
  },
  listTitle: { marginBottom: 5 },
  listSubTitle: { color: GRAY, margin: 0 },
};
