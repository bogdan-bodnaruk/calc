export default function Tasks() {
  return (
    <div className="tasks">
      <h2>Task list:</h2>
      <ul>
        <li>
          Find and fix the bug on input. The user should be able to add numbers only by clicking buttons
        </li>
        <li>Find and fix bugs related to "equal" and "clear" functionality</li>
        <li>Improve typing, remove ts-ignore lines, make sure build command works without errors</li>
        <li>Simplify the Calculator component by using DRY and KISS</li>
        <li>
          Write a behavioural unit test to cover the Calculator component. Context should not be mocked.
        </li>
      </ul>
      <p>
        To complete the project, you can use any tools like searching on the internet, AI, code examples, etc...
      </p>
    </div>
  );
};
