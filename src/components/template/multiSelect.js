import { useSelector,useDispatch } from "react-redux";
import { selectTemplate, removeLabelItem } from "../../redux/slices/templateSlice";

export default function MultiSelect(props) {

  const template = useSelector(selectTemplate)
  const buttons = template[props.sectionIdx].labels[props.labelIdx].items[props.Idx].value
  const multiSelectContents = buttons.split("|");
  const dispatch = useDispatch();

  let selectedValue = new Array(multiSelectContents.length)
  
  //FUNCTION FOR WHEN A VALUE IS SELECTED

  function onChecked(e) {
    if (e.target.checked) {
        console.log("yes")
        selectedValue[e.target.value] = multiSelectContents[e.target.value]
      }
    else {
        console.log("No")
        selectedValue[e.target.value] = ''
      }
  }

  //FUNCTION FOR ADDING NOTE

  function onAdded() {
    let addedNote = [] 
    selectedValue.map((VALUE) => {
        if(VALUE!=='') addedNote.push(VALUE)
    })
    addedNote = addedNote.join()
    dispatch(removeLabelItem({ section: props.sectionIdx, label : props.labelIdx, item : props.Idx, value: addedNote}))
  }

  //RENDERING MULTISELECT BUTTONS

  function MultiSelectButtons() {
    return (
      <div
        class="btn-group"
        role="group"
        aria-label="Basic checkbox toggle button group"
      >
        {multiSelectContents.map((multiSelectContent, index, full) => {
          if (full[index] !== "")
            return (
              <>
                <input
                  key={index}
                  type="checkbox"
                  class="btn-check"
                  autocomplete="off"
                  id={`${props.sectionIdx}${props.labelIdx}${props.Idx}${index}`}
                  value={index}
                  onChange={e=>onChecked(e)}
                />
                <label
                  class="btn btn-outline-primary btn-sm mx-1 rounded"
                  htmlFor={`${props.sectionIdx}${props.labelIdx}${props.Idx}${index}`}
                >
                  {multiSelectContent}
                </label>
              </>
            );
        })}
      </div>
    );
  }

  //MODAL RENDERING FOR MULTISELECT OPTIONS
  return (
    <div contentEditable="false" suppressContentEditableWarning="true">
      <button
        type="button"
        class="btn btn-outline-primary btn-sm mx-2 rounded"
        data-bs-toggle="modal"
        data-bs-target={`#staticBackdrop${props.sectionIdx}${props.labelIdx}${props.Idx}`}
      ><span class="SelectButton">Select</span >
      </button>
      <div
        class="modal fade"
        id={`staticBackdrop${props.sectionIdx}${props.labelIdx}${props.Idx}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Select one or more notes to insert
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex">
              <MultiSelectButtons/>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={onAdded}
              >
                Add Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
