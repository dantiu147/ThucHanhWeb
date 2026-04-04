import React from "react";
import {Typography} from "@mui/material";

import "./styles.css";
import {Link, useParams} from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
    const { userId } = useParams();
    const user = models.userModel(userId);

    return (
        <>
          <Typography variant="body1">
            {`Name: ${user.first_name} ${user.last_name}`}
            <br/>
            {`Location: ${user.location}`}
            <br/>
            {`Description: ${user.description}`}
            <br/>
            {`Occupation: ${user.occupation}`}
            <br/>
            <Link to={`/photos/${user._id}`} style={{ padding: 5 }}>
              {`${user.first_name} ${user.last_name}'s photos`}
            </Link>
          </Typography>
        </>
    );
}

export default UserDetail;
