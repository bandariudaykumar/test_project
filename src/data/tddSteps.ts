import { PenLine, Code, RefreshCw, CheckCircle, XCircle } from 'lucide-react';

export const tddSteps = [
  {
    title: "Write a Test",
    description: "Start by writing a test that defines a function or improvements of a function, which should fail initially.",
    icon: PenLine,
    color: "text-red-500"
  },
  {
    title: "Test Fails",
    description: "Run the test and see it fail. This is important because it validates that your test is working correctly.",
    icon: XCircle,
    color: "text-red-600"
  },
  {
    title: "Write Code",
    description: "Write the minimum amount of code necessary to make the test pass.",
    icon: Code,
    color: "text-blue-500"
  },
  {
    title: "Test Passes",
    description: "Run the test again. If it passes, you've successfully implemented the feature.",
    icon: CheckCircle,
    color: "text-green-500"
  },
  {
    title: "Refactor",
    description: "Clean up your code while ensuring tests continue to pass.",
    icon: RefreshCw,
    color: "text-purple-500"
  }
];