import { useState } from "react";
import { UserInfoList } from "./UserInfoList";
import s from "./UserMainInfo.module.css";
import { getAge } from "../../../utils/getAge";
import { UserInfoText } from "./UserInfoText/UserInfoText";

export const UserMainInfo = ({ user }) => {
  return (
    <section className={s.userMainInfo}>
      <UserInfoList
        listItem={{
          Age: getAge(user.birthdate),
          Location: user.city,
          Occupation: user.jobDescriptor,
          Profile: user.jobArea,
        }}
        listTitle={"Demographic"}
        listTitleLogo="◎"
      />
      <UserInfoText infoText={user.loremText} />
      <UserInfoList
        listItem={{
          Product: user.product,
          Adjective: user.productAdjective,
          Material: user.productMaterial,
          Description: user.productDescription,
        }}
        listTitle={"Product"}
        listTitleLogo="◎"
      />

      <UserInfoList
        listItem={{
          Company: user.companyName,
          Occupation: user.jobType,
          Area: user.jobArea,
          Description: user.jobTitle,
          Phrase: user.companyCatchPhrase,
        }}
        listTitleLogo="✓"
        listTitle="Job"
      />
    </section>
  );
};
