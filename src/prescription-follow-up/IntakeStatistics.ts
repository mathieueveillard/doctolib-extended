import { MedicalPrescription } from "../medical-prescription/MedicalPrescription";
import { DrugIntake } from "./DrugIntake";
import Id from "../utils/Id";

type IntakeStatistics = {
  globaleCompliance: Percentage;
  // ...
};

type Percentage = number;

export async function computeIntakeStatistics(
  { storage }: Dependencies,
  prescriptionId: Id,
  drugId: Id
): Promise<IntakeStatistics> {
  const { posology, duration } = await storage.getDrugPrescription(prescriptionId, drugId);
  const intakes = await storage.findAllIntakes(prescriptionId, drugId);
  // Do the maths
  return {
    globaleCompliance: 0.94,
  };
}

type Dependencies = {
  storage: {
    getDrugPrescription(prescriptionId: Id, drugId: Id): Promise<MedicalPrescription>;
    findAllIntakes(prescriptionId: Id, drugId: Id): Promise<DrugIntake[]>;
  };
};
