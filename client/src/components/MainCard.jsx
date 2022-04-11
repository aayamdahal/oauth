import React from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { Link } from "react-router-dom";

const MainCard = ({ post }) => {
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <div>
      <Link to={`/post/${post.id}`}>
        <div style={{ width: 340, margin: "auto" }}>
          <Card shadow="sm" p="lg">
            <Card.Section>
              <Image src={post.img} height={160} />
            </Card.Section>

            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>{post.title}</Text>
              <Badge color="pink" variant="light">
                {post.id}
              </Badge>
            </Group>

            <Text
              size="sm"
              style={{
                color: secondaryColor,
                lineHeight: 1.5,
                marginBottom: "1rem",
              }}
            >
              {post.desc}
            </Text>
            <Button variant="light" color="violet" size="md">
              Read More
            </Button>
          </Card>
        </div>
      </Link>
    </div>
  );
};

export default MainCard;
