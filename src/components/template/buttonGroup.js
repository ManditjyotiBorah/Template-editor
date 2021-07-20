import { useSelector,useDispatch } from "react-redux";
import { selectTemplate,removeLabelItem } from "../../redux/slices/templateSlice";

export default function ButtonGroup(props) {

  const template = useSelector(selectTemplate)
  const buttons = template[props.sectionIdx].labels[props.labelIdx].items[props.Idx].value
  const buttonContents = buttons.split("|");
  const dispatch = useDispatch();

  //BUTTON COMPONENT

  function Button(props) {

    function setValue() {
      dispatch(removeLabelItem({ section: props.sectionIdx, label : props.labelIdx, item : props.itemIdx, value: props.value}))
    }

    return (
      <button type="submit" class="btn btn-outline-primary btn-sm mx-1 rounded" onClick={setValue}>
        {props.value}
      </button>
    );
  }


  //RENDERING GROUP OF BUTTONS

  return (
    <div
      class="btn-group mx-2"
      role="group"
      aria-label="Basic outlined example"
      contentEditable="false"
      suppressContentEditableWarning="true"
    >

      {buttonContents.map((buttonContent, index,full) => {
        if (full[index] !== '') return <Button key={index} value={buttonContent} itemIdx={props.Idx} sectionIdx={props.sectionIdx} labelIdx= {props.labelIdx} />;
      })}

    </div>
  );
}
