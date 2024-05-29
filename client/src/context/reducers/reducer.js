import _ from "lodash";
export const FormReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "UPDATE_INPUT_FIELD":
      const { id, value, shouldDelete } = action.payload;
      let errorIds = [...state.errorIds];
      let data = { ...state.data };

      //remove error if it exists
      if (value.length > 0 && _.some(state.errorIds, { id })) {
        errorIds = _.filter(state.errorIds, (errorId) => errorId.id !== id);
      }

      //should delete is used for dependents and spouse which are removable form inputs
      if (shouldDelete) {
        //if ends with ] meaning the id is referring to an array (dependents) index use lodash _.pullAt to remove the specific dependant
        if(id.endsWith("]")) _.pullAt(data[id.split("[")[0]], id.match(/\[(\d+)\]/)[1])
          //otherwise use ._unset to remove the specfic key from object
        else _.unset(data,id);
      } else {
        //set the value to specific key in object
        _.set(data,id, value);
      }
      return { ...state, data, errorIds };
    case "NEXT_STEP":
      return { ...state, currentStep: state.currentStep + 1 };
    case "PREVIOUS_STEP":
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };
    case "SET_ERROR_IDS":
      return { ...state, errorIds: action.payload };
    default:
      return state;
  }
};
