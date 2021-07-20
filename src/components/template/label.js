import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeLabel, selectTemplate } from "../../redux/slices/templateSlice";
import ButtonGroup from "./buttonGroup";
import Multiselect from "./multiSelect";

export default function Label(props) {

  const template = useSelector(selectTemplate)
  const labelContents = template[props.sectionIdx].labels[props.Idx];
  const dispatch = useDispatch();
  
  //FUNCTION FOR DELETING A LABEL
  const [style,setStyle] = useState({
    display:"none"
  })
  
  function hover()
  {
    setStyle({
      display: "block"
    })
  }
  
  function leave()
  {
    setStyle({
      display:"none"
    })
  }

  function deleteLabel()
  {
    dispatch(removeLabel({section: props.sectionIdx , label: props.Idx}))
  }
  

  return (
    <li className="list-group-item d-flex align-items-center border-0 ps-0" onMouseOver={hover} onMouseLeave={leave}>
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        onClick={deleteLabel}
        style={style}
      ></button>
      
    {/* RENDERING LABEL ITEMS */}
      {labelContents.items.map((labelContent, index) => {
        if (labelContent.type === "text") return <span className="me-1">{ labelContent.value }</span>;
        else if (labelContent.type === "button")
          if (labelContent.status === true) return <ButtonGroup key={index} content={labelContent.value} Idx={index} sectionIdx={props.sectionIdx} labelIdx={props.Idx} />
          else return <span className="me-1">{labelContent.value}</span>
        else if (labelContent.type === "multiselect")
          if(labelContent.status === true) return <Multiselect key={index} content={labelContent.value} Idx={index} sectionIdx={props.sectionIdx} labelIdx={props.Idx} />
          else return <span className="me-1">{labelContent.value}</span>
      })}

    </li>
  );
}
