import { Footer, AboutUs, FooterApp, Separator } from "@/components";
import { BasicLayout } from "../../layouts";

export default function AboutHome() {
  return (
    <>
      <BasicLayout>      
        <AboutUs />
        <FooterApp />   
      </BasicLayout>
    </>
  );
}
