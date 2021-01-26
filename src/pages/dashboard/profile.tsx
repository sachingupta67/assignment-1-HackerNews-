import React from "react";
import { useSelector } from "react-redux";
import { commonSelector } from "../../core/redux/selectors";
import { dateFormatChange } from "../../utility";
import { styles } from "./styles";
import { translate as ts } from "../../core/i18n/translate";
interface Props {
  toggleHandler: any;
}

const Profile: React.FC<Props> = ({ toggleHandler }) => {
  const { profile, isLoading }: any = useSelector(commonSelector);
  return (
    <div style={styles.profileContainer}>
      <h4 onClick={() => toggleHandler(true)}>{ts("BACK")}</h4>
      {isLoading ? (
        ts("LOADING")
      ) : (
        <>
          <h3>{ts("USER_PROFILE")}</h3>
          <div style={styles.profileDetails}>
            <table>
              <tbody>
                <tr>
                  <td>{ts("USER")}: </td>
                  <td>{profile.id || `-`}</td>
                </tr>
                <tr>
                  <td>{ts("CREATED")}: </td>
                  <td>
                    <strong> {dateFormatChange(profile.created) || `-`}</strong>
                  </td>
                </tr>
                <tr>
                  <td>{ts("KARMA")}: </td>
                  <td>{profile.karma || `-`}</td>
                </tr>
                <tr>
                  <td>{ts("ABOUT")}: </td>
                  <td>{profile.about || `-`}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};
export default Profile;
