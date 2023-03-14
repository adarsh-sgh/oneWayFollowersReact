import { Button, Input } from "antd";
import { useEffect, useId, useState } from "react";
import { oneWayFollowers } from "../../utils/getFollowers";

type InputUsernameProps = {
  setOnlyFollower: (value: any[]) => void;
  setOnlyFollowing: (value: any[]) => void;
};
export default function InputUsername({
  setOnlyFollower,
  setOnlyFollowing,
}: InputUsernameProps) {
  const [userId, setUserId] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!userId) return;
    setLoading(true);
    oneWayFollowers(userId)
      .then(({ onlyFollowers, onlyFollowing }) => {
        console.log(onlyFollowers, onlyFollowing);
        setOnlyFollower(onlyFollowers);
        setOnlyFollowing(onlyFollowing);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId]);
  return (
    <Input.Group compact>
      <Input
        style={{ width: "calc(100% - 200px)" }}
        defaultValue={inputValue}
        placeholder="Github User ID"
        onChange={e => {
          setInputValue(e.target.value);
        }}
      />
      <Button
        type="primary"
        onClick={() => {
          setUserId(inputValue);
        }}
        loading={loading}
      >
        Submit
      </Button>
    </Input.Group>
  );
}
