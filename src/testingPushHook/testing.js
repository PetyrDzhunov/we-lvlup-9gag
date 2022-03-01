const a = 5;

function returnSomethingForEslintTestToPassToCheckPushHook() {
  return a;
}

let b = returnSomethingForEslintTestToPassToCheckPushHook();
