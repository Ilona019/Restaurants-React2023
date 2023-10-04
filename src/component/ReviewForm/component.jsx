import { useReducer } from 'react';

const DEFAULT_VALUE = {
  name: '',
  review: '',
  rating: '',
};

const reducer = (state, action) => {
  switch (action?.type) {
    case 'setName':
      return { ...DEFAULT_VALUE, name: action.payload };
    case 'setReview':
      return { ...state, review: action.payload };
    case 'setRating':
      return { ...state, rating: action.payload };
    case 'reset':
        console.log({   ...DEFAULT_VALUE});
      return { ...DEFAULT_VALUE };
    default:
      return state;
  }
};

export const ReviwForm = () => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_VALUE);

  return (
    <div>
      <div>
        <span>Name: </span>
        <input value={formValue.name} onChange={(event) => dispatch({ type: 'setName', payload: event.target.value})} />
      </div>
      <div>
        <span>Review: </span>
        <input
          value={formValue.review}
          onChange={(event) => {
            dispatch({ type: 'setReview', payload: event.target.value });
          }}
        />
      </div>
      <div>
        <span>Rating: </span>
        <input
          value={formValue.rating}
          onChange={(event) => {
            dispatch({ type: 'setRating', payload: event.target.value });
          }}
        />
      </div>
      <button onClick={() => dispatch({ type: 'reset' })}>Save</button>
    </div>
  );
};
