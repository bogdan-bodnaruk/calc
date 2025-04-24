export default function Tasks() {
  return (
    <div className="tasks">
      <h2>Task list:</h2>
      <ul>
        <li>
          Find and fix bug on input. User should be able to add numbers only by
          clicking buttons
        </li>
        <li>Find and fix bug related "equal" and "clear" functionality</li>
        <li>Improve typing, remove ts-ignore lines, make sure build command works without errors</li>
        <li>Simplify Calculator component by using DRY and KISS</li>
        <li>
          Write unit test to cover Calculator component. Context should not be
          mocked.
        </li>
      </ul>
    </div>
  );
};
