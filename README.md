# Template-editor
Can render template of **completely editable** html page of containing text ,multiselects ,buttongroups , radiogroups from JSON format as given below .After editing , the edited html page also can be converted into JSON format as given below .------------------------------

[
   {
       name:  "Filling Appointment",
       status:  true,
       labels:   [
           {
               status:  true,
               items:   [
                   {
                       type:  "text",
                       status:  true,
                       value:  "Pt C/O:" 
                  },
                    {
                       type:  "button",
                       status:  true,
                       value:  "|Nill|Other" 
                  }
              ] 
          },
            {
               status:  true,
               items:   [
                   {
                       type:  "text",
                       status:  true,
                       value:  "MH checked:" 
                  },
                    {
                       type:  "button",
                       status:  true,
                       value:  "|No Changes|Other" 
                  }
              ] 
          },
            {
               status:  true,
               items:   [
                   {
                       type:  "text",
                       status:  true,
                       value:  "Risks and complications explained:" 
                  },
                    {
                       type:  "multiselect",
                       status:  true,
                       value:  "|Minimal risk due to small restoration|Post operative sensitivity|Fracture of remaining tooth|RCT or XLA in the future|Very high risk of RCT     explained, pt aware of high likelihood|Other" 
                  }
              ] 
          },
            {
               status:  true,
               items:   [
                   {
                       type:  "text",
                       status:  true,
                       value:  "VCG to proceed" 
                  }
              ] 
          }
      ] 
  },
    {
       name:  "LA",
       status:  true,
       labels:   [
           {
               status:  true,
               items:   [
                   {
                       type:  "button",
                       status:  true,
                       value:  "|Nil|Infiltration|IANB|IANB+Infiltration|Other" 
                  }
              ] 
          }
      ] 
  },
    {
       name:  "Treatment",
       status:  true,
       labels:   [
           {
               status:  true,
               items:   [
                   {
                       type:  "text",
                       status:  true,
                       value:  "Restoration of" 
                  },
                    {
                       type:  "button",
                       status:  true,
                       value:  "|Nill|Select Teeth" 
                  }
              ] 
          },
            {
               status:  true,
               items:   [
                   {
                       type:  "text",
                       status:  true,
                       value:  "Moisture control achieved using" 
                  },
                    {
                       type:  "multiselect",
                       status:  true,
                       value:  "rubber dam|cotton wool rolls|high volume suction|saliva ejector|Optragate|Isolite|Other" 
                  }
              ] 
          },
            {
               status:  true,
               items:   [
                   {
                       type:  "button",
                       status:  true,
                       value:  "Previously unrestored tooth|Old restoration removed with high speed diamond|Other" 
                  }
              ] 
          },
            {
               status:  true,
               items:   [
                   {
                       type:  "button",
                       status:  true,
                       value:  "Caries accessed with high speed diamond|Caries free cavity|Other" 
                  }
              ] 
          },
            {
               status:  true,
               items:   [
                   {
                       type:  "text",
                       status:  true,
                       value:  "Cavity liner/base" 
                  },
                    {
                       type:  "button",
                       status:  true,
                       value:  "placed|not required" 
                  }
              ] 
          },
            {
               status:  true,
               items:   [
                   {
                       type:  "button",
                       status:  true,
                       value:  "placed|not required|Anterior composite|Posterior composite|GIC|Amalgam" 
                  },
                    {
                       type:  "text",
                       status:  true,
                       value:  "restoration" 
                  }
              ] 
          }
      ] 
  },
    {
       name:  "Post-op Discussion",
       status:  true,
       labels:   [
           {
               status:  true,
               items:   [
                   {
                       type:  "text",
                       status:  true,
                       value:  "Patient advised to return if there are any problems" 
                  }
              ] 
          }
      ] 
  }
]
