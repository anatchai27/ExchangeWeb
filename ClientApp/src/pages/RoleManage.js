import React from "react";
import { RoleList } from "../components/roleList/RoleList";
import { InitRoleData } from "../initDataApp/roleData/InitRoleData";
import { PageHeder } from "../components/pageHeader/PageHeder";

export const RoleManage = () => {
  return (
    <>
      <div className="col-lg-12">
        <PageHeder
          pageHeaderName={"Role Management"}
          BtnName={"create role"}
          showButtonHeader={true}
        />
      </div>
      <div className="row">
        {InitRoleData.map((obj, index) => (
          <RoleList
            roleName={obj.roleName}
            key={index}
            description={obj.description}
          />
        ))}
      </div>
    </>
  );
};
