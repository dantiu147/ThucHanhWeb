import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import "./styles.css";
import models from "../../modelData/models";
import { Link} from "react-router-dom";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList () {
    const users = models.userListModel();
    return (
      <div>
        <Typography variant="body1">
          User lists:
        </Typography>
        <List component="nav">
          {users.map((item) => (
            <>
              <ListItem>
                <Link to={`/users/${item._id}`} style={{ padding: 5 }}>
                      <ListItemText primary={item.first_name}/>
                </Link>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </div>
    );
}

export default UserList;
