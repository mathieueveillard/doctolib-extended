import { DateTime, Duration } from "luxon";
import { Posology } from "../medical-prescription/MedicalPrescription";
import Id from "../utils/Id";

export type MedicalPrescription = {
  id: Id;
  prescriptionDate: DateTime;
  doctorId: Id;
  patientId: Id;
  drugId: Id;
  posology: Posology;
  duration: Duration;
  allowSubstitute: boolean;
  comments: string;
  wasTaken: boolean;
  intakeDate: DateTime;
};
