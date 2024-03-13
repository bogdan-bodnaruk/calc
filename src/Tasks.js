import React from "react";

const Tasks = () => {
  return (
    <div className="tasks">
      <h2>Tasks:</h2>
      <ol>
        <li>
          Find and fix bug on input. User should be able to add numbers only by
          clicking buttons
        </li>
        <li>Extend input to accept decimal numbers.</li>
        <li>Find and fix bug related "equal" and "clear" functionality</li>
        <li>Simplify Calculator component by using DRY and KISS</li>
        <li>
          Write unit test to cover Calculator component. Context should not be
          mocked.
        </li>
      </ol>
    </div>
  );
};

export default Tasks;
