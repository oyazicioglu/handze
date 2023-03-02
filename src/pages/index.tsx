import { Button } from "@/component/ui/button/Button";
import { PropsBase } from "@/lib/PropsBase";

export default function Home(props: PropsBase) {
  return (
    <>
      <Button color="primary" >Button</Button>
      {props.children}
    </>
  )
}
