import { Minus, Plus } from "lucide-react";
import { Row } from "./layout";

interface AmountStepperProps {
  onIncrease: () => void;
  onDecrease: () => void;
  actualNumber: number;
  limit?: number;
}

export function AmountStepper({
  onDecrease,
  actualNumber,
  onIncrease,
  limit,
}: AmountStepperProps) {
  function handleOnDecrease() {
    if (actualNumber <= 1) {
      return null;
    }
    onDecrease();
  }

  function handleOnIncrease() {
    if (limit) {
      if (actualNumber >= limit) {
        return null;
      }
    }
    onIncrease();
  }
  return (
    <Row className="gap-3 border items-center p-1 rounded-sm">
      <Minus
        onClick={handleOnDecrease}
        className="text-gray-400 hover:text-primary"
      />
      <span>{actualNumber}</span>
      <Plus
        onClick={handleOnIncrease}
        className="text-gray-400 hover:text-primary"
      />
    </Row>
  );
}
