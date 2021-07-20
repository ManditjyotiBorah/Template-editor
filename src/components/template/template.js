import { useSelector } from "react-redux";
import { selectTemplate } from "../../redux/slices/templateSlice";

import Section from "./section";

export default function TemplateEditor(props) {
  const template = useSelector(selectTemplate)
  return (
    <>
      {
        template.map((section,index) => {
          if(section.status===true) return <Section key={index} Idx={index}/>
        })
      }
    </>
  );
}
