export const QuestionType = {
  text: "text",
  options: "options"
};

export const Question = props => {
  switch (props.type) {
    case QuestionType.options:
      return <OptionsQuestion {...props} />;
    case QuestionType.text:
      return <TextQuestion {...props} />;
  }
};

const OptionsQuestion = ({ qKey, question, options, value, onSelect }) => {
  const onInputSelect = option => onSelect(qKey, option);
  return (
    <div className="field">
      <label className="label">{question}</label>
      <div className="field is-grouped">
        {options.map(option => (
          <div className="control">
            <button
              class={`button is-info is-outlined ${
                value === option ? "is-focused" : ""
              }`}
              onClick={() => onInputSelect(option)}
            >
              {option}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TextQuestion = ({ qKey, question, value, onSelect }) => {
  return (
    <div className="field">
      <label className="label">{question}</label>
      <div className="control">
        <input
          className="input"
          type="text"
          value={value}
          onChange={e => onSelect(qKey, e.target.value)}
        ></input>
      </div>
    </div>
  );
};
