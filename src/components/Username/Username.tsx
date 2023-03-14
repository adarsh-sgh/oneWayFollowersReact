import "Username.scss";
import AnchorLink from "antd/es/anchor/AnchorLink";
export default function Username(id: string) {
  return (
    <AnchorLink href={`https://github.com/${id}`} title={id} target="_blank" />
  );
}
