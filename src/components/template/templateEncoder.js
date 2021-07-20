export default function TemplateEncoder(props) {
    const code = props
    // let code = `<div class="card m-2 p-4"><div class="card-header h4 bg-white border-0 ps-0 fw-bolder">Filling Appointment<button type="button" class="btn-close" aria-label="Close"></button></div><div contenteditable="true"><ul class="list-group list-group-flush"><li class="list-group-item d-flex align-items-center border-0 ps-0"><button type="button" class="btn-close" aria-label="Close"></button><span class="me-1">Pt C/O:</span><span class="me-1">Other</span></li><li class="list-group-item d-flex align-items-center border-0 ps-0"><button type="button" class="btn-close" aria-label="Close"></button><span class="me-1">MH checked:</span><span class="me-1">Other</span></li><li class="list-group-item d-flex align-items-center border-0 ps-0"><button type="button" class="btn-close" aria-label="Close"></button><span class="me-1">Risks and complications explained:</span><span class="me-1">Minimal risk due to small restoration,Post operative sensitivity,Fracture of remaining tooth</span></li><li class="list-group-item d-flex align-items-center border-0 ps-0"><button type="button" class="btn-close" aria-label="Close"></button><span class="me-1">VCG to proceed</span></li></ul></div></div><div class="card m-2 p-4"><div class="card-header h4 bg-white border-0 ps-0 fw-bolder">LA<button type="button" class="btn-close" aria-label="Close"></button></div><div contenteditable="true"><ul class="list-group list-group-flush"><li class="list-group-item d-flex align-items-center border-0 ps-0"><button type="button" class="btn-close" aria-label="Close"></button><span class="me-1">IANB</span></li></ul></div></div><div class="card m-2 p-4"><div class="card-header h4 bg-white border-0 ps-0 fw-bolder">Treatment<button type="button" class="btn-close" aria-label="Close"></button></div><div contenteditable="true"><ul class="list-group list-group-flush"><li class="list-group-item d-flex align-items-center border-0 ps-0"><button type="button" class="btn-close" aria-label="Close"></button><span class="me-1">Restoration of</span><span class="me-1">Nil</span></li><li class="list-group-item d-flex align-items-center border-0 ps-0"><button type="button" class="btn-close" aria-label="Close"></button><span class="me-1">Old restoration removed with high speed diamond</span></li><li class="list-group-item d-flex align-items-center border-0 ps-0"><button type="button" class="btn-close" aria-label="Close"></button><span class="me-1">Caries free cavity</span></li><li class="list-group-item d-flex align-items-center border-0 ps-0"><button type="button" class="btn-close" aria-label="Close"></button><span class="me-1">Cavity liner/base</span><span class="me-1">not required</span></li><li class="list-group-item d-flex align-items-center border-0 ps-0"><button type="button" class="btn-close" aria-label="Close"></button><span class="me-1">GIC</span><span class="me-1">restoration</span></li></ul></div></div><div class="card m-2 p-4"><div class="card-header h4 bg-white border-0 ps-0 fw-bolder">Post-op Discussion<button type="button" class="btn-close" aria-label="Close"></button></div><div contenteditable="true"><ul class="list-group list-group-flush"><li class="list-group-item d-flex align-items-center border-0 ps-0"><button type="button" class="btn-close" aria-label="Close"></button><span class="me-1">Patient advised to return&nbsp; &nbsp; &nbsp; &nbsp;if there are any problems&nbsp; &nbsp; &nbsp;&nbsp;</span></li></ul></div></div>`     
    const section = '<div class="card-header h4 bg-white border-0 ps-0 fw-bolder">' ;
    const label = '<li class="list-group-item d-flex align-items-center border-0 ps-0">';
    const text = '<span class="me-1">';
    const button = '<div class="btn-group mx-2" role="group" aria-label="Basic outlined example" contenteditable="false">'
    const multiselect = '<div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">';
    const esc1 = '<span class="SelectButton">';
    const esc2 = '<h5 class="modal-title" id="staticBackdropLabel">';
    const esc3 = '<button type="button" class="btn btn-primary" data-bs-dismiss="modal">';

    let sections = [];

    code = code.replace('</span><span class="me-1">',' ')

    let edit = false;
    let sectionEdit = false;
    let multiEdit =false;
    let singleEdit = false;

    let str =''
     
    for(var i =0 ;i<code.length;i++)
    {  
       str+= code[i]
       if(code[i]==='>' && code[i+1]==='<')
       {    
          if(str===label)
          { 
            multiEdit=false;
            sections[sections.length-1].labels.push({                           //label
              "status": true,
               "items": []
            })
          }
          else if(str===button)
          {
             multiEdit=true
             sections[sections.length-1].labels[sections[sections.length-1].labels.length-1].items.push({
               "type": "button",
               "status": true,
               "value": []
             })
          }
          else if(str===multiselect)
          {
             multiEdit=true
             sections[sections.length-1].labels[sections[sections.length-1].labels.length-1].items.push({
               "type": "multiselect",
               "status": true,
               "value": []
             })
          }
          str = '';
       }
       else if(code[i]==='>' && code[i+1]!=='<' && str !==esc1 && str !== esc2 && str!== esc3)
      {
          edit =true
          if(str===section){                                    //section
             multiEdit=false;
             sectionEdit=true;
          }
          else if(str===text)
          {   
              multiEdit=false
              singleEdit =true;
              sections[sections.length-1].labels[sections[sections.length-1].labels.length-1].items.push({
               "type": "text",
               "status": true,
               "value": ""
             })
          }
          str = ''
       }
       else if(edit && code[i+1]==='<')
       {
          edit =false
          if(sectionEdit)
          {
            sectionEdit=false;
            sections.push({
              "name": str,
              "status":true,
              "labels": []
            })
            
          }
          else if(singleEdit)
          {
             singleEdit=false;
             sections[sections.length-1].labels[sections[sections.length-1].labels.length-1].items[sections[sections.length-1].labels[sections[sections.length-1].labels.length-1].items.length-1].value = str
           }
           else if(multiEdit)
           {
            sections[sections.length-1].labels[sections[sections.length-1].labels.length-1].items[sections[sections.length-1].labels[sections[sections.length-1].labels.length-1].items.length-1].value += "|"+str 
           }   
       }
       
    }
    
    
    return JSON.stringify(sections);
    
}