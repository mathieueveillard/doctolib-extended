import { DateTime } from "luxon";
import Id from "../utils/Id";

export type DrugIntake = {
  id: Id;
  prescriptionId: Id;
  drugId: Id;
  date: DateTime;
};
