import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSection, selectTemplate } from "../../redux/slices/templateSlice";

import Label from "./label";

export default function Section(props) {

  const template = useSelector(selectTemplate);
  const labels = template[props.Idx];
  const dispatch = useDispatch();
  
  const [style,setStyle] = useState({
    display:"none"
  })

  function deleteSection() {
    dispatch(removeSection({section: props.Idx}))
  }
  
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

  return (
    <div className="card m-2 p-4">
      <div className="card-header h4 bg-white border-0 ps-0 fw-bolder" onMouseOver={hover} onMouseLeave={leave}>
        {template[props.Idx].name}
        <button type="button" class="btn-close" aria-label="Close" onClick={deleteSection} style={style} ></button>
      </div>
      <div contentEditable suppressContentEditableWarning >
        <ul className="list-group list-group-flush">

          {/* {EXTRACTING LABELS FROM SECTION} */}
          
          {labels.labels.map((label, index) => {
            if (label.status === true)
              return <Label key={index} sectionIdx={props.Idx} Idx={index} />;
          })}

        </ul>
      </div>
    </div>
  );
}
