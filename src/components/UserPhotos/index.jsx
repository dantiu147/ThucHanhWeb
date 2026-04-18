import React from "react";
import {
  CardMedia,
  Typography,
  ListItem,
  List,
  Card,
  CardHeader,
  Divider,
  CardContent,
} from "@mui/material";

import "./styles.css";
import { Link, useParams } from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);
  // vừa thử
  return (
    <div className="user-photos-container">
      {photos.map((photo) => (
        <Card key={photo._id} style={{ marginBottom: "20px" }}>
          {/* 1. Thông tin ảnh: Ngày giờ đăng */}
          <CardHeader
            title={`Posted on: ${new Date(photo.date_time).toLocaleString()}`}
          />

          {/* 2. Hiển thị ảnh */}
          <CardMedia
            component="img"
            image={`/images/${photo.file_name}`}
            alt={`Photo by ${userId}`}
            style={{ width: "100%", height: "auto" }}
          />

          <CardContent>
            <Typography variant="h6">Comments:</Typography>
            <Divider />

            {/* 3. Danh sách Comment */}
            <List>
              {photo.comments && photo.comments.length > 0 ? (
                photo.comments.map((comment) => (
                  <ListItem
                    key={comment._id}
                    alignItems="flex-start"
                    style={{ flexDirection: "column" }}
                  >
                    <Typography variant="subtitle2">
                      {/* Link dẫn tới UserDetail của người comment */}
                      <Link to={`/users/${comment.user._id}`}>
                        {comment.user.first_name} {comment.user.last_name}
                      </Link>
                      <span style={{ color: "gray", marginLeft: "10px" }}>
                        {new Date(comment.date_time).toLocaleString()}
                      </span>
                    </Typography>

                    <Typography variant="body2" style={{ marginTop: "5px" }}>
                      {comment.comment}
                    </Typography>
                    <Divider
                      variant="fullWidth"
                      style={{ width: "100%", marginTop: "10px" }}
                    />
                  </ListItem>
                ))
              ) : (
                <Typography variant="body2" color="textSecondary">
                  No comments yet.
                </Typography>
              )}
            </List>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;
