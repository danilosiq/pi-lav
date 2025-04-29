import { Column, Row } from "./layout";

interface StepperProps {
  steps: number;
  currentStep: number;
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <Column>
    <p className="text-sm">Passo {currentStep} de {steps}</p>
      <Row className="w-full gap-3">
        {Array.from({ length: steps }).map((_, index) => (
          <div
            key={index}
            className={`w-full h-1 ${
              index < currentStep ? "bg-primary" : "bg-gray-300"
            } rounded-md`}
          />
        ))}
      </Row>
    </Column>
  );
}
