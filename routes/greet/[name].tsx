import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  console.log("searchParams>>>", props.url.searchParams.get("filtered"));
  return <div>Hello {props.params.name}</div>;
}
