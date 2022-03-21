import Id from "../utils/Id";
import Value from "../utils/Value";
import { Duration, Posology } from "./MedicalPrescription";

type Drug = {
  id: Id;
  activeSubstanceId: Id;
  manufacturerId: Id;
  manufacturerReference: string;
  name: string;
  conditioning: Value<"UNITS PER BOX">;
};

export function findSubstitute(
  { storage }: Dependencies, //
  { activeSubstanceId }: Drug
): Promise<Drug[]> {
  return storage.findAllDrugsWithActiveSubstance(activeSubstanceId);
}

export function computeNumberOfBoxesToBuyAsPerConditioning(
  drug: Drug, //
  posology: Posology,
  duration: Duration
): number {
  // Do the maths
  return 3;
}

type Dependencies = {
  storage: {
    findAllDrugsWithActiveSubstance(activeSubstanceId: Id): Promise<Drug[]>;
  };
};
