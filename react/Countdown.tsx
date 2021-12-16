import React from "react";
import { useCssHandles } from "vtex.css-handles";

interface CountdownProps {
  targetDate: string;
}

const CSS_HANDLES = ["countdown"];

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({
  targetDate,
}) => {
  const handles = useCssHandles(CSS_HANDLES);

  return (
    <div className={`${handles.countdown} c-muted-1 db tc`}>
      <h1>{targetDate}</h1>
    </div>
  );
};

Countdown.schema = {
  title: "editor.countdown.title",
  description: "editor.countdown.description",
  type: "object",
  properties: {
    targetDate: {
      title: "Data final",
      description: "Data final utilizada no contador",
      type: "string",
      default: null,
    },
  },
};

export default Countdown;
